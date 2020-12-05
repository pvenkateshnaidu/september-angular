(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-benchsales-benchsales-module"],{

/***/ "./node_modules/big.js/big.js":
/*!************************************!*\
  !*** ./node_modules/big.js/big.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  big.js v5.2.2
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2018 Michael Mclaughlin <M8ch88l@gmail.com>
 *  https://github.com/MikeMcl/big.js/LICENCE
 */
;(function (GLOBAL) {
  'use strict';
  var Big,


/************************************** EDITABLE DEFAULTS *****************************************/


    // The default values below must be integers within the stated ranges.

    /*
     * The maximum number of decimal places (DP) of the results of operations involving division:
     * div and sqrt, and pow with negative exponents.
     */
    DP = 20,          // 0 to MAX_DP

    /*
     * The rounding mode (RM) used when rounding to the above decimal places.
     *
     *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
     *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
     *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
     *  3  Away from zero.                                  (ROUND_UP)
     */
    RM = 1,             // 0, 1, 2 or 3

    // The maximum value of DP and Big.DP.
    MAX_DP = 1E6,       // 0 to 1000000

    // The maximum magnitude of the exponent argument to the pow method.
    MAX_POWER = 1E6,    // 1 to 1000000

    /*
     * The negative exponent (NE) at and beneath which toString returns exponential notation.
     * (JavaScript numbers: -7)
     * -1000000 is the minimum recommended exponent value of a Big.
     */
    NE = -7,            // 0 to -1000000

    /*
     * The positive exponent (PE) at and above which toString returns exponential notation.
     * (JavaScript numbers: 21)
     * 1000000 is the maximum recommended exponent value of a Big.
     * (This limit is not enforced or checked.)
     */
    PE = 21,            // 0 to 1000000


/**************************************************************************************************/


    // Error messages.
    NAME = '[big.js] ',
    INVALID = NAME + 'Invalid ',
    INVALID_DP = INVALID + 'decimal places',
    INVALID_RM = INVALID + 'rounding mode',
    DIV_BY_ZERO = NAME + 'Division by zero',

    // The shared prototype object.
    P = {},
    UNDEFINED = void 0,
    NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;


  /*
   * Create and return a Big constructor.
   *
   */
  function _Big_() {

    /*
     * The Big constructor and exported function.
     * Create and return a new instance of a Big number object.
     *
     * n {number|string|Big} A numeric value.
     */
    function Big(n) {
      var x = this;

      // Enable constructor usage without new.
      if (!(x instanceof Big)) return n === UNDEFINED ? _Big_() : new Big(n);

      // Duplicate.
      if (n instanceof Big) {
        x.s = n.s;
        x.e = n.e;
        x.c = n.c.slice();
      } else {
        parse(x, n);
      }

      /*
       * Retain a reference to this Big constructor, and shadow Big.prototype.constructor which
       * points to Object.
       */
      x.constructor = Big;
    }

    Big.prototype = P;
    Big.DP = DP;
    Big.RM = RM;
    Big.NE = NE;
    Big.PE = PE;
    Big.version = '5.2.2';

    return Big;
  }


  /*
   * Parse the number or string value passed to a Big constructor.
   *
   * x {Big} A Big number instance.
   * n {number|string} A numeric value.
   */
  function parse(x, n) {
    var e, i, nl;

    // Minus zero?
    if (n === 0 && 1 / n < 0) n = '-0';
    else if (!NUMERIC.test(n += '')) throw Error(INVALID + 'number');

    // Determine sign.
    x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;

    // Decimal point?
    if ((e = n.indexOf('.')) > -1) n = n.replace('.', '');

    // Exponential form?
    if ((i = n.search(/e/i)) > 0) {

      // Determine exponent.
      if (e < 0) e = i;
      e += +n.slice(i + 1);
      n = n.substring(0, i);
    } else if (e < 0) {

      // Integer.
      e = n.length;
    }

    nl = n.length;

    // Determine leading zeros.
    for (i = 0; i < nl && n.charAt(i) == '0';) ++i;

    if (i == nl) {

      // Zero.
      x.c = [x.e = 0];
    } else {

      // Determine trailing zeros.
      for (; nl > 0 && n.charAt(--nl) == '0';);
      x.e = e - i - 1;
      x.c = [];

      // Convert string to array of digits without leading/trailing zeros.
      for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);
    }

    return x;
  }


  /*
   * Round Big x to a maximum of dp decimal places using rounding mode rm.
   * Called by stringify, P.div, P.round and P.sqrt.
   *
   * x {Big} The Big to round.
   * dp {number} Integer, 0 to MAX_DP inclusive.
   * rm {number} 0, 1, 2 or 3 (DOWN, HALF_UP, HALF_EVEN, UP)
   * [more] {boolean} Whether the result of division was truncated.
   */
  function round(x, dp, rm, more) {
    var xc = x.c,
      i = x.e + dp + 1;

    if (i < xc.length) {
      if (rm === 1) {

        // xc[i] is the digit after the digit that may be rounded up.
        more = xc[i] >= 5;
      } else if (rm === 2) {
        more = xc[i] > 5 || xc[i] == 5 &&
          (more || i < 0 || xc[i + 1] !== UNDEFINED || xc[i - 1] & 1);
      } else if (rm === 3) {
        more = more || !!xc[0];
      } else {
        more = false;
        if (rm !== 0) throw Error(INVALID_RM);
      }

      if (i < 1) {
        xc.length = 1;

        if (more) {

          // 1, 0.1, 0.01, 0.001, 0.0001 etc.
          x.e = -dp;
          xc[0] = 1;
        } else {

          // Zero.
          xc[0] = x.e = 0;
        }
      } else {

        // Remove any digits after the required decimal places.
        xc.length = i--;

        // Round up?
        if (more) {

          // Rounding up may mean the previous digit has to be rounded up.
          for (; ++xc[i] > 9;) {
            xc[i] = 0;
            if (!i--) {
              ++x.e;
              xc.unshift(1);
            }
          }
        }

        // Remove trailing zeros.
        for (i = xc.length; !xc[--i];) xc.pop();
      }
    } else if (rm < 0 || rm > 3 || rm !== ~~rm) {
      throw Error(INVALID_RM);
    }

    return x;
  }


  /*
   * Return a string representing the value of Big x in normal or exponential notation.
   * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
   *
   * x {Big}
   * id? {number} Caller id.
   *         1 toExponential
   *         2 toFixed
   *         3 toPrecision
   *         4 valueOf
   * n? {number|undefined} Caller's argument.
   * k? {number|undefined}
   */
  function stringify(x, id, n, k) {
    var e, s,
      Big = x.constructor,
      z = !x.c[0];

    if (n !== UNDEFINED) {
      if (n !== ~~n || n < (id == 3) || n > MAX_DP) {
        throw Error(id == 3 ? INVALID + 'precision' : INVALID_DP);
      }

      x = new Big(x);

      // The index of the digit that may be rounded up.
      n = k - x.e;

      // Round?
      if (x.c.length > ++k) round(x, n, Big.RM);

      // toFixed: recalculate k as x.e may have changed if value rounded up.
      if (id == 2) k = x.e + n + 1;

      // Append zeros?
      for (; x.c.length < k;) x.c.push(0);
    }

    e = x.e;
    s = x.c.join('');
    n = s.length;

    // Exponential notation?
    if (id != 2 && (id == 1 || id == 3 && k <= e || e <= Big.NE || e >= Big.PE)) {
      s = s.charAt(0) + (n > 1 ? '.' + s.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e;

    // Normal notation.
    } else if (e < 0) {
      for (; ++e;) s = '0' + s;
      s = '0.' + s;
    } else if (e > 0) {
      if (++e > n) for (e -= n; e--;) s += '0';
      else if (e < n) s = s.slice(0, e) + '.' + s.slice(e);
    } else if (n > 1) {
      s = s.charAt(0) + '.' + s.slice(1);
    }

    return x.s < 0 && (!z || id == 4) ? '-' + s : s;
  }


  // Prototype/instance methods


  /*
   * Return a new Big whose value is the absolute value of this Big.
   */
  P.abs = function () {
    var x = new this.constructor(this);
    x.s = 1;
    return x;
  };


  /*
   * Return 1 if the value of this Big is greater than the value of Big y,
   *       -1 if the value of this Big is less than the value of Big y, or
   *        0 if they have the same value.
  */
  P.cmp = function (y) {
    var isneg,
      x = this,
      xc = x.c,
      yc = (y = new x.constructor(y)).c,
      i = x.s,
      j = y.s,
      k = x.e,
      l = y.e;

    // Either zero?
    if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i;

    // Signs differ?
    if (i != j) return i;

    isneg = i < 0;

    // Compare exponents.
    if (k != l) return k > l ^ isneg ? 1 : -1;

    j = (k = xc.length) < (l = yc.length) ? k : l;

    // Compare digit by digit.
    for (i = -1; ++i < j;) {
      if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
    }

    // Compare lengths.
    return k == l ? 0 : k > l ^ isneg ? 1 : -1;
  };


  /*
   * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
   * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
   */
  P.div = function (y) {
    var x = this,
      Big = x.constructor,
      a = x.c,                  // dividend
      b = (y = new Big(y)).c,   // divisor
      k = x.s == y.s ? 1 : -1,
      dp = Big.DP;

    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) throw Error(INVALID_DP);

    // Divisor is zero?
    if (!b[0]) throw Error(DIV_BY_ZERO);

    // Dividend is 0? Return +-0.
    if (!a[0]) return new Big(k * 0);

    var bl, bt, n, cmp, ri,
      bz = b.slice(),
      ai = bl = b.length,
      al = a.length,
      r = a.slice(0, bl),   // remainder
      rl = r.length,
      q = y,                // quotient
      qc = q.c = [],
      qi = 0,
      d = dp + (q.e = x.e - y.e) + 1;    // number of digits of the result

    q.s = k;
    k = d < 0 ? 0 : d;

    // Create version of divisor with leading zero.
    bz.unshift(0);

    // Add zeros to make remainder as long as divisor.
    for (; rl++ < bl;) r.push(0);

    do {

      // n is how many times the divisor goes into current remainder.
      for (n = 0; n < 10; n++) {

        // Compare divisor and remainder.
        if (bl != (rl = r.length)) {
          cmp = bl > rl ? 1 : -1;
        } else {
          for (ri = -1, cmp = 0; ++ri < bl;) {
            if (b[ri] != r[ri]) {
              cmp = b[ri] > r[ri] ? 1 : -1;
              break;
            }
          }
        }

        // If divisor < remainder, subtract divisor from remainder.
        if (cmp < 0) {

          // Remainder can't be more than 1 digit longer than divisor.
          // Equalise lengths using divisor with extra leading zero?
          for (bt = rl == bl ? b : bz; rl;) {
            if (r[--rl] < bt[rl]) {
              ri = rl;
              for (; ri && !r[--ri];) r[ri] = 9;
              --r[ri];
              r[rl] += 10;
            }
            r[rl] -= bt[rl];
          }

          for (; !r[0];) r.shift();
        } else {
          break;
        }
      }

      // Add the digit n to the result array.
      qc[qi++] = cmp ? n : ++n;

      // Update the remainder.
      if (r[0] && cmp) r[rl] = a[ai] || 0;
      else r = [a[ai]];

    } while ((ai++ < al || r[0] !== UNDEFINED) && k--);

    // Leading zero? Do not remove if result is simply zero (qi == 1).
    if (!qc[0] && qi != 1) {

      // There can't be more than one zero.
      qc.shift();
      q.e--;
    }

    // Round?
    if (qi > d) round(q, dp, Big.RM, r[0] !== UNDEFINED);

    return q;
  };


  /*
   * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
   */
  P.eq = function (y) {
    return !this.cmp(y);
  };


  /*
   * Return true if the value of this Big is greater than the value of Big y, otherwise return
   * false.
   */
  P.gt = function (y) {
    return this.cmp(y) > 0;
  };


  /*
   * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
   * return false.
   */
  P.gte = function (y) {
    return this.cmp(y) > -1;
  };


  /*
   * Return true if the value of this Big is less than the value of Big y, otherwise return false.
   */
  P.lt = function (y) {
    return this.cmp(y) < 0;
  };


  /*
   * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
   * return false.
   */
  P.lte = function (y) {
    return this.cmp(y) < 1;
  };


  /*
   * Return a new Big whose value is the value of this Big minus the value of Big y.
   */
  P.minus = P.sub = function (y) {
    var i, j, t, xlty,
      x = this,
      Big = x.constructor,
      a = x.s,
      b = (y = new Big(y)).s;

    // Signs differ?
    if (a != b) {
      y.s = -b;
      return x.plus(y);
    }

    var xc = x.c.slice(),
      xe = x.e,
      yc = y.c,
      ye = y.e;

    // Either zero?
    if (!xc[0] || !yc[0]) {

      // y is non-zero? x is non-zero? Or both are zero.
      return yc[0] ? (y.s = -b, y) : new Big(xc[0] ? x : 0);
    }

    // Determine which is the bigger number. Prepend zeros to equalise exponents.
    if (a = xe - ye) {

      if (xlty = a < 0) {
        a = -a;
        t = xc;
      } else {
        ye = xe;
        t = yc;
      }

      t.reverse();
      for (b = a; b--;) t.push(0);
      t.reverse();
    } else {

      // Exponents equal. Check digit by digit.
      j = ((xlty = xc.length < yc.length) ? xc : yc).length;

      for (a = b = 0; b < j; b++) {
        if (xc[b] != yc[b]) {
          xlty = xc[b] < yc[b];
          break;
        }
      }
    }

    // x < y? Point xc to the array of the bigger number.
    if (xlty) {
      t = xc;
      xc = yc;
      yc = t;
      y.s = -y.s;
    }

    /*
     * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
     * needs to start at yc.length.
     */
    if ((b = (j = yc.length) - (i = xc.length)) > 0) for (; b--;) xc[i++] = 0;

    // Subtract yc from xc.
    for (b = i; j > a;) {
      if (xc[--j] < yc[j]) {
        for (i = j; i && !xc[--i];) xc[i] = 9;
        --xc[i];
        xc[j] += 10;
      }

      xc[j] -= yc[j];
    }

    // Remove trailing zeros.
    for (; xc[--b] === 0;) xc.pop();

    // Remove leading zeros and adjust exponent accordingly.
    for (; xc[0] === 0;) {
      xc.shift();
      --ye;
    }

    if (!xc[0]) {

      // n - n = +0
      y.s = 1;

      // Result must be zero.
      xc = [ye = 0];
    }

    y.c = xc;
    y.e = ye;

    return y;
  };


  /*
   * Return a new Big whose value is the value of this Big modulo the value of Big y.
   */
  P.mod = function (y) {
    var ygtx,
      x = this,
      Big = x.constructor,
      a = x.s,
      b = (y = new Big(y)).s;

    if (!y.c[0]) throw Error(DIV_BY_ZERO);

    x.s = y.s = 1;
    ygtx = y.cmp(x) == 1;
    x.s = a;
    y.s = b;

    if (ygtx) return new Big(x);

    a = Big.DP;
    b = Big.RM;
    Big.DP = Big.RM = 0;
    x = x.div(y);
    Big.DP = a;
    Big.RM = b;

    return this.minus(x.times(y));
  };


  /*
   * Return a new Big whose value is the value of this Big plus the value of Big y.
   */
  P.plus = P.add = function (y) {
    var t,
      x = this,
      Big = x.constructor,
      a = x.s,
      b = (y = new Big(y)).s;

    // Signs differ?
    if (a != b) {
      y.s = -b;
      return x.minus(y);
    }

    var xe = x.e,
      xc = x.c,
      ye = y.e,
      yc = y.c;

    // Either zero? y is non-zero? x is non-zero? Or both are zero.
    if (!xc[0] || !yc[0]) return yc[0] ? y : new Big(xc[0] ? x : a * 0);

    xc = xc.slice();

    // Prepend zeros to equalise exponents.
    // Note: reverse faster than unshifts.
    if (a = xe - ye) {
      if (a > 0) {
        ye = xe;
        t = yc;
      } else {
        a = -a;
        t = xc;
      }

      t.reverse();
      for (; a--;) t.push(0);
      t.reverse();
    }

    // Point xc to the longer array.
    if (xc.length - yc.length < 0) {
      t = yc;
      yc = xc;
      xc = t;
    }

    a = yc.length;

    // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.
    for (b = 0; a; xc[a] %= 10) b = (xc[--a] = xc[a] + yc[a] + b) / 10 | 0;

    // No need to check for zero, as +x + +y != 0 && -x + -y != 0

    if (b) {
      xc.unshift(b);
      ++ye;
    }

    // Remove trailing zeros.
    for (a = xc.length; xc[--a] === 0;) xc.pop();

    y.c = xc;
    y.e = ye;

    return y;
  };


  /*
   * Return a Big whose value is the value of this Big raised to the power n.
   * If n is negative, round to a maximum of Big.DP decimal places using rounding
   * mode Big.RM.
   *
   * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
   */
  P.pow = function (n) {
    var x = this,
      one = new x.constructor(1),
      y = one,
      isneg = n < 0;

    if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) throw Error(INVALID + 'exponent');
    if (isneg) n = -n;

    for (;;) {
      if (n & 1) y = y.times(x);
      n >>= 1;
      if (!n) break;
      x = x.times(x);
    }

    return isneg ? one.div(y) : y;
  };


  /*
   * Return a new Big whose value is the value of this Big rounded using rounding mode rm
   * to a maximum of dp decimal places, or, if dp is negative, to an integer which is a
   * multiple of 10**-dp.
   * If dp is not specified, round to 0 decimal places.
   * If rm is not specified, use Big.RM.
   *
   * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
   * rm? 0, 1, 2 or 3 (ROUND_DOWN, ROUND_HALF_UP, ROUND_HALF_EVEN, ROUND_UP)
   */
  P.round = function (dp, rm) {
    var Big = this.constructor;
    if (dp === UNDEFINED) dp = 0;
    else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) throw Error(INVALID_DP);
    return round(new Big(this), dp, rm === UNDEFINED ? Big.RM : rm);
  };


  /*
   * Return a new Big whose value is the square root of the value of this Big, rounded, if
   * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
   */
  P.sqrt = function () {
    var r, c, t,
      x = this,
      Big = x.constructor,
      s = x.s,
      e = x.e,
      half = new Big(0.5);

    // Zero?
    if (!x.c[0]) return new Big(x);

    // Negative?
    if (s < 0) throw Error(NAME + 'No square root');

    // Estimate.
    s = Math.sqrt(x + '');

    // Math.sqrt underflow/overflow?
    // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.
    if (s === 0 || s === 1 / 0) {
      c = x.c.join('');
      if (!(c.length + e & 1)) c += '0';
      s = Math.sqrt(c);
      e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
      r = new Big((s == 1 / 0 ? '1e' : (s = s.toExponential()).slice(0, s.indexOf('e') + 1)) + e);
    } else {
      r = new Big(s);
    }

    e = r.e + (Big.DP += 4);

    // Newton-Raphson iteration.
    do {
      t = r;
      r = half.times(t.plus(x.div(t)));
    } while (t.c.slice(0, e).join('') !== r.c.slice(0, e).join(''));

    return round(r, Big.DP -= 4, Big.RM);
  };


  /*
   * Return a new Big whose value is the value of this Big times the value of Big y.
   */
  P.times = P.mul = function (y) {
    var c,
      x = this,
      Big = x.constructor,
      xc = x.c,
      yc = (y = new Big(y)).c,
      a = xc.length,
      b = yc.length,
      i = x.e,
      j = y.e;

    // Determine sign of result.
    y.s = x.s == y.s ? 1 : -1;

    // Return signed 0 if either 0.
    if (!xc[0] || !yc[0]) return new Big(y.s * 0);

    // Initialise exponent of result as x.e + y.e.
    y.e = i + j;

    // If array xc has fewer digits than yc, swap xc and yc, and lengths.
    if (a < b) {
      c = xc;
      xc = yc;
      yc = c;
      j = a;
      a = b;
      b = j;
    }

    // Initialise coefficient array of result with zeros.
    for (c = new Array(j = a + b); j--;) c[j] = 0;

    // Multiply.

    // i is initially xc.length.
    for (i = b; i--;) {
      b = 0;

      // a is yc.length.
      for (j = a + i; j > i;) {

        // Current sum of products at this digit position, plus carry.
        b = c[j] + yc[i] * xc[j - i - 1] + b;
        c[j--] = b % 10;

        // carry
        b = b / 10 | 0;
      }

      c[j] = (c[j] + b) % 10;
    }

    // Increment result exponent if there is a final carry, otherwise remove leading zero.
    if (b) ++y.e;
    else c.shift();

    // Remove trailing zeros.
    for (i = c.length; !c[--i];) c.pop();
    y.c = c;

    return y;
  };


  /*
   * Return a string representing the value of this Big in exponential notation to dp fixed decimal
   * places and rounded using Big.RM.
   *
   * dp? {number} Integer, 0 to MAX_DP inclusive.
   */
  P.toExponential = function (dp) {
    return stringify(this, 1, dp, dp);
  };


  /*
   * Return a string representing the value of this Big in normal notation to dp fixed decimal
   * places and rounded using Big.RM.
   *
   * dp? {number} Integer, 0 to MAX_DP inclusive.
   *
   * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
   * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
   */
  P.toFixed = function (dp) {
    return stringify(this, 2, dp, this.e + dp);
  };


  /*
   * Return a string representing the value of this Big rounded to sd significant digits using
   * Big.RM. Use exponential notation if sd is less than the number of digits necessary to represent
   * the integer part of the value in normal notation.
   *
   * sd {number} Integer, 1 to MAX_DP inclusive.
   */
  P.toPrecision = function (sd) {
    return stringify(this, 3, sd, sd - 1);
  };


  /*
   * Return a string representing the value of this Big.
   * Return exponential notation if this Big has a positive exponent equal to or greater than
   * Big.PE, or a negative exponent equal to or less than Big.NE.
   * Omit the sign for negative zero.
   */
  P.toString = function () {
    return stringify(this);
  };


  /*
   * Return a string representing the value of this Big.
   * Return exponential notation if this Big has a positive exponent equal to or greater than
   * Big.PE, or a negative exponent equal to or less than Big.NE.
   * Include the sign for negative zero.
   */
  P.valueOf = P.toJSON = function () {
    return stringify(this, 4);
  };


  // Export


  Big = _Big_();

  Big['default'] = Big.Big = Big;

  //AMD.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return Big; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

  // Node and other CommonJS-like environments that support module.exports.
  } else {}
})(this);


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/calculator/calculator.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/benchsales/calculator/calculator.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" [ngModel]=\"formattedTokens\" class=\"form-control-sm form-control text-right\" readonly>\n\n<input type=\"text\" [ngModel]=\"input\" class=\"form-control form-control-lg text-right\" readonly>\n\n<div class=\"row mt-3\">\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"reset()\">AC</button>\n\t</div>\n\t<div class=\"col-3\">\n    <button class=\"btn btn-primary btn-block\" (click)=\"execOperator('(')\">(</button>\n  </div>\n\t<div class=\"col-3\">\n    <button class=\"btn btn-primary btn-block\" (click)=\"execOperator(')')\">)</button>\n  </div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-primary btn-block\" (click)=\"execOperator('/')\">/</button>\n\t</div>\n</div>\n<div class=\"row mt-3\">\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('1')\">1</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('2')\">2</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('3')\">3</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-primary btn-block\" (click)=\"execOperator('*')\">x</button>\n\t</div>\n</div>\n<div class=\"row mt-3\">\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('4')\">4</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('5')\">5</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('6')\">6</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-primary btn-block\" (click)=\"execOperator('+')\">+</button>\n\t</div>\n</div>\n<div class=\"row mt-3\">\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('7')\">7</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('8')\">8</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('9')\">9</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-primary btn-block\" (click)=\"execOperator('-')\">-</button>\n\t</div>\n</div>\n<div class=\"row mt-3\">\n\t<div class=\"col-6\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('0')\">0</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button class=\"btn btn-secondary btn-block\" (click)=\"insertChar('.')\">,</button>\n\t</div>\n\t<div class=\"col-3\">\n\t\t<button autofocus class=\"btn btn-primary btn-block\" (click)=\"evaluate()\">=</button>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/user-create/user-create.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/benchsales/user-create/user-create.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h4 class=\"remove-margin\">Add Submissions </h4>\n    <button type=\"button\" class=\"btn btn-primary btn-round btn-length\" (click)=\"showCalculator()\">Percentage Calculator</button>\n    <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"showCalculator1()\">Calculator</button>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n\n\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser()\">\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Choose Consultant:</label>\n                <p-dropdown #dd [options]=\"states\" [(ngModel)]=\"selectedStates\" formControlName=\"state\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (onChange)=\"onChange($event)\"\n                  (keydown)=\"statesUi($event)\">\n                </p-dropdown>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"state.invalid && (state.dirty || state.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"state.errors?.required\">\n                    Consultant is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.state }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Rate:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{crate}}\" readonly>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Consultant Email:</label>\n                <input type=\"email\" class=\"form-control\" value=\"{{cemail}}\" readonly>\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Consultant Number:</label>\n                <input type=\"text\" value=\"{{cmobile}}\" class=\"form-control\" readonly>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Technology:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{ctechnology}}\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Choose Vendor:</label>\n                <p-dropdown #df [options]=\"vendors\" [(ngModel)]=\"selectedVendors\" formControlName=\"vid\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onChange)=\"ChangeVendor($event)\" (keydown)=\"vendorsUi($event)\">\n                </p-dropdown>\n\n              </div>\n              <p-button (click)=\"showModalDialog()\" icon=\"pi pi-external-link\" label=\"Add Vendor\"></p-button>\n\n            </div>\n            <div class=\"col-md-3\" *ngIf=\"df.value\">\n              <div class=\"form-group\">\n                <label>Choose Vendor Contacts:</label>\n                <p-dropdown [options]=\"contacts\" [(ngModel)]=\"selectedContacts\" formControlName=\"vendorDetailId\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onChange)=\"ChangeContacts($event)\" (keydown)=\"contactsUi($event)\">\n                </p-dropdown>\n                <div *ngIf=\"vendorDetailId.invalid && (vendorDetailId.dirty || vendorDetailId.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"vendorDetailId.errors?.required\">\n                    Contact is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorDetailId }}</small>\n\n              </div>\n              <p-button (click)=\"showModalDialog1()\" icon=\"pi pi-external-link\" label=\"Add Contact\"></p-button>\n\n            </div>\n            <div class=\"col-md-2\" *ngIf=\"vcname\">\n              <div class=\"form-group\">\n                <label>Vendor Contact Name:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{vcname}}\" readonly>\n              </div>\n            </div>\n            <div class=\"col-md-2\" *ngIf=\"vmobile\">\n              <div class=\"form-group\">\n                <label>Vendor Mobile Number:</label>\n                <input type=\"text\" class=\"form-control\" value=\"{{vmobile}}\" readonly>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Choose End CLient:</label>\n                <p-dropdown #dfrf [options]=\"clients\" [(ngModel)]=\"selectedClients\" formControlName=\"clientId\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onChange)=\"ChangeClients($event)\" (keydown)=\"clientsUi($event)\">\n                </p-dropdown>\n                <div *ngIf=\"clientId.invalid && (clientId.dirty || clientId.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"clientId.errors?.required\">\n                    Client is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.clientId }}</small>\n                <p-button (click)=\"showModalDialogClient()\" icon=\"pi pi-external-link\" label=\"Add Client\"></p-button>\n\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>End CLient Location:</label>\n                <input type=\"text\" formControlName=\"endClientLocation\" class=\"form-control\"\n                  placeholder=\"End Client Location\">\n                <div *ngIf=\"endClientLocation.invalid && (endClientLocation.dirty || endClientLocation.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"endClientLocation.errors?.required\">\n                    End ClientLocation is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.endClientLocation }}</small>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Actual Rate:</label>\n                <input type=\"number\" formControlName=\"actualRate\" class=\"form-control\" placeholder=\"Actual Rate\">\n                <div *ngIf=\"actualRate.invalid && (actualRate.dirty || actualRate.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"actualRate.errors?.required\">\n                    ActualRate is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Submission Rate:</label>\n                <input type=\"number\" formControlName=\"submissionRate\" class=\"form-control\" placeholder=\"Submit   Rate\">\n                <div *ngIf=\"submissionRate.invalid && (submissionRate.dirty || submissionRate.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"submissionRate.errors?.required\">\n                    submissionRate is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.submissionRate }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Vendor Status</label>\n                <select #statusvalue class=\"form-control\" formControlName=\"vendorStatus\">\n                  <option value=\"\">--select--</option>\n                  <option value=\"Interview scheduled\">Interview scheduled</option>\n                  <option value=\"Submitted to Client\">Submitted to Client</option>\n                  <option value=\"Submitted to Vendor\">Submitted to Vendor</option>\n                  <option value=\"Disqualified\">Disqualified</option>\n                  <option value=\"Client rejected\">Client rejected</option>\n                  <option value=\"Vendor Rejected\">Vendor Rejected</option>\n                  <option value=\"Vendor screening call\">Vendor screening call</option>\n                  <option value=\"Waiting for Evaluation\">Waiting for Evaluation</option>\n                </select>\n                <div *ngIf=\"vendorStatus.invalid && (vendorStatus.dirty || vendorStatus.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"vendorStatus.errors?.required\">\n                    vendorStatus is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorStatus }}</small>\n              </div>\n            </div>\n            <div class=\"col-md-2\" *ngIf=\"(statusvalue.value=='Interview scheduled')\">\n              <div class=\"form-group\">\n                <label>Interview Schedule Date :</label>\n                <input type=\"date\" class=\"form-control\" formControlName=\"scheduleDate\" placeholder=\"Interview Schedule Date\">\n              </div>\n            </div>\n            <div class=\"col-md-2\" formControlName=\"timezone\" *ngIf=\"(statusvalue.value=='Interview scheduled')\">\n              <div class=\"form-group\">\n                <label> Time Zone :</label>\n                <select class=\"form-control\">\n                  <option value=\"EST\">EST</option>\n                  <option value=\"PST\">PST</option>\n                  <option value=\"CST\">CST</option>\n                  <option value=\"MST\">MST</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Comments:</label>\n                <textarea formControlName=\"vendorComments\" class=\"form-control\"></textarea>\n                <div *ngIf=\"vendorComments.invalid && (vendorComments.dirty || vendorComments.touched)\"\n                  class=\"form-text text-muted\">\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ vendorComments.jobExperience }}</small>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerForm.valid\">Submit\n                Consultant</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<p-dialog header=\"Add New Vendor Contact\" [(visible)]=\"displayModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n  <form [formGroup]=\"registerContact\" (ngSubmit)=\"registerContactForm()\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"vendorcontactName\" placeholder=\"Vendor Contact Name\">\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label> Email:</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"vendorcontactEmail\"\n            placeholder=\"Vendor Contact Email\">\n          <div *ngIf=\"vendorcontactEmail.invalid && (vendorcontactEmail.dirty || vendorcontactEmail.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"vendorcontactEmail.errors?.required\">\n              Email is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorcontactEmail }}</small>\n\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Mobile Number:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"vendorcontactMobile\" placeholder=\"Mobile Number\">\n\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <label> EXT:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"vendorext\" placeholder=\"EXT\">\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerContact.valid\">Add Vendor\n      Contact</button>\n  </form>\n  <ng-template pTemplate=\"footer\">\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\n  </ng-template>\n</p-dialog>\n<p-dialog header=\"Add New Vendor\" [(visible)]=\"displayModal\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n\n  <form [formGroup]=\"registerVendor\" (ngSubmit)=\"registerVendorCompany()\">\n\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Vendor Company Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"vendorCompanyName\" placeholder=\"Vendor Company Name\">\n          <div *ngIf=\"vendorCompanyName.invalid && (vendorCompanyName.dirty || vendorCompanyName.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"vendorCompanyName.errors?.required\">\n              Company Name is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.vendorCompanyName }}</small>\n\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"contactName\" placeholder=\"Vendor Contact Name\">\n\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label> Email:</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"contactEmail\" placeholder=\"Vendor Contact Email\">\n          <div *ngIf=\"contactEmail.invalid && (contactEmail.dirty || contactEmail.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"contactEmail.errors?.required\">\n              Email is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.contactEmail }}</small>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Mobile Number:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"contactMobile\" placeholder=\"Mobile Number\">\n          <div *ngIf=\"contactMobile.invalid && (contactEmail.dirty || contactMobile.touched)\"\n            class=\"form-text text-muted\">\n            <div *ngIf=\"contactMobile.errors?.required\">\n              Mobile Number is required.\n            </div>\n          </div>\n          <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.contactMobile }}</small>\n\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <label> EXT:</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"ext\" placeholder=\"EXT\">\n        </div>\n      </div>\n\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerVendor.valid\">Add Vendor</button>\n  </form>\n\n\n\n\n\n\n  <ng-template pTemplate=\"footer\">\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\n  </ng-template>\n</p-dialog>\n<p-dialog header=\"percentage Off\" [(visible)]=\"calculatorModal\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n\n            <form id=\"userForm\" method=\"post\" name=\"percent_off\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"number\" name=\"list\" value=\"52\" class=\"form-control\"\n                      aria-label=\"Amount (to the nearest dollar)\" [(ngModel)]=\"num1\" >\n                  </div>\n\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label class=\"control-label required\" for=\"percent_off_p\">Percent Off</label>\n                  <div class=\"input-group mb-3\">\n\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">%</span>\n                    </div>\n                    <select class=\"form-control\" name=\"disc\" [(ngModel)]=\"num2\">\n                      <option value=\"20\">20</option>\n                      <option value=\"25\">25</option>\n                      <option value=\"30\">30</option>\n                    </select>\n                  </div>\n\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <br>\n                    <button type=\"submit\" id=\"percent_off_save\" name=\"percent_off[save]\"\n                      class=\"button btn-lg btn btn-primary btn-block btn\">Calculate Percent Off</button>\n                  </div>\n\n                </div>\n              </div>\n            </form>\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <div id=\"result\" style=\"height: auto !important;\">\n                    <label class=\"control-label required\" for=\"percent_off_p\">Result :</label> {{ ConvertToInt(num1)  -( ConvertToInt(num1)*ConvertToInt(num2)/100)  }}\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ng-template pTemplate=\"footer\">\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\n  </ng-template>\n</p-dialog>\n<p-dialog header=\"Calculator\" [(visible)]=\"calculatorModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n<ng-calculator></ng-calculator>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ng-template pTemplate=\"footer\">\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\n  </ng-template>\n</p-dialog>\n<p-dialog header=\"Add Client\" [(visible)]=\"displayModalClient\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\n  <form [formGroup]=\"registerClient\" (ngSubmit)=\"registerClientForm()\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label>Client Name:</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"clientName\" placeholder=\"Client Name\">\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerClient.valid\">Add Client</button>\n  </form>\n  <ng-template pTemplate=\"footer\">\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\n  </ng-template>\n</p-dialog>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/user-edit/user-create.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/benchsales/user-edit/user-create.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h4 class=\"remove-margin\">Edit Job Requirement </h4>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n\n\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"updateUserDetails()\" enctype=\"multipart/form-data\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n\n                <label>Job Title:</label>\n                <input type=\"text\" formControlName=\"jobTitle\" class=\"form-control\" placeholder=\"Job Title\">\n                <div *ngIf=\"jobTitle.invalid && (jobTitle.dirty || jobTitle.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"jobTitle.errors?.required\">\n                    Title is required.\n                  </div>\n                  <div *ngIf=\"jobTitle.errors?.minlength\">\n                    Title must be at least 2 characters long.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobTitle }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Experience:</label>\n                <input type=\"number\" formControlName=\"jobExperience\" class=\"form-control\" placeholder=\"Exp\"\n                  required>\n                <div *ngIf=\"jobExperience.invalid && (jobExperience.dirty || jobExperience.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"jobExperience.errors?.required\">\n                    Experience is required.\n                  </div>\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobExperience }}</small>\n\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <label>Technology</label>\n              <p-dropdown #dd [options]=\"cars\" [(ngModel)]=\"selectedCar\" formControlName=\"jobTechnology\"\n                [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (keydown)=\"test($event)\">\n              </p-dropdown>\n              <div *ngIf=\"jobTechnology.invalid && (jobTechnology.dirty || jobTechnology.touched)\" class=\"form-text text-muted\">\n                <div *ngIf=\"jobTechnology.errors?.required\">\n                  Technology is required.\n                </div>\n\n              </div>\n              <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobTechnology }}</small>\n             </div>\n             <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Visa Type:</label>\n                <select class=\"form-control\" formControlName=\"jobVisaType\">\n                  <option value=\"null\" disabled>Choose visaType</option>\n                  <option value=\"H4 EAD\">H4 EAD\n                  </option>\n                  <option value=\"H1B-Transfer\">H1B-Transfer\n                  </option>\n                  <option value=\"CPT\">CPT\n                  </option>\n                  <option value=\"OPT\">OPT\n                  </option>\n                  <option value=\"H1-B\">H1-B\n                  </option>\n                  <option value=\"GC-EAD\">GC-EAD\n                  </option>\n                  <option value=\"Green Card\">Green Card\n                  </option>\n                  <option value=\"US Citizen\">US Citizen\n                  </option>\n\n                </select>\n                <div *ngIf=\"jobVisaType.invalid && (jobVisaType.dirty || jobVisaType.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"jobVisaType.errors?.required\">\n                    Visa Type is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobVisaType }}</small>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n\n\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Location:</label>\n                <p-dropdown #dd [options]=\"states\" [(ngModel)]=\"selectedStates\" formControlName=\"jobLocation\"\n                  [style]=\"{'width':'100%'}\" scrollHeight=\"400px\" filter=\"true\" filterBy=\"value,label\"\n                  resetFilterOnHide=\"true\" (onFocus)=\"OnFocus()\" (keydown)=\"statesUi($event)\">\n                </p-dropdown>\n                <!-- <input type=\"text\" formControlName=\"state\" class=\"form-control\" placeholder=\"State\" required> -->\n                <div *ngIf=\"jobLocation.invalid && (jobLocation.dirty || jobLocation.touched)\" class=\"form-text text-muted\">\n                  <div *ngIf=\"jobLocation.errors?.required\">\n                    Location is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobLocation }}</small>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Status</label>\n                <select class=\"form-control\" formControlName=\"jobStatus\">\n                  <option value=\"null\">--select--</option>\n                  <option value=\"A\">Active</option>\n                  <option value=\"I\">InActive</option>\n                </select>\n                <div *ngIf=\"jobStatus.invalid && (jobStatus.dirty || jobStatus.touched)\"\n                  class=\"form-text text-muted\">\n                  <div *ngIf=\"jobStatus.errors?.required\">\n                    Status is required.\n                  </div>\n\n                </div>\n                <small class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.jobStatus }}</small>\n\n              </div>\n            </div>\n\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Job Description</label>\n                <textarea formControlName=\"jobDescription\" class=\"form-control\"></textarea>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!registerForm.valid\">Update\n                Job</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/user-index/user-index.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/benchsales/user-index/user-index.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/user-list/user-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/benchsales/user-list/user-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"bottom-right\"></p-toast>\r\n<h4 class=\"remove-margin\"> Consultant Submissions <a routerLink=\"/benchsales/create\" class=\"btn btn-primary\">\r\n    Add Submission\r\n  </a></h4>\r\n\r\n<p-table #dt [columns]=\"scrollableCols\" [autoLayout]=\"true\" [value]=\"benchsales\" [scrollable]=\"true\" [filterDelay]=\"0\"\r\n  [globalFilterFields]=\"['consultatName']\" [resizableColumns]=\"true\" columnResizeMode=\"expand\"\r\n  [reorderableColumns]=\"true\" autoLayout=\"true\" dataKey=\"reportId\" [paginator]=\"true\" [rows]=\"10\"\r\n  [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,25,50]\" [loading]=\"loading\">\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n      <col style=\"width:70px\">\r\n      <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n      <col style=\"width:200px\">\r\n    </colgroup>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>Action</th>\r\n      <th *ngFor=\"let col of columns\" [ngStyle]=\"{'width': col.width}\">\r\n        {{col.header}}\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n      <th></th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'user_details.name', 'startsWith')\"\r\n          placeholder=\"Created By\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultant.consultatName', 'startsWith')\"\r\n          placeholder=\"Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'vendorStatus', 'startsWith')\"\r\n          placeholder=\"Status\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'consultant.technology', 'startsWith')\"\r\n          placeholder=\"Technology\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\"\r\n          (input)=\"dt.filter($event.target.value, 'vendorlist.vendorCompanyName', 'startsWith')\"\r\n          placeholder=\"Company Name\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\"\r\n          (input)=\"dt.filter($event.target.value, 'vendor_detail.contactName', 'startsWith')\" placeholder=\"Name\"\r\n          class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\"\r\n          (input)=\"dt.filter($event.target.value, 'vendor_detail.contactEmail', 'startsWith')\"\r\n          placeholder=\"Vendor Email\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\"\r\n          (input)=\"dt.filter($event.target.value, 'vendor_detail.contactMobile', 'startsWith')\"\r\n          placeholder=\"Vendor Mobile\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'clients.clientName', 'startsWith')\"\r\n          placeholder=\"End Clinet\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'actualRate', 'startsWith')\"\r\n          placeholder=\"actualRate\" class=\"p-column-filter\">\r\n      </th>\r\n      <th>\r\n        <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'submissionRate', 'startsWith')\"\r\n          placeholder=\"submissionRate\" class=\"p-column-filter\">\r\n      </th>\r\n\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-editing=\"editing\" let-ri=\"rowIndex\">\r\n\r\n    <tr [pEditableRow]=\"rowData\" [ngStyle]=\"{'background-color':getColor(rowData.reportStatus,rowData.adminStatus)}\">\r\n      <td style=\"text-align:center\">\r\n\r\n        <a (click)=\"showModalDialog(rowData)\" class=\"btn btn-warning btn-sm\">Edit</a>\r\n        <a (click)=\"showModalDialog1(rowData.vendorComments)\" tabindex=\"0\" data-toggle=\"popover\" data-trigger=\"focus\"\r\n          title=\"\" data-original-title=\"Note\"><img src=\"./assets/img/sticky.png\"></a>\r\n      </td>\r\n\r\n      <td *ngFor=\"let col of columns\">\r\n\r\n        {{rowData|field:col}}\r\n\r\n\r\n      </td>\r\n\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n<p-confirmDialog key=\"confirm-drop-database\" header=\"Confirmation\" acceptLabel=\"Yes\" rejectLabel=\"No\"\r\n  [(visible)]=\"confirmDropDatabaseDialogVisible\"></p-confirmDialog>\r\n\r\n<p-dialog header=\"Status Change\" [(visible)]=\"displayModal\" [modal]=\"true\" [style]=\"{width: '50vw'}\"\r\n  [baseZIndex]=\"10000\" [draggable]=\"false\" [resizable]=\"false\">\r\n  <h5> {{heading1}}</h5>\r\n  <form [formGroup]=\"registerVendor\" (ngSubmit)=\"registerUser(submissionId)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"form-group\">\r\n          <label for=\"popstatus\">Status:</label>\r\n\r\n          <select class=\"form-control\" #seleectevalue formControlName=\"vendorStatus\">\r\n            <option value=\"\">--select--</option>\r\n            <option value=\"Placed\">Placed</option>\r\n            <option value=\"Interview scheduled\">Interview scheduled</option>\r\n            <option value=\"Submitted to Client\">Submitted to Client</option>\r\n            <option value=\"Submitted to Vendor\">Submitted to Vendor</option>\r\n            <option value=\"Disqualified\">Disqualified</option>\r\n            <option value=\"Client rejected\">Client rejected</option>\r\n            <option value=\"Vendor Rejected\">Vendor Rejected</option>\r\n            <option value=\"Vendor screening call\">Vendor screening call</option>\r\n            <option value=\"Waiting for Evaluation\">Waiting for Evaluation</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-8\" *ngIf=\"seleectevalue.value == 'Interview scheduled'\">\r\n        <div class=\"form-group schedulepopdiv\">\r\n          <label for=\"schedulepop\">Schedule Date:</label>\r\n          <input type=\"date\" class=\"form-control\" formControlName=\"scheduleDate\" value=\"2020-11-21 10:43:17\"><br>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\" *ngIf=\"seleectevalue.value == 'Interview scheduled'\">\r\n        <div class=\"form-group schedulepopdiv\">\r\n          <label for=\"timezone\">Time Zone:</label>\r\n          <select class=\"form-control\" formControlName=\"timezone\">\r\n            <option value=\"\">Choose Time Zone</option>\r\n            <option value=\"EST\">EST</option>\r\n            <option value=\"PST\">PST</option>\r\n            <option value=\"CST\">CST</option>\r\n            <option value=\"MST\">MST</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"form-group\">\r\n          <label for=\"notepop\">Comment:</label>\r\n          <textarea class=\"form-control\" formControlName=\"vendorComments\"></textarea>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary btn-round\">Update</button>\r\n  </form>\r\n\r\n\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n\r\n<p-dialog header=\"Note\" [(visible)]=\"displayModal1\" [modal]=\"true\" [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\"\r\n  [draggable]=\"false\" [resizable]=\"false\">\r\n\r\n  <p>{{comment}}</p>\r\n  <ng-template pTemplate=\"footer\">\r\n    <p-button icon=\"pi pi-check\" (click)=\"displayModal1=true\" label=\"Yes\" class=\"p-button-text\"></p-button>\r\n    <p-button icon=\"pi pi-times\" (click)=\"displayModal1=false\" label=\"No\"></p-button>\r\n  </ng-template>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./src/app/admin/benchsales/benchsales-rest.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/benchsales/benchsales-rest.service.ts ***!
  \*************************************************************/
/*! exports provided: BenchSalesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenchSalesService", function() { return BenchSalesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BenchSalesService = /** @class */ (function () {
    function BenchSalesService(http) {
        this.http = http;
    }
    BenchSalesService.prototype.getConsultants = function () {
        return this.http.get('https://portal.webmobilez.com/publicapi/submissions/');
    };
    BenchSalesService.prototype.storeUser = function (form) {
        return this.http.post('https://portal.webmobilez.com/publicapi/submissions', form.value);
    };
    BenchSalesService.prototype.storeClient = function (form) {
        return this.http.post('https://portal.webmobilez.com/publicapi/clients', form.value);
    };
    BenchSalesService.prototype.updateSubmission = function (form, id) {
        return this.http.put('https://portal.webmobilez.com/publicapi/submissions/' + id, form.value);
    };
    BenchSalesService.prototype.storeVendor = function (form) {
        return this.http.post('https://portal.webmobilez.com/publicapi/vendorlist', form.value);
    };
    BenchSalesService.prototype.storeContact = function (form) {
        return this.http.post('https://portal.webmobilez.com/publicapi/contactslist', form.value);
    };
    BenchSalesService.prototype.statusChangeConsultant = function (index) {
        return this.http.post('https://portal.webmobilez.com/publicapi/status-consultant', index);
    };
    BenchSalesService.prototype.getConsultantsList = function () {
        return this.http.get('https://portal.webmobilez.com/publicapi/getConsultantsList/');
    };
    BenchSalesService.prototype.editUser = function (id) {
        return this.http.get('https://portal.webmobilez.com/publicapi/jobs/' + id);
    };
    BenchSalesService.prototype.editVenodr = function (id) {
        return this.http.get('https://portal.webmobilez.com/publicapi/contacts/' + id);
    };
    BenchSalesService.prototype.editConsultant = function (id) {
        return this.http.get('https://portal.webmobilez.com/publicapi/store-consultant/' + id);
    };
    BenchSalesService.prototype.updateUser = function (form, id) {
        return this.http.put('https://portal.webmobilez.com/publicapi/jobs/' + id, form.value);
    };
    BenchSalesService.prototype.storeDocument = function (document) {
        return this.http.post('https://portal.webmobilez.com/publicapi/saveDocument', document);
    };
    BenchSalesService.prototype.getContactDetails = function (index) {
        return this.http.post('https://portal.webmobilez.com/publicapi/contactsDetails', index);
    };
    BenchSalesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BenchSalesService);
    return BenchSalesService;
}());



/***/ }),

/***/ "./src/app/admin/benchsales/benchsales.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/benchsales/benchsales.module.ts ***!
  \*******************************************************/
/*! exports provided: BenchSalesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenchSalesModule", function() { return BenchSalesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/admin/benchsales/user-routing.module.ts");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/benchsales/user-index/user-index.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/benchsales/user-list/user-list.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/admin/benchsales/user-create/user-create.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/admin/benchsales/user-edit/user-edit.component.ts");
/* harmony import */ var _benchsales_rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./benchsales-rest.service */ "./src/app/admin/benchsales/benchsales-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/slider.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_slider__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/contextmenu */ "./node_modules/primeng/contextmenu.js");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/tabmenu */ "./node_modules/primeng/tabmenu.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_tabmenu__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/inplace */ "./node_modules/primeng/inplace.js");
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_inplace__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/admin/benchsales/calculator/calculator.component.ts");
/* harmony import */ var _field_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../field.pipe */ "./src/app/field.pipe.ts");




























var BenchSalesModule = /** @class */ (function () {
    function BenchSalesModule() {
    }
    BenchSalesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__["UserIndexComponent"], _field_pipe__WEBPACK_IMPORTED_MODULE_26__["FieldPipe"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"], _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_6__["UserCreateComponent"], _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"], _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_25__["CalculatorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_11__["MultiSelectModule"],
                primeng_slider__WEBPACK_IMPORTED_MODULE_13__["SliderModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_11__["MultiSelectModule"],
                primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__["ContextMenuModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_16__["ButtonModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__["InputTextModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__["ConfirmDialogModule"],
                primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__["ProgressBarModule"], primeng_tabmenu__WEBPACK_IMPORTED_MODULE_19__["TabMenuModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__["TooltipModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_21__["FileUploadModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], primeng_inplace__WEBPACK_IMPORTED_MODULE_23__["InplaceModule"]
            ],
            exports: [_field_pipe__WEBPACK_IMPORTED_MODULE_26__["FieldPipe"]],
            providers: [
                _benchsales_rest_service__WEBPACK_IMPORTED_MODULE_8__["BenchSalesService"]
            ]
        })
    ], BenchSalesModule);
    return BenchSalesModule;
}());



/***/ }),

/***/ "./src/app/admin/benchsales/calculator/calculator.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/benchsales/calculator/calculator.component.ts ***!
  \*********************************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rpn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rpn */ "./src/app/admin/benchsales/calculator/rpn.ts");
/* harmony import */ var _yard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yard */ "./src/app/admin/benchsales/calculator/yard.ts");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format */ "./src/app/admin/benchsales/calculator/format.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model */ "./src/app/admin/benchsales/calculator/model.ts");






var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
        this.tokens = [];
        this.showResult = false;
    }
    CalculatorComponent.prototype.insertChar = function (character) {
        var lastToken = this.lastToken;
        var doubleMin = lastToken === '-' && Object(_model__WEBPACK_IMPORTED_MODULE_5__["isOperator"])(this.beforeLastToken);
        if (lastToken === undefined || (Object(_model__WEBPACK_IMPORTED_MODULE_5__["isOperator"])(lastToken) && !doubleMin)) {
            if (character === '.') {
                character = '0' + character;
            }
            this.tokens.push(character);
        }
        else if (this.showResult) {
            this.tokens = [character];
        }
        else {
            this.tokens[this.tokens.length - 1] = lastToken + character;
        }
        this.showResult = false;
    };
    Object.defineProperty(CalculatorComponent.prototype, "lastToken", {
        get: function () {
            return this.tokens[this.tokens.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalculatorComponent.prototype, "beforeLastToken", {
        get: function () {
            return this.tokens[this.tokens.length - 2];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalculatorComponent.prototype, "input", {
        get: function () {
            if (this.showResult) {
                try {
                    //return format(math.eval(this.tokens.join(' ')).toString());
                    return Object(_format__WEBPACK_IMPORTED_MODULE_4__["format"])(Object(_rpn__WEBPACK_IMPORTED_MODULE_2__["rpn"])(Object(_yard__WEBPACK_IMPORTED_MODULE_3__["yard"])(this.tokens)).toString());
                }
                catch (e) {
                    return 'Je hebt iets verkeerd gedaan.';
                }
            }
            return Object(_format__WEBPACK_IMPORTED_MODULE_4__["format"])(this.tokens
                .slice()
                .reverse()
                .find(function (t) { return !Object(_model__WEBPACK_IMPORTED_MODULE_5__["isOperator"])(t); }) || '0');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalculatorComponent.prototype, "formattedTokens", {
        get: function () {
            return this.tokens.map(_format__WEBPACK_IMPORTED_MODULE_4__["format"]).join(' ').replace(/\*/g, 'x') || '0';
        },
        enumerable: true,
        configurable: true
    });
    CalculatorComponent.prototype.reset = function () {
        this.tokens = [];
        this.showResult = false;
    };
    CalculatorComponent.prototype.evaluate = function () {
        // repeat last action
        if (this.showResult && this.tokens.length >= 2) {
            this.tokens = this.tokens.concat(this.tokens.slice(-2));
        }
        this.showResult = true;
    };
    CalculatorComponent.prototype.execOperator = function (operator) {
        // ANS support
        if (this.showResult) {
            this.tokens = [Object(_rpn__WEBPACK_IMPORTED_MODULE_2__["rpn"])(Object(_yard__WEBPACK_IMPORTED_MODULE_3__["yard"])(this.tokens)).toString()];
        }
        if (!this.lastToken && operator !== '(') {
            this.tokens.push('0');
        }
        this.tokens.push(operator);
        this.showResult = false;
    };
    // KEYBOARD SUPPORT
    CalculatorComponent.prototype.onKeyDown = function (event) {
        var key = event.key.toLowerCase();
        // event.preventDefault();
        if (key === 'c' || key === 'backspace') {
            this.reset();
        }
        else if (key === ',' || key === '.') {
            this.insertChar('.');
        }
        else if (!isNaN(parseInt(key))) {
            this.insertChar(key);
        }
        else if (key === 'enter') {
            this.evaluate();
        }
        else if (Object(_model__WEBPACK_IMPORTED_MODULE_5__["isOperator"])(key)) {
            this.execOperator(key);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CalculatorComponent.prototype, "onKeyDown", null);
    CalculatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-calculator',
            template: __webpack_require__(/*! raw-loader!./calculator.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/calculator/calculator.component.html")
        })
    ], CalculatorComponent);
    return CalculatorComponent;
}());



/***/ }),

/***/ "./src/app/admin/benchsales/calculator/format.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/benchsales/calculator/format.ts ***!
  \*******************************************************/
/*! exports provided: format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/admin/benchsales/calculator/model.ts");

function format(input) {
    if (Object(_model__WEBPACK_IMPORTED_MODULE_0__["isOperator"])(input)) {
        return input;
    }
    else {
        return input.replace('.', ',');
    }
}


/***/ }),

/***/ "./src/app/admin/benchsales/calculator/model.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/benchsales/calculator/model.ts ***!
  \******************************************************/
/*! exports provided: isOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOperator", function() { return isOperator; });
function isOperator(token) {
    return token === '-' || token === '+' || token === '*' || token === '/' || token === '(' || token === ')';
}


/***/ }),

/***/ "./src/app/admin/benchsales/calculator/rpn.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/benchsales/calculator/rpn.ts ***!
  \****************************************************/
/*! exports provided: rpn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rpn", function() { return rpn; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/admin/benchsales/calculator/model.ts");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_1__);


function rpn(tokens) {
    var stack = [];
    tokens.forEach(function (token) {
        if (!Object(_model__WEBPACK_IMPORTED_MODULE_0__["isOperator"])(token)) {
            stack.push(big_js__WEBPACK_IMPORTED_MODULE_1___default()(token));
        }
        else if (stack.length < 2) {
            throw new Error('Syntax error.');
        }
        else {
            var val2 = stack.pop();
            var val1 = stack.pop();
            switch (token) {
                case '+':
                    stack.push(val1.add(val2));
                    break;
                case '*':
                    stack.push(val1.mul(val2));
                    break;
                case '/':
                    if (val2.eq(0)) {
                        throw new Error('Division by zero.');
                    }
                    stack.push(val1.div(val2));
                    break;
                case '-':
                    stack.push(val1.minus(val2));
                    break;
            }
        }
    });
    return stack.pop().round(10);
}


/***/ }),

/***/ "./src/app/admin/benchsales/calculator/yard.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/benchsales/calculator/yard.ts ***!
  \*****************************************************/
/*! exports provided: yard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yard", function() { return yard; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/admin/benchsales/calculator/model.ts");

function yard(infix) {
    var ops = { '+': 1, '-': 1, '*': 2, '/': 2 };
    var peek = function (arr) { return arr[arr.length - 1]; };
    var stack = [];
    return infix.reduce(function (output, token) {
        if (!Object(_model__WEBPACK_IMPORTED_MODULE_0__["isOperator"])(token)) {
            output.push(token);
        }
        else {
            if (token in ops) {
                while (peek(stack) && ops[token] <= ops[peek(stack)]) {
                    output.push(stack.pop());
                }
                stack.push(token);
            }
            if (token === '(') {
                stack.push(token);
            }
            if (token === ')') {
                while (stack.length > 0 && peek(stack) !== '(') {
                    output.push(stack.pop());
                }
                stack.pop();
            }
        }
        return output;
    }, []).concat(stack.reverse());
}


/***/ }),

/***/ "./src/app/admin/benchsales/user-create/user-create.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin/benchsales/user-create/user-create.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-length {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYmVuY2hzYWxlcy91c2VyLWNyZWF0ZS9DOlxceGFtcHBcXGh0ZG9jc1xcd2VicG9ydGFsL3NyY1xcYXBwXFxhZG1pblxcYmVuY2hzYWxlc1xcdXNlci1jcmVhdGVcXHVzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9iZW5jaHNhbGVzL3VzZXItY3JlYXRlL3VzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsaUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2JlbmNoc2FsZXMvdXNlci1jcmVhdGUvdXNlci1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWxlbmd0aFxyXG57XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuIiwiLmJ0bi1sZW5ndGgge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/benchsales/user-create/user-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/benchsales/user-create/user-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: Profile, UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _benchsales_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../benchsales-rest.service */ "./src/app/admin/benchsales/benchsales-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);






var Profile = /** @class */ (function () {
    function Profile(prId, prName) {
        this.prId = prId;
        this.prName = prName;
    }
    return Profile;
}());

var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(route, messageService, restService, router) {
        this.route = route;
        this.messageService = messageService;
        this.restService = restService;
        this.router = router;
        this.num1 = 52;
        this.num2 = 20;
        this.counter = 0;
        this.serverErrors = [];
    }
    UserCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.getConsultantsList().subscribe(function (response) {
            console.log(_this.states = response.submissions);
            console.log(_this.vendors = response.vendorslist);
            console.log(_this.clients = response.clients);
        }, function (error) { console.log(error); });
        this.tech = [
            { label: "Choose Technology", value: "" },
            { label: "AEM(Adobe Experience manger)", value: "AEM(Adobe Experience manger)" },
            { label: 'Android Developer', value: 'Android Developer' },
            { label: 'Business Analyst', value: 'Business Analyst' },
            { label: 'Business Intelligence', value: 'Business Intelligence' },
            { label: 'Data Analyst', value: 'Data Analyst' },
            { label: 'Database Administrator', value: 'Database Administrator' },
            { label: 'Devops Engineer', value: 'Devops Engineer' },
            { label: 'Dot net Developer', value: 'Dot net Developer' },
            { label: 'ETL Developer', value: "ETL Developer" },
            { label: 'Hadoop', value: "Hadoop" },
            { label: 'Hadoop Developer/Hadoop Admin', value: "Hadoop Developer/Hadoop Admin" },
            { label: 'IOS Developer', value: "IOS Developer" },
            { label: 'Java Developer', value: "Java Developer" },
            { label: 'Linux Admin', value: "Linux Admin" },
            { label: 'Mainframe Developer', value: "Mainframe Developer" },
            { label: 'Network Engineer', value: "Network Engineer" },
            { label: 'Oracle fusion developer', value: "Oracle fusion developer" },
            { label: 'PEGA', value: "PEGA" },
            { label: 'QA Tester/QA Analyst', value: "QA Tester/QA Analyst" },
            { label: 'SAP Hana', value: "SAP Hana" },
            { label: 'Salesforce', value: "Salesforce" },
            { label: 'Salesforce Admin', value: "Salesforce Admin" },
            { label: 'Salesforce Developer', value: "Salesforce Developer" },
            { label: 'Service now developer', value: "Service now developer" },
            { label: 'Tableau Developer', value: "Tableau Developer" },
            { label: 'UI Developer / Frontend Developer', value: "UI Developer / Frontend Developer" },
            { label: 'VOIP Engineer', value: "VOIP Engineer" },
            { label: 'others', value: "others" },
        ];
        this.totalNumberOfCars = this.tech.length;
        this.str = '';
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'actualRate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'state': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'vendorStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'vendorComments': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'submissionRate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'vid': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'vendorDetailId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'endClientLocation': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'clientId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'scheduleDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            'timezone': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
        this.registerContact = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'vendorcontactName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'vendorcontactMobile': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'vendorcontactEmail': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'vendorext': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        this.registerVendor = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'vendorCompanyName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'contactName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'contactMobile': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'contactEmail': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'ext': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        this.registerClient = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'clientName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    };
    UserCreateComponent.prototype.ConvertToInt = function (val) {
        return parseFloat(val);
    };
    UserCreateComponent.prototype.showModalDialog = function () {
        this.displayModal = true;
    };
    UserCreateComponent.prototype.showModalDialogClient = function () {
        this.displayModalClient = true;
    };
    UserCreateComponent.prototype.showCalculator = function () {
        this.calculatorModal = true;
    };
    UserCreateComponent.prototype.showCalculator1 = function () {
        this.calculatorModal1 = true;
    };
    UserCreateComponent.prototype.showModalDialog1 = function () {
        this.registerContact.addControl('cvid', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.registerForm.value.vid, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
        this.displayModal1 = true;
    };
    UserCreateComponent.prototype.OnFocus = function () {
        if (this.tech.length > this.totalNumberOfCars) {
            this.tech.shift();
        }
    };
    UserCreateComponent.prototype.OnBlur = function () {
        console.log("OnBlur");
    };
    UserCreateComponent.prototype.test = function (event) {
        var _this = this;
        var charCode = event.keyCode;
        if (event.key === 'Enter') {
            this.selectedCar = this.tech.find(function (car) {
                return car.label.toLowerCase().includes(_this.str.toLowerCase());
            });
            this.tech.unshift(this.selectedCar);
            this.str = '';
        }
        else if (event.key === 'Backspace') {
            this.str = this.str.replace(/.$/, "");
        }
        else if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode === 8) {
            this.str += event.key;
        }
    };
    UserCreateComponent.prototype.onChange = function (event) {
        var _this = this;
        this.crate = '';
        this.cemail = '';
        this.cmobile = '';
        this.ctechnology = '';
        console.log(event.value);
        this.restService.editConsultant(event.value).subscribe(function (response) {
            _this.crate = response.user.rate;
            _this.cemail = response.user.consultantEmail;
            _this.cmobile = response.user.consultatMobileNumber;
            _this.ctechnology = response.user.technology;
        }, function (error) { return console.log(error); });
    };
    UserCreateComponent.prototype.ChangeClients = function (event) {
        //   this.clients=[];
        /* this.restService.editVenodr(event.value).subscribe(
           (response) => {
             this.contacts =  response.contacts;
           },
           (error) => console.log(error)
         ); */
    };
    UserCreateComponent.prototype.ChangeVendor = function (event) {
        var _this = this;
        this.vmobile = '';
        this.vcname = '';
        this.contacts = [];
        this.restService.editVenodr(event.value).subscribe(function (response) {
            _this.contacts = response.contacts;
        }, function (error) { return console.log(error); });
    };
    UserCreateComponent.prototype.ChangeContactsInner = function (value) {
        var _this = this;
        this.vmobile = '';
        this.vcname = '';
        var formData = new FormData();
        formData.append("index", value);
        this.restService.getContactDetails(formData).subscribe(function (response) {
            console.log(response);
            _this.vmobile = response.contactDetails.contactMobile;
            _this.vcname = response.contactDetails.contactName;
        }, function (error) { return console.log(error); });
    };
    UserCreateComponent.prototype.ChangeContacts = function (event) {
        var _this = this;
        this.vmobile = '';
        this.vcname = '';
        var formData = new FormData();
        formData.append("index", event.value);
        this.restService.getContactDetails(formData).subscribe(function (response) {
            console.log(response);
            _this.vmobile = response.contactDetails.contactMobile;
            _this.vcname = response.contactDetails.contactName;
        }, function (error) { return console.log(error); });
    };
    UserCreateComponent.prototype.vendorsUi = function (event) {
    };
    UserCreateComponent.prototype.statesUi = function (event) {
        var _this = this;
        var charCode = event.keyCode;
        if (event.key === 'Enter') {
            this.selectedStates = this.states.find(function (car) {
                return car.label.toLowerCase().includes(_this.str.toLowerCase());
            });
            this.states.unshift(this.selectedStates);
            this.str = '';
        }
        else if (event.key === 'Backspace') {
            this.str = this.str.replace(/.$/, "");
        }
        else if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode === 8) {
            this.str += event.key;
        }
    };
    Object.defineProperty(UserCreateComponent.prototype, "clientName", {
        get: function () { return this.registerClient.get('clientName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "actualRate", {
        get: function () { return this.registerForm.get('actualRate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "vendorStatus", {
        get: function () { return this.registerForm.get('vendorStatus'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "vendorComments", {
        get: function () { return this.registerForm.get('vendorComments'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "submissionRate", {
        get: function () { return this.registerForm.get('submissionRate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "state", {
        get: function () { return this.registerForm.get('state'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "vendorDetailId", {
        get: function () { return this.registerForm.get('vendorDetailId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "vid", {
        get: function () { return this.registerForm.get('vid'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "clientId", {
        get: function () { return this.registerForm.get('clientId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "endClientLocation", {
        get: function () { return this.registerForm.get('vid'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "vendorCompanyName", {
        get: function () { return this.registerVendor.get('vendorCompanyName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "contactName", {
        get: function () { return this.registerVendor.get('contactName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "contactMobile", {
        get: function () { return this.registerVendor.get('contactMobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "contactEmail", {
        get: function () { return this.registerVendor.get('contactEmail'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "ext", {
        get: function () { return this.registerVendor.get('ext'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "vendorcontactName", {
        get: function () { return this.registerContact.get('vendorcontactName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "vendorcontactMobile", {
        get: function () { return this.registerContact.get('vendorcontactMobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "vendorcontactEmail", {
        get: function () { return this.registerContact.get('vendorcontactEmail'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "vendorext", {
        get: function () { return this.registerContact.get('vendorext'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "scheduleDate", {
        get: function () { return this.registerContact.get('scheduleDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "timezone", {
        get: function () { return this.registerContact.get('timezone'); },
        enumerable: true,
        configurable: true
    });
    UserCreateComponent.prototype.registerClientForm = function () {
        var _this = this;
        this.restService.storeClient(this.registerClient).subscribe(function (response) {
            _this.displayModalClient = false;
            _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Client Added' });
            _this.clients = response.clients;
            _this.selectedClients = response.clientId;
            // this.ChangeContactsInner(response.contactId)
            // this.router.navigate(['benchsales/list'])
        }, function (error) {
            _this.serverErrors = error.error.errors;
        });
    };
    UserCreateComponent.prototype.registerContactForm = function () {
        var _this = this;
        this.restService.storeContact(this.registerContact).subscribe(function (response) {
            _this.displayModal1 = false;
            _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Vendor Contact Details Added' });
            // this.selectedContacts = response.contactId;
            _this.restService.editVenodr(_this.registerForm.value.vid).subscribe(function (response2) {
                _this.contacts = response2.contacts;
                _this.selectedContacts = response.contactId;
                _this.ChangeContactsInner(response.contactId);
            }, function (error) { return console.log(error); });
            // this.ChangeContactsInner(response.contactId)
            // this.router.navigate(['benchsales/list'])
        }, function (error) {
            _this.serverErrors = error.error.errors;
        });
    };
    UserCreateComponent.prototype.registerVendorCompany = function () {
        var _this = this;
        console.log(this.registerVendor);
        this.restService.storeVendor(this.registerVendor).subscribe(function (response) {
            console.log(response),
                console.log(response.vendorId);
            _this.displayModal = false;
            _this.selectedVendors = response.vendorId;
            _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Vendor Company Details Added' });
            _this.restService.getConsultantsList().subscribe(function (response1) {
                // console.log(this.states = response.submissions);
                console.log(_this.vendors = response1.vendorslist);
                // console.log( this.clients =  response1.clients);
            }, function (error) { console.log(error); });
            _this.restService.editVenodr(response.vendorId).subscribe(function (response2) {
                _this.contacts = response2.contacts;
                _this.selectedContacts = response.contactId;
                _this.ChangeContactsInner(response.contactId);
            }, function (error) { return console.log(error); });
            // this.router.navigate(['benchsales/list'])
        }, function (error) {
            _this.serverErrors = error.error.errors;
        });
    };
    UserCreateComponent.prototype.registerUser = function () {
        var _this = this;
        console.log(this.registerForm);
        //formData.append('myImageToSend', this.imageFile.file);
        this.restService.storeUser(this.registerForm).subscribe(function (response) {
            console.log(response),
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Submission Completed' });
            _this.router.navigate(['benchsales/list']);
        }, function (error) {
            _this.serverErrors = error.error.errors;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dd', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserCreateComponent.prototype, "dropdown", void 0);
    UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/user-create/user-create.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
            styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/admin/benchsales/user-create/user-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _benchsales_rest_service__WEBPACK_IMPORTED_MODULE_3__["BenchSalesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/benchsales/user-edit/user-create.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/admin/benchsales/user-edit/user-create.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2JlbmNoc2FsZXMvdXNlci1lZGl0L3VzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/benchsales/user-edit/user-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/benchsales/user-edit/user-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: Profile, UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _benchsales_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../benchsales-rest.service */ "./src/app/admin/benchsales/benchsales-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_5__);






var Profile = /** @class */ (function () {
    function Profile(prId, prName) {
        this.prId = prId;
        this.prName = prName;
    }
    return Profile;
}());

var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(route, messageService, restService, router) {
        this.route = route;
        this.messageService = messageService;
        this.restService = restService;
        this.router = router;
        this.counter = 0;
        this.serverErrors = [];
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.states = [
            { label: "Choose State", value: "" },
            { label: "Alabama", value: "Alabama" },
            { label: 'Alaska', value: 'Alaska' },
            { label: 'Alabama', value: 'Alabama' },
            { label: 'Arizona', value: 'Arizona' },
            { label: 'Arkansas', value: 'Arkansas' },
            { label: 'California', value: 'California' },
            { label: 'Colorado', value: 'Colorado' },
            { label: 'Connecticut', value: 'Connecticut' },
            { label: 'Delaware', value: "Delaware" },
            { label: 'District of Columbia', value: "District of Columbia" },
            { label: 'Florida', value: "Florida" },
            { label: 'Georgia', value: "Georgia" },
            { label: 'Hawaii', value: "Hawaii" },
            { label: 'Idaho', value: "Idaho" },
            { label: 'Illinois', value: "Illinois" },
            { label: 'Indiana', value: "Indiana" },
            { label: 'Iowa', value: "Iowa" },
            { label: 'Kansas', value: "Kansas" },
            { label: 'Kentucky', value: "Kentucky" },
            { label: 'Louisiana', value: "Louisiana" },
            { label: 'Maine', value: "Maine" },
            { label: 'Maryland', value: "Maryland" },
            { label: 'Michigan', value: "Michigan" },
            { label: 'Minnesota', value: "Minnesota" },
            { label: 'Mississippi', value: "Mississippi" },
            { label: 'Missouri', value: "Missouri" },
            { label: 'Montana', value: "Montana" },
            { label: 'Nebraska', value: "Nebraska" },
        ];
        this.cars = [
            { label: "Choose Technology", value: "" },
            { label: "AEM(Adobe Experience manger)", value: "AEM(Adobe Experience manger)" },
            { label: 'Android Developer', value: 'Android Developer' },
            { label: 'Business Analyst', value: 'Business Analyst' },
            { label: 'Business Intelligence', value: 'Business Intelligence' },
            { label: 'Data Analyst', value: 'Data Analyst' },
            { label: 'Database Administrator', value: 'Database Administrator' },
            { label: 'Devops Engineer', value: 'Devops Engineer' },
            { label: 'Dot net Developer', value: 'Dot net Developer' },
            { label: 'ETL Developer', value: "ETL Developer" },
            { label: 'Hadoop', value: "Hadoop" },
            { label: 'Hadoop Developer/Hadoop Admin', value: "Hadoop Developer/Hadoop Admin" },
            { label: 'IOS Developer', value: "IOS Developer" },
            { label: 'Java Developer', value: "Java Developer" },
            { label: 'Linux Admin', value: "Linux Admin" },
            { label: 'Mainframe Developer', value: "Mainframe Developer" },
            { label: 'Network Engineer', value: "Network Engineer" },
            { label: 'Oracle fusion developer', value: "Oracle fusion developer" },
            { label: 'PEGA', value: "PEGA" },
            { label: 'QA Tester/QA Analyst', value: "QA Tester/QA Analyst" },
            { label: 'SAP Hana', value: "SAP Hana" },
            { label: 'Salesforce', value: "Salesforce" },
            { label: 'Salesforce Admin', value: "Salesforce Admin" },
            { label: 'Salesforce Developer', value: "Salesforce Developer" },
            { label: 'Service now developer', value: "Service now developer" },
            { label: 'Tableau Developer', value: "Tableau Developer" },
            { label: 'UI Developer / Frontend Developer', value: "UI Developer / Frontend Developer" },
            { label: 'VOIP Engineer', value: "VOIP Engineer" },
            { label: 'others', value: "others" },
        ];
        this.totalNumberOfCars = this.cars.length;
        this.str = '';
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'jobTitle': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]),
            'jobVisaType': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'jobLocation': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'jobExperience': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'jobTechnology': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'jobDescription': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'jobStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
        });
        var id = this.route.snapshot.params.id;
        this.restService.editUser(id).subscribe(function (response) {
            _this.registerForm.patchValue({
                'jobTitle': response.user.jobTitle,
                'jobVisaType': response.user.jobVisaType,
                'jobLocation': response.user.jobLocation,
                'jobExperience': response.user.jobExperience,
                'jobTechnology': response.user.jobTechnology,
                'jobDescription': response.user.jobDescription,
                'jobStatus': response.user.jobStatus,
            });
        }, function (error) { return console.log(error); });
    };
    UserEditComponent.prototype.imagesPreviewResume = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (_event) {
                _this.imageFile = {
                    link: _event.target.result,
                    file: event.srcElement.files[0],
                    name: event.srcElement.files[0].name
                };
            };
            reader.readAsDataURL(event.target.files[0]);
            var formData = new FormData();
            formData.append("resume", event.target.files[0]);
            this.restService.storeDocument(formData).subscribe(function (response) {
                console.log(response);
                _this.registerForm.patchValue({
                    resume: response.path,
                });
            }, function (error) { console.log(error); });
        }
    };
    UserEditComponent.prototype.imagesPreviewOtherDoc = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (_event) {
                _this.imageFile = {
                    link: _event.target.result,
                    file: event.srcElement.files[0],
                    name: event.srcElement.files[0].name
                };
            };
            reader.readAsDataURL(event.target.files[0]);
            var formData = new FormData();
            formData.append("otherDocument", event.target.files[0]);
            this.restService.storeDocument(formData).subscribe(function (response) {
                console.log(response);
                _this.registerForm.patchValue({
                    otherDocument: response.path,
                });
            }, function (error) { console.log(error); });
        }
    };
    UserEditComponent.prototype.imagesPreviewWorkAuth = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (_event) {
                _this.imageFile = {
                    link: _event.target.result,
                    file: event.srcElement.files[0],
                    name: event.srcElement.files[0].name
                };
            };
            reader.readAsDataURL(event.target.files[0]);
            var formData = new FormData();
            formData.append("workAuthorization", event.target.files[0]);
            this.restService.storeDocument(formData).subscribe(function (response) {
                console.log(response);
                _this.registerForm.patchValue({
                    workAuthorization: response.path,
                });
            }, function (error) { console.log(error); });
        }
    };
    UserEditComponent.prototype.OnFocus = function () {
        if (this.cars.length > this.totalNumberOfCars) {
            this.cars.shift();
        }
    };
    UserEditComponent.prototype.OnBlur = function () {
        console.log("OnBlur");
    };
    UserEditComponent.prototype.test = function (event) {
        var _this = this;
        var charCode = event.keyCode;
        if (event.key === 'Enter') {
            this.selectedCar = this.cars.find(function (car) {
                return car.label.toLowerCase().includes(_this.str.toLowerCase());
            });
            this.cars.unshift(this.selectedCar);
            this.str = '';
        }
        else if (event.key === 'Backspace') {
            this.str = this.str.replace(/.$/, "");
        }
        else if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode === 8) {
            this.str += event.key;
        }
    };
    UserEditComponent.prototype.statesUi = function (event) {
        var _this = this;
        var charCode = event.keyCode;
        if (event.key === 'Enter') {
            this.selectedStates = this.states.find(function (car) {
                return car.label.toLowerCase().includes(_this.str.toLowerCase());
            });
            this.states.unshift(this.selectedStates);
            this.str = '';
        }
        else if (event.key === 'Backspace') {
            this.str = this.str.replace(/.$/, "");
        }
        else if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode === 8) {
            this.str += event.key;
        }
    };
    Object.defineProperty(UserEditComponent.prototype, "jobTitle", {
        get: function () { return this.registerForm.get('jobTitle'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "jobDescription", {
        get: function () { return this.registerForm.get('jobDescription'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "jobTechnology", {
        get: function () { return this.registerForm.get('jobTechnology'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "jobExperience", {
        get: function () { return this.registerForm.get('jobExperience'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "jobLocation", {
        get: function () { return this.registerForm.get('jobLocation'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "jobVisaType", {
        get: function () { return this.registerForm.get('jobVisaType'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "jobStatus", {
        get: function () { return this.registerForm.get('jobStatus'); },
        enumerable: true,
        configurable: true
    });
    UserEditComponent.prototype.registerUser = function () {
        var _this = this;
        console.log(this.registerForm);
        //formData.append('myImageToSend', this.imageFile.file);
        this.restService.storeUser(this.registerForm).subscribe(function (response) {
            console.log(response),
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Consultant is added' });
            _this.router.navigate(['jobs/list']);
        }, function (error) {
            _this.serverErrors = error.error.errors;
        });
    };
    UserEditComponent.prototype.updateUserDetails = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        this.restService.updateUser(this.registerForm, id).subscribe(function (response) {
            console.log(response),
                _this.router.navigate(['jobs/list']);
        }, function (error) {
            _this.serverErrors = error.error.errors;
        }, function () { return console.log('completed'); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dd', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserEditComponent.prototype, "dropdown", void 0);
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/user-edit/user-create.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]],
            styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/admin/benchsales/user-edit/user-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _benchsales_rest_service__WEBPACK_IMPORTED_MODULE_3__["BenchSalesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/admin/benchsales/user-index/user-index.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/admin/benchsales/user-index/user-index.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2JlbmNoc2FsZXMvdXNlci1pbmRleC91c2VyLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/benchsales/user-index/user-index.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/benchsales/user-index/user-index.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIndexComponent", function() { return UserIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserIndexComponent = /** @class */ (function () {
    function UserIndexComponent(route, router) {
        this.route = route;
        this.router = router;
        this.userList = [];
        this.timeSheets = [];
        this.loading = true;
    }
    UserIndexComponent.prototype.ngOnInit = function () {
    };
    UserIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-index',
            template: __webpack_require__(/*! raw-loader!./user-index.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/user-index/user-index.component.html"),
            styles: [__webpack_require__(/*! ./user-index.component.scss */ "./src/app/admin/benchsales/user-index/user-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserIndexComponent);
    return UserIndexComponent;
}());



/***/ }),

/***/ "./src/app/admin/benchsales/user-list/user-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/admin/benchsales/user-list/user-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.disable-td {\n  pointer-events: none;\n}\n\n.ui-button {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYmVuY2hzYWxlcy91c2VyLWxpc3QvQzpcXHhhbXBwXFxodGRvY3NcXHdlYnBvcnRhbC9zcmNcXGFwcFxcYWRtaW5cXGJlbmNoc2FsZXNcXHVzZXItbGlzdFxcdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9iZW5jaHNhbGVzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQkFBQTtBQ0VGOztBREFBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYmVuY2hzYWxlcy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5wLWNlbGwtZWRpdGluZyB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXNhYmxlLXRke1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi51aS1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcclxufVxyXG4iLCI6aG9zdCA6Om5nLWRlZXAgLnAtY2VsbC1lZGl0aW5nIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmRpc2FibGUtdGQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnVpLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/benchsales/user-list/user-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/benchsales/user-list/user-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _benchsales_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../benchsales-rest.service */ "./src/app/admin/benchsales/benchsales-rest.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);








var UserListComponent = /** @class */ (function () {
    function UserListComponent(confirmation, fb, messageService, route, userRest, router) {
        this.confirmation = confirmation;
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.benchsales = [];
        this.confirmDropDatabaseDialogVisible = false;
        this.loading = true;
        this.serverErrors = [];
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerVendor = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'vendorStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'vendorComments': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'scheduleDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'timezone': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
        this.userRest.getConsultants().subscribe(function (response) {
            console.log(_this.benchsales = response.submissions);
            _this.totalRecords = _this.benchsales.length;
            _this.loading = false;
        }, function (error) { console.log(error); });
        this.scrollableCols = [
            { field: 'user_details.name', header: 'Created By', width: '20%', editable: false },
            { field: 'consultant.consultatName', header: 'Consultant Name', width: '20%', editable: false },
            { field: 'vendorStatus', header: 'Status', width: '40%', editable: true },
            { field: 'consultant.technology', header: 'Technology', width: '20%', editable: false },
            { field: 'vendorCompanyName', header: 'Company Name', width: '20%', editable: false },
            { field: 'vendorName', header: 'Vendor Name', width: '20%', editable: false },
            { field: 'vendorEmail', header: 'Vendor Email', width: '20%', editable: false },
            { field: 'vendorMobileNumber', header: 'Vendor Mobile', width: '20%', editable: false },
            { field: 'endClientName', header: 'End Client Name', width: '20%', editable: false },
            { field: 'actualRate', header: 'Actual Rate', width: '20%', editable: true },
            { field: 'submissionRate', header: 'Submissio Rate', width: '20%', editable: true },
        ];
    };
    UserListComponent.prototype.showModalDialog = function (data) {
        console.log(data);
        this.heading1 = data.consultant.consultatName + " submiting to " + data.vendorCompanyName;
        this.displayModal = true;
        this.submissionId = data.vendorId;
        this.registerVendor.patchValue({
            vendorComments: data.vendorComments,
            vendorStatus: data.vendorStatus,
            timezone: data.timezone,
            scheduleDate: this.formatDate(data.scheduleDate),
        });
    };
    UserListComponent.prototype.showModalDialog1 = function (data) {
        this.displayModal1 = true;
        this.comment = data;
    };
    UserListComponent.prototype.formatDate = function (date) {
        if (date) {
            var d = new Date(date);
            var month = '' + (d.getMonth() + 1);
            var day = '' + d.getDate();
            var year = d.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            return [year, month, day].join('-');
        }
        else {
            var d = new Date();
            var month = '' + (d.getMonth() + 1);
            var day = '' + d.getDate();
            var year = d.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            return [year, month, day].join('-');
        }
    };
    UserListComponent.prototype.dropDatabase = function (event, index) {
        var _this = this;
        if (event.defaultPrevented)
            return;
        event.preventDefault();
        this.confirmation.confirm({
            key: 'confirm-drop-database',
            message: 'Are you sure to Aprove for Hotlist',
            accept: function () { _this._dropDatabase(index); },
        });
    };
    UserListComponent.prototype._dropDatabase = function (index) {
        var _this = this;
        var formData = new FormData();
        formData.append("index", index);
        console.log(formData);
        this.userRest.statusChangeConsultant(formData).subscribe(function (response) {
            console.log(response);
            _this.loading = false;
            _this.benchsales = response.timesheet;
        }, function (error) { console.log(error); });
    };
    UserListComponent.prototype.editUser = function (id) {
        this.router.navigate(['jobs/edit', id]);
    };
    UserListComponent.prototype.getColor = function (status, adminStatus) {
        if (adminStatus == "A") {
            return "#d4edda";
        }
        else if (status == "not interested") {
            return "#f8d7da";
        }
    };
    Object.defineProperty(UserListComponent.prototype, "vendorStatus", {
        get: function () { return this.registerVendor.get('vendorStatus'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserListComponent.prototype, "vendorComments", {
        get: function () { return this.registerVendor.get('vendorComments'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserListComponent.prototype, "scheduleDate", {
        get: function () { return this.registerVendor.get('scheduleDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserListComponent.prototype, "timezone", {
        get: function () { return this.registerVendor.get('timezone'); },
        enumerable: true,
        configurable: true
    });
    UserListComponent.prototype.registerUser = function (submissionId) {
        var _this = this;
        console.log(this.registerVendor);
        this.userRest.updateSubmission(this.registerVendor, submissionId).subscribe(function (response) {
            _this.displayModal = false;
            console.log(response),
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Submision Updated' });
            _this.benchsales = response.submissions;
        }, function (error) {
            _this.serverErrors = error.error.errors;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dt', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_table__WEBPACK_IMPORTED_MODULE_4__["Table"])
    ], UserListComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], UserListComponent.prototype, "modalContent", void 0);
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]],
            template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/benchsales/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/benchsales/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _benchsales_rest_service__WEBPACK_IMPORTED_MODULE_3__["BenchSalesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/admin/benchsales/user-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/benchsales/user-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/benchsales/user-index/user-index.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/benchsales/user-list/user-list.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/admin/benchsales/user-create/user-create.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/admin/benchsales/user-edit/user-edit.component.ts");







var routes = [
    // { path: 'list', component: UserListComponent, outlet: 'users' },
    {
        path: '',
        component: _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__["UserIndexComponent"],
        children: [
            { path: 'list', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"], data: {
                    expectedRole: 'BenchSales'
                } },
            { path: 'create', component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"], data: {
                    expectedRole: 'BenchSales'
                } },
            { path: 'edit/:id', component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"], data: {
                    expectedRole: 'BenchSales'
                } },
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/field.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/field.pipe.ts ***!
  \*******************************/
/*! exports provided: FieldPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldPipe", function() { return FieldPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FieldPipe = /** @class */ (function () {
    /**
     *
     */
    function FieldPipe() {
    }
    FieldPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var column = args[0];
        var result = value;
        // addressModel.City.Name
        column.field.split(".").forEach(function (f) { return (result = result[f]); });
        return result ? result : '-';
    };
    FieldPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "field"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FieldPipe);
    return FieldPipe;
}());



/***/ })

}]);
//# sourceMappingURL=admin-benchsales-benchsales-module-es5.js.map