
<!DOCTYPE html>
<html lang="en">
<head>

<style>
    @charset "UTF-8";
/* open-sans-300 - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  src: url("./fonts/open-sans-v15-latin-300.eot");
  /* IE9 Compat Modes */
  src: local("Open Sans Light"), local("OpenSans-Light"), url("./fonts/open-sans-v15-latin-300.eot?#iefix") format("embedded-opentype"), url("./fonts/open-sans-v15-latin-300.woff2") format("woff2"), url("./fonts/open-sans-v15-latin-300.woff") format("woff"), url("./fonts/open-sans-v15-latin-300.ttf") format("truetype"), url("./fonts/open-sans-v15-latin-300.svg#OpenSans") format("svg");
  /* Legacy iOS */ }
/* open-sans-regular - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: url("./fonts/open-sans-v15-latin-regular.eot");
  /* IE9 Compat Modes */
  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("./fonts/open-sans-v15-latin-regular.eot?#iefix") format("embedded-opentype"), url("./fonts/open-sans-v15-latin-regular.woff2") format("woff2"), url("./fonts/open-sans-v15-latin-regular.woff") format("woff"), url("./fonts/open-sans-v15-latin-regular.ttf") format("truetype"), url("./fonts/open-sans-v15-latin-regular.svg#OpenSans") format("svg");
  /* Legacy iOS */ }
/* open-sans-700 - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  src: url("./fonts/open-sans-v15-latin-700.eot");
  /* IE9 Compat Modes */
  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("./fonts/open-sans-v15-latin-700.eot?#iefix") format("embedded-opentype"), url("./fonts/open-sans-v15-latin-700.woff2") format("woff2"), url("./fonts/open-sans-v15-latin-700.woff") format("woff"), url("./fonts/open-sans-v15-latin-700.ttf") format("truetype"), url("./fonts/open-sans-v15-latin-700.svg#OpenSans") format("svg");
  /* Legacy iOS */ }
* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box; }

body .ui-widget {
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  text-decoration: none; }
body .ui-corner-all {
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px; }
body .ui-corner-top {
  -moz-border-radius-topleft: 3px;
  -webkit-border-top-left-radius: 3px;
  border-top-left-radius: 3px;
  -moz-border-radius-topright: 3px;
  -webkit-border-top-right-radius: 3px;
  border-top-right-radius: 3px; }
body .ui-corner-bottom {
  -moz-border-radius-bottomleft: 3px;
  -webkit-border-bottom-left-radius: 3px;
  border-bottom-left-radius: 3px;
  -moz-border-radius-bottomright: 3px;
  -webkit-border-bottom-right-radius: 3px;
  border-bottom-right-radius: 3px; }
body .ui-corner-left {
  -moz-border-radius-topleft: 3px;
  -webkit-border-top-left-radius: 3px;
  border-top-left-radius: 3px;
  -moz-border-radius-bottomleft: 3px;
  -webkit-border-bottom-left-radius: 3px;
  border-bottom-left-radius: 3px; }
body .ui-corner-right {
  -moz-border-radius-topright: 3px;
  -webkit-border-top-right-radius: 3px;
  border-top-right-radius: 3px;
  -moz-border-radius-bottomright: 3px;
  -webkit-border-bottom-right-radius: 3px;
  border-bottom-right-radius: 3px; }
body a {
  color: #007ad9;
  text-decoration: none; }
  body a:hover {
    color: #116fbf; }
  body a:active {
    color: #005b9f; }
body .ui-helper-reset {
  line-height: normal; }
body .ui-state-disabled, body .ui-widget:disabled {
  opacity: 0.5;
  filter: alpha(opacity=50); }
body .pi {
  font-size: 1.25em; }

body {
  /* Validations */ }
  body .ui-inputtext {
    font-size: 14px;
    color: #333333;
    background: #ffffff;
    padding: 0.429em;
    border: 1px solid #a6a6a6;
    -moz-transition: border-color 0.2s;
    -o-transition: border-color 0.2s;
    -webkit-transition: border-color 0.2s;
    transition: border-color 0.2s;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; }
    body .ui-inputtext:enabled:hover:not(.ui-state-error) {
      border-color: #212121; }
    body .ui-inputtext:enabled:focus:not(.ui-state-error) {
      border-color: #007ad9;
      outline: 0 none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none; }
  body .ui-chkbox {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    width: 20px;
    height: 20px; }
    body .ui-chkbox .ui-chkbox-box {
      border: 1px solid #a6a6a6;
      background-color: #ffffff;
      width: 20px;
      height: 20px;
      text-align: center;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      -moz-transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
      -o-transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
      -webkit-transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
      transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s; }
      body .ui-chkbox .ui-chkbox-box:not(.ui-state-disabled):hover {
        border-color: #212121; }
      body .ui-chkbox .ui-chkbox-box.ui-state-focus {
        border-color: #007ad9;
        background-color: #ffffff;
        color: #007ad9;
        -webkit-box-shadow: 0 0 0 0.2em #8dcdff;
        -moz-box-shadow: 0 0 0 0.2em #8dcdff;
        box-shadow: 0 0 0 0.2em #8dcdff; }
      body .ui-chkbox .ui-chkbox-box.ui-state-active {
        border-color: #007ad9;
        background-color: #007ad9;
        color: #ffffff; }
        body .ui-chkbox .ui-chkbox-box.ui-state-active:not(.ui-state-disabled):hover {
          border-color: #005b9f;
          background-color: #005b9f;
          color: #ffffff; }
        body .ui-chkbox .ui-chkbox-box.ui-state-active.ui-state-focus {
          border-color: #007ad9;
          background-color: #007ad9;
          color: #ffffff; }
      body .ui-chkbox .ui-chkbox-box .ui-chkbox-icon {
        overflow: hidden;
        position: relative;
        font-size: 18px; }
  body .ui-chkbox-label {
    margin: 0 0 0 0.5em; }
  body .ui-radiobutton {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    width: 20px;
    height: 20px; }
    body .ui-radiobutton .ui-radiobutton-box {
      border: 1px solid #a6a6a6;
      background-color: #ffffff;
      width: 20px;
      height: 20px;
      text-align: center;
      position: relative;
      -moz-transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
      -o-transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
      -webkit-transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
      transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      border-radius: 50%; }
      body .ui-radiobutton .ui-radiobutton-box:not(.ui-state-disabled):not(.ui-state-active):hover {
        border-color: #212121; }
      body .ui-radiobutton .ui-radiobutton-box.ui-state-focus {
        border-color: #007ad9;
        background-color: #ffffff;
        color: #007ad9;
        -webkit-box-shadow: 0 0 0 0.2em #8dcdff;
        -moz-box-shadow: 0 0 0 0.2em #8dcdff;
        box-shadow: 0 0 0 0.2em #8dcdff; }
      body .ui-radiobutton .ui-radiobutton-box.ui-state-active {
        border-color: #007ad9;
        background-color: #007ad9;
        color: #ffffff; }
        body .ui-radiobutton .ui-radiobutton-box.ui-state-active .ui-radiobutton-icon {
          background-color: #ffffff; }
        body .ui-radiobutton .ui-radiobutton-box.ui-state-active:not(.ui-state-disabled):hover {
          border-color: #005b9f;
          background-color: #005b9f;
          color: #ffffff; }
        body .ui-radiobutton .ui-radiobutton-box.ui-state-active.ui-state-focus {
          border-color: #007ad9;
          background-color: #007ad9;
          color: #ffffff; }
      body .ui-radiobutton .ui-radiobutton-box .ui-radiobutton-icon {
        background: transparent;
        width: 10px;
        height: 10px;
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -5px;
        margin-top: -5px;
        -moz-transition: background-color 0.2s;
        -o-transition: background-color 0.2s;
        -webkit-transition: background-color 0.2s;
        transition: background-color 0.2s;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%; }
        body .ui-radiobutton .ui-radiobutton-box .ui-radiobutton-icon:before {
          display: none; }
  body .ui-radiobutton-label {
    margin: 0 0 0 .5em; }
  body .ui-inputswitch {
    width: 3em;
    height: 1.75em; }
    body .ui-inputswitch .ui-inputswitch-slider {
      -moz-transition: background-color 0.2s;
      -o-transition: background-color 0.2s;
      -webkit-transition: background-color 0.2s;
      transition: background-color 0.2s;
      border-radius: 30px;
      background: #cccccc; }
      body .ui-inputswitch .ui-inputswitch-slider:before {
        background-color: #ffffff;
        height: 1.250em;
        width: 1.250em;
        left: .25em;
        bottom: .25em;
        border-radius: 50%;
        -webkit-transition: 0.2s;
        transition: 0.2s; }
    body .ui-inputswitch.ui-inputswitch-checked .ui-inputswitch-slider:before {
      -webkit-transform: translateX(1.25em);
      -ms-transform: translateX(1.25em);
      transform: translateX(1.25em); }
    body .ui-inputswitch.ui-inputswitch-focus .ui-inputswitch-slider {
      background: #b7b7b7; }
    body .ui-inputswitch:not(.ui-state-disabled):hover .ui-inputswitch-slider {
      background-color: #b7b7b7; }
    body .ui-inputswitch.ui-inputswitch-checked .ui-inputswitch-slider {
      background-color: #007ad9; }
    body .ui-inputswitch.ui-inputswitch-checked:not(.ui-state-disabled):hover .ui-inputswitch-slider {
      background-color: #116fbf; }
    body .ui-inputswitch.ui-inputswitch-checked.ui-inputswitch-focus .ui-inputswitch-slider {
      background: #005b9f; }
  body .ui-autocomplete .ui-autocomplete-input {
    padding: 0.429em; }
  body .ui-autocomplete.ui-autocomplete-multiple .ui-autocomplete-multiple-container {
    padding: 0.2145em 0.429em; }
    body .ui-autocomplete.ui-autocomplete-multiple .ui-autocomplete-multiple-container:not(.ui-state-disabled):hover {
      border-color: #212121; }
    body .ui-autocomplete.ui-autocomplete-multiple .ui-autocomplete-multiple-container:not(.ui-state-disabled).ui-state-focus {
      border-color: #007ad9;
      outline: 0 none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none; }
    body .ui-autocomplete.ui-autocomplete-multiple .ui-autocomplete-multiple-container .ui-autocomplete-input-token {
      margin: 0;
      padding: 0.2145em 0;
      color: #333333; }
      body .ui-autocomplete.ui-autocomplete-multiple .ui-autocomplete-multiple-container .ui-autocomplete-input-token input {
        font-family: "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 14px;
        padding: 0;
        margin: 0; }
    body .ui-autocomplete.ui-autocomplete-multiple .ui-autocomplete-multiple-container .ui-autocomplete-token {
      font-size: 14px;
      padding: 0.2145em 0.429em;
      margin: 0 0.286em 0 0;
      background: #007ad9;
      color: #ffffff; }
  body .ui-autocomplete-panel {
    padding: 0;
    border: 1px solid #c8c8c8;
    background-color: #ffffff;
    -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16); }
    body .ui-autocomplete-panel .ui-autocomplete-items {
      padding: 0; }
      body .ui-autocomplete-panel .ui-autocomplete-items .ui-autocomplete-list-item {
        margin: 0;
        padding: 0.429em 0.857em;
        border: 0 none;
        color: #333333;
        background-color: transparent;
        -moz-border-radius: 0;
        -webkit-border-radius: 0;
        border-radius: 0; }
        body .ui-autocomplete-panel .ui-autocomplete-items .ui-autocomplete-list-item.ui-state-highlight {
          color: #ffffff;
          background-color: #007ad9; }
      body .ui-autocomplete-panel .ui-autocomplete-items .ui-autocomplete-group {
        padding: 0.429em 0.857em;
        background-color: #d8dae2;
        color: #333333; }
  body .ui-fluid .ui-autocomplete .ui-autocomplete-dropdown.ui-button {
    width: 2.357em; }
  body .ui-fluid .ui-autocomplete.ui-autocomplete-multiple.ui-autocomplete-dd .ui-autocomplete-multiple-container {
    border-right: 0 none;
    width: calc(100% - 2.357em); }
  body .ui-fluid .ui-autocomplete.ui-autocomplete-dd .ui-inputtext {
    border-right: 0 none;
    width: calc(100% - 2.357em); }
  body .ui-chips > ul.ui-inputtext {
    padding: 0.2145em 0.429em;
    display: inline-block; }
    body .ui-chips > ul.ui-inputtext:not(.ui-state-disabled):hover {
      border-color: #212121; }
    body .ui-chips > ul.ui-inputtext:not(.ui-state-disabled).ui-state-focus {
      border-color: #007ad9;
      outline: 0 none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none; }
    body .ui-chips > ul.ui-inputtext .ui-chips-input-token {
      padding: 0.2145em 0; }
      body .ui-chips > ul.ui-inputtext .ui-chips-input-token input {
        font-family: "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 14px;
        padding: 0;
        margin: 0;
        color: #333333; }
        body .ui-chips > ul.ui-inputtext .ui-chips-input-token input:hover {
          border: 0 none; }
        body .ui-chips > ul.ui-inputtext .ui-chips-input-token input:focus {
          border: 0 none; }
    body .ui-chips > ul.ui-inputtext .ui-chips-token {
      font-size: 14px;
      padding: 0.2145em 0.429em;
      margin: 0 0.286em 0 0;
      background: #007ad9;
      color: #ffffff; }
  body .ui-dropdown {
    background: #ffffff;
    border: 1px solid #a6a6a6;
    -moz-transition: border-color 0.2s;
    -o-transition: border-color 0.2s;
    -webkit-transition: border-color 0.2s;
    transition: border-color 0.2s; }
    body .ui-dropdown:not(.ui-state-disabled):hover {
      border-color: #212121; }
    body .ui-dropdown:not(.ui-state-disabled).ui-state-focus {
      border-color: #007ad9;
      outline: 0 none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none; }
    body .ui-dropdown .ui-dropdown-label {
      padding-right: 2em; }
    body .ui-dropdown .ui-dropdown-trigger {
      background-color: #ffffff;
      width: 2em;
      line-height: 2em;
      text-align: center;
      padding: 0;
      color: #848484; }
    body .ui-dropdown .ui-dropdown-clear-icon {
      color: #848484; }
    body .ui-dropdown.ui-dropdown-clearable .ui-dropdown-label {
      padding-right: 4em; }
  body .ui-dropdown-panel {
    padding: 0;
    border: 1px solid #c8c8c8;
    background-color: #ffffff;
    -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16); }
    body .ui-dropdown-panel .ui-dropdown-filter-container {
      padding: 0.429em 0.857em 0.429em 0.857em;
      border-bottom: 1px solid #eaeaea;
      color: #333333;
      background-color: #ffffff;
      margin: 0; }
      body .ui-dropdown-panel .ui-dropdown-filter-container .ui-dropdown-filter {
        width: 100%;
        padding-right: 2em; }
      body .ui-dropdown-panel .ui-dropdown-filter-container .ui-dropdown-filter-icon {
        top: 50%;
        margin-top: -.5em;
        right: 1.357em;
        color: #007ad9; }
    body .ui-dropdown-panel .ui-dropdown-items {
      padding: 0; }
      body .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item, body .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item-group {
        margin: 0;
        padding: 0.429em 0.857em;
        border: 0 none;
        color: #333333;
        background-color: transparent;
        -moz-border-radius: 0;
        -webkit-border-radius: 0;
        border-radius: 0; }
        body .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item.ui-state-highlight, body .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item-group.ui-state-highlight {
          color: #ffffff;
          background-color: #007ad9; }
        body .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item:not(.ui-state-highlight):not(.ui-state-disabled):hover, body .ui-dropdown-panel .ui-dropdown-items .ui-dropdown-item-group:not(.ui-state-highlight):not(.ui-state-disabled):hover {
          color: #333333;
          background-color: #eaeaea; }
  body .ui-multiselect {
    background: #ffffff;
    border: 1px solid #a6a6a6;
    -moz-transition: border-color 0.2s;
    -o-transition: border-color 0.2s;
    -webkit-transition: border-color 0.2s;
    transition: border-color 0.2s; }
    body .ui-multiselect:not(.ui-state-disabled):hover {
      border-color: #212121; }
    body .ui-multiselect:not(.ui-state-disabled).ui-state-focus {
      border-color: #007ad9;
      outline: 0 none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none; }
    body .ui-multiselect .ui-multiselect-label {
      padding: 0.429em;
      padding-right: 2em;
      color: #333333; }
    body .ui-multiselect .ui-multiselect-trigger {
      background-color: #ffffff;
      width: 2em;
      line-height: 2em;
      text-align: center;
      padding: 0;
      color: #848484; }
  body .ui-multiselect-panel {
    padding: 0;
    border: 1px solid #c8c8c8;
    background-color: #ffffff;
    -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16); }
    body .ui-multiselect-panel .ui-multiselect-header {
      padding: 0.429em 0.857em 0.429em 0.857em;
      border-bottom: 1px solid #eaeaea;
      color: #333333;
      background-color: #ffffff;
      margin: 0; }
      body .ui-multiselect-panel .ui-multiselect-header .ui-multiselect-filter-container {
        float: none;
        width: 70%;
        display: inline-block;
        vertical-align: middle;
        margin-left: 0; }
        body .ui-multiselect-panel .ui-multiselect-header .ui-multiselect-filter-container .ui-inputtext {
          padding: 0.429em;
          padding-right: 2em; }
        body .ui-multiselect-panel .ui-multiselect-header .ui-multiselect-filter-container .ui-multiselect-filter-icon {
          color: #007ad9;
          top: 50%;
          margin-top: -.5em;
          right: .5em;
          left: auto; }
      body .ui-multiselect-panel .ui-multiselect-header .ui-chkbox {
        margin-right: 0.5em;
        float: none;
        vertical-align: middle; }
      body .ui-multiselect-panel .ui-multiselect-header .ui-multiselect-close {
        color: #848484;
        top: 50%;
        margin-top: -.5em;
        -moz-transition: color 0.2s;
        -o-transition: color 0.2s;
        -webkit-transition: color 0.2s;
        transition: color 0.2s; }
        body .ui-multiselect-panel .ui-multiselect-header .ui-multiselect-close:hover {
          color: #333333; }
    body .ui-multiselect-panel .ui-multiselect-items {
      padding: 0; }
      body .ui-multiselect-panel .ui-multiselect-items .ui-multiselect-item {
        margin: 0;
        padding: 0.429em 0.857em;
        border: 0 none;
        color: #333333;
        background-color: transparent;
        -moz-border-radius: 0;
        -webkit-border-radius: 0;
        border-radius: 0; }
        body .ui-multiselect-panel .ui-multiselect-items .ui-multiselect-item.ui-state-highlight {
          color: #ffffff;
          background-color: #007ad9; }
        body .ui-multiselect-panel .ui-multiselect-items .ui-multiselect-item:not(.ui-state-highlight):not(.ui-state-disabled):hover {
          color: #333333;
          background-color: #eaeaea; }
        body .ui-multiselect-panel .ui-multiselect-items .ui-multiselect-item.ui-state-disabled .ui-chkbox-box {
          cursor: auto; }
          body .ui-multiselect-panel .ui-multiselect-items .ui-multiselect-item.ui-state-disabled .ui-chkbox-box:hover {
            border: 1px solid #a6a6a6; }
          body .ui-multiselect-panel .ui-multiselect-items .ui-multiselect-item.ui-state-disabled .ui-chkbox-box.ui-state-active:hover {
            border-color: #007ad9; }
        body .ui-multiselect-panel .ui-multiselect-items .ui-multiselect-item .ui-chkbox {
          position: static;
          display: inline-block;
          vertical-align: middle;
          margin: 0 0.5em 0 0; }
        body .ui-multiselect-panel .ui-multiselect-items .ui-multiselect-item label {
          display: inline-block;
          vertical-align: middle; }
  body .ui-listbox {
    padding: 0;
    min-width: 12em;
    background: #ffffff;
    border: 1px solid #a6a6a6; }
    body .ui-listbox .ui-chkbox {
      margin: 0 0.5em 0 0; }
    body .ui-listbox .ui-listbox-header {
      padding: 0.429em 0.857em 0.429em 0.857em;
      border-bottom: 1px solid #eaeaea;
      color: #333333;
      background-color: #ffffff;
      margin: 0; }
      body .ui-listbox .ui-listbox-header .ui-listbox-filter-container {
        width: calc(100% - (0.857em + 0.857em + 0.5em)); }
        body .ui-listbox .ui-listbox-header .ui-listbox-filter-container input {
          padding: 0.429em;
          padding-right: 2em; }
        body .ui-listbox .ui-listbox-header .ui-listbox-filter-container .ui-listbox-filter-icon {
          top: 50%;
          left: auto;
          margin-top: -.5em;
          right: .5em;
          color: #007ad9; }
    body .ui-listbox .ui-listbox-list {
      background-color: #ffffff; }
      body .ui-listbox .ui-listbox-list .ui-listbox-item {
        margin: 0;
        padding: 0.429em 0.857em;
        border: 0 none;
        color: #333333;
        background-color: transparent;
        -moz-border-radius: 0;
        -webkit-border-radius: 0;
        border-radius: 0; }
        body .ui-listbox .ui-listbox-list .ui-listbox-item.ui-state-highlight {
          color: #ffffff;
          background-color: #007ad9; }
        body .ui-listbox .ui-listbox-list .ui-listbox-item .ui-chkbox {
          position: static;
          display: inline-block;
          vertical-align: middle;
          margin: 0 0.5em 0 0; }
        body .ui-listbox .ui-listbox-list .ui-listbox-item label {
          display: inline-block;
          vertical-align: middle; }
    body .ui-listbox:not(.ui-state-disabled) .ui-listbox-item:not(.ui-state-highlight):not(.ui-state-disabled):hover {
      color: #333333;
      background-color: #eaeaea; }
    body .ui-listbox.ui-state-disabled .ui-chkbox-box:not(.ui-state-disabled):not(.ui-state-active):hover {
      border: 1px solid #a6a6a6; }
    body .ui-listbox .ui-listbox-footer {
      padding: 0.429em 0.857em 0.429em 0.857em;
      border-top: 1px solid #eaeaea;
      color: #333333;
      background-color: #ffffff; }
  body .ui-editor-container .ui-editor-toolbar {
    border: 1px solid #c8c8c8;
    background-color: #f4f4f4; }
  body .ui-editor-container .ui-editor-content {
    border: 1px solid #c8c8c8; }
    body .ui-editor-container .ui-editor-content .ql-editor {
      background-color: #ffffff;
      color: #333333; }
  body .ui-editor-container .ql-picker.ql-expanded .ql-picker-label {
    color: #333333; }
  body .ui-editor-container .ql-stroke {
    stroke: #333333; }
  body .ui-editor-container .ql-picker-label {
    color: #333333; }
  body .ui-editor-container .ql-snow.ql-toolbar button:hover,
  body .ui-editor-container .ql-snow .ql-toolbar button:hover,
  body .ui-editor-container .ql-snow.ql-toolbar button.ql-active,
  body .ui-editor-container .ql-snow .ql-toolbar button.ql-active,
  body .ui-editor-container .ql-snow.ql-toolbar .ql-picker-label:hover,
  body .ui-editor-container .ql-snow .ql-toolbar .ql-picker-label:hover,
  body .ui-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active,
  body .ui-editor-container .ql-snow .ql-toolbar .ql-picker-label.ql-active,
  body .ui-editor-container .ql-snow.ql-toolbar .ql-picker-item:hover,
  body .ui-editor-container .ql-snow .ql-toolbar .ql-picker-item:hover,
  body .ui-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
  body .ui-editor-container .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: #007ad9; }
  body .ui-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,
  body .ui-editor-container .ql-snow .ql-toolbar button:hover .ql-stroke,
  body .ui-editor-container .ql-snow.ql-toolbar button.ql-active .ql-stroke,
  body .ui-editor-container .ql-snow .ql-toolbar button.ql-active .ql-stroke,
  body .ui-editor-container .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
  body .ui-editor-container .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
  body .ui-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  body .ui-editor-container .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  body .ui-editor-container .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
  body .ui-editor-container .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
  body .ui-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  body .ui-editor-container .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  body .ui-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
  body .ui-editor-container .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
  body .ui-editor-container .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
  body .ui-editor-container .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
  body .ui-editor-container .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  body .ui-editor-container .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  body .ui-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  body .ui-editor-container .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  body .ui-editor-container .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  body .ui-editor-container .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  body .ui-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
  body .ui-editor-container .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: #007ad9; }
  body .ui-rating a {
    text-align: center;
    display: inline-block;
    color: #333333;
    -moz-transition: color 0.2s;
    -o-transition: color 0.2s;
    -webkit-transition: color 0.2s;
    transition: color 0.2s; }
    body .ui-rating a.ui-rating-cancel {
      color: #e4018d; }
    body .ui-rating a .ui-rating-icon {
      font-size: 20px; }
  body .ui-rating:not(.ui-state-disabled):not(.ui-rating-readonly) a:hover {
    color: #007ad9; }
  body .ui-rating:not(.ui-state-disabled):not(.ui-rating-readonly) a.ui-rating-cancel:hover {
    color: #b5019f; }
  body .ui-spinner .ui-spinner-input {
    padding-right: 2.429em; }
  body .ui-spinner .ui-spinner-button {
    width: 2em; }
    body .ui-spinner .ui-spinner-button.ui-spinner-up {
      -moz-border-radius-topright: 3px;
      -webkit-border-top-right-radius: 3px;
      border-top-right-radius: 3px; }
    body .ui-spinner .ui-spinner-button.ui-spinner-down {
      -moz-border-radius-bottomright: 3px;
      -webkit-border-bottom-right-radius: 3px;
      border-bottom-right-radius: 3px; }
    body .ui-spinner .ui-spinner-button .ui-spinner-button-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -.5em;
      margin-left: -.5em;
      width: 1em; }
  body .ui-fluid .ui-spinner .ui-spinner-input {
    padding-right: 2.429em; }
  body .ui-fluid .ui-spinner .ui-spinner-button {
    width: 2em; }
    body .ui-fluid .ui-spinner .ui-spinner-button .ui-spinner-button-icon {
      left: 50%; }
  body .ui-slider {
    background-color: #c8c8c8;
    border: 0 none; }
    body .ui-slider.ui-slider-horizontal {
      height: 0.286em; }
      body .ui-slider.ui-slider-horizontal .ui-slider-handle {
        top: 50%;
        margin-top: -0.5715em; }
    body .ui-slider.ui-slider-vertical {
      width: 0.286em; }
      body .ui-slider.ui-slider-vertical .ui-slider-handle {
        left: 50%;
        margin-left: -0.5715em; }
    body .ui-slider .ui-slider-handle {
      height: 1.143em;
      width: 1.143em;
      background-color: #ffffff;
      border: 2px solid #666666;
      -moz-border-radius: 100%;
      -webkit-border-radius: 100%;
      border-radius: 100%;
      -moz-transition: border-color 0.2s;
      -o-transition: border-color 0.2s;
      -webkit-transition: border-color 0.2s;
      transition: border-color 0.2s; }
    body .ui-slider .ui-slider-range {
      background-color: #007ad9; }
    body .ui-slider:not(.ui-state-disabled) .ui-slider-handle:hover {
      background-color: 2px solid #666666;
      border: 2px solid #007ad9; }
  body .ui-datepicker {
    padding: 0.857em;
    min-width: 20em;
    background-color: #ffffff;
    color: #333333;
    border: 1px solid #a6a6a6; }
    body .ui-datepicker:not(.ui-datepicker-inline) {
      border: 1px solid #c8c8c8;
      -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      -moz-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16); }
    body .ui-datepicker:not(.ui-state-disabled) .ui-datepicker-header .ui-datepicker-prev:hover,
    body .ui-datepicker:not(.ui-state-disabled) .ui-datepicker-header .ui-datepicker-next:hover {
      color: #007ad9; }
    body .ui-datepicker:not(.ui-state-disabled) .ui-datepicker-header .ui-datepicker-prev:focus,
    body .ui-datepicker:not(.ui-state-disabled) .ui-datepicker-header .ui-datepicker-next:focus {
      outline: 0 none;
      color: #007ad9; }
    body .ui-datepicker:not(.ui-state-disabled) table td a:not(.ui-state-active):not(.ui-state-highlight):hover {
      background-color: #eaeaea; }
    body .ui-datepicker:not(.ui-state-disabled) .ui-monthpicker a.ui-monthpicker-month:not(.ui-state-active):hover {
      background-color: #eaeaea; }
    body .ui-datepicker .ui-datepicker-header {
      padding: 0.429em 0.857em 0.429em 0.857em;
      background-color: #ffffff;
      color: #333333;
      -moz-border-radius: 0;
      -webkit-border-radius: 0;
      border-radius: 0; }
      body .ui-datepicker .ui-datepicker-header .ui-datepicker-prev,
      body .ui-datepicker .ui-datepicker-header .ui-datepicker-next {
        cursor: pointer;
        top: 0;
        color: #a6a6a6;
        -moz-transition: color 0.2s;
        -o-transition: color 0.2s;
        -webkit-transition: color 0.2s;
        transition: color 0.2s; }
      body .ui-datepicker .ui-datepicker-header .ui-datepicker-title {
        margin: 0;
        padding: 0;
        line-height: 1; }
        body .ui-datepicker .ui-datepicker-header .ui-datepicker-title select {
          margin-top: -.35em;
          margin-bottom: 0; }
    body .ui-datepicker table {
      font-size: 14px;
      margin: 0.857em 0 0 0; }
      body .ui-datepicker table th {
        padding: 0.5em; }
      body .ui-datepicker table td {
        padding: 0.5em; }
        body .ui-datepicker table td > a, body .ui-datepicker table td > span {
          display: block;
          text-align: center;
          color: #333333;
          padding: 0.5em;
          -moz-border-radius: 3px;
          -webkit-border-radius: 3px;
          border-radius: 3px; }
          body .ui-datepicker table td > a.ui-state-active, body .ui-datepicker table td > span.ui-state-active {
            color: #ffffff;
            background-color: #007ad9; }
        body .ui-datepicker table td > a {
          cursor: pointer; }
        body .ui-datepicker table td.ui-datepicker-today > a, body .ui-datepicker table td.ui-datepicker-today > span {
          background-color: #d0d0d0;
          color: #333333; }
          body .ui-datepicker table td.ui-datepicker-today > a.ui-state-active, body .ui-datepicker table td.ui-datepicker-today > span.ui-state-active {
            color: #ffffff;
            background-color: #007ad9; }
        body .ui-datepicker table td.ui-datepicker-weekheader, body .ui-datepicker table td.ui-datepicker-weeknumber {
          border-right: 1px solid #a6a6a6; }
    body .ui-datepicker .ui-datepicker-buttonbar {
      border-top: 1px solid #d8dae2; }
    body .ui-datepicker .ui-timepicker {
      border: 0 none;
      border-top: 1px solid #d8dae2;
      padding: 0.857em; }
      body .ui-datepicker .ui-timepicker a {
        color: #333333;
        font-size: 1.286em; }
        body .ui-datepicker .ui-timepicker a:hover {
          color: #007ad9; }
      body .ui-datepicker .ui-timepicker span {
        font-size: 1.286em; }
    body .ui-datepicker .ui-monthpicker .ui-monthpicker-month {
      color: #333333; }
      body .ui-datepicker .ui-monthpicker .ui-monthpicker-month.ui-state-active {
        color: #ffffff;
        background-color: #007ad9; }
    body .ui-datepicker.ui-datepicker-timeonly {
      padding: 0; }
      body .ui-datepicker.ui-datepicker-timeonly .ui-timepicker {
        border-top: 0 none; }
    body .ui-datepicker.ui-datepicker-multiple-month .ui-datepicker-group {
      border-right: 1px solid #d8dae2;
      padding-right: 0.857em;
      padding-left: 0.857em;
      padding-top: 0;
      padding-bottom: 0; }
      body .ui-datepicker.ui-datepicker-multiple-month .ui-datepicker-group:first-child {
        padding-left: 0; }
      body .ui-datepicker.ui-datepicker-multiple-month .ui-datepicker-group:last-child {
        padding-right: 0;
        border-right: 0 none; }
  body .ui-calendar.ui-calendar-w-btn .ui-inputtext {
    -moz-border-radius-topright: 0;
    -webkit-border-top-right-radius: 0;
    border-top-right-radius: 0;
    -moz-border-radius-bottomright: 0;
    -webkit-border-bottom-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none; }
    body .ui-calendar.ui-calendar-w-btn .ui-inputtext:enabled:hover:not(.ui-state-error), body .ui-calendar.ui-calendar-w-btn .ui-inputtext:enabled:focus:not(.ui-state-error) {
      border-right: 0 none; }
  body .ui-calendar.ui-calendar-w-btn .ui-datepicker-trigger.ui-button {
    width: 2.357em;
    -moz-border-radius-topleft: 0;
    -webkit-border-top-left-radius: 0;
    border-top-left-radius: 0;
    -moz-border-radius-bottomleft: 0;
    -webkit-border-bottom-left-radius: 0;
    border-bottom-left-radius: 0; }
  body .ui-fluid .ui-calendar.ui-calendar-w-btn input.ui-inputtext {
    width: calc(100% - 2.357em); }
  body .ui-fileupload .ui-fileupload-buttonbar {
    background-color: #f4f4f4;
    padding: 0.571em 1em;
    border: 1px solid #c8c8c8;
    color: #333333;
    border-bottom: 0 none; }
    body .ui-fileupload .ui-fileupload-buttonbar .ui-button {
      margin-right: 8px; }
  body .ui-fileupload .ui-fileupload-content {
    background-color: #ffffff;
    padding: 0.571em 1em;
    border: 1px solid #c8c8c8;
    color: #333333; }
  body .ui-fileupload .ui-progressbar {
    top: 0; }
  body .ui-fileupload-choose:not(.ui-state-disabled):hover {
    background-color: #116fbf;
    color: #ffffff;
    border-color: #116fbf; }
  body .ui-fileupload-choose:not(.ui-state-disabled):active {
    background-color: #005b9f;
    color: #ffffff;
    border-color: #005b9f; }
  body .ui-fileupload-choose.ui-state-focus {
    outline: 0 none;
    outline-offset: 0px; }
  body .ui-password-panel {
    padding: 12px;
    background-color: #ffffff;
    color: #333333;
    border: 1px solid #c8c8c8;
    -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16); }
  body .ui-inputgroup .ui-inputgroup-addon {
    border-color: #a6a6a6;
    background-color: #eaeaea;
    color: #848484;
    padding: 0.429em;
    min-width: 2em; }
    body .ui-inputgroup .ui-inputgroup-addon:first-child {
      -moz-border-radius-topleft: 3px;
      -webkit-border-top-left-radius: 3px;
      border-top-left-radius: 3px;
      -moz-border-radius-bottomleft: 3px;
      -webkit-border-bottom-left-radius: 3px;
      border-bottom-left-radius: 3px; }
    body .ui-inputgroup .ui-inputgroup-addon:last-child {
      -moz-border-radius-topright: 3px;
      -webkit-border-top-right-radius: 3px;
      border-top-right-radius: 3px;
      -moz-border-radius-bottomright: 3px;
      -webkit-border-bottom-right-radius: 3px;
      border-bottom-right-radius: 3px; }
    body .ui-inputgroup .ui-inputgroup-addon.ui-inputgroup-addon-checkbox {
      position: relative; }
      body .ui-inputgroup .ui-inputgroup-addon.ui-inputgroup-addon-checkbox .ui-chkbox {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -10px;
        margin-top: -10px; }
    body .ui-inputgroup .ui-inputgroup-addon.ui-inputgroup-addon-radiobutton {
      position: relative; }
      body .ui-inputgroup .ui-inputgroup-addon.ui-inputgroup-addon-radiobutton .ui-radiobutton {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -10px;
        margin-top: -10px; }
  body .ui-inputgroup .ui-button:first-child {
    -moz-border-radius-topleft: 3px;
    -webkit-border-top-left-radius: 3px;
    border-top-left-radius: 3px;
    -moz-border-radius-bottomleft: 3px;
    -webkit-border-bottom-left-radius: 3px;
    border-bottom-left-radius: 3px; }
  body .ui-inputgroup .ui-button:last-child {
    -moz-border-radius-topright: 3px;
    -webkit-border-top-right-radius: 3px;
    border-top-right-radius: 3px;
    -moz-border-radius-bottomright: 3px;
    -webkit-border-bottom-right-radius: 3px;
    border-bottom-right-radius: 3px; }
  body .ui-fluid .ui-inputgroup .ui-button {
    width: auto; }
    body .ui-fluid .ui-inputgroup .ui-button.ui-button-icon-only {
      width: 2.357em; }
  body ::-webkit-input-placeholder {
    color: #666666; }
  body :-moz-placeholder {
    color: #666666; }
  body ::-moz-placeholder {
    color: #666666; }
  body :-ms-input-placeholder {
    color: #666666; }
  body .ui-inputtext.ng-dirty.ng-invalid,
  body p-dropdown.ng-dirty.ng-invalid > .ui-dropdown,
  body p-autocomplete.ng-dirty.ng-invalid > .ui-autocomplete > .ui-inputtext,
  body p-calendar.ng-dirty.ng-invalid > .ui-calendar > .ui-inputtext,
  body p-chips.ng-dirty.ng-invalid > .ui-inputtext,
  body p-inputmask.ng-dirty.ng-invalid > .ui-inputtext,
  body p-checkbox.ng-dirty.ng-invalid .ui-chkbox-box,
  body p-radiobutton.ng-dirty.ng-invalid .ui-radiobutton-box,
  body p-inputswitch.ng-dirty.ng-invalid .ui-inputswitch,
  body p-listbox.ng-dirty.ng-invalid .ui-inputtext,
  body p-multiselect.ng-dirty.ng-invalid > .ui-multiselect,
  body p-spinner.ng-dirty.ng-invalid > .ui-inputtext,
  body p-selectbutton.ng-dirty.ng-invalid .ui-button,
  body p-togglebutton.ng-dirty.ng-invalid .ui-button {
    border: 1px solid #a80000; }

body .ui-button {
  margin: 0;
  color: #ffffff;
  background-color: #007ad9;
  border: 1px solid #007ad9;
  font-size: 14px;
  -moz-transition: background-color 0.2s, box-shadow 0.2s;
  -o-transition: background-color 0.2s, box-shadow 0.2s;
  -webkit-transition: background-color 0.2s, box-shadow 0.2s;
  transition: background-color 0.2s, box-shadow 0.2s; }
  body .ui-button:enabled:hover {
    background-color: #116fbf;
    color: #ffffff;
    border-color: #116fbf; }
  body .ui-button:enabled:focus {
    outline: 0 none;
    outline-offset: 0px;
    -webkit-box-shadow: 0 0 0 0.2em #8dcdff;
    -moz-box-shadow: 0 0 0 0.2em #8dcdff;
    box-shadow: 0 0 0 0.2em #8dcdff; }
  body .ui-button:enabled:active {
    background-color: #005b9f;
    color: #ffffff;
    border-color: #005b9f; }
  body .ui-button.ui-button-text-only .ui-button-text {
    padding: 0.429em 1em; }
  body .ui-button.ui-button-text-icon-left .ui-button-text {
    padding: 0.429em 1em 0.429em 2em; }
  body .ui-button.ui-button-text-icon-right .ui-button-text {
    padding: 0.429em 2em 0.429em 1em; }
  body .ui-button.ui-button-icon-only {
    width: 2.357em; }
    body .ui-button.ui-button-icon-only .ui-button-text {
      padding: 0.429em; }
  body .ui-button.ui-button-raised {
    -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15); }
  body .ui-button.ui-button-rounded {
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    border-radius: 15px; }
body .ui-fluid .ui-button-icon-only {
  width: 2.357em; }
body .ui-togglebutton {
  background-color: #dadada;
  border: 1px solid #dadada;
  color: #333333;
  -moz-transition: background-color 0.2s, box-shadow 0.2s;
  -o-transition: background-color 0.2s, box-shadow 0.2s;
  -webkit-transition: background-color 0.2s, box-shadow 0.2s;
  transition: background-color 0.2s, box-shadow 0.2s; }
  body .ui-togglebutton .ui-button-icon-left {
    color: #666666; }
  body .ui-togglebutton:not(.ui-state-disabled):not(.ui-state-active):hover {
    background-color: #c8c8c8;
    border-color: #c8c8c8;
    color: #333333; }
    body .ui-togglebutton:not(.ui-state-disabled):not(.ui-state-active):hover .ui-button-icon-left {
      color: #212121; }
  body .ui-togglebutton:not(.ui-state-disabled):not(.ui-state-active).ui-state-focus {
    background-color: #c8c8c8;
    border-color: #c8c8c8;
    color: #333333;
    outline: 0 none; }
    body .ui-togglebutton:not(.ui-state-disabled):not(.ui-state-active).ui-state-focus .ui-button-icon-left {
      color: #212121; }
  body .ui-togglebutton.ui-state-active {
    background-color: #007ad9;
    border-color: #007ad9;
    color: #ffffff; }
    body .ui-togglebutton.ui-state-active .ui-button-icon-left {
      color: #ffffff; }
    body .ui-togglebutton.ui-state-active:hover {
      background-color: #116fbf;
      border-color: #116fbf;
      color: #ffffff; }
      body .ui-togglebutton.ui-state-active:hover .ui-button-icon-left {
        color: #ffffff; }
    body .ui-togglebutton.ui-state-active.ui-state-focus {
      background-color: #005b9f;
      border-color: #005b9f;
      color: #ffffff; }
      body .ui-togglebutton.ui-state-active.ui-state-focus .ui-button-icon-left {
        color: #ffffff; }
body .ui-selectbutton .ui-button {
  background-color: #dadada;
  border: 1px solid #dadada;
  color: #333333;
  -moz-transition: background-color 0.2s, box-shadow 0.2s;
  -o-transition: background-color 0.2s, box-shadow 0.2s;
  -webkit-transition: background-color 0.2s, box-shadow 0.2s;
  transition: background-color 0.2s, box-shadow 0.2s; }
  body .ui-selectbutton .ui-button .ui-button-icon-left {
    color: #666666; }
  body .ui-selectbutton .ui-button:not(.ui-state-disabled):not(.ui-state-active):hover {
    background-color: #c8c8c8;
    border-color: #c8c8c8;
    color: #333333; }
    body .ui-selectbutton .ui-button:not(.ui-state-disabled):not(.ui-state-active):hover .ui-button-icon-left {
      color: #212121; }
  body .ui-selectbutton .ui-button:not(.ui-state-disabled):not(.ui-state-active).ui-state-focus {
    background-color: #c8c8c8;
    border-color: #c8c8c8;
    color: #333333;
    outline: 0 none; }
    body .ui-selectbutton .ui-button:not(.ui-state-disabled):not(.ui-state-active).ui-state-focus .ui-button-icon-left {
      color: #212121; }
  body .ui-selectbutton .ui-button.ui-state-active {
    background-color: #007ad9;
    border-color: #007ad9;
    color: #ffffff; }
    body .ui-selectbutton .ui-button.ui-state-active .ui-button-icon-left {
      color: #ffffff; }
    body .ui-selectbutton .ui-button.ui-state-active:not(.ui-state-disabled):hover {
      background-color: #116fbf;
      border-color: #116fbf;
      color: #ffffff; }
      body .ui-selectbutton .ui-button.ui-state-active:not(.ui-state-disabled):hover .ui-button-icon-left {
        color: #ffffff; }
    body .ui-selectbutton .ui-button.ui-state-active.ui-state-focus {
      background-color: #005b9f;
      border-color: #005b9f;
      color: #ffffff; }
      body .ui-selectbutton .ui-button.ui-state-active.ui-state-focus .ui-button-icon-left {
        color: #ffffff; }
  body .ui-selectbutton .ui-button:first-child {
    -moz-border-radius-topleft: 3px;
    -webkit-border-top-left-radius: 3px;
    border-top-left-radius: 3px;
    -moz-border-radius-bottomleft: 3px;
    -webkit-border-bottom-left-radius: 3px;
    border-bottom-left-radius: 3px; }
  body .ui-selectbutton .ui-button:last-child {
    -moz-border-radius-topright: 3px;
    -webkit-border-top-right-radius: 3px;
    border-top-right-radius: 3px;
    -moz-border-radius-bottomright: 3px;
    -webkit-border-bottom-right-radius: 3px;
    border-bottom-right-radius: 3px; }
@media (max-width: 640px) {
  body .ui-buttonset:not(.ui-splitbutton) .ui-button {
    margin-bottom: 1px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px; } }
body .ui-splitbutton.ui-buttonset .ui-button {
  border: 1px solid transparent; }
body .ui-splitbutton.ui-buttonset .ui-menu {
  min-width: 100%; }
body .ui-button.ui-state-default.ui-button-secondary, body .ui-buttonset.ui-button-secondary > .ui-button.ui-state-default {
  color: #333333;
  background-color: #f4f4f4;
  border: 1px solid #f4f4f4; }
  body .ui-button.ui-state-default.ui-button-secondary:enabled:hover, body .ui-buttonset.ui-button-secondary > .ui-button.ui-state-default:enabled:hover {
    background-color: #c8c8c8;
    color: #333333;
    border-color: #c8c8c8; }
  body .ui-button.ui-state-default.ui-button-secondary:enabled:focus, body .ui-buttonset.ui-button-secondary > .ui-button.ui-state-default:enabled:focus {
    -webkit-box-shadow: 0 0 0 0.2em #8dcdff;
    -moz-box-shadow: 0 0 0 0.2em #8dcdff;
    box-shadow: 0 0 0 0.2em #8dcdff; }
  body .ui-button.ui-state-default.ui-button-secondary:enabled:active, body .ui-buttonset.ui-button-secondary > .ui-button.ui-state-default:enabled:active {
    background-color: #a0a0a0;
    color: #333333;
    border-color: #a0a0a0; }
body .ui-button.ui-state-default.ui-button-info, body .ui-buttonset.ui-button-info > .ui-button.ui-state-default {
  color: #ffffff;
  background-color: #007ad9;
  border: 1px solid #007ad9; }
  body .ui-button.ui-state-default.ui-button-info:enabled:hover, body .ui-buttonset.ui-button-info > .ui-button.ui-state-default:enabled:hover {
    background-color: #116fbf;
    color: #ffffff;
    border-color: #116fbf; }
  body .ui-button.ui-state-default.ui-button-info:enabled:focus, body .ui-buttonset.ui-button-info > .ui-button.ui-state-default:enabled:focus {
    -webkit-box-shadow: 0 0 0 0.2em #8dcdff;
    -moz-box-shadow: 0 0 0 0.2em #8dcdff;
    box-shadow: 0 0 0 0.2em #8dcdff; }
  body .ui-button.ui-state-default.ui-button-info:enabled:active, body .ui-buttonset.ui-button-info > .ui-button.ui-state-default:enabled:active {
    background-color: #005b9f;
    color: #ffffff;
    border-color: #005b9f; }
body .ui-button.ui-state-default.ui-button-success, body .ui-buttonset.ui-button-success > .ui-button.ui-state-default {
  color: #ffffff;
  background-color: #34A835;
  border: 1px solid #34A835; }
  body .ui-button.ui-state-default.ui-button-success:enabled:hover, body .ui-buttonset.ui-button-success > .ui-button.ui-state-default:enabled:hover {
    background-color: #107D11;
    color: #ffffff;
    border-color: #107D11; }
  body .ui-button.ui-state-default.ui-button-success:enabled:focus, body .ui-buttonset.ui-button-success > .ui-button.ui-state-default:enabled:focus {
    -webkit-box-shadow: 0 0 0 0.2em #aae5aa;
    -moz-box-shadow: 0 0 0 0.2em #aae5aa;
    box-shadow: 0 0 0 0.2em #aae5aa; }
  body .ui-button.ui-state-default.ui-button-success:enabled:active, body .ui-buttonset.ui-button-success > .ui-button.ui-state-default:enabled:active {
    background-color: #0C6B0D;
    color: #ffffff;
    border-color: #0C6B0D; }
body .ui-button.ui-state-default.ui-button-warning, body .ui-buttonset.ui-button-warning > .ui-button.ui-state-default {
  color: #333333;
  background-color: #ffba01;
  border: 1px solid #ffba01; }
  body .ui-button.ui-state-default.ui-button-warning:enabled:hover, body .ui-buttonset.ui-button-warning > .ui-button.ui-state-default:enabled:hover {
    background-color: #ED990B;
    color: #333333;
    border-color: #ED990B; }
  body .ui-button.ui-state-default.ui-button-warning:enabled:focus, body .ui-buttonset.ui-button-warning > .ui-button.ui-state-default:enabled:focus {
    -webkit-box-shadow: 0 0 0 0.2em #ffeab4;
    -moz-box-shadow: 0 0 0 0.2em #ffeab4;
    box-shadow: 0 0 0 0.2em #ffeab4; }
  body .ui-button.ui-state-default.ui-button-warning:enabled:active, body .ui-buttonset.ui-button-warning > .ui-button.ui-state-default:enabled:active {
    background-color: #D38B10;
    color: #333333;
    border-color: #D38B10; }
body .ui-button.ui-state-default.ui-button-danger, body .ui-buttonset.ui-button-danger > .ui-button.ui-state-default {
  color: #ffffff;
  background-color: #e91224;
  border: 1px solid #e91224; }
  body .ui-button.ui-state-default.ui-button-danger:enabled:hover, body .ui-buttonset.ui-button-danger > .ui-button.ui-state-default:enabled:hover {
    background-color: #c01120;
    color: #ffffff;
    border-color: #c01120; }
  body .ui-button.ui-state-default.ui-button-danger:enabled:focus, body .ui-buttonset.ui-button-danger > .ui-button.ui-state-default:enabled:focus {
    -webkit-box-shadow: 0 0 0 0.2em #f9b4ba;
    -moz-box-shadow: 0 0 0 0.2em #f9b4ba;
    box-shadow: 0 0 0 0.2em #f9b4ba; }
  body .ui-button.ui-state-default.ui-button-danger:enabled:active, body .ui-buttonset.ui-button-danger > .ui-button.ui-state-default:enabled:active {
    background-color: #a90000;
    color: #ffffff;
    border-color: #a90000; }

body .ui-widget-content p {
  line-height: 1.5;
  margin: 0; }
body .ui-panel {
  padding: 0;
  border: 0 none; }
  body .ui-panel .ui-panel-titlebar {
    border: 1px solid #c8c8c8;
    padding: 0.571em 1em;
    background-color: #f4f4f4;
    color: #333333;
    -moz-border-radius-topleft: 3px;
    -webkit-border-top-left-radius: 3px;
    border-top-left-radius: 3px;
    -moz-border-radius-topright: 3px;
    -webkit-border-top-right-radius: 3px;
    border-top-right-radius: 3px;
    -moz-border-radius-bottomleft: 0;
    -webkit-border-bottom-left-radius: 0;
    border-bottom-left-radius: 0;
    -moz-border-radius-bottomright: 0;
    -webkit-border-bottom-right-radius: 0;
    border-bottom-right-radius: 0; }
    body .ui-panel .ui-panel-titlebar .ui-panel-title {
      vertical-align: middle;
      font-weight: 700; }
    body .ui-panel .ui-panel-titlebar .ui-panel-titlebar-icon {
      margin: 0;
      position: relative;
      font-size: 14px;
      color: #848484;
      border: 1px solid transparent;
      -moz-transition: color 0.2s;
      -o-transition: color 0.2s;
      -webkit-transition: color 0.2s;
      transition: color 0.2s; }
      body .ui-panel .ui-panel-titlebar .ui-panel-titlebar-icon:hover {
        color: #333333; }
  body .ui-panel .ui-panel-content {
    padding: 0.571em 1em;
    border: 1px solid #c8c8c8;
    background-color: #ffffff;
    color: #333333;
    padding: 0.571em 1em;
    border-top: 0 none; }
  body .ui-panel .ui-panel-footer {
    padding: 0.571em 1em;
    border: 1px solid #c8c8c8;
    background-color: #ffffff;
    color: #333333;
    border-top: 0 none;
    margin: 0; }
body .ui-fieldset {
  border: 1px solid #c8c8c8;
  background-color: #ffffff;
  color: #333333; }
  body .ui-fieldset .ui-fieldset-legend a {
    padding: 0.571em 1em;
    border: 1px solid #c8c8c8;
    color: #333333;
    background-color: #f4f4f4;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -moz-transition: background-color 0.2s;
    -o-transition: background-color 0.2s;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s; }
    body .ui-fieldset .ui-fieldset-legend a .ui-fieldset-toggler {
      float: none;
      display: inline-block;
      vertical-align: middle;
      margin-right: .5em;
      color: #848484; }
    body .ui-fieldset .ui-fieldset-legend a .ui-fieldset-legend-text {
      padding: 0; }
  body .ui-fieldset.ui-fieldset-toggleable .ui-fieldset-legend a:hover {
    background-color: #dbdbdb;
    border: 1px solid #dbdbdb;
    color: #333333; }
    body .ui-fieldset.ui-fieldset-toggleable .ui-fieldset-legend a:hover .ui-fieldset-toggler {
      color: #333333; }
  body .ui-fieldset .ui-fieldset-content {
    padding: 0; }
body .ui-accordion .ui-accordion-header {
  margin-bottom: 2px; }
  body .ui-accordion .ui-accordion-header a {
    padding: 0.571em 1em;
    border: 1px solid #c8c8c8;
    color: #333333;
    background-color: #f4f4f4;
    color: #333333;
    font-weight: 700;
    -moz-transition: background-color 0.2s;
    -o-transition: background-color 0.2s;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s; }
    body .ui-accordion .ui-accordion-header a .ui-accordion-toggle-icon {
      color: #848484; }
  body .ui-accordion .ui-accordion-header:not(.ui-state-active):not(.ui-state-disabled):hover a {
    background-color: #dbdbdb;
    border: 1px solid #dbdbdb;
    color: #333333; }
    body .ui-accordion .ui-accordion-header:not(.ui-state-active):not(.ui-state-disabled):hover a .ui-accordion-toggle-icon {
      color: #333333; }
  body .ui-accordion .ui-accordion-header:not(.ui-state-disabled).ui-state-active a {
    background-color: #007ad9;
    border: 1px solid #007ad9;
    color: #ffffff; }
    body .ui-accordion .ui-accordion-header:not(.ui-state-disabled).ui-state-active a .ui-accordion-toggle-icon {
      color: #ffffff; }
  body .ui-accordion .ui-accordion-header:not(.ui-state-disabled).ui-state-active:hover a {
    border: 1px solid #005b9f;
    background-color: #005b9f;
    color: #ffffff; }
    body .ui-accordion .ui-accordion-header:not(.ui-state-disabled).ui-state-active:hover a .ui-accordion-toggle-icon {
      color: #ffffff; }
body .ui-accordion .ui-accordion-content {
  padding: 0.571em 1em;
  border: 1px solid #c8c8c8;
  background-color: #ffffff;
  color: #333333;
  padding: 0.571em 1em; }
body .ui-tabview.ui-tabview-top, body .ui-tabview.ui-tabview-bottom, body .ui-tabview.ui-tabview-left, body .ui-tabview.ui-tabview-right {
  border: 0 none; }
  body .ui-tabview.ui-tabview-top .ui-tabview-nav, body .ui-tabview.ui-tabview-bottom .ui-tabview-nav, body .ui-tabview.ui-tabview-left .ui-tabview-nav, body .ui-tabview.ui-tabview-right .ui-tabview-nav {
    padding: 0;
    background: transparent;
    border: 0 none; }
    body .ui-tabview.ui-tabview-top .ui-tabview-nav li, body .ui-tabview.ui-tabview-bottom .ui-tabview-nav li, body .ui-tabview.ui-tabview-left .ui-tabview-nav li, body .ui-tabview.ui-tabview-right .ui-tabview-nav li {
      border: 1px solid #c8c8c8;
      background-color: #f4f4f4;
      -moz-transition: background-color 0.2s;
      -o-transition: background-color 0.2s;
      -webkit-transition: background-color 0.2s;
      transition: background-color 0.2s; }
      body .ui-tabview.ui-tabview-top .ui-tabview-nav li a, body .ui-tabview.ui-tabview-bottom .ui-tabview-nav li a, body .ui-tabview.ui-tabview-left .ui-tabview-nav li a, body .ui-tabview.ui-tabview-right .ui-tabview-nav li a {
        float: none;
        display: inline-block;
        color: #333333;
        padding: 0.571em 1em;
        font-weight: 700; }
        body .ui-tabview.ui-tabview-top .ui-tabview-nav li a .ui-tabview-left-icon, body .ui-tabview.ui-tabview-bottom .ui-tabview-nav li a .ui-tabview-left-icon, body .ui-tabview.ui-tabview-left .ui-tabview-nav li a .ui-tabview-left-icon, body .ui-tabview.ui-tabview-right .ui-tabview-nav li a .ui-tabview-left-icon {
          margin-right: 0.5em; }
        body .ui-tabview.ui-tabview-top .ui-tabview-nav li a .ui-tabview-right-icon, body .ui-tabview.ui-tabview-bottom .ui-tabview-nav li a .ui-tabview-right-icon, body .ui-tabview.ui-tabview-left .ui-tabview-nav li a .ui-tabview-right-icon, body .ui-tabview.ui-tabview-right .ui-tabview-nav li a .ui-tabview-right-icon {
          margin-left: 0.5em; }
      body .ui-tabview.ui-tabview-top .ui-tabview-nav li .ui-tabview-close, body .ui-tabview.ui-tabview-bottom .ui-tabview-nav li .ui-tabview-close, body .ui-tabview.ui-tabview-left .ui-tabview-nav li .ui-tabview-close, body .ui-tabview.ui-tabview-right .ui-tabview-nav li .ui-tabview-close {
        color: #848484;
        margin: 0 0.5em 0 0;
        vertical-align: middle; }
      body .ui-tabview.ui-tabview-top .ui-tabview-nav li:not(.ui-state-active):not(.ui-state-disabled):hover, body .ui-tabview.ui-tabview-bottom .ui-tabview-nav li:not(.ui-state-active):not(.ui-state-disabled):hover, body .ui-tabview.ui-tabview-left .ui-tabview-nav li:not(.ui-state-active):not(.ui-state-disabled):hover, body .ui-tabview.ui-tabview-right .ui-tabview-nav li:not(.ui-state-active):not(.ui-state-disabled):hover {
        background-color: #dbdbdb;
        border: 1px solid #dbdbdb; }
        body .ui-tabview.ui-tabview-top .ui-tabview-nav li:not(.ui-state-active):not(.ui-state-disabled):hover a, body .ui-tabview.ui-tabview-bottom .ui-tabview-nav li:not(.ui-state-active):not(.ui-state-disabled):hover a, body .ui-tabview.ui-tabview-left .ui-tabview-nav li:not(.ui-state-active):not(.ui-state-disabled):hover a, body .ui-tabview.ui-tabview-right .ui-tabview-nav li:not(.ui-state-active):not(.ui-state-disabled):hover a {
          color: #333333; }
        body .ui-tabview.ui-tabview-top .ui-tabview-nav li:not(.ui-state-active):not(.ui-state-disabled):hover .ui-tabview-close, body .ui-tabview.ui-tabview-bottom .ui-tabview-nav li:not(.ui-state-active):not(.ui-state-disabled):hover .ui-tabview-close, body .ui-tabview.ui-tabview-left .ui-tabview-nav li:not(.ui-state-active):not(.ui-state-disabled):hover .ui-tabview-close, body .ui-tabview.ui-tabview-right .ui-tabview-nav li:not(.ui-state-active):not(.ui-state-disabled):hover .ui-tabview-close {
          color: #333333; }
      body .ui-tabview.ui-tabview-top .ui-tabview-nav li.ui-state-active, body .ui-tabview.ui-tabview-bottom .ui-tabview-nav li.ui-state-active, body .ui-tabview.ui-tabview-left .ui-tabview-nav li.ui-state-active, body .ui-tabview.ui-tabview-right .ui-tabview-nav li.ui-state-active {
        background-color: #007ad9;
        border: 1px solid #007ad9; }
        body .ui-tabview.ui-tabview-top .ui-tabview-nav li.ui-state-active a, body .ui-tabview.ui-tabview-bottom .ui-tabview-nav li.ui-state-active a, body .ui-tabview.ui-tabview-left .ui-tabview-nav li.ui-state-active a, body .ui-tabview.ui-tabview-right .ui-tabview-nav li.ui-state-active a {
          color: #ffffff; }
        body .ui-tabview.ui-tabview-top .ui-tabview-nav li.ui-state-active .ui-tabview-close, body .ui-tabview.ui-tabview-bottom .ui-tabview-nav li.ui-state-active .ui-tabview-close, body .ui-tabview.ui-tabview-left .ui-tabview-nav li.ui-state-active .ui-tabview-close, body .ui-tabview.ui-tabview-right .ui-tabview-nav li.ui-state-active .ui-tabview-close {
          color: #ffffff; }
        body .ui-tabview.ui-tabview-top .ui-tabview-nav li.ui-state-active:hover, body .ui-tabview.ui-tabview-bottom .ui-tabview-nav li.ui-state-active:hover, body .ui-tabview.ui-tabview-left .ui-tabview-nav li.ui-state-active:hover, body .ui-tabview.ui-tabview-right .ui-tabview-nav li.ui-state-active:hover {
          border: 1px solid #005b9f;
          background-color: #005b9f; }
          body .ui-tabview.ui-tabview-top .ui-tabview-nav li.ui-state-active:hover a, body .ui-tabview.ui-tabview-bottom .ui-tabview-nav li.ui-state-active:hover a, body .ui-tabview.ui-tabview-left .ui-tabview-nav li.ui-state-active:hover a, body .ui-tabview.ui-tabview-right .ui-tabview-nav li.ui-state-active:hover a {
            color: #ffffff; }
            body .ui-tabview.ui-tabview-top .ui-tabview-nav li.ui-state-active:hover a .ui-tabview-left-icon, body .ui-tabview.ui-tabview-top .ui-tabview-nav li.ui-state-active:hover a .ui-tabview-right-icon, body .ui-tabview.ui-tabview-bottom .ui-tabview-nav li.ui-state-active:hover a .ui-tabview-left-icon, body .ui-tabview.ui-tabview-bottom .ui-tabview-nav li.ui-state-active:hover a .ui-tabview-right-icon, body .ui-tabview.ui-tabview-left .ui-tabview-nav li.ui-state-active:hover a .ui-tabview-left-icon, body .ui-tabview.ui-tabview-left .ui-tabview-nav li.ui-state-active:hover a .ui-tabview-right-icon, body .ui-tabview.ui-tabview-right .ui-tabview-nav li.ui-state-active:hover a .ui-tabview-left-icon, body .ui-tabview.ui-tabview-right .ui-tabview-nav li.ui-state-active:hover a .ui-tabview-right-icon {
              color: #ffffff; }
      body .ui-tabview.ui-tabview-top .ui-tabview-nav li.ui-tabview-selected a, body .ui-tabview.ui-tabview-bottom .ui-tabview-nav li.ui-tabview-selected a, body .ui-tabview.ui-tabview-left .ui-tabview-nav li.ui-tabview-selected a, body .ui-tabview.ui-tabview-right .ui-tabview-nav li.ui-tabview-selected a {
        cursor: pointer; }
body .ui-tabview.ui-tabview-top .ui-tabview-nav {
  margin-bottom: -1px; }
  body .ui-tabview.ui-tabview-top .ui-tabview-nav li {
    margin-right: 2px; }
body .ui-tabview.ui-tabview-bottom .ui-tabview-nav {
  margin-top: -1px; }
  body .ui-tabview.ui-tabview-bottom .ui-tabview-nav li {
    margin-right: 2px; }
body .ui-tabview.ui-tabview-left .ui-tabview-nav {
  margin-right: -px; }
  body .ui-tabview.ui-tabview-left .ui-tabview-nav li {
    margin-bottom: 2px; }
body .ui-tabview.ui-tabview-right .ui-tabview-nav {
  margin-right: -1px; }
  body .ui-tabview.ui-tabview-right .ui-tabview-nav li {
    margin-bottom: 2px; }
body .ui-tabview .ui-tabview-panels {
  background-color: #ffffff;
  padding: 0.571em 1em;
  border: 1px solid #c8c8c8;
  color: #333333; }
  body .ui-tabview .ui-tabview-panels .ui-tabview-panel {
    padding: 0; }
body .ui-toolbar {
  background-color: #f4f4f4;
  border: 1px solid #c8c8c8;
  padding: 0.571em 1em; }
  body .ui-toolbar button {
    vertical-align: middle; }
  body .ui-toolbar .ui-toolbar-separator {
    vertical-align: middle;
    color: #848484;
    margin: 0 0.5em; }
body .ui-card {
  background-color: #ffffff;
  color: #333333;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }

body .ui-paginator {
  background-color: #f4f4f4;
  border: 1px solid #c8c8c8;
  padding: 0; }
  body .ui-paginator .ui-paginator-first,
  body .ui-paginator .ui-paginator-prev,
  body .ui-paginator .ui-paginator-next,
  body .ui-paginator .ui-paginator-last {
    color: #848484;
    height: 2.286em;
    min-width: 2.286em;
    border: 0 none;
    line-height: 2.286em;
    padding: 0;
    margin: 0;
    vertical-align: top;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0; }
    body .ui-paginator .ui-paginator-first:not(.ui-state-disabled):not(.ui-state-active):hover,
    body .ui-paginator .ui-paginator-prev:not(.ui-state-disabled):not(.ui-state-active):hover,
    body .ui-paginator .ui-paginator-next:not(.ui-state-disabled):not(.ui-state-active):hover,
    body .ui-paginator .ui-paginator-last:not(.ui-state-disabled):not(.ui-state-active):hover {
      background-color: #e0e0e0;
      color: #333333; }
  body .ui-paginator .ui-paginator-current {
    color: #848484;
    height: 2.286em;
    min-width: 2.286em;
    line-height: 2.286em; }
  body .ui-paginator .ui-dropdown {
    border: 0 none; }
    body .ui-paginator .ui-dropdown .ui-dropdown-trigger, body .ui-paginator .ui-dropdown .ui-dropdown-label {
      color: #848484; }
    body .ui-paginator .ui-dropdown:hover .ui-dropdown-trigger, body .ui-paginator .ui-dropdown:hover .ui-dropdown-label {
      color: #333333; }
  body .ui-paginator .ui-paginator-first:before {
    position: relative;
    top: 1px; }
  body .ui-paginator .ui-paginator-prev:before {
    position: relative; }
  body .ui-paginator .ui-paginator-next:before {
    position: relative;
    top: 1px; }
  body .ui-paginator .ui-paginator-last:before {
    position: relative;
    top: 1px; }
  body .ui-paginator .ui-paginator-pages {
    vertical-align: top;
    display: inline-block;
    padding: 0; }
    body .ui-paginator .ui-paginator-pages .ui-paginator-page {
      color: #848484;
      height: 2.286em;
      min-width: 2.286em;
      border: 0 none;
      line-height: 2.286em;
      padding: 0;
      margin: 0;
      vertical-align: top;
      -moz-border-radius: 0;
      -webkit-border-radius: 0;
      border-radius: 0; }
      body .ui-paginator .ui-paginator-pages .ui-paginator-page.ui-state-active {
        background-color: #007ad9;
        color: #ffffff; }
      body .ui-paginator .ui-paginator-pages .ui-paginator-page:not(.ui-state-active):hover {
        background-color: #e0e0e0;
        color: #333333; }
  body .ui-paginator .ui-dropdown {
    margin-left: 0.5em;
    height: 2.286em;
    min-width: auto; }
body .ui-table .ui-table-caption,
body .ui-table .ui-table-summary {
  background-color: #f4f4f4;
  color: #333333;
  border: 1px solid #c8c8c8;
  padding: 0.571em 1em;
  text-align: center; }
body .ui-table .ui-table-caption {
  border-bottom: 0 none;
  font-weight: 700; }
body .ui-table .ui-table-summary {
  border-top: 0 none;
  font-weight: 700; }
body .ui-table .ui-table-thead > tr > th {
  padding: 0.571em 0.857em;
  border: 1px solid #c8c8c8;
  font-weight: 700;
  color: #333333;
  background-color: #f4f4f4; }
body .ui-table .ui-table-tbody > tr > td {
  padding: 0.571em 0.857em; }
body .ui-table .ui-table-tfoot > tr > td {
  padding: 0.571em 0.857em;
  border: 1px solid #c8c8c8;
  font-weight: 700;
  color: #333333;
  background-color: #ffffff; }
body .ui-table .ui-sortable-column .ui-sortable-column-icon {
  color: #848484; }
body .ui-table .ui-sortable-column:not(.ui-state-highlight):hover {
  background-color: #e0e0e0;
  color: #333333; }
  body .ui-table .ui-sortable-column:not(.ui-state-highlight):hover .ui-sortable-column-icon {
    color: #333333; }
body .ui-table .ui-sortable-column.ui-state-highlight {
  background-color: #007ad9;
  color: #ffffff; }
  body .ui-table .ui-sortable-column.ui-state-highlight .ui-sortable-column-icon {
    color: #ffffff; }
body .ui-table .ui-editable-column input {
  font-size: 14px;
  font-family: "Open Sans", "Helvetica Neue", sans-serif; }
  body .ui-table .ui-editable-column input:focus {
    outline: 1px solid #007ad9;
    outline-offset: 2px; }
body .ui-table .ui-table-tbody > tr {
  background-color: #ffffff;
  color: #333333; }
  body .ui-table .ui-table-tbody > tr > td {
    background-color: inherit;
    border: 1px solid #c8c8c8; }
  body .ui-table .ui-table-tbody > tr.ui-state-highlight {
    background-color: #007ad9;
    color: #ffffff; }
    body .ui-table .ui-table-tbody > tr.ui-state-highlight a {
      color: #ffffff; }
  body .ui-table .ui-table-tbody > tr.ui-contextmenu-selected {
    background-color: #007ad9;
    color: #ffffff; }
  body .ui-table .ui-table-tbody > tr.ui-table-dragpoint-top > td {
    -webkit-box-shadow: inset 0 2px 0 0 #007ad9;
    -moz-box-shadow: inset 0 2px 0 0 #007ad9;
    box-shadow: inset 0 2px 0 0 #007ad9; }
  body .ui-table .ui-table-tbody > tr.ui-table-dragpoint-bottom > td {
    -webkit-box-shadow: inset 0 -2px 0 0 #007ad9;
    -moz-box-shadow: inset 0 -2px 0 0 #007ad9;
    box-shadow: inset 0 -2px 0 0 #007ad9; }
body .ui-table .ui-table-tbody > tr:nth-child(even) {
  background-color: #f9f9f9; }
  body .ui-table .ui-table-tbody > tr:nth-child(even).ui-state-highlight {
    background-color: #007ad9;
    color: #ffffff; }
    body .ui-table .ui-table-tbody > tr:nth-child(even).ui-state-highlight a {
      color: #ffffff; }
  body .ui-table .ui-table-tbody > tr:nth-child(even).ui-contextmenu-selected {
    background-color: #007ad9;
    color: #ffffff; }
body .ui-table.ui-table-hoverable-rows .ui-table-tbody > tr.ui-selectable-row:not(.ui-state-highlight):not(.ui-contextmenu-selected):hover {
  cursor: pointer;
  background-color: #eaeaea;
  color: #333333; }
body .ui-table .ui-column-resizer-helper {
  background-color: #007ad9; }
@media screen and (max-width: 40em) {
  body .ui-table.ui-table-responsive .ui-paginator-top {
    border-bottom: 1px solid #c8c8c8; }
  body .ui-table.ui-table-responsive .ui-paginator-bottom {
    border-top: 1px solid #c8c8c8; }
  body .ui-table.ui-table-responsive .ui-table-tbody > tr > td {
    border: 0 none; } }
body .ui-datagrid .ui-datagrid-header {
  background-color: #f4f4f4;
  color: #333333;
  border: 1px solid #c8c8c8;
  padding: 0.571em 1em;
  font-weight: 700;
  border-bottom: 0 none; }
body .ui-datagrid .ui-datagrid-content {
  padding: 0.571em 1em;
  border: 1px solid #c8c8c8;
  background-color: #ffffff;
  color: #333333;
  padding: 0.571em 1em; }
body .ui-datagrid .ui-datagrid-footer {
  background-color: #ffffff;
  color: #333333;
  border: 1px solid #c8c8c8;
  padding: 0.571em 1em;
  border-top: 0 none; }
body .ui-datalist .ui-datalist-header {
  background-color: #f4f4f4;
  color: #333333;
  border: 1px solid #c8c8c8;
  padding: 0.571em 1em;
  font-weight: 700;
  border-bottom: 0 none; }
body .ui-datalist .ui-datalist-content {
  padding: 0.571em 1em;
  border: 1px solid #c8c8c8;
  background-color: #ffffff;
  color: #333333;
  padding: 0.571em 1em; }
body .ui-datalist .ui-datalist-footer {
  background-color: #ffffff;
  color: #333333;
  border: 1px solid #c8c8c8;
  padding: 0.571em 1em;
  border-top: 0 none; }
body .ui-datascroller .ui-datascroller-header {
  background-color: #f4f4f4;
  color: #333333;
  border: 1px solid #c8c8c8;
  padding: 0.571em 1em;
  font-weight: 700;
  border-bottom: 0 none; }
body .ui-datascroller .ui-datascroller-content {
  padding: 0.571em 1em;
  border: 1px solid #c8c8c8;
  background-color: #ffffff;
  color: #333333;
  padding: 0.571em 1em; }
body .ui-datascroller .ui-datascroller-footer {
  background-color: #ffffff;
  color: #333333;
  border: 1px solid #c8c8c8;
  padding: 0.571em 1em;
  border-top: 0 none; }
body .ui-virtualscroller .ui-virtualscroller-header {
  background-color: #f4f4f4;
  color: #333333;
  border: 1px solid #c8c8c8;
  padding: 0.571em 1em;
  font-weight: 700;
  border-bottom: 0 none; }
body .ui-virtualscroller .ui-virtualscroller-content {
  border: 1px solid #c8c8c8;
  background-color: #ffffff;
  color: #333333; }
  body .ui-virtualscroller .ui-virtualscroller-content .ui-virtualscroller-list li {
    border-bottom: 1px solid #c8c8c8; }
body .ui-virtualscroller .ui-virtualscroller-footer {
  background-color: #ffffff;
  color: #333333;
  border: 1px solid #c8c8c8;
  padding: 0.571em 1em;
  border-top: 0 none; }
body .ui-dataview .ui-dataview-header {
  background-color: #f4f4f4;
  color: #333333;
  border: 1px solid #c8c8c8;
  padding: 0.571em 1em;
  font-weight: 700;
  border-bottom: 0 none; }
body .ui-dataview .ui-dataview-content {
  padding: 0.571em 1em;
  border: 1px solid #c8c8c8;
  background-color: #ffffff;
  color: #333333;
  padding: 0.571em 1em; }
body .ui-dataview .ui-dataview-footer {
  background-color: #ffffff;
  color: #333333;
  border: 1px solid #c8c8c8;
  padding: 0.571em 1em;
  border-top: 0 none; }
body .fc th {
  background-color: #f4f4f4;
  border: 1px solid #c8c8c8;
  color: #333333;
  padding: 0.571em 1em; }
body .fc td.ui-widget-content {
  background-color: #ffffff;
  border: 1px solid #c8c8c8;
  color: #333333; }
body .fc td.fc-head-container {
  border: 1px solid #c8c8c8; }
body .fc .fc-row {
  border-right: 1px solid #c8c8c8; }
body .fc .fc-event {
  background-color: #116fbf;
  border: 1px solid #116fbf;
  color: #ffffff; }
body .fc .fc-toolbar .fc-button {
  color: #ffffff;
  background-color: #007ad9;
  border: 1px solid #007ad9;
  font-size: 14px;
  -moz-transition: background-color 0.2s, box-shadow 0.2s;
  -o-transition: background-color 0.2s, box-shadow 0.2s;
  -webkit-transition: background-color 0.2s, box-shadow 0.2s;
  transition: background-color 0.2s, box-shadow 0.2s;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px; }
  body .fc .fc-toolbar .fc-button:enabled:hover {
    background-color: #116fbf;
    color: #ffffff;
    border-color: #116fbf; }
  body .fc .fc-toolbar .fc-button .fc-icon-chevron-left {
    font-family: 'PrimeIcons' !important;
    text-indent: 0; }
    body .fc .fc-toolbar .fc-button .fc-icon-chevron-left:before {
      content: ""; }
  body .fc .fc-toolbar .fc-button .fc-icon-chevron-right {
    font-family: 'PrimeIcons' !important;
    text-indent: 0; }
    body .fc .fc-toolbar .fc-button .fc-icon-chevron-right:before {
      content: ""; }
  body .fc .fc-toolbar .fc-button:focus {
    outline: 0 none;
    outline-offset: 0px;
    -webkit-box-shadow: 0 0 0 0.2em #8dcdff;
    -moz-box-shadow: 0 0 0 0.2em #8dcdff;
    box-shadow: 0 0 0 0.2em #8dcdff; }
body .fc .fc-toolbar .fc-button-group .fc-button {
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0; }
  body .fc .fc-toolbar .fc-button-group .fc-button:first-child {
    -moz-border-radius-topleft: 3px;
    -webkit-border-top-left-radius: 3px;
    border-top-left-radius: 3px;
    -moz-border-radius-bottomleft: 3px;
    -webkit-border-bottom-left-radius: 3px;
    border-bottom-left-radius: 3px; }
  body .fc .fc-toolbar .fc-button-group .fc-button:last-child {
    -moz-border-radius-topright: 3px;
    -webkit-border-top-right-radius: 3px;
    border-top-right-radius: 3px;
    -moz-border-radius-bottomright: 3px;
    -webkit-border-bottom-right-radius: 3px;
    border-bottom-right-radius: 3px; }
body .fc .fc-divider {
  background-color: #f4f4f4;
  border: 1px solid #c8c8c8; }
body .ui-fluid .fc .fc-toolbar .fc-button {
  width: auto; }
body .ui-picklist .ui-picklist-buttons button {
  font-size: 16px; }
body .ui-picklist .ui-picklist-caption {
  background-color: #f4f4f4;
  color: #333333;
  border: 1px solid #c8c8c8;
  padding: 0.571em 1em;
  font-weight: 700;
  border-bottom: 0 none;
  -moz-border-radius-topleft: 3px;
  -webkit-border-top-left-radius: 3px;
  border-top-left-radius: 3px;
  -moz-border-radius-topright: 3px;
  -webkit-border-top-right-radius: 3px;
  border-top-right-radius: 3px; }
body .ui-picklist .ui-picklist-filter-container {
  padding: 0.429em 0.857em 0.429em 0.857em;
  border: 1px solid #c8c8c8;
  color: #333333;
  background-color: #ffffff;
  margin: 0;
  border-bottom: 0 none; }
  body .ui-picklist .ui-picklist-filter-container input.ui-picklist-filter {
    width: 100%;
    padding-right: 2em;
    text-indent: 0; }
  body .ui-picklist .ui-picklist-filter-container .ui-picklist-filter-icon {
    top: 50%;
    margin-top: -.5em;
    left: auto;
    right: 1.357em;
    color: #007ad9; }
body .ui-picklist .ui-picklist-buttons {
  padding: 0.571em 1em; }
body .ui-picklist .ui-picklist-list {
  border: 1px solid #c8c8c8;
  background-color: #ffffff;
  color: #333333;
  padding: 0; }
  body .ui-picklist .ui-picklist-list .ui-picklist-item {
    padding: 0.429em 0.857em;
    margin: 0;
    border: 0 none;
    color: #333333;
    background-color: transparent; }
    body .ui-picklist .ui-picklist-list .ui-picklist-item:not(.ui-state-highlight):hover {
      background-color: #eaeaea;
      color: #333333; }
    body .ui-picklist .ui-picklist-list .ui-picklist-item.ui-state-highlight {
      background-color: #007ad9;
      color: #ffffff; }
  body .ui-picklist .ui-picklist-list .ui-picklist-droppoint-highlight {
    background-color: #007ad9; }
@media (max-width: 40em) {
  body .ui-picklist.ui-picklist-responsive .ui-picklist-buttons {
    padding: 0.571em 1em; } }
body .ui-orderlist .ui-orderlist-controls {
  padding: 0.571em 1em; }
  body .ui-orderlist .ui-orderlist-controls button {
    font-size: 16px; }
body .ui-orderlist .ui-orderlist-caption {
  background-color: #f4f4f4;
  color: #333333;
  border: 1px solid #c8c8c8;
  padding: 0.571em 1em;
  font-weight: 700;
  border-bottom: 0 none;
  -moz-border-radius-topleft: 3px;
  -webkit-border-top-left-radius: 3px;
  border-top-left-radius: 3px;
  -moz-border-radius-topright: 3px;
  -webkit-border-top-right-radius: 3px;
  border-top-right-radius: 3px; }
body .ui-orderlist .ui-orderlist-filter-container {
  padding: 0.429em 0.857em 0.429em 0.857em;
  border: 1px solid #c8c8c8;
  color: #333333;
  background-color: #ffffff;
  margin: 0;
  border-bottom: 0 none; }
  body .ui-orderlist .ui-orderlist-filter-container input.ui-inputtext {
    width: 100%;
    padding-right: 2em;
    text-indent: 0; }
  body .ui-orderlist .ui-orderlist-filter-container .ui-orderlist-filter-icon {
    top: 50%;
    margin-top: -.5em;
    left: auto;
    right: 1.357em;
    color: #007ad9; }
body .ui-orderlist .ui-orderlist-list {
  border: 1px solid #c8c8c8;
  background-color: #ffffff;
  color: #333333;
  padding: 0; }
  body .ui-orderlist .ui-orderlist-list .ui-orderlist-item {
    padding: 0.429em 0.857em;
    margin: 0;
    border: 0 none;
    color: #333333;
    background-color: transparent; }
    body .ui-orderlist .ui-orderlist-list .ui-orderlist-item:not(.ui-state-highlight):hover {
      background-color: #eaeaea;
      color: #333333; }
    body .ui-orderlist .ui-orderlist-list .ui-orderlist-item.ui-state-highlight {
      background-color: #007ad9;
      color: #ffffff; }
  body .ui-orderlist .ui-orderlist-list .ui-orderlist-droppoint-highlight {
    background-color: #007ad9; }
body .ui-tree {
  border: 1px solid #c8c8c8;
  background-color: #ffffff;
  color: #333333;
  padding: 0.571em 1em; }
  body .ui-tree .ui-tree-container {
    padding: 0.286em;
    margin: 0; }
    body .ui-tree .ui-tree-container .ui-treenode {
      padding: 0.143em 0; }
      body .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content {
        padding: 0;
        border: 1px solid transparent; }
        body .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content .ui-tree-toggler {
          vertical-align: middle;
          display: inline-block;
          float: none;
          margin: 0 0.143em 0 0;
          color: #848484; }
        body .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content .ui-treenode-icon {
          vertical-align: middle;
          display: inline-block;
          margin: 0 0.143em 0 0;
          color: #848484; }
        body .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content .ui-treenode-label {
          margin: 0;
          vertical-align: middle;
          display: inline-block;
          padding: 0.286em; }
          body .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content .ui-treenode-label.ui-state-highlight {
            background-color: #007ad9;
            color: #ffffff; }
        body .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content .ui-chkbox {
          margin: 0 0.5em 0 0; }
          body .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content .ui-chkbox .ui-chkbox-icon {
            margin: 1px 0 0 0; }
        body .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content.ui-treenode-selectable .ui-treenode-label:not(.ui-state-highlight):hover {
          background-color: #eaeaea;
          color: #333333; }
        body .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content > span {
          line-height: inherit; }
        body .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content.ui-treenode-dragover {
          background-color: #eaeaea;
          color: #333333; }
    body .ui-tree .ui-tree-container .ui-treenode-droppoint.ui-treenode-droppoint-active {
      background-color: #007ad9; }
  body .ui-tree.ui-tree-horizontal {
    padding-left: 0;
    padding-right: 0; }
    body .ui-tree.ui-tree-horizontal .ui-treenode .ui-treenode-content {
      border: 1px solid #c8c8c8;
      background-color: #ffffff;
      color: #333333;
      padding: 0.571em 1em; }
      body .ui-tree.ui-tree-horizontal .ui-treenode .ui-treenode-content.ui-state-highlight {
        background-color: #007ad9;
        color: #ffffff; }
      body .ui-tree.ui-tree-horizontal .ui-treenode .ui-treenode-content .ui-chkbox .ui-icon {
        color: #007ad9; }
      body .ui-tree.ui-tree-horizontal .ui-treenode .ui-treenode-content .ui-treenode-label:not(.ui-state-highlight):hover {
        background-color: inherit;
        color: inherit; }
      body .ui-tree.ui-tree-horizontal .ui-treenode .ui-treenode-content.ui-treenode-selectable:not(.ui-state-highlight):hover {
        background-color: #eaeaea;
        color: #333333; }
  body .ui-tree .ui-tree-filter-container .ui-tree-filter {
    width: 100%;
    padding-right: 2em; }
  body .ui-tree .ui-tree-filter-container .ui-tree-filter-icon {
    top: 50%;
    left: auto;
    margin-top: -.5em;
    right: .8em;
    color: #007ad9; }
body .ui-organizationchart .ui-organizationchart-node-content.ui-organizationchart-selectable-node:not(.ui-state-highlight):hover {
  background-color: #eaeaea;
  color: #333333; }
body .ui-organizationchart .ui-organizationchart-node-content.ui-state-highlight {
  background-color: #007ad9;
  color: #ffffff; }
  body .ui-organizationchart .ui-organizationchart-node-content.ui-state-highlight .ui-node-toggler i {
    color: #00325a; }
body .ui-organizationchart .ui-organizationchart-line-down {
  background-color: #c8c8c8; }
body .ui-organizationchart .ui-organizationchart-line-left {
  border-right: 1px solid #c8c8c8;
  border-color: #c8c8c8; }
body .ui-organizationchart .ui-organizationchart-line-top {
  border-top: 1px solid #c8c8c8;
  border-color: #c8c8c8; }
body .ui-organizationchart .ui-organizationchart-node-content {
  border: 1px solid #c8c8c8;
  background-color: #ffffff;
  color: #333333;
  padding: 0.571em 1em; }
body .ui-organizationchart .ui-organizationchart-node-content .ui-node-toggler {
  bottom: -.7em;
  margin-left: -.46em;
  color: #848484; }
body .ui-treetable .ui-treetable-caption,
body .ui-treetable .ui-treetable-summary {
  background-color: #f4f4f4;
  color: #333333;
  border: 1px solid #c8c8c8;
  padding: 0.571em 1em;
  text-align: center; }
body .ui-treetable .ui-treetable-caption {
  border-bottom: 0 none;
  font-weight: 700; }
body .ui-treetable .ui-treetable-summary {
  border-top: 0 none;
  font-weight: 700; }
body .ui-treetable .ui-treetable-thead > tr > th {
  padding: 0.571em 0.857em;
  border: 1px solid #c8c8c8;
  font-weight: 700;
  color: #333333;
  background-color: #f4f4f4; }
body .ui-treetable .ui-treetable-tbody > tr > td {
  padding: 0.571em 0.857em; }
body .ui-treetable .ui-treetable-tfoot > tr > td {
  padding: 0.571em 0.857em;
  border: 1px solid #c8c8c8;
  font-weight: 700;
  color: #333333;
  background-color: #ffffff; }
body .ui-treetable .ui-sortable-column .ui-sortable-column-icon {
  color: #848484; }
body .ui-treetable .ui-sortable-column:not(.ui-state-highlight):hover {
  background-color: #e0e0e0;
  color: #333333; }
  body .ui-treetable .ui-sortable-column:not(.ui-state-highlight):hover .ui-sortable-column-icon {
    color: #333333; }
body .ui-treetable .ui-sortable-column.ui-state-highlight {
  background-color: #007ad9;
  color: #ffffff; }
  body .ui-treetable .ui-sortable-column.ui-state-highlight .ui-sortable-column-icon {
    color: #ffffff; }
body .ui-treetable .ui-editable-column input {
  font-size: 14px;
  font-family: "Open Sans", "Helvetica Neue", sans-serif; }
  body .ui-treetable .ui-editable-column input:focus {
    outline: 1px solid #007ad9;
    outline-offset: 2px; }
body .ui-treetable .ui-treetable-tbody > tr {
  background-color: #ffffff;
  color: #333333; }
  body .ui-treetable .ui-treetable-tbody > tr > td {
    background-color: inherit;
    border: 1px solid #c8c8c8; }
    body .ui-treetable .ui-treetable-tbody > tr > td .ui-treetable-toggler {
      color: #848484;
      vertical-align: middle; }
    body .ui-treetable .ui-treetable-tbody > tr > td .ui-treetable-chkbox {
      vertical-align: middle;
      margin-right: 0.5em; }
  body .ui-treetable .ui-treetable-tbody > tr.ui-state-highlight {
    background-color: #007ad9;
    color: #ffffff; }
    body .ui-treetable .ui-treetable-tbody > tr.ui-state-highlight > td {
      background-color: inherit;
      border: 1px solid #c8c8c8; }
      body .ui-treetable .ui-treetable-tbody > tr.ui-state-highlight > td .ui-treetable-toggler {
        color: #ffffff; }
  body .ui-treetable .ui-treetable-tbody > tr.ui-contextmenu-selected {
    background-color: #007ad9;
    color: #ffffff; }
    body .ui-treetable .ui-treetable-tbody > tr.ui-contextmenu-selected > td {
      background-color: inherit;
      border: 1px solid #c8c8c8; }
      body .ui-treetable .ui-treetable-tbody > tr.ui-contextmenu-selected > td .ui-treetable-toggler {
        color: #ffffff; }
body .ui-treetable.ui-treetable-hoverable-rows .ui-treetable-tbody > tr:not(.ui-state-highlight):not(.ui-contextmenu-selected):hover {
  cursor: pointer;
  background-color: #eaeaea;
  color: #333333; }
body .ui-treetable .ui-column-resizer-helper {
  background-color: #007ad9; }
body .ui-carousel .ui-carousel-content .ui-carousel-prev,
body .ui-carousel .ui-carousel-content .ui-carousel-next {
  background-color: #ffffff;
  border: solid 1px rgba(178, 193, 205, 0.64);
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  margin: 0.2em;
  color: #333333;
  -moz-transition: color 0.2s;
  -o-transition: color 0.2s;
  -webkit-transition: color 0.2s;
  transition: color 0.2s; }
  body .ui-carousel .ui-carousel-content .ui-carousel-prev:not(.ui-state-disabled):hover,
  body .ui-carousel .ui-carousel-content .ui-carousel-next:not(.ui-state-disabled):hover {
    background-color: #ffffff;
    color: #007ad9;
    border-color: solid 1px rgba(178, 193, 205, 0.64); }
body .ui-carousel .ui-carousel-dots-container .ui-carousel-dot-item > .ui-button {
  border-color: transparent;
  background-color: transparent; }
body .ui-carousel .ui-carousel-dots-container .ui-carousel-dot-item .ui-carousel-dot-icon {
  width: 20px;
  height: 6px;
  background-color: #b2c1cd;
  margin: 0 0.2em; }
  body .ui-carousel .ui-carousel-dots-container .ui-carousel-dot-item .ui-carousel-dot-icon::before {
    content: ' '; }
body .ui-carousel .ui-carousel-dots-container .ui-carousel-dot-item.ui-state-highlight .ui-carousel-dot-icon {
  background-color: #007ad9; }

body .ui-messages {
  padding: 1em;
  margin: 1em 0; }
  body .ui-messages.ui-messages-info {
    background-color: #7fbcec;
    border: 0 none;
    color: #212121; }
    body .ui-messages.ui-messages-info .ui-messages-icon {
      color: #212121; }
    body .ui-messages.ui-messages-info .ui-messages-close {
      color: #212121; }
  body .ui-messages.ui-messages-success {
    background-color: #b7d8b7;
    border: 0 none;
    color: #212121; }
    body .ui-messages.ui-messages-success .ui-messages-icon {
      color: #212121; }
    body .ui-messages.ui-messages-success .ui-messages-close {
      color: #212121; }
  body .ui-messages.ui-messages-warn {
    background-color: #ffe399;
    border: 0 none;
    color: #212121; }
    body .ui-messages.ui-messages-warn .ui-messages-icon {
      color: #212121; }
    body .ui-messages.ui-messages-warn .ui-messages-close {
      color: #212121; }
  body .ui-messages.ui-messages-error {
    background-color: #f8b7bd;
    border: 0 none;
    color: #212121; }
    body .ui-messages.ui-messages-error .ui-messages-icon {
      color: #212121; }
    body .ui-messages.ui-messages-error .ui-messages-close {
      color: #212121; }
  body .ui-messages .ui-messages-close {
    top: .25em;
    right: .5em;
    font-size: 1.5em; }
  body .ui-messages .ui-messages-icon {
    font-size: 2em; }
body .ui-message {
  padding: 0.429em;
  margin: 0; }
  body .ui-message.ui-message-info {
    background-color: #7fbcec;
    border: 0 none;
    color: #212121; }
    body .ui-message.ui-message-info .ui-message-icon {
      color: #212121; }
  body .ui-message.ui-message-success {
    background-color: #b7d8b7;
    border: 0 none;
    color: #212121; }
    body .ui-message.ui-message-success .ui-message-icon {
      color: #212121; }
  body .ui-message.ui-message-warn {
    background-color: #ffe399;
    border: 0 none;
    color: #212121; }
    body .ui-message.ui-message-warn .ui-message-icon {
      color: #212121; }
  body .ui-message.ui-message-error {
    background-color: #f8b7bd;
    border: 0 none;
    color: #212121; }
    body .ui-message.ui-message-error .ui-message-icon {
      color: #212121; }
  body .ui-message .ui-message-icon {
    font-size: 1.25em; }
  body .ui-message .ui-message-text {
    font-size: 1em; }
body .ui-growl {
  top: 70px; }
  body .ui-growl .ui-growl-item-container {
    margin: 0 0 1em 0;
    opacity: 0.9;
    filter: alpha(opacity=90);
    -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16); }
    body .ui-growl .ui-growl-item-container .ui-growl-item {
      padding: 1em; }
      body .ui-growl .ui-growl-item-container .ui-growl-item .ui-growl-message {
        margin: 0 0 0 4em; }
      body .ui-growl .ui-growl-item-container .ui-growl-item .ui-growl-image {
        font-size: 2.571em; }
    body .ui-growl .ui-growl-item-container.ui-growl-message-info {
      background-color: #7fbcec;
      border: 0 none;
      color: #212121; }
      body .ui-growl .ui-growl-item-container.ui-growl-message-info .ui-growl-image {
        color: #212121; }
    body .ui-growl .ui-growl-item-container.ui-growl-message-success {
      background-color: #b7d8b7;
      border: 0 none;
      color: #212121; }
      body .ui-growl .ui-growl-item-container.ui-growl-message-success .ui-growl-image {
        color: #212121; }
    body .ui-growl .ui-growl-item-container.ui-growl-message-warn {
      background-color: #ffe399;
      border: 0 none;
      color: #212121; }
      body .ui-growl .ui-growl-item-container.ui-growl-message-warn .ui-growl-image {
        color: #212121; }
    body .ui-growl .ui-growl-item-container.ui-growl-message-error {
      background-color: #f8b7bd;
      border: 0 none;
      color: #212121; }
      body .ui-growl .ui-growl-item-container.ui-growl-message-error .ui-growl-image {
        color: #212121; }
body .ui-toast .ui-toast-message {
  -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  margin: 0 0 1em 0; }
  body .ui-toast .ui-toast-message.ui-toast-message-info {
    background-color: #7fbcec;
    border: 0 none;
    color: #212121; }
    body .ui-toast .ui-toast-message.ui-toast-message-info .ui-toast-close-icon {
      color: #212121; }
  body .ui-toast .ui-toast-message.ui-toast-message-success {
    background-color: #b7d8b7;
    border: 0 none;
    color: #212121; }
    body .ui-toast .ui-toast-message.ui-toast-message-success .ui-toast-close-icon {
      color: #212121; }
  body .ui-toast .ui-toast-message.ui-toast-message-warn {
    background-color: #ffe399;
    border: 0 none;
    color: #212121; }
    body .ui-toast .ui-toast-message.ui-toast-message-warn .ui-toast-close-icon {
      color: #212121; }
  body .ui-toast .ui-toast-message.ui-toast-message-error {
    background-color: #f8b7bd;
    border: 0 none;
    color: #212121; }
    body .ui-toast .ui-toast-message.ui-toast-message-error .ui-toast-close-icon {
      color: #212121; }

body .ui-widget-overlay {
  background-color: rgba(0, 0, 0, 0.4); }
body .ui-overlaypanel {
  background-color: #ffffff;
  color: #333333;
  padding: 0;
  border: 1px solid #c8c8c8;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0; }
  body .ui-overlaypanel .ui-overlaypanel-content {
    padding: 0.571em 1em; }
  body .ui-overlaypanel .ui-overlaypanel-close {
    background-color: #007ad9;
    color: #ffffff;
    width: 1.538em;
    height: 1.538em;
    line-height: 1.538em;
    text-align: center;
    position: absolute;
    top: -0.769em;
    right: -0.769em;
    -moz-transition: background-color 0.2s;
    -o-transition: background-color 0.2s;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s; }
    body .ui-overlaypanel .ui-overlaypanel-close:hover {
      background-color: #005b9f;
      color: #ffffff; }
    body .ui-overlaypanel .ui-overlaypanel-close .ui-overlaypanel-close-icon {
      line-height: inherit; }
  body .ui-overlaypanel:after {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #ffffff; }
  body .ui-overlaypanel:before {
    border-color: rgba(200, 200, 200, 0);
    border-bottom-color: #c8c8c8; }
  body .ui-overlaypanel.ui-overlaypanel-flipped:after {
    border-top-color: #ffffff; }
  body .ui-overlaypanel.ui-overlaypanel-flipped:before {
    border-top-color: #c8c8c8; }
body .ui-dialog {
  padding: 0;
  -webkit-box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16); }
  body .ui-dialog .ui-dialog-titlebar {
    border: 1px solid #c8c8c8;
    background-color: #f4f4f4;
    color: #333333;
    padding: 1em;
    font-weight: 700;
    border-bottom: 0 none; }
    body .ui-dialog .ui-dialog-titlebar .ui-dialog-title {
      margin: 0;
      float: none; }
    body .ui-dialog .ui-dialog-titlebar .ui-dialog-titlebar-icon {
      color: #848484;
      border: 0 none;
      padding: 0;
      margin-left: 0.5em;
      -moz-transition: color 0.2s;
      -o-transition: color 0.2s;
      -webkit-transition: color 0.2s;
      transition: color 0.2s; }
      body .ui-dialog .ui-dialog-titlebar .ui-dialog-titlebar-icon:hover {
        color: #333333; }
  body .ui-dialog .ui-dialog-content {
    background-color: #ffffff;
    color: #333333;
    border: 1px solid #c8c8c8;
    padding: 0.571em 1em; }
  body .ui-dialog .ui-dialog-footer {
    border: 1px solid #c8c8c8;
    background-color: #ffffff;
    color: #333333;
    padding: 0.571em 1em;
    margin: 0;
    text-align: right;
    position: relative;
    top: -1px; }
    body .ui-dialog .ui-dialog-footer button {
      margin: 0 0.5em 0 0;
      width: auto; }
  body .ui-dialog.ui-confirm-dialog .ui-dialog-content {
    padding: 1.5em; }
    body .ui-dialog.ui-confirm-dialog .ui-dialog-content > span {
      float: none;
      display: inline-block;
      vertical-align: middle;
      line-height: 14px;
      margin: 0; }
      body .ui-dialog.ui-confirm-dialog .ui-dialog-content > span.ui-icon {
        margin-right: .35em;
        font-size: 16px; }
body .ui-sidebar {
  background-color: #ffffff;
  color: #333333;
  padding: 0.571em 1em;
  border: 1px solid #c8c8c8;
  -webkit-box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16); }
  body .ui-sidebar .ui-sidebar-close {
    color: #848484; }
    body .ui-sidebar .ui-sidebar-close:hover {
      color: #333333; }
body .ui-tooltip .ui-tooltip-text {
  background-color: #333333;
  color: #ffffff;
  padding: 0.429em;
  -webkit-box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16); }
body .ui-tooltip.ui-tooltip-right .ui-tooltip-arrow {
  border-right-color: #333333; }
body .ui-tooltip.ui-tooltip-left .ui-tooltip-arrow {
  border-left-color: #333333; }
body .ui-tooltip.ui-tooltip-top .ui-tooltip-arrow {
  border-top-color: #333333; }
body .ui-tooltip.ui-tooltip-bottom .ui-tooltip-arrow {
  border-bottom-color: #333333; }
body .ui-lightbox {
  -webkit-box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16); }
  body .ui-lightbox .ui-lightbox-caption {
    border: 1px solid #c8c8c8;
    background-color: #f4f4f4;
    color: #333333;
    padding: 0.571em 1em;
    font-weight: 700; }
    body .ui-lightbox .ui-lightbox-caption .ui-lightbox-caption-text {
      color: #333333;
      margin: 0; }
    body .ui-lightbox .ui-lightbox-caption .ui-lightbox-close {
      padding: 0;
      color: #848484;
      -moz-transition: color 0.2s;
      -o-transition: color 0.2s;
      -webkit-transition: color 0.2s;
      transition: color 0.2s; }
      body .ui-lightbox .ui-lightbox-caption .ui-lightbox-close:hover {
        color: #333333; }
  body .ui-lightbox .ui-lightbox-content-wrapper {
    overflow: hidden;
    background-color: #ffffff;
    color: #333333;
    border: 0 none;
    padding: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0; }
    body .ui-lightbox .ui-lightbox-content-wrapper .ui-lightbox-nav-left, body .ui-lightbox .ui-lightbox-content-wrapper .ui-lightbox-nav-right {
      -moz-transition: all 0.2s;
      -o-transition: all 0.2s;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      font-size: 3em;
      color: #ffffff;
      margin-top: -.5em; }
      body .ui-lightbox .ui-lightbox-content-wrapper .ui-lightbox-nav-left:hover, body .ui-lightbox .ui-lightbox-content-wrapper .ui-lightbox-nav-right:hover {
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -o-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2); }
    body .ui-lightbox .ui-lightbox-content-wrapper .ui-lightbox-content.ui-lightbox-loading ~ a {
      display: none; }

body .ui-breadcrumb {
  background-color: #ffffff;
  border: 1px solid #c8c8c8;
  padding: 0.571em 1em; }
  body .ui-breadcrumb ul li .ui-menuitem-link {
    color: #333333;
    margin: 0; }
  body .ui-breadcrumb ul li.ui-breadcrumb-chevron {
    margin: 0 0.5em 0 0.5em;
    color: #848484; }
  body .ui-breadcrumb ul li:first-child a {
    color: #848484;
    margin: 0; }
  body .ui-breadcrumb ul li .ui-menuitem-icon {
    color: #848484; }
body .ui-steps {
  position: relative; }
  body .ui-steps .ui-steps-item {
    background-color: transparent;
    text-align: center; }
    body .ui-steps .ui-steps-item .ui-menuitem-link {
      display: inline-block;
      text-align: center;
      background-color: transparent;
      overflow: hidden; }
      body .ui-steps .ui-steps-item .ui-menuitem-link .ui-steps-number {
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        display: inline-block;
        color: #333333;
        background-color: #ffffff;
        border: 1px solid #c8c8c8;
        position: relative;
        top: 16px;
        margin-bottom: 14px;
        width: 28px;
        height: 28px;
        font-size: 16px;
        line-height: 24px;
        text-align: center; }
      body .ui-steps .ui-steps-item .ui-menuitem-link .ui-steps-title {
        display: block;
        margin-top: 6px;
        color: #848484; }
    body .ui-steps .ui-steps-item.ui-state-highlight .ui-steps-number {
      background: #007ad9;
      color: #ffffff; }
    body .ui-steps .ui-steps-item.ui-state-highlight .ui-steps-title {
      font-weight: 700;
      color: #333333; }
    body .ui-steps .ui-steps-item:last-child .ui-menuitem-link {
      display: block; }
  body .ui-steps:before {
    content: ' ';
    border-top: 1px solid #c8c8c8;
    width: 100%;
    top: 45%;
    left: 0;
    display: block;
    position: absolute; }
body .ui-menu .ui-menuitem-link,
body .ui-menubar .ui-menuitem-link,
body .ui-tieredmenu .ui-menuitem-link,
body .ui-contextmenu .ui-menuitem-link,
body .ui-megamenu .ui-menuitem-link,
body .ui-slidemenu .ui-menuitem-link {
  padding: 0.714em 0.857em;
  color: #333333;
  font-weight: normal;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0; }
  body .ui-menu .ui-menuitem-link .ui-menuitem-text,
  body .ui-menubar .ui-menuitem-link .ui-menuitem-text,
  body .ui-tieredmenu .ui-menuitem-link .ui-menuitem-text,
  body .ui-contextmenu .ui-menuitem-link .ui-menuitem-text,
  body .ui-megamenu .ui-menuitem-link .ui-menuitem-text,
  body .ui-slidemenu .ui-menuitem-link .ui-menuitem-text {
    color: #333333; }
  body .ui-menu .ui-menuitem-link .ui-menuitem-icon,
  body .ui-menubar .ui-menuitem-link .ui-menuitem-icon,
  body .ui-tieredmenu .ui-menuitem-link .ui-menuitem-icon,
  body .ui-contextmenu .ui-menuitem-link .ui-menuitem-icon,
  body .ui-megamenu .ui-menuitem-link .ui-menuitem-icon,
  body .ui-slidemenu .ui-menuitem-link .ui-menuitem-icon {
    color: #333333;
    margin-right: 0.5em; }
  body .ui-menu .ui-menuitem-link:hover,
  body .ui-menubar .ui-menuitem-link:hover,
  body .ui-tieredmenu .ui-menuitem-link:hover,
  body .ui-contextmenu .ui-menuitem-link:hover,
  body .ui-megamenu .ui-menuitem-link:hover,
  body .ui-slidemenu .ui-menuitem-link:hover {
    background-color: #eaeaea; }
    body .ui-menu .ui-menuitem-link:hover .ui-menuitem-text,
    body .ui-menubar .ui-menuitem-link:hover .ui-menuitem-text,
    body .ui-tieredmenu .ui-menuitem-link:hover .ui-menuitem-text,
    body .ui-contextmenu .ui-menuitem-link:hover .ui-menuitem-text,
    body .ui-megamenu .ui-menuitem-link:hover .ui-menuitem-text,
    body .ui-slidemenu .ui-menuitem-link:hover .ui-menuitem-text {
      color: #333333; }
    body .ui-menu .ui-menuitem-link:hover .ui-menuitem-icon,
    body .ui-menubar .ui-menuitem-link:hover .ui-menuitem-icon,
    body .ui-tieredmenu .ui-menuitem-link:hover .ui-menuitem-icon,
    body .ui-contextmenu .ui-menuitem-link:hover .ui-menuitem-icon,
    body .ui-megamenu .ui-menuitem-link:hover .ui-menuitem-icon,
    body .ui-slidemenu .ui-menuitem-link:hover .ui-menuitem-icon {
      color: #333333; }
body .ui-menu {
  padding: 0;
  background-color: #ffffff;
  border: 1px solid #c8c8c8; }
  body .ui-menu .ui-menuitem {
    margin: 0; }
  body .ui-menu.ui-shadow {
    border: 1px solid #c8c8c8;
    -webkit-box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16); }
  body .ui-menu .ui-submenu-header {
    margin: 0;
    padding: 0.714em 0.857em;
    color: #333333;
    background-color: #f4f4f4;
    font-weight: 700;
    border: 0 none; }
  body .ui-menu .ui-menu-separator {
    border: 1px solid #c8c8c8;
    border-width: 1px 0 0 0; }
body .ui-menubar {
  padding: 0;
  background-color: #ffffff;
  border: 1px solid #c8c8c8; }
  body .ui-menubar .ui-menubar-root-list > .ui-menuitem > .ui-menuitem-link {
    padding: 0.714em 0.857em; }
  body .ui-menubar .ui-menubar-root-list > .ui-menu-separator {
    border: 1px solid #c8c8c8;
    border-width: 0 0 0 1px; }
  body .ui-menubar .ui-submenu-list {
    padding: 0;
    background-color: #ffffff;
    border: 1px solid #c8c8c8;
    -webkit-box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16); }
    body .ui-menubar .ui-submenu-list .ui-menuitem {
      margin: 0; }
    body .ui-menubar .ui-submenu-list .ui-menu-separator {
      border: 1px solid #c8c8c8;
      border-width: 1px 0 0 0; }
  body .ui-menubar .ui-menuitem {
    margin: 0; }
    body .ui-menubar .ui-menuitem.ui-menuitem-active > .ui-menuitem-link {
      background-color: #eaeaea; }
      body .ui-menubar .ui-menuitem.ui-menuitem-active > .ui-menuitem-link .ui-menuitem-text {
        color: #333333; }
      body .ui-menubar .ui-menuitem.ui-menuitem-active > .ui-menuitem-link .ui-menuitem-icon, body .ui-menubar .ui-menuitem.ui-menuitem-active > .ui-menuitem-link .ui-submenu-icon {
        color: #333333; }
body .ui-contextmenu {
  padding: 0;
  background-color: #ffffff;
  border: 1px solid #c8c8c8;
  -webkit-box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
  box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16); }
  body .ui-contextmenu .ui-submenu-list {
    padding: 0;
    background-color: #ffffff;
    border: 1px solid #c8c8c8;
    -webkit-box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16); }
  body .ui-contextmenu .ui-menuitem {
    margin: 0; }
    body .ui-contextmenu .ui-menuitem .ui-menuitem-link .ui-submenu-icon {
      right: 0.429em; }
    body .ui-contextmenu .ui-menuitem.ui-menuitem-active > .ui-menuitem-link {
      background-color: #eaeaea; }
      body .ui-contextmenu .ui-menuitem.ui-menuitem-active > .ui-menuitem-link .ui-menuitem-text {
        color: #333333; }
      body .ui-contextmenu .ui-menuitem.ui-menuitem-active > .ui-menuitem-link .ui-menuitem-icon, body .ui-contextmenu .ui-menuitem.ui-menuitem-active > .ui-menuitem-link .ui-submenu-icon {
        color: #333333; }
  body .ui-contextmenu .ui-menu-separator {
    border: 1px solid #c8c8c8;
    border-width: 1px 0 0 0; }
body .ui-tieredmenu {
  padding: 0;
  background-color: #ffffff;
  border: 1px solid #c8c8c8; }
  body .ui-tieredmenu .ui-submenu-list {
    padding: 0;
    background-color: #ffffff;
    border: 1px solid #c8c8c8;
    -webkit-box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16); }
  body .ui-tieredmenu .ui-menuitem {
    margin: 0; }
    body .ui-tieredmenu .ui-menuitem .ui-menuitem-link .ui-submenu-icon {
      right: 0.429em; }
    body .ui-tieredmenu .ui-menuitem.ui-menuitem-active > .ui-menuitem-link {
      background-color: #eaeaea; }
      body .ui-tieredmenu .ui-menuitem.ui-menuitem-active > .ui-menuitem-link .ui-menuitem-text {
        color: #333333; }
      body .ui-tieredmenu .ui-menuitem.ui-menuitem-active > .ui-menuitem-link .ui-menuitem-icon, body .ui-tieredmenu .ui-menuitem.ui-menuitem-active > .ui-menuitem-link .ui-submenu-icon {
        color: #333333; }
  body .ui-tieredmenu .ui-menu-separator {
    border: 1px solid #c8c8c8;
    border-width: 1px 0 0 0; }
body .ui-slidemenu {
  padding: 0;
  background-color: #ffffff;
  border: 1px solid #c8c8c8; }
  body .ui-slidemenu .ui-submenu-list {
    padding: 0;
    background-color: #ffffff;
    border: 0 none; }
  body .ui-slidemenu .ui-menuitem {
    margin: 0; }
    body .ui-slidemenu .ui-menuitem .ui-menuitem-link .ui-submenu-icon {
      right: 0.429em; }
    body .ui-slidemenu .ui-menuitem.ui-menuitem-active > .ui-menuitem-link {
      background-color: #eaeaea; }
      body .ui-slidemenu .ui-menuitem.ui-menuitem-active > .ui-menuitem-link .ui-menuitem-text {
        color: #333333; }
      body .ui-slidemenu .ui-menuitem.ui-menuitem-active > .ui-menuitem-link .ui-menuitem-icon, body .ui-slidemenu .ui-menuitem.ui-menuitem-active > .ui-menuitem-link .ui-submenu-icon {
        color: #333333; }
  body .ui-slidemenu .ui-slidemenu-backward {
    margin: 0;
    padding: 0.571em 1em;
    color: #333333;
    background-color: #f4f4f4;
    font-weight: 700;
    border: 0 none; }
    body .ui-slidemenu .ui-slidemenu-backward:hover {
      background-color: #dbdbdb;
      color: #333333; }
  body .ui-slidemenu .ui-menu-separator {
    border: 1px solid #c8c8c8;
    border-width: 1px 0 0 0; }
body .ui-tabmenu {
  border: 0 none; }
  body .ui-tabmenu .ui-tabmenu-nav {
    padding: 0;
    background: transparent;
    border-bottom: 1px solid #c8c8c8; }
    body .ui-tabmenu .ui-tabmenu-nav .ui-tabmenuitem {
      position: static;
      border: 1px solid #c8c8c8;
      background-color: #f4f4f4;
      margin-right: 2px;
      margin-bottom: -1px;
      -moz-transition: background-color 0.2s;
      -o-transition: background-color 0.2s;
      -webkit-transition: background-color 0.2s;
      transition: background-color 0.2s; }
      body .ui-tabmenu .ui-tabmenu-nav .ui-tabmenuitem .ui-menuitem-link {
        color: #333333;
        padding: 0.571em 1em; }
        body .ui-tabmenu .ui-tabmenu-nav .ui-tabmenuitem .ui-menuitem-link .ui-menuitem-text {
          color: #333333;
          margin-right: 0.5em; }
        body .ui-tabmenu .ui-tabmenu-nav .ui-tabmenuitem .ui-menuitem-link .ui-menuitem-icon {
          color: #848484;
          margin-right: 0.5em; }
      body .ui-tabmenu .ui-tabmenu-nav .ui-tabmenuitem:not(.ui-state-active):not(.ui-state-disabled):hover {
        background-color: #dbdbdb;
        border: 1px solid #dbdbdb; }
        body .ui-tabmenu .ui-tabmenu-nav .ui-tabmenuitem:not(.ui-state-active):not(.ui-state-disabled):hover .ui-menuitem-link .ui-menuitem-text {
          color: #333333; }
        body .ui-tabmenu .ui-tabmenu-nav .ui-tabmenuitem:not(.ui-state-active):not(.ui-state-disabled):hover .ui-menuitem-link .ui-menuitem-icon {
          color: #333333; }
      body .ui-tabmenu .ui-tabmenu-nav .ui-tabmenuitem.ui-state-active {
        background-color: #007ad9;
        border: 1px solid #007ad9; }
        body .ui-tabmenu .ui-tabmenu-nav .ui-tabmenuitem.ui-state-active .ui-menuitem-link .ui-menuitem-text {
          color: #ffffff; }
        body .ui-tabmenu .ui-tabmenu-nav .ui-tabmenuitem.ui-state-active .ui-menuitem-link .ui-menuitem-icon {
          color: #ffffff; }
body .ui-megamenu {
  padding: 0;
  background-color: #ffffff;
  border: 1px solid #c8c8c8; }
  body .ui-megamenu .ui-megamenu-submenu-header {
    margin: 0;
    padding: 0.571em 1em;
    color: #333333;
    background-color: #f4f4f4;
    font-weight: 700;
    border: 0 none; }
  body .ui-megamenu .ui-megamenu-panel {
    padding: 0;
    background-color: #ffffff;
    border: 1px solid #c8c8c8;
    -webkit-box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16); }
  body .ui-megamenu .ui-menuitem {
    margin: 0; }
    body .ui-megamenu .ui-menuitem .ui-menuitem-link .ui-submenu-icon {
      right: 0.429em; }
    body .ui-megamenu .ui-menuitem.ui-menuitem-active > .ui-menuitem-link {
      background-color: #eaeaea; }
      body .ui-megamenu .ui-menuitem.ui-menuitem-active > .ui-menuitem-link .ui-menuitem-text {
        color: #333333; }
      body .ui-megamenu .ui-menuitem.ui-menuitem-active > .ui-menuitem-link .ui-menuitem-icon, body .ui-megamenu .ui-menuitem.ui-menuitem-active > .ui-menuitem-link .ui-submenu-icon {
        color: #333333; }
  body .ui-megamenu.ui-megamenu-vertical .ui-megamenu-root-list > .ui-menuitem > .ui-menuitem-link > .ui-submenu-icon {
    right: 0.429em; }
body .ui-panelmenu .ui-icon {
  position: static; }
body .ui-panelmenu .ui-panelmenu-header {
  padding: 0; }
  body .ui-panelmenu .ui-panelmenu-header > a {
    border: 1px solid #c8c8c8;
    background-color: #f4f4f4;
    color: #333333;
    padding: 0.714em 0.857em;
    font-weight: 700;
    position: static;
    font-size: 14px;
    -moz-transition: background-color 0.2s;
    -o-transition: background-color 0.2s;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s; }
    body .ui-panelmenu .ui-panelmenu-header > a .ui-panelmenu-icon {
      color: #848484; }
  body .ui-panelmenu .ui-panelmenu-header:not(.ui-state-active) > a:hover {
    outline: 0 none;
    border: 1px solid #dbdbdb;
    background-color: #dbdbdb;
    color: #333333; }
    body .ui-panelmenu .ui-panelmenu-header:not(.ui-state-active) > a:hover .ui-panelmenu-icon {
      color: #333333; }
  body .ui-panelmenu .ui-panelmenu-header.ui-state-active > a {
    border: 1px solid #007ad9;
    background-color: #007ad9;
    color: #ffffff; }
    body .ui-panelmenu .ui-panelmenu-header.ui-state-active > a .ui-panelmenu-icon {
      color: #ffffff; }
    body .ui-panelmenu .ui-panelmenu-header.ui-state-active > a:hover {
      outline: 0 none;
      border: 1px solid #005b9f;
      background-color: #005b9f;
      color: #ffffff; }
      body .ui-panelmenu .ui-panelmenu-header.ui-state-active > a:hover .ui-panelmenu-icon {
        color: #ffffff; }
body .ui-panelmenu .ui-panelmenu-panel {
  margin-top: 2px; }
  body .ui-panelmenu .ui-panelmenu-panel:first-child {
    margin-top: 0; }
body .ui-panelmenu .ui-panelmenu-content {
  padding: 0;
  background-color: #ffffff;
  border: 1px solid #c8c8c8;
  margin-top: 0;
  position: static;
  border-top: 0 none; }
  body .ui-panelmenu .ui-panelmenu-content .ui-menuitem {
    margin: 0; }
    body .ui-panelmenu .ui-panelmenu-content .ui-menuitem .ui-menuitem-link {
      padding: 0.714em 0.857em;
      color: #333333; }
      body .ui-panelmenu .ui-panelmenu-content .ui-menuitem .ui-menuitem-link:hover {
        background-color: #eaeaea; }
        body .ui-panelmenu .ui-panelmenu-content .ui-menuitem .ui-menuitem-link:hover .ui-menuitem-icon, body .ui-panelmenu .ui-panelmenu-content .ui-menuitem .ui-menuitem-link:hover .ui-panelmenu-icon {
          color: #333333; }
        body .ui-panelmenu .ui-panelmenu-content .ui-menuitem .ui-menuitem-link:hover .ui-menuitem-text {
          color: #333333; }

body .ui-progressbar {
  border: 0 none;
  height: 24px;
  background-color: #eaeaea; }
  body .ui-progressbar .ui-progressbar-value {
    border: 0 none;
    margin: 0;
    background: #007ad9; }
  body .ui-progressbar .ui-progressbar-label {
    margin-top: 0;
    color: #333333;
    line-height: 24px; }
body .ui-galleria .ui-galleria-nav-prev,
body .ui-galleria .ui-galleria-nav-next {
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  position: absolute;
  color: #848484; }
  body .ui-galleria .ui-galleria-nav-prev:hover,
  body .ui-galleria .ui-galleria-nav-next:hover {
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2); }
body .ui-galleria .ui-galleria-nav-prev {
  font-size: 16px; }
body .ui-galleria .ui-galleria-nav-next {
  font-size: 16px; }
body .ui-terminal {
  background-color: #ffffff;
  color: #333333;
  border: 1px solid #c8c8c8;
  padding: 0.571em 1em; }
  body .ui-terminal .ui-terminal-input {
    font-size: 14px;
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
    height: 16px; }
  body .ui-terminal .ui-terminal-command {
    height: 16px; }
body .ui-inplace {
  min-height: 2.357em; }
  body .ui-inplace .ui-inplace-display {
    padding: 0.429em;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -moz-transition: background-color 0.2s;
    -o-transition: background-color 0.2s;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s; }
    body .ui-inplace .ui-inplace-display:not(.ui-state-disabled):hover {
      background-color: #eaeaea;
      color: #333333; }
body .ui-fluid .ui-inplace.ui-inplace-closable .ui-inplace-content > :first-child {
  display: inline-block;
  width: calc(100% - 2.357em); }
.ui-widget, .ui-widget * {
    box-sizing: border-box;
}
.ui-helper-hidden {
    display: none !important;
}
.ui-helper-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}
.ui-helper-hidden-accessible input,
.ui-helper-hidden-accessible select {
    transform: scale(0);
}
.ui-helper-reset {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    line-height: 1.3;
    text-decoration: none;
    font-size: 100%;
    list-style: none;
}
.ui-helper-clearfix::before,
.ui-helper-clearfix::after {
    content: "";
    display: table;
}
.ui-helper-clearfix::after {
    clear: both;
}
.ui-helper-clearfix {
    zoom: 1;
}
.ui-helper-zfix {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    opacity: 0;
    filter: Alpha(Opacity=0);
}
.ui-state-disabled {
    cursor: default !important;
}
.ui-state-disabled a {
    cursor: default !important;
}
.ui-icon {
    display: block;
    text-indent: -99999px;
    overflow: hidden;
    background-repeat: no-repeat;
}
.ui-widget-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.ui-resizable {
    position: relative;
}
.ui-resizable-handle {
    position: absolute;
    font-size: 0.1px;
    display: block;
}
.ui-resizable-disabled .ui-resizable-handle,
.ui-resizable-autohide .ui-resizable-handle {
    display: none;
}
.ui-resizable-n {
    cursor: n-resize;
    height: 7px;
    width: 100%;
    top: -5px;
    left: 0;
}
.ui-resizable-s {
    cursor: s-resize;
    height: 7px;
    width: 100%;
    bottom: -5px;
    left: 0;
}
.ui-resizable-e {
    cursor: e-resize;
    width: 7px;
    right: -5px;
    top: 0;
    height: 100%;
}
.ui-resizable-w {
    cursor: w-resize;
    width: 7px;
    left: -5px;
    top: 0;
    height: 100%;
}
.ui-resizable-se {
    cursor: se-resize;
    width: 12px;
    height: 12px;
    right: 1px;
    bottom: 1px;
}
.ui-resizable-sw {
    cursor: sw-resize;
    width: 9px;
    height: 9px;
    left: -5px;
    bottom: -5px;
}
.ui-resizable-nw {
    cursor: nw-resize;
    width: 9px;
    height: 9px;
    left: -5px;
    top: -5px;
}
.ui-resizable-ne {
    cursor: ne-resize;
    width: 9px;
    height: 9px;
    right: -5px;
    top: -5px;
}
.ui-shadow {
    -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3);
}
.ui-unselectable-text {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.ui-scrollbar-measure {
    width: 100px;
    height: 100px;
    overflow: scroll;
    position: absolute;
    top: -9999px;
}
.ui-overflow-hidden {
    overflow: hidden;
}

::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: #898989;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color: #898989;
   opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color: #898989;
   opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color: #898989;
}
::-ms-input-placeholder { /* Microsoft Edge */
   color: #898989;
}
.ui-placeholder {
   color: #898989;
}

input[type="button"],
input[type="submit"],
input[type="reset"],
input[type="file"]::-webkit-file-upload-button,
button {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
}
.ui-accordion {
    width: 100%;
}

.ui-accordion .ui-accordion-header {
    cursor: pointer;
    position: relative;
    margin-top: 1px;
    zoom: 1;
}

.ui-accordion .ui-accordion-header a {
    display: block;
    padding: .5em;
}

.ui-accordion .ui-accordion-toggle-icon,
.ui-accordion .ui-accordion-header-text {
    vertical-align: middle;
}

.ui-accordion .ui-accordion-content {
    padding: 1em;
    border-top: 0;
    overflow: visible;
    zoom: 1;
}

.ui-accordion .ui-accordion-header.ui-state-disabled,
.ui-accordion .ui-accordion-header.ui-state-disabled a {
    cursor: default;
}

.ui-accordion-content-wrapper-overflown {
    overflow: hidden;
}

.ui-rtl .ui-accordion .ui-accordion-header a {
    padding: .5em 2em .5em .5em;
}

.ui-rtl .ui-accordion .ui-accordion-toggle-icon {
    left: initial;
    right: .5em;
}

.ui-rtl .ui-accordion .ui-accordion-toggle-icon.pi-caret-right:before {
    content: '\e904';
}
.ui-blockui {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.ui-blockui-document {
    position: fixed;
}
.ui-autocomplete {
    width: auto;
    zoom: 1;
    cursor: pointer;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    position: relative;
    display: inline-block;
}

.ui-autocomplete .ui-autocomplete-dropdown {
    height: 100%;
    width: 2em;
    margin-right: 0;
    vertical-align: top;
}

.ui-autocomplete .ui-autocomplete-input {
    padding-right: 1.5em;
}

.ui-autocomplete-loader {
    position: absolute;
    right: .25em;
    top: 50%;
    margin-top: -.5em;
}

.ui-autocomplete-query {
    font-weight: bold;
}

.ui-autocomplete .ui-autocomplete-panel {
    min-width: 100%;
}

.ui-autocomplete-panel {
    position: absolute;
    overflow: auto;
}

.ui-autocomplete-panel .ui-autocomplete-list {
    padding: 0.4em;
    border: 0 none;
}

.ui-autocomplete-panel .ui-autocomplete-list-item {
    border: 0 none;
    cursor: pointer;
    font-weight: normal;
    margin: 1px 0;
    padding: 0.186em 0.313em;
    text-align: left;
}

.ui-autocomplete .ui-button-icon-only,
.ui-autocomplete .ui-button-icon-only:enabled:hover,
.ui-autocomplete .ui-button-icon-only:enabled:focus,
.ui-autocomplete .ui-button-icon-only:enabled:active {
    border-left: 0 none;
}

/* Multiple Selection */
.ui-autocomplete-multiple-container {
    display: inline-block;
    vertical-align: middle;
}

.ui-autocomplete-multiple-container.ui-inputtext {
    clear: left;
    cursor: text;
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    padding: 0 1.5em 0 .25em;
}

.ui-autocomplete-token {
    cursor: default;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    padding: .125em .5em;
    white-space: nowrap;
    position: relative;
    margin-right: .125em;
    border: 0 none;
    font-size: .9em;
}

.ui-autocomplete-token-label {
    display: block;
    margin-right: 2em;
}

.ui-autocomplete-token-icon {
    margin-top: -.5em;
    position: absolute;
    right: 0.2em;
    top: 50%;
    cursor: pointer;
}

.ui-autocomplete-input-token {
    display: inline-block;
    vertical-align: middle;
    list-style-type: none;
    margin: 0 0 0 .125em;
    padding: .25em .25em .25em 0;
}

.ui-autocomplete-input-token input {
    border: 0 none;
    width: 10em;
    outline: medium none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
}

.ui-autocomplete-dd .ui-autocomplete-loader {
    right: 2.25em;
}

.ui-autocomplete-dd input.ui-corner-all ,
.ui-autocomplete-dd .ui-autocomplete-multiple-container.ui-corner-all {
     -moz-border-radius-topright: 0px;
     -webkit-border-top-right-radius: 0px;
     border-top-right-radius: 0px;
     -moz-border-radius-bottomright: 0px;
     -webkit-border-bottom-right-radius: 0px;
     border-bottom-right-radius: 0px;
 }

.ui-autocomplete-dd .ui-autocomplete-dropdown.ui-corner-all {
     -moz-border-radius-topleft: 0px;
     -webkit-border-top-left-radius: 0px;
     border-top-left-radius: 0px;
     -moz-border-radius-bottomleft: 0px;
     -webkit-border-bottom-left-radius: 0px;
     border-bottom-left-radius: 0px;
}

/** AutoComplete **/
.ui-fluid p-autocomplete,
.ui-fluid .ui-autocomplete,
.ui-fluid .ui-autocomplete-input {
    width: 100%;
}

.ui-fluid .ui-autocomplete.ui-autocomplete-dd .ui-autocomplete-input,
.ui-fluid .ui-autocomplete.ui-autocomplete-dd .ui-autocomplete-multiple-container {
    width: calc(100% - 2em);
}

.ui-fluid .ui-autocomplete .ui-autocomplete-dropdown.ui-button {
    width: 2em;
}

/* Button */
.ui-button {
    display: inline-block;
    position: relative;
    padding: 0;
    text-decoration: none !important;
    cursor: pointer;
    text-align: center;
    zoom: 1;
    overflow: visible; /* the overflow property removes extra width in IE */
}

p-button {
    display: inline-block;
}

/*button text element */
.ui-button .ui-button-text {
    display: block;
    line-height: normal;
}

.ui-button-text-only .ui-button-text {
    padding: .25em 1em;
}

.ui-button-icon-only .ui-button-text,
.ui-button-text-empty .ui-button-text {
    padding: .25em;
    text-indent: -9999999px;
}

.ui-button-text-icon-left .ui-button-text {
    padding: .25em 1em .25em 2.1em;
}

.ui-button-text-icon-right .ui-button-text {
    padding: .25em 2.1em .25em 1em;
}

/*button icon element(s) */
.ui-button-icon-only .ui-button-icon-left,
.ui-button-text-icon-left .ui-button-icon-left,
.ui-button-text-icon-right .ui-button-icon-right {
    position: absolute;
    top: 50%;
    margin-top: -.5em;
    height: 1em;
}

.ui-button-icon-only .ui-button-icon-left {
    top: 50%;
    left: 50%;
    margin-top: -.5em;
    margin-left: -.5em;
    width: 1em;
    height: 1em;
}

.ui-button-icon-left {
    left: .5em;
}

.ui-button-icon-right {
    right: .5em;
}

/*button sets*/
.ui-buttonset .ui-button {
    margin-left: 0;
    margin-right: 0;
}

/* workarounds */
button.ui-button::-moz-focus-inner {
    border: 0; padding: 0; /* reset extra padding in Firefox */
}

/** Fluid **/
.ui-fluid .ui-button {
    width: 100%;
}

.ui-fluid .ui-button-text-icon-left .ui-button-text,
.ui-fluid .ui-button-text-icon-right .ui-button-text {
    padding-left: 1em;
    padding-right: 1em;
}

/** ButtonSet **/
.ui-fluid .ui-buttonset {
    width: 100%;
}

.ui-fluid .ui-buttonset.ui-buttonset-1 .ui-button {width: 100%;}
.ui-fluid .ui-buttonset.ui-buttonset-2 .ui-button {width: 50%;}
.ui-fluid .ui-buttonset.ui-buttonset-3 .ui-button {width: 33.3%;}
.ui-fluid .ui-buttonset.ui-buttonset-4 .ui-button {width: 25%;}
.ui-fluid .ui-buttonset.ui-buttonset-5 .ui-button {width: 20%;}
.ui-fluid .ui-buttonset.ui-buttonset-6 .ui-button {width: 16.6%;}

@media (max-width: 640px) {
    .ui-fluid .ui-buttonset.ui-buttonset-1 .ui-button,
    .ui-fluid .ui-buttonset.ui-buttonset-2 .ui-button,
    .ui-fluid .ui-buttonset.ui-buttonset-3 .ui-button,
    .ui-fluid .ui-buttonset.ui-buttonset-4 .ui-button,
    .ui-fluid .ui-buttonset.ui-buttonset-5 .ui-button,
    .ui-fluid .ui-buttonset.ui-buttonset-6 .ui-button {
        width: 100%;
    }
}
/** Breadcrumb **/
.ui-breadcrumb {
    margin: 0;
    padding: 0;
    padding: .5em;
}

.ui-breadcrumb ul {
    margin: 0;
    padding: 0;
}

.ui-breadcrumb ul li {
    display: inline-block;
    margin: 0 .25em;
}

.ui-breadcrumb-chevron, .ui-breadcrumb-home {
    vertical-align: middle;
}

.ui-breadcrumb ul li .ui-menuitem-link {
    text-decoration: none;
}

.ui-breadcrumb .ui-menuitem-icon {
    margin-right: .25em;
    vertical-align: middle;
}

.ui-breadcrumb .ui-menuitem-text {
    vertical-align: middle;
}
.ui-calendar {
    position: relative;
    display: inline-block;
}

.ui-calendar .ui-calendar-button {
    height: 100%;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    width: 2em;
    border-left: 0 none;
}

.ui-calendar .ui-calendar-button:enabled:hover,
.ui-calendar .ui-calendar-button:focus {
    border-left: 0 none;
}

.ui-calendar .ui-datepicker {
    min-width: 100%;
}

/* Fluid */
.ui-fluid .ui-calendar {
    width: 100%;
}

.ui-fluid .ui-calendar-button {
    width: 2em;
}

.ui-fluid .ui-datepicker-buttonbar button {
    width: auto;
}

.ui-fluid .ui-calendar.ui-calendar-w-btn .ui-inputtext {
    width: calc(100% - 2em);
}

/* Datepicker */
.ui-datepicker {
	width: auto;
	padding: .2em;
    position: absolute;
}

.ui-datepicker.ui-datepicker-inline {
    display: inline-block;
    position: static;
}

.ui-datepicker .ui-datepicker-group {
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 0;
}

/* Header */
.ui-datepicker .ui-datepicker-header {
	position: relative;
	padding: .5em 0;
}
.ui-datepicker .ui-datepicker-prev,
.ui-datepicker .ui-datepicker-next {
	position: absolute;
	top: .5em;
	width: 1.8em;
	height: 1.8em;
}

.ui-datepicker .ui-datepicker-prev {
	left: .125em;
}
.ui-datepicker .ui-datepicker-next {
	right: .125em;
}
.ui-datepicker .ui-datepicker-prev span,
.ui-datepicker .ui-datepicker-next span {
	display: block;
	position: absolute;
	left: 50%;
	top: 50%;
    margin-top: -.5em;
    margin-left: -.5em;
}
.ui-datepicker .ui-datepicker-title {
	margin: 0 2.3em;
	line-height: 1.8em;
	text-align: center;
}
.ui-datepicker .ui-datepicker-title select {
	font-size: 1em;
	margin: .125em 0;
    vertical-align: middle;
}
.ui-datepicker select.ui-datepicker-month {
    margin-right: .25em;
}
.ui-datepicker span.ui-datepicker-year {
	margin-left: .25em;
}

/* Multiple Month DatePicker */
.ui-datepicker-multiple-month .ui-datepicker-group {
    display: table-cell;
    border-left-width: 0;
    border-top-width: 0;
    border-bottom-width: 0;
    border-right-width: 1px;
}

/* DatePicker Table */
.ui-datepicker table {
	width: 100%;
	font-size: .9em;
	border-collapse: collapse;
	margin: 0 0 .4em;
}
.ui-datepicker th {
	padding: .5em;
	text-align: center;
	font-weight: bold;
	border: 0;
}
.ui-datepicker td {
	border: 0;
	padding: 0;
}
.ui-datepicker td > span,
.ui-datepicker td > a {
	display: block;
	padding: .5em;
    text-decoration: none;
    border: 0 none;
    text-align: center;
}

.ui-datepicker .ui-datepicker-buttonbar {
    border-left: 0 none;
    border-right: 0 none;
    border-bottom: 0 none;
	padding: .5em;
}

.ui-datepicker .ui-datepicker-buttonbar > .ui-g > div:last-child {
    text-align: right;
}

.ui-datepicker .ui-datepicker-buttonbar > .ui-g > div {
    padding: 0;
}

.ui-calendar.ui-calendar-w-btn input {
    -moz-border-radius-topright: 0px;
    -webkit-border-top-right-radius: 0px;
    -khtml-border-top-right-radius: 0px;
    border-top-right-radius: 0px;
    -moz-border-radius-bottomright: 0px;
    -webkit-border-bottom-right-radius: 0px;
    -khtml-border-bottom-right-radius: 0px;
    border-bottom-right-radius: 0px;
}

/* Month Picker */
.ui-monthpicker .ui-monthpicker-month {
    width: 33.3%;
    display: inline-block;
    text-align: center;
    padding: .5em;
    cursor: pointer;
}

.ui-datepicker-monthpicker select.ui-datepicker-year {
    width: auto;
}

/* Time Picker */
.ui-timepicker {
    text-align: center;
    padding: .5em 0;
}

.ui-timepicker > div {
    display: inline-block;
    margin-left: .5em;
    min-width: 1.5em;
}

.ui-timepicker > .ui-minute-picker,
.ui-timepicker > .ui-second-picker {
    margin-left: 0;
}

.ui-timepicker > .ui-separator {
    margin-left: 0px;
    min-width: .75em;
}

.ui-timepicker > .ui-separator a {
    visibility: hidden;
}

.ui-timepicker > div a {
    display: block;
    opacity: 0.7;
    filter:Alpha(Opacity=70);
    cursor: pointer;
}

.ui-timepicker > div a:last-child {
    margin-top: .3em;
}

.ui-timepicker > div a:hover {
    display: block;
    opacity: 1;
    filter:Alpha(Opacity=100);
}
input[type=text]::-ms-clear {
    display: none;
}

/* Touch UI */
.ui-datepicker-touch-ui,
.ui-calendar .ui-datepicker-touch-ui {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 80vw;
}

.ui-datepicker-touch-ui.ui-datepicker th {
	padding: 2em 0;
}
.ui-datepicker-touch-ui.ui-datepicker td {
	padding: 0;
}
.ui-datepicker-touch-ui.ui-datepicker td > span,
.ui-datepicker-touch-ui.ui-datepicker td > a {
	padding: 2em 0;
}

.ui-datepicker-touch-ui .ui-timepicker {
    padding: 1em 0;
}

.ui-datepicker-touch-ui .ui-timepicker > div a {
    font-size: 2em;
}

.ui-datepicker-mask {
    position: fixed;
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 40em) {
    .ui-datepicker-multiple-month {
        width: 17em;
        overflow: auto;
    }

    .ui-datepicker-touch-ui.ui-datepicker th {
        padding: 1em 0;
    }

    .ui-datepicker-touch-ui.ui-datepicker td span,
    .ui-datepicker-touch-ui.ui-datepicker td a {
        padding: 1em 0;
    }
}

.ui-card-header img {
    width: 100%;
}

.ui-card-body {
    padding: 1em;
}

.ui-card-title {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: .5em;
}

.ui-card-subtitle {
    opacity: .7;
    margin-bottom: .5em;
    margin-top: -.25em;
    font-weight: bold;
}

.ui-card-footer {
    padding-top: 1em;
}
.ui-carousel {
	display: flex;
	flex-direction: column;
	width: 100%;
}

.ui-carousel-content {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	overflow: auto;
	padding: 0 .5em;
}

.ui-carousel-prev,
.ui-carousel-next {
	align-self: center;
	text-align: center;
	flex-grow: 0;
	flex-shrink: 0;
	width: 2.5em;
	height: 2.5em;
	position: relative;
}

.ui-carousel-prev span,
.ui-carousel-next span {
	width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ui-carousel-container {
	display: flex;
    flex-direction: row;
    padding: 0 .1em;
}

.ui-carousel-header,
.ui-carousel-footer {
	padding: .5em;
	z-index: 1;
}

.ui-carousel-items-content {
    overflow: hidden;
    width: 100%;
}

.ui-carousel-items-container {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
}

.ui-carousel-items-container .ui-carousel-item {
    width: 100%;
    box-sizing: border-box;
    overflow: auto;
}

.ui-carousel-dots-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: .5em;
}

/* Vertical */
.ui-carousel-vertical .ui-carousel-container {
    flex-direction: column;
    width: 100%;
}

.ui-carousel-vertical .ui-carousel-items-container {
    flex-direction: column;
    height: 100%;
}

.ui-carousel-vertical .ui-carousel-dots-container {
    margin: .75em 0;
}
.ui-chips > ul.ui-inputtext {
    clear: left;
    cursor: text;
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    padding: 0 .25em;
}

.ui-chips-token {
    cursor: default;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    padding: .125em .5em;
    white-space: nowrap;
    position: relative;
    margin-right: .125em;
    border: 0 none;
    font-size: .9em;
}

.ui-chips-token .ui-chips-token-label {
    display: block;
    margin-right: 2em;
}

.ui-chips > .ui-state-disabled .ui-chips-token-label {
    margin-right: 0;
}

.ui-chips-token .ui-chips-token-icon {
    margin-top: -.5em;
    position: absolute;
    right: 0.2em;
    top: 50%;
    cursor: pointer;
}

.ui-chips-input-token {
    display: inline-block;
    vertical-align: middle;
    list-style-type: none;
    margin: 0 0 0 .125em;
    padding: .25em .25em .25em 0;
}

.ui-chips-input-token input {
    border: 0 none;
    width: 10em;
    outline: medium none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
}
.ui-chkbox {
    display: inline-block;
    cursor: pointer;
    vertical-align: middle;
    margin-right: .25em;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
}

.ui-chkbox .ui-chkbox-box {
    width: 1.125em;
    height: 1.125em;
    line-height: 1.125em;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    text-align: center;
}

.ui-chkbox .ui-chkbox-icon {
    display: block;
}

.ui-chkbox-label {
    vertical-align: middle;
}

.ui-chkbox-readonly {
    cursor: default;
}


.ui-colorpicker {
    display: inline-block;
}

.ui-colorpicker-dragging {
    cursor: pointer;
}

.ui-colorpicker-overlay {
    position: relative;
}

.ui-colorpicker-panel {
    position: relative;
    width: 193px;
    height: 166px;
    background-color: #323232;
    border-color: #191919;
}

.ui-colorpicker-overlay-panel {
    position: absolute;
}

.ui-colorpicker-preview {
    width: 2em;
    cursor: pointer;
}

.ui-colorpicker-panel .ui-colorpicker-content {
    position: relative;
}

.ui-colorpicker-panel .ui-colorpicker-color-selector {
    width: 150px;
    height: 150px;
    top: 8px;
    left: 8px;
    position: absolute;
}

.ui-colorpicker-panel .ui-colorpicker-color {
     width: 150px;
     height: 150px;
     background: transparent url("./images/color.png") no-repeat left top;
}

.ui-colorpicker-panel .ui-colorpicker-color-handle {
     position: absolute;
     top: 0px;
     left: 150px;
     border-radius: 100%;
     width: 10px;
     height: 10px;
     border: 1px solid #ffffff;
     margin: -5px 0 0 -5px;
     cursor: pointer;
}

.ui-colorpicker-panel .ui-colorpicker-hue {
    background: transparent url("./images/hue.png") no-repeat left top;
    width: 17px;
    height: 150px;
    top: 8px;
    left: 167px;
    position: absolute;
    opacity: .85;
}

.ui-colorpicker-panel .ui-colorpicker-hue-handle {
     position: absolute;
     top: 150px;
     left: 0px;
     width: 21px;
     margin-left: -2px;
     margin-top: -5px;
     height: 10px;
     border: 2px solid #ffffff;
     opacity: .85;
     cursor: pointer;
 }

 .ui-colorpicker-panel.ui-state-disabled .ui-colorpicker-hue-handle,
 .ui-colorpicker-panel.ui-state-disabled .ui-colorpicker-color-handle  {
      opacity: .5;
 }
.ui-contextmenu {
    width: 12.5em;
    padding: .25em;
    position: absolute;
    display: none;
}

.ui-contextmenu .ui-menu-separator {
    border-width: 1px 0 0 0;
}

.ui-contextmenu ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.ui-contextmenu .ui-submenu-list {
    display: none;
    position: absolute;
    width: 12.5em;
    padding: .25em;
}

.ui-contextmenu .ui-menuitem-link {
    padding: .25em;
    display: block;
    position: relative;
}

.ui-contextmenu .ui-menuitem-icon {
    margin-right: .25em;
    vertical-align: middle;
}

.ui-contextmenu .ui-menuitem-text {
    vertical-align: middle;
}

.ui-contextmenu .ui-menuitem {
    position: relative;
}


.ui-contextmenu .ui-menuitem-link .ui-submenu-icon {
    position: absolute;
    margin-top: -.5em;
    right: 0;
    top: 50%;
}

.ui-contextmenu .ui-menuitem-active > .ui-submenu > .ui-submenu-list {
    display: block !important;
}
.ui-datagrid .ui-paginator {
	text-align: center;
}

.ui-datagrid-column {
	padding: .25em;
}

.ui-datagrid-content-empty {
    padding: .25em .625em;
}

.ui-datagrid .ui-datagrid-header,
.ui-datagrid .ui-datagrid-footer {
    text-align:center;
	padding: .5em .75em;
}

.ui-datagrid .ui-datagrid-header {
    border-bottom: 0 none;
}

.ui-datagrid .ui-datagrid-footer {
    border-top: 0 none;
}

.ui-datagrid .ui-paginator-top {
    border-bottom: 0 none;
}

.ui-datagrid .ui-paginator-bottom {
    border-top: 0 none;
}


.ui-datascroller {
}

.ui-datascroller .ui-datascroller-header {
    text-align: center;
	padding: .5em .75em;
    border-bottom: 0 none;
}

.ui-datascroller .ui-datascroller-footer {
    text-align: center;
    padding: .25em .625em;
    border-top: 0px none;
}

.ui-datascroller .ui-datascroller-content {
    padding: .25em .625em;
}

.ui-datascroller-inline .ui-datascroller-content {
    overflow: auto;
}

.ui-datascroller .ui-datascroller-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.ui-datalist .ui-datalist-header,
.ui-datalist .ui-datalist-footer {
    text-align:center;
	padding: .5em .75em;
}

.ui-datalist .ui-datalist-header {
    border-bottom: 0 none;
}

.ui-datalist .ui-datalist-footer {
    border-top: 0 none;
}

.ui-datalist .ui-datalist-data {
    margin: 0;
    padding: 0;
}

.ui-datalist .ui-datalist-data > li {
    list-style-type: none;

}

.ui-datalist .ui-datalist-emptymessage {
    padding: .5em .75em;
}

.ui-datalist.ui-datalist-scrollable .ui-datalist-content {
    overflow: auto;
}

.ui-datalist .ui-paginator-top {
    border-bottom: 0 none;
}

.ui-datalist .ui-paginator-bottom {
    border-top: 0 none;
}

.ui-dataview {
    position: relative;
}

.ui-dataview .ui-paginator {
	text-align: center;
}

.ui-dataview-column {
	padding: .25em;
}

.ui-dataview-content-empty {
    padding: .25em .625em;
}

.ui-dataview .ui-dataview-header,
.ui-dataview .ui-dataview-footer {
	padding: .5em .75em;
}

.ui-dataview .ui-dataview-header {
    border-bottom: 0 none;
}

.ui-dataview .ui-dataview-footer {
    border-top: 0 none;
}

.ui-dataview .ui-paginator-top {
    border-bottom: 0 none;
}

.ui-dataview .ui-paginator-bottom {
    border-top: 0 none;
}

.ui-dataview.ui-dataview-list > .ui-dataview-content > div.ui-g > div {
    width: 100%;
}

.ui-dataview .ui-dataview-emptymessage {
    padding: .5em .75em;
}

/* Loader */
.ui-dataview-loading {
    position: absolute;
    width: 100%;
    height: 100%;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)";
    opacity: 0.1;
    z-index: 1;
}

.ui-dataview-loading-content {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    margin-top: -1em;
    margin-left: -1em;
}

.ui-dataview-loading-icon {
    font-size: 2em;
}

.ui-dialog {
    position: fixed;
    padding: 0;
}

.ui-dynamicdialog {
    top: 50%;
    left: 50%;
}

.ui-dialog .ui-dialog-titlebar {
	padding: .5em .75em;
    position: relative;
    border: 0;
}

.ui-dialog .ui-dialog-content {
    position: relative;
    border: 0;
    padding: .5em .75em;
    background: none;
    zoom: 1;
}

.ui-dialog-resizable .ui-dialog-content {
    overflow: auto;
}

.ui-dialog .ui-resizable-se {
    width: 14px;
    height: 14px;
    right: 3px;
    bottom: 3px;
}
.ui-draggable .ui-dialog-titlebar {
    cursor: move;
}

.ui-dialog .ui-dialog-titlebar-icon {
    text-decoration: none;
    float: right;
    float: right;
    padding: .125em;
    cursor: pointer;
    border: 1px solid transparent;
}

.ui-dialog .ui-dialog-titlebar-icon span {
    display: block;
    margin: 0;
}

.ui-dialog-footer {
    padding: 1em;
    border-width: 1px 0 0 0;
    text-align: right;
}

.ui-dialog-mask {
    position: fixed;
    width: 100%;
    height: 100%;
}

.ui-dialog-maximized {
    -webkit-transition: left .3s, top .3s, width .3s,height .3s;
    transition: left .3s, top .3s, width .3s,height .3s;
}

/* ConfirmDialog */
.ui-confirmdialog {
    width: 30em;
    top: 50%;
    left: 50%;
}

.ui-confirmdialog.ui-dialog .ui-dialog-content {
    padding: 1em 2em;
}
.ui-confirmdialog .ui-dialog-content .ui-confirmdialog-icon {
    font-size: 1.5em;
    margin-right: .5em;
    position: relative;
    top: .2em;
}

.ui-dialog-footer .ui-button {
    margin-right: .25em;
}

/* Fluid */
.ui-fluid .ui-dialog-footer .ui-button {
    width: auto;
}

/* RTL */
.ui-rtl .ui-dialog .ui-dialog-titlebar-close  {
    float: left;
}

.ui-rtl .ui-dialog .ui-dialog-buttonpane button {
    text-align: right;
}

@media screen and (max-width: 40em) {
    .ui-confirmdialog {
        width: 90%;
    }
}
.ui-dropdown {
    display: inline-block;
    position: relative;
    cursor: pointer;
    vertical-align: middle;
    min-width: 12.5em;
}

.ui-dropdown .ui-dropdown-hidden-select {
    bottom: 0;
    clip: auto;
}

.ui-dropdown .ui-dropdown-hidden-select select {
    -webkit-transform: none;
    transform: none;
    height: 1px;
    position: absolute;
    top: 0;
    clip: rect(0px, 0px, 0px, 0px);
    pointer-events: none;
}

.ui-dropdown .ui-dropdown-clear-icon {
    position: absolute;
    right: 2em;
    top: 50%;
    font-size: 1em;
    height: 1em;
    margin-top: -.5em;
}

.ui-dropdown .ui-dropdown-trigger {
    border-right: none;
    border-top: none;
    border-bottom: none;
    cursor: pointer;
    width: 1.5em;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 .25em;
}

.ui-dropdown .ui-dropdown-trigger .ui-dropdown-trigger-icon {
    top: 50%;
    left: 50%;
    margin-top: -.5em;
    margin-left: -.5em;
    position: absolute;
}

.ui-dropdown .ui-dropdown-label  {
    display: block;
    border: none;
    white-space: nowrap;
    overflow: hidden;
    font-weight: normal;
    width: 100%;
    padding-right: 2.5em;
}

.ui-dropdown-item-empty,
.ui-dropdown-label-empty {
    text-indent: -9999px;
    overflow: hidden;
}

.ui-dropdown.ui-state-disabled .ui-dropdown-trigger,
.ui-dropdown.ui-state-disabled .ui-dropdown-label {
    cursor: default;
}

.ui-dropdown label.ui-dropdown-label  {
    cursor: pointer;
}

.ui-dropdown input.ui-dropdown-label  {
    cursor: default;
}

.ui-dropdown .ui-dropdown-panel {
    min-width: 100%;
}

.ui-dropdown-panel {
    position: absolute;
    height: auto;
}

.ui-dropdown-panel .ui-dropdown-items-wrapper {
    overflow: auto;
}

.ui-dropdown-panel .ui-dropdown-item {
    font-weight: normal;
    border: 0 none;
    cursor: pointer;
    margin: 1px 0;
    padding: .125em .25em;
    text-align: left;
}

.ui-dropdown-panel .ui-dropdown-empty-message {
    padding: .5em;
}

.ui-dropdown-panel .ui-dropdown-item-group {
    font-weight: bold;
    cursor: default;
}

.ui-dropdown-panel .ui-dropdown-list {
    padding: 0.4em;
    border: 0 none;
}

.ui-dropdown-panel .ui-dropdown-filter {
    width: 100%;
    box-sizing: border-box;
    padding-right: 1.5em;
}

.ui-dropdown-panel .ui-dropdown-filter-container {
    position: relative;
    margin: 0;
    padding: 0.4em;
    display: inline-block;
    width: 100%;
}

.ui-dropdown-panel .ui-dropdown-filter-container .ui-dropdown-filter-icon {
    position: absolute;
    top: .8em;
    right: 1em;
}

/** Dropdown **/
.ui-fluid .ui-dropdown {
    width: 100%;
    min-width: 100%;
}

.ui-fieldset,
.ui-fieldset .ui-fieldset-legend {
    padding: 0.5em 1em;
}

.ui-fieldset-toggleable .ui-fieldset-legend {
    padding: 0;
}

.ui-fieldset-toggleable .ui-fieldset-legend a {
    padding: 0.5em 1em;
    cursor:pointer;
    white-space: nowrap;
    display: block;
}

.ui-fieldset .ui-fieldset-toggler {
    margin-right: .1em;
    display: inline-block;
    vertical-align: middle;
}

.ui-fieldset .ui-fieldset-legend-text {
    vertical-align: middle;
}

.ui-fieldset .ui-fieldset-content-wrapper-overflown {
    overflow: hidden;
}
/*
 * FileUpload
 */
.ui-fileupload-buttonbar .ui-fileupload-choose.ui-state-disabled input {
    cursor: default;
}

.ui-fileupload-buttonbar {
    padding: .5em;
    border-bottom: 0 none;
}

.ui-fileupload-buttonbar .ui-button {
    vertical-align: middle;
    margin-right: .25em;
}

.ui-fileupload-content {
    padding: 1em;
    position: relative;
    transition: border-color .3s;
}

.ui-fileupload-content.ui-fileupload-highlight {
    border-color: #156090;
}

.ui-fileupload-files img {
    border: none;
}

.ui-fileupload-files {
    display: table;
}

.ui-fileupload-row {
    display: table-row;
}

.ui-fileupload-row > div {
    display: table-cell;
    padding: .5em 1em;
    vertical-align: middle;
}

.ui-fileupload-content .ui-progressbar {
    width: 100%;
    position: absolute;
    top: 1px;
    left: 0;
    height: .25em;
    border: 0 none;
}

.ui-fileupload-content .ui-progressbar-value {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border: 0 none;
}

/* Simple */
.ui-fileupload-choose {
    position: relative;
    overflow: hidden;
}

.ui-fileupload-choose input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    opacity: 0;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    direction: ltr;
    cursor: pointer;
    z-index: 1;
}

.ui-fileupload-choose.ui-fileupload-choose-selected input[type=file] {
    display: none;
}

/* ui-fluid */
.ui-fluid .ui-fileupload .ui-button {
    width: auto;
}

.ui-fluid .ui-fileupload-content .ui-button-icon-only {
    width: 2em;
}

@media (max-width: 40em) {
    .ui-fileupload-buttonbar .ui-button {
        display: block;
        width: 100%;
        margin-right: 0;
        margin-bottom: .25em;
    }

    .ui-fileupload-buttonbar .ui-button:last-child {
        margin-bottom: 0;
    }

    .ui-fileupload-row > div {
        display: block;
    }
}



.ui-fluid .fc .ui-button {
    width: auto;
}
.ui-galleria {
    overflow: hidden;
    visibility: hidden;
    position: relative;
}

.ui-galleria .ui-galleria-panel-wrapper {
    position: relative;
    padding: 0;
    margin: 0;
}

.ui-galleria .ui-galleria-panel {
    filter: inherit;
    position: absolute;
    top: 0;
    left: 0;
    list-style-type: none;
}

.ui-galleria .ui-galleria-filmstrip-wrapper {
    overflow: hidden;
    margin: .25em auto;
    position: relative;
}

.ui-galleria .ui-galleria-filmstrip {
    list-style: none outside none;
    margin: 0;
    padding: 0;
    width: 2340px;
    position: absolute;
    top: 0;
    left: 0;
}

.ui-galleria .ui-galleria-frame {
    float:left;
    margin-right: 5px;
    opacity: 0.3;
    cursor: pointer;
}

.ui-galleria .ui-galleria-frame-active {
    opacity: 1;
}

.ui-galleria .ui-galleria-frame-content {
    overflow: hidden;
}

.ui-galleria .ui-galleria-nav-next, .ui-galleria .ui-galleria-nav-prev {
	cursor: pointer;
    position: absolute;
    z-index: 1;
}

.ui-galleria .ui-galleria-nav-prev {
    left: 4px;
}

.ui-galleria .ui-galleria-nav-next {
    right: 4px;
}

.ui-galleria .ui-galleria-caption {
    position: absolute;
    left:1px;
    background-color: rgba(0,0,0,0.5);
    display: none;
    color: #ededed;
    padding: 0.2em 1em;
}

.ui-galleria .ui-galleria-caption h4 {
    color: #ededed;
}

.ui-galleria .ui-galleria-panel-content {
    padding: 1em 1.4em;
}

/* Deprecated Grid CSS */
.ui-grid {
    clear: both;
    padding: 0;
    margin: 0;
}

.ui-grid::before,
.ui-grid::after {
    content:"";
    display:table;
}

.ui-grid::after {
    clear:both;
}

.ui-grid .ui-grid-row {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    clear:both;
}

.ui-grid-row::after {
    clear: both;
    content: "";
    display: table;
}

.ui-grid-col-1,
.ui-grid-col-2,
.ui-grid-col-3,
.ui-grid-col-4,
.ui-grid-col-5,
.ui-grid-col-6,
.ui-grid-col-7,
.ui-grid-col-8,
.ui-grid-col-9,
.ui-grid-col-10,
.ui-grid-col-11,
.ui-grid-col-12 {
    float: left;
    box-sizing: border-box;
}

.ui-grid-col-1 {
    width: 8.33333%;
}

.ui-grid-col-2 {
    width: 16.66666%;
}

.ui-grid-col-3 {
    width: 25%;
}

.ui-grid-col-4 {
    width: 33.33333%;
}

.ui-grid-col-5 {
    width: 41.66666%;
}

.ui-grid-col-6 {
    width: 50%;
}

.ui-grid-col-7 {
    width: 58.33333%;
}

.ui-grid-col-8 {
    width: 66.66666%;
}

.ui-grid-col-9 {
    width: 75%;
}

.ui-grid-col-10 {
    width: 83.33333%;
}

.ui-grid-col-11 {
    width: 91.66666%;
}

.ui-grid-col-12 {
    width: 100%;
}

@media (min-width: 480px) {
    .ui-grid-fixed {
        width: 480px;
    }
}

@media (min-width: 768px) {
    .ui-grid-fixed {
        width: 768px;
    }
}

@media (min-width: 960px) {
    .ui-grid-fixed {
        width: 960px;
    }
}

@media (min-width: 1024px) {
    .ui-grid-fixed {
        width: 1024px;
    }
}

/* Responsive */
@media (max-width: 640px) {
    .ui-grid-responsive .ui-grid-row {
        display: block;
    }

    .ui-grid-responsive .ui-grid-col-1,
    .ui-grid-responsive .ui-grid-col-2,
    .ui-grid-responsive .ui-grid-col-3,
    .ui-grid-responsive .ui-grid-col-4,
    .ui-grid-responsive .ui-grid-col-5,
    .ui-grid-responsive .ui-grid-col-6,
    .ui-grid-responsive .ui-grid-col-7,
    .ui-grid-responsive .ui-grid-col-8,
    .ui-grid-responsive .ui-grid-col-9,
    .ui-grid-responsive .ui-grid-col-10,
    .ui-grid-responsive .ui-grid-col-11,
    .ui-grid-responsive .ui-grid-col-12 {
        width: 100%;
        float: none;
    }
}

.ui-grid.ui-grid-pad > .ui-grid-row > div {
    padding: .25em .5em;
}

/* Responsive */
@media (max-width: 640px) {
    .ui-grid-responsive .ui-grid-row {
        display: block;
    }

    .ui-grid-responsive .ui-grid-col-1,
    .ui-grid-responsive .ui-grid-col-2,
    .ui-grid-responsive .ui-grid-col-3,
    .ui-grid-responsive .ui-grid-col-4,
    .ui-grid-responsive .ui-grid-col-5,
    .ui-grid-responsive .ui-grid-col-6,
    .ui-grid-responsive .ui-grid-col-7,
    .ui-grid-responsive .ui-grid-col-8,
    .ui-grid-responsive .ui-grid-col-9,
    .ui-grid-responsive .ui-grid-col-10,
    .ui-grid-responsive .ui-grid-col-11,
    .ui-grid-responsive .ui-grid-col-12 {
        width: 100%;
        float: none;
    }
}

/* New Grid CSS */
.ui-g {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
}

.ui-g::after {
    clear: both;
    content: "";
    display: table;
    box-sizing: border-box;
}

.ui-g-1,
.ui-g-2,
.ui-g-3,
.ui-g-4,
.ui-g-5,
.ui-g-6,
.ui-g-7,
.ui-g-8,
.ui-g-9,
.ui-g-10,
.ui-g-11,
.ui-g-12 {
    float: left;
    box-sizing: border-box;
    padding: 0.5em;
}

.ui-g-1 {
    width: 8.3333%;
}

.ui-g-2 {
    width: 16.6667%;
}

.ui-g-3 {
    width: 25%;
}

.ui-g-4 {
    width: 33.3333%;
}

.ui-g-5 {
    width: 41.6667%;
}

.ui-g-6 {
    width: 50%;
}

.ui-g-7 {
    width: 58.3333%;
}

.ui-g-8 {
    width: 66.6667%;
}

.ui-g-9 {
    width: 75%;
}

.ui-g-10 {
    width: 83.3333%;
}

.ui-g-11 {
    width: 91.6667%;
}

.ui-g-12 {
    width: 100%;
}

.ui-g-offset-12 {
  margin-left: 100%;
}

.ui-g-offset-11 {
  margin-left: 91.66666667%;
}

.ui-g-offset-10 {
  margin-left: 83.33333333%;
}

.ui-g-offset-9 {
  margin-left: 75%;
}

.ui-g-offset-8 {
  margin-left: 66.66666667%;
}

.ui-g-offset-7 {
  margin-left: 58.33333333%;
}

.ui-g-offset-6 {
  margin-left: 50%;
}

.ui-g-offset-5 {
  margin-left: 41.66666667%;
}

.ui-g-offset-4 {
  margin-left: 33.33333333%;
}

.ui-g-offset-3 {
  margin-left: 25%;
}

.ui-g-offset-2 {
  margin-left: 16.66666667%;
}

.ui-g-offset-1 {
  margin-left: 8.33333333%;
}

.ui-g-offset-0 {
  margin-left: 0%;
}

@media screen and (max-width: 40em) {
    .ui-sm-1,
    .ui-sm-2,
    .ui-sm-3,
    .ui-sm-4,
    .ui-sm-5,
    .ui-sm-6,
    .ui-sm-7,
    .ui-sm-8,
    .ui-sm-9,
    .ui-sm-10,
    .ui-sm-11,
    .ui-sm-12 {
        padding: 0.5em;
    }

    .ui-sm-1 {
        width: 8.3333%;
    }

    .ui-sm-2 {
        width: 16.6667%;
    }

    .ui-sm-3 {
        width: 25%;
    }

    .ui-sm-4 {
        width: 33.3333%;
    }

    .ui-sm-5 {
        width: 41.6667%;
    }

    .ui-sm-6 {
        width: 50%;
    }

    .ui-sm-7 {
        width: 58.3333%;
    }

    .ui-sm-8 {
        width: 66.6667%;
    }

    .ui-sm-9 {
        width: 75%;
    }

    .ui-sm-10 {
        width: 83.3333%;
    }

    .ui-sm-11 {
        width: 91.6667%;
    }

    .ui-sm-12 {
        width: 100%;
    }

    .ui-sm-offset-12 {
      margin-left: 100%;
    }

    .ui-sm-offset-11 {
      margin-left: 91.66666667%;
    }

    .ui-sm-offset-10 {
      margin-left: 83.33333333%;
    }

    .ui-sm-offset-9 {
      margin-left: 75%;
    }

    .ui-sm-offset-8 {
      margin-left: 66.66666667%;
    }

    .ui-sm-offset-7 {
      margin-left: 58.33333333%;
    }

    .ui-sm-offset-6 {
      margin-left: 50%;
    }

    .ui-sm-offset-5 {
      margin-left: 41.66666667%;
    }

    .ui-sm-offset-4 {
      margin-left: 33.33333333%;
    }

    .ui-sm-offset-3 {
      margin-left: 25%;
    }

    .ui-sm-offset-2 {
      margin-left: 16.66666667%;
    }

    .ui-sm-offset-1 {
      margin-left: 8.33333333%;
    }

    .ui-sm-offset-0 {
      margin-left: 0%;
    }
}

@media screen and (min-width: 40.063em) {
    .ui-md-1,
    .ui-md-2,
    .ui-md-3,
    .ui-md-4,
    .ui-md-5,
    .ui-md-6,
    .ui-md-7,
    .ui-md-8,
    .ui-md-9,
    .ui-md-10,
    .ui-md-11,
    .ui-md-12 {
        padding: 0.5em;
    }

    .ui-md-1 {
        width: 8.3333%;
    }

    .ui-md-2 {
        width: 16.6667%;
    }

    .ui-md-3 {
        width: 25%;
    }

    .ui-md-4 {
        width: 33.3333%;
    }

    .ui-md-5 {
        width: 41.6667%;
    }

    .ui-md-6 {
        width: 50%;
    }

    .ui-md-7 {
        width: 58.3333%;
    }

    .ui-md-8 {
        width: 66.6667%;
    }

    .ui-md-9 {
        width: 75%;
    }

    .ui-md-10 {
        width: 83.3333%;
    }

    .ui-md-11 {
        width: 91.6667%;
    }

    .ui-md-12 {
        width: 100%;
    }

    .ui-md-offset-12 {
      margin-left: 100%;
    }

    .ui-md-offset-11 {
      margin-left: 91.66666667%;
    }

    .ui-md-offset-10 {
      margin-left: 83.33333333%;
    }

    .ui-md-offset-9 {
      margin-left: 75%;
    }

    .ui-md-offset-8 {
      margin-left: 66.66666667%;
    }

    .ui-md-offset-7 {
      margin-left: 58.33333333%;
    }

    .ui-md-offset-6 {
      margin-left: 50%;
    }

    .ui-md-offset-5 {
      margin-left: 41.66666667%;
    }

    .ui-md-offset-4 {
      margin-left: 33.33333333%;
    }

    .ui-md-offset-3 {
      margin-left: 25%;
    }

    .ui-md-offset-2 {
      margin-left: 16.66666667%;
    }

    .ui-md-offset-1 {
      margin-left: 8.33333333%;
    }

    .ui-md-offset-0 {
      margin-left: 0%;
    }
}

@media screen and (min-width: 64.063em) {
    .ui-lg-1,
    .ui-lg-2,
    .ui-lg-3,
    .ui-lg-4,
    .ui-lg-5,
    .ui-lg-6,
    .ui-lg-7,
    .ui-lg-8,
    .ui-lg-9,
    .ui-lg-10,
    .ui-lg-11,
    .ui-lg-12 {
        padding: 0.5em;
    }

    .ui-lg-1 {
        width: 8.3333%;
    }

    .ui-lg-2 {
        width: 16.6667%;
    }

    .ui-lg-3 {
        width: 25%;
    }

    .ui-lg-4 {
        width: 33.3333%;
    }

    .ui-lg-5 {
        width: 41.6667%;
    }

    .ui-lg-6 {
        width: 50%;
    }

    .ui-lg-7 {
        width: 58.3333%;
    }

    .ui-lg-8 {
        width: 66.6667%;
    }

    .ui-lg-9 {
        width: 75%;
    }

    .ui-lg-10 {
        width: 83.3333%;
    }

    .ui-lg-11 {
        width: 91.6667%;
    }

    .ui-lg-12 {
        width: 100%;
    }

    .ui-lg-offset-12 {
      margin-left: 100%;
    }

    .ui-lg-offset-11 {
      margin-left: 91.66666667%;
    }

    .ui-lg-offset-10 {
      margin-left: 83.33333333%;
    }

    .ui-lg-offset-9 {
      margin-left: 75%;
    }

    .ui-lg-offset-8 {
      margin-left: 66.66666667%;
    }

    .ui-lg-offset-7 {
      margin-left: 58.33333333%;
    }

    .ui-lg-offset-6 {
      margin-left: 50%;
    }

    .ui-lg-offset-5 {
      margin-left: 41.66666667%;
    }

    .ui-lg-offset-4 {
      margin-left: 33.33333333%;
    }

    .ui-lg-offset-3 {
      margin-left: 25%;
    }

    .ui-lg-offset-2 {
      margin-left: 16.66666667%;
    }

    .ui-lg-offset-1 {
      margin-left: 8.33333333%;
    }

    .ui-lg-offset-0 {
      margin-left: 0%;
    }
}

@media screen and (min-width: 90.063em) {
    .ui-xl-1,
    .ui-xl-2,
    .ui-xl-3,
    .ui-xl-4,
    .ui-xl-5,
    .ui-xl-6,
    .ui-xl-7,
    .ui-xl-8,
    .ui-xl-9,
    .ui-xl-10,
    .ui-xl-11,
    .ui-xl-12 {
        padding: 0.5em;
    }

    .ui-xl-1 {
        width: 8.3333%;
    }

    .ui-xl-2 {
        width: 16.6667%;
    }

    .ui-xl-3 {
        width: 25%;
    }

    .ui-xl-4 {
        width: 33.3333%;
    }

    .ui-xl-5 {
        width: 41.6667%;
    }

    .ui-xl-6 {
        width: 50%;
    }

    .ui-xl-7 {
        width: 58.3333%;
    }

    .ui-xl-8 {
        width: 66.6667%;
    }

    .ui-xl-9 {
        width: 75%;
    }

    .ui-xl-10 {
        width: 83.3333%;
    }

    .ui-xl-11 {
        width: 91.6667%;
    }

    .ui-xl-12 {
        width: 100%;
    }

    .ui-xl-offset-12 {
      margin-left: 100%;
    }

    .ui-xl-offset-11 {
      margin-left: 91.66666667%;
    }

    .ui-xl-offset-10 {
      margin-left: 83.33333333%;
    }

    .ui-xl-offset-9 {
      margin-left: 75%;
    }

    .ui-xl-offset-8 {
      margin-left: 66.66666667%;
    }

    .ui-xl-offset-7 {
      margin-left: 58.33333333%;
    }

    .ui-xl-offset-6 {
      margin-left: 50%;
    }

    .ui-xl-offset-5 {
      margin-left: 41.66666667%;
    }

    .ui-xl-offset-4 {
      margin-left: 33.33333333%;
    }

    .ui-xl-offset-3 {
      margin-left: 25%;
    }

    .ui-xl-offset-2 {
      margin-left: 16.66666667%;
    }

    .ui-xl-offset-1 {
      margin-left: 8.33333333%;
    }

    .ui-xl-offset-0 {
      margin-left: 0%;
    }
}

.ui-g-nopad {
    padding: 0;
}

.ui-growl {
	position:fixed;
	top: 20px;
	right: 20px;
	width: 20em;
}

.ui-growl-item-container {
	position:relative;
	margin:0 0 10px 0;
	opacity:0.95;
	filter:alpha(opacity=95);
}

.ui-growl-item {
    position: relative;
	display: block;
	padding: .5em 1em;
}

.ui-growl-item p {
	padding: 0;
	margin: 0;
}

.ui-growl-icon-close {
	position: absolute;
	top: 4px;
	right: 4px;
	cursor: pointer;
}

.ui-growl-title {
	font-weight: bold;
	padding: 0 0 .5em 0;
	display: block;
}

.ui-growl-image {
    position: absolute;
    display: inline-block;
    left: .5em;
    top: .25em;
    padding: 0;
    font-size: 2em;
}

.ui-growl-message {
	padding: 0 0 .25em 0;
    margin-left: 2.5em;
}

.ui-growl-message p {
	font-weight: normal;
}
.ui-inplace .ui-inplace-display {
    display: inline;
    cursor: pointer;
    border: 0 none;
    padding: .25em;
    font-weight: normal;
}

.ui-inplace .ui-inplace-content {
    display: inline;
}
.ui-fluid .ui-inputgroup p-inputmask {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}

.ui-inputgroup p-inputmask:not(:first-child) .ui-inputtext {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0 none;
}

.ui-inputgroup p-inputmask:not(:last-child) .ui-inputtext {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
}

.ui-inputswitch {
    position: relative;
    display: inline-block;
    width: 3em;
    height: 1.75em;
}

.ui-inputswitch-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: .3s;
    transition: .3s;
    border-radius: 30px;
}

.ui-inputswitch-slider:before {
    position: absolute;
    content: "";
    height: 1.250em;
    width: 1.250em;
    left: .25em;
    bottom: .25em;
    border-radius: 50%;
    -webkit-transition: .3s;
    transition: .3s;
}

.ui-inputswitch-checked .ui-inputswitch-slider:before {
    -webkit-transform: translateX(1.250em);
    -ms-transform: translateX(1.250em);
    transform: translateX(1.250em);
}

.ui-inputswitch.ui-state-disabled .ui-inputswitch-slider,
.ui-inputswitch-readonly .ui-inputswitch-slider {
    cursor: default;
}
.ui-inputtext {
    margin: 0;
    outline: medium none;
    padding: .25em;
    font-weight: normal;
}

.ui-widget-header .ui-inputtext,
.ui-widget-content .ui-inputtext {
    font-weight: normal;
}

.ui-fluid .ui-inputtext {
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing:border-box;
    -moz-box-sizing: border-box;
}

.ui-inputgroup {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}

.ui-inputgroup .ui-inputgroup-addon {
    display: inline-block;
    text-align: center;
    min-width: 1.5em;
    padding: .25em;
    border-width: 1px;
    border-style: solid;
}

.ui-inputgroup .ui-inputgroup-addon + .ui-inputgroup-addon {
    border-left: 0 none;
}

.ui-inputgroup .ui-inputtext {
    padding-left: .5em;
}

.ui-inputgroup .ui-inputtext:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0 none;
}

.ui-inputgroup .ui-inputtext:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
}

.ui-inputgroup .ui-button {
    margin-right: 0;
    border-radius: 0;
}

.ui-fluid .ui-inputgroup .ui-button {
    width: auto;
}

.ui-fluid .ui-inputgroup .ui-inputtext {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}

.ui-inputgroup .ui-chkbox,
.ui-inputgroup .ui-radiobutton {
    margin-right: 0;
    vertical-align: bottom;
}

/* Floating Label */
.ui-float-label {
    display: block;
    position:relative;
}

.ui-float-label > label {
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left: .25em;
  top: 50%;
  margin-top: -.5em;
  transition: 0.3s ease all;
  -moz-transition: 0.3s ease all;
  -webkit-transition: 0.3s ease all;
  color: #898989;
  line-height: 1;
}

/* breaks firefox so defined separately */
.ui-float-label > input:-webkit-autofill ~ label {
    top:-.75em;
    font-size:12px;
}

.ui-float-label > input:focus ~ label,
.ui-float-label > input.ui-state-filled ~ label,
.ui-float-label > .ui-inputwrapper-focus ~ label,
.ui-float-label > .ui-inputwrapper-filled ~ label {
  top:-.75em;
  font-size:12px;
}



.ui-inputtextarea-resizable {
    overflow:hidden;
    resize:none;
}

.ui-fluid .ui-inputtextarea {
    width:100%;
}

.ui-float-label > textarea ~ label {
    left: .25em;
    top: .75em;
}

/* breaks firefox so defined separately */
.ui-float-label textarea:-webkit-autofill ~ label {
    top:-.75em;
    font-size:12px;
}

.ui-float-label textarea:focus ~ label,
.ui-float-label textarea.ui-state-filled ~ label {
    top: -.75em;
    font-size: 12px;
}
.ui-lightbox {
    position: fixed;
    display: none;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

.ui-lightbox-content-wrapper {
    position: relative;
}

.ui-lightbox-content {
    position: relative;
    margin: 0;
    padding: 0;
    background-color: #000000;
}

.ui-lightbox-nav-right, .ui-lightbox-nav-left {
   position: absolute;
   top: 50%;
   cursor: pointer;
}

.ui-lightbox-nav-left {
   left: 0;
}

.ui-lightbox-nav-right {
   right: 0;
}

.ui-lightbox-loading .ui-lightbox-content {
    background: url("./images/loading.gif") #000000 center center no-repeat;
}

.ui-lightbox-caption {
    padding: 0.2em 0.4em;
    display: none;
}

.ui-lightbox-caption-text {
    margin: 0.3em 0 0.1em 0;
    float:left;
}

.ui-lightbox-close {
    float:right;
    margin: 0;
    padding: .125em;
}

.ui-lightbox-close.ui-state-hover {
    padding: 0;
}

.ui-lightbox-nav-left, .ui-lightbox-nav-right {
    opacity: .5;
}

.ui-lightbox-nav-left:hover, .ui-lightbox-nav-right:hover{
    opacity: 1;
}
.ui-listbox {
    padding: .25em;
    width: 10em;
}

.ui-listbox .ui-listbox-list-wrapper {
    overflow:auto;
}

.ui-listbox .ui-listbox-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.ui-listbox .ui-listbox-item {
    padding: .25em;
    border: 0 none;
    cursor: pointer;
    font-weight: normal;
    margin-bottom: 1px;
}

.ui-listbox .ui-listbox-item > span {
    vertical-align: middle;
}

.ui-listbox .ui-listbox-item:last-child {
    margin-bottom: 0;
}

.ui-listbox.ui-state-disabled .ui-listbox-item {
    cursor: default;
}

.ui-listbox-header {
    margin-bottom: 0.3em;
    padding: .125em .2em;
    position: relative;
}

.ui-listbox-header .ui-chkbox {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
}

.ui-listbox-header .ui-listbox-filter-container {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    width: 100%;
}

.ui-listbox-header.ui-listbox-header-w-checkbox .ui-listbox-filter-container {
    width: calc(100% - 2em);
}

.ui-listbox-header .ui-listbox-filter-container .ui-listbox-filter-icon {
    position: absolute;
    top: .25em;
    left: .25em;
}

.ui-listbox-header .ui-inputtext {
    padding: .125em .125em .125em 1.25em;
    width: 100%;
}

.ui-listbox-footer {
    padding: .125em .2em;
}
.ui-megamenu {
    padding: .25em;
}

.ui-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.ui-megamenu-root-list > .ui-menuitem {
    position: relative;
}

.ui-megamenu .ui-menuitem-link {
    padding: .25em;
    display: block;
    text-decoration: none;
}

.ui-megamenu .ui-menuitem-icon {
    margin-right: .25em;
    vertical-align: middle;
}

.ui-megamenu .ui-menuitem-text {
    vertical-align: middle;
}

.ui-megamenu-panel {
    display: none;
    position: absolute;
    width: auto;
}

.ui-megamenu-root-list > .ui-menuitem-active > .ui-megamenu-panel {
    display: block;
}

.ui-megamenu-panel .ui-menuitem {
    margin: .125em 0;
}

.ui-megamenu-submenu {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 12.5em;
}

.ui-megamenu-submenu-header {
    padding: .25em;
}

/* Horizontal */
.ui-megamenu-horizontal .ui-megamenu-root-list > .ui-menuitem {
    display: inline-block;
}

.ui-megamenu-horizontal .ui-megamenu-root-list > .ui-menuitem > .ui-menuitem-link > .ui-submenu-icon {
    vertical-align: middle;
    margin-left: .25em;
}

/* Vertical */
.ui-megamenu-vertical {
    width: 12.5em;
}

.ui-megamenu-vertical .ui-megamenu-root-list > .ui-menuitem {
    display: block;
}

.ui-megamenu-vertical .ui-megamenu-root-list > .ui-menuitem > .ui-menuitem-link {
    position: relative;
}

.ui-megamenu-vertical .ui-megamenu-root-list > .ui-menuitem > .ui-menuitem-link > .ui-submenu-icon {
    position: absolute;
    width: 1em;
    height: 1em;
    top: 50%;
    right: 0;
    margin-top: -.5em;
}

.ui-megamenu .ui-g {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
}
.ui-menu {
    width: 12.5em;
    padding: .25em;
}

.ui-menu.ui-menu-dynamic {
    position: absolute;
}

.ui-menu .ui-menu-separator {
    border-width: 1px 0 0 0;
}

.ui-menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.ui-menu .ui-submenu-header {
    padding: .25em .5em;
    margin: .125em 0;
}

.ui-menu .ui-menuitem {
    margin: .125em 0;
}

.ui-menu .ui-menuitem-link {
    cursor: pointer;
    padding: .25em;
    display: block;
    text-decoration: none;
}

.ui-menu .ui-menuitem-icon {
    margin-right: .25em;
    vertical-align: middle;
}

.ui-menu .ui-menuitem-text {
    vertical-align: middle;
}
.ui-message {
    border: 1px solid;
    margin: 0px .25em;
    padding: .25em .5em;
    display: inline-block;
    vertical-align: top;
}

.ui-message .ui-message-icon,
.ui-message .ui-message-text {
    vertical-align: middle;
}

.ui-fluid .ui-message {
    display: block;
}
.ui-menubar {
    padding: .25em;
}

.ui-menubar:after {
    content: "";
    clear: both;
    display: table;
}

.ui-menubar ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.ui-menubar .ui-menuitem-link {
    display: block;
    padding: .25em;
    position: relative;
    text-decoration: none;
}

.ui-menubar .ui-menuitem-icon {
    margin-right: .25em;
}

.ui-menubar .ui-menubar-root-list {
    display: inline-block;
}

.ui-menubar .ui-menubar-root-list > .ui-menuitem {
    display: inline-block;
    position: relative;
}

.ui-menubar .ui-menubar-root-list > .ui-menuitem > .ui-menuitem-link {
    padding: .5em;
}

.ui-menubar .ui-menubar-root-list > .ui-menuitem > .ui-menuitem-link > .ui-submenu-icon {
    vertical-align: middle;
    margin-left: .25em;
}

.ui-menubar .ui-menubar-root-list > li ul {
    display: none;
}

.ui-menubar .ui-menubar-root-list > .ui-menu-separator {
    display: inline-block;
    vertical-align: middle;
    height: 1.5em;
}

.ui-menubar .ui-submenu-list {
    display: none;
    position: absolute;
    min-width: 12.5em;
    padding: .25em;
}

.ui-menubar .ui-submenu-list .ui-menuitem {
    margin: .125em 0;
    position: relative;
}

.ui-menubar .ui-menuitem-icon {
    margin-right: .25em;
    vertical-align: middle;
}

.ui-menubar .ui-menuitem-text {
    vertical-align: middle;
}

.ui-menubar .ui-submenu-list .ui-menuitem-link .ui-submenu-icon {
    position: absolute;
    margin-top: -.5em;
    right: 0;
    top: 50%;
}

.ui-menubar .ui-menuitem-active > .ui-submenu > .ui-submenu-list {
    display: block;
}

.ui-menubar .ui-menubar-custom {
    float: right;
    padding: .25em;
}
.ui-messages {
    border: 1px solid;
    margin: .5em 0;
    padding: 1em 1em 1em .5em;
    position: relative;
    display: flex;
}

.ui-messages .ui-messages-icon {
    display:inline-block;
    padding: 0;
    vertical-align: middle;
    font-size: 2em;
}

.ui-messages .ui-messages-summary {
    font-weight: bold;
    margin-left: .25em;
}

.ui-messages .ui-messages-detail {
    margin-left: .25em;
}

.ui-messages ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: inline-block;
    vertical-align: middle;
    display: flex;
    align-items: center;
}

.ui-messages ul > li {
    padding: .25em;
}

.ui-messages.ui-messages-noicon ul {
    margin: 0 1.5em 0 0;
}

.ui-messages .ui-messages-close {
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
}
.ui-multiselect {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
}

.ui-multiselect .ui-multiselect-trigger {
    border-right: none;
    border-top: none;
    border-bottom: none;
    cursor: pointer;
    width: 1.5em;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 .25em;
}

.ui-multiselect .ui-multiselect-trigger  .ui-multiselect-trigger-icon {
    top: 50%;
    left: 50%;
    margin-top: -.5em;
    margin-left: -.5em;
    position: absolute;
}

.ui-multiselect .ui-multiselect-label-container  {
    overflow: hidden;
}

.ui-multiselect .ui-multiselect-label  {
    display: block;
    padding: .25em 2em .25em .25em;
    width: auto;
    border: none;
    cursor: pointer;
    text-overflow: ellipsis;
    overflow: hidden;
}

.ui-multiselect.ui-state-disabled .ui-multiselect-trigger,
.ui-multiselect.ui-state-disabled .ui-multiselect-label {
    cursor: auto
}

.ui-multiselect-panel {
    padding: 0.2em;
    position: absolute;
    min-width: 12em;
}

.ui-multiselect .ui-multiselect-panel {
    min-width: 100%;
}

.ui-multiselect-panel .ui-multiselect-items-wrapper {
    overflow: auto;
    position: relative;
    padding: 0.2em 0;
}

.ui-multiselect-panel .ui-multiselect-list {
    border: 0 none;
}

.ui-multiselect-panel .ui-multiselect-item {
    border: 0 none;
    cursor: pointer;
    font-weight: normal;
    margin: 1px 0;
    padding: .125em .25em;
    text-align: left;
    white-space: nowrap;
    display: block;
    position: relative;
}

.ui-multiselect-panel .ui-multiselect-empty-message {
    padding: .5em;
}

.ui-multiselect-panel .ui-multiselect-item .ui-chkbox {
    display: inline-block;
    vertical-align: middle;
}

.ui-multiselect-panel .ui-multiselect-item span {
    display: inline-block;
    vertical-align: middle;
}

.ui-multiselect-header {
    margin-bottom: 0.3em;
    padding: .25em;
    position: relative;
    text-align: left;
    min-height: 2em;
}

.ui-multiselect-header .ui-chkbox {
    display: inline-block;
    vertical-align: middle;
    cursor:pointer;
}

.ui-multiselect-header .ui-multiselect-filter-container {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 65%;
}

.ui-multiselect-header.ui-multiselect-header-no-toggleall .ui-multiselect-filter-container {
    width: 85%;
}

.ui-multiselect-header .ui-multiselect-filter-container .ui-multiselect-filter-icon {
    position: absolute;
    top: .25em;
    left: .125em;
}

.ui-multiselect-header .ui-inputtext {
    padding: .125em .125em .125em 1.25em;
    width: 100%;
}

.ui-multiselect-header .ui-multiselect-close {
    position: absolute;
    right: .375em;
    top: .375em;
    display: block;
    border: 0 none;
    cursor: pointer;
}

.ui-multiselect-header a.ui-multiselect-all,
.ui-multiselect-header a.ui-multiselect-none {
    float:left;
    margin-right: 10px;
    display: block;
}

.ui-multiselect-footer {
    padding: .25em;
}

.ui-fluid .ui-multiselect {
    width: 100%;
    box-sizing: border-box;
}


.ui-orderlist {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.ui-orderlist-controls-left {
    flex-direction: row;
}

.ui-orderlist-controls-right {
    flex-direction: row-reverse;
}

.ui-orderlist-controls,
.ui-orderlist-list-container {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
}
.ui-orderlist-controls {
    padding: 0 .25em;
    width: 16.66666%;
    align-self: center;
}

.ui-orderlist-controls .ui-button.ui-button-icon-only {
    display: block;
    margin-bottom: 0.25em;
    width: 100%;
}

.ui-orderlist-list-container {
    width: 83.33333%;
}

.ui-orderlist-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow:auto;
    height: 12.5em;
}

.ui-orderlist-caption {
    text-align: center;
	padding: .5em .75em;
    border-bottom: 0 none;
}

.ui-orderlist-item {
    margin: 1px;
    padding: .125em;
    cursor: pointer;
    border: 0 none;
    font-weight: inherit;
}

.ui-orderlist-filter-container {
    position: relative;
    width: 100%;
    padding: .5em .6em;
    border-bottom: 0 none;
}

.ui-orderlist-filter-container .ui-inputtext {
    text-indent: 1.1em;
    width: 100%;
}

.ui-orderlist-filter-container .ui-orderlist-filter-icon {
    position: absolute;
    top: 50%;
    left: 1em;
    margin-top: -.6em;
}

.ui-orderlist.ui-state-disabled .ui-orderlist-item,
.ui-orderlist.ui-state-disabled .ui-button {
    cursor: default;
}

.ui-orderlist.ui-state-disabled .ui-orderlist-list {
    overflow:hidden;
}

.ui-orderlist .ui-orderlist-droppoint {
    height: 6px;
    list-style-type: none;
}

@media (max-width: 767px) {
    .ui-orderlist-controls {
        width: 100%;
        text-align: center;
    }

    .ui-orderlist .ui-orderlist-list-container {
        width: 100%;
    }

    .ui-orderlist .ui-orderlist-controls .ui-button.ui-button.ui-button-icon-only {
        display: inline-block;
        width: 20%;
        margin-right: .25em;
    }
}
.ui-overlaypanel {
    padding: 0;
    margin: 0;
    position: absolute;
    margin-top: 10px;
}

.ui-overlaypanel-flipped {
    margin-top: 0;
    margin-bottom: 10px;
}

.ui-overlaypanel-content {
    padding: 0.5em 1em;
}

.ui-overlaypanel-close {
    position: absolute;
    top: -1em;
    right: -1em;
    width: 2em;
    height: 2em;
    line-height: 2em;
    text-align: center;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    border-radius: 100%;
    cursor: pointer;
}

.ui-overlaypanel-close-icon {
    line-height: inherit;
}

.ui-overlaypanel:after, .ui-overlaypanel:before {
	bottom: 100%;
	left: 1.25em;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}

.ui-overlaypanel:after {
	border-width: 8px;
	margin-left: -8px;
}

.ui-overlaypanel:before {
	border-width: 10px;
	margin-left: -10px;
}

.ui-overlaypanel-shifted:after, .ui-overlaypanel-shifted:before {
    left: auto;
    right: 1.25em;
    margin-left: auto;
}

.ui-overlaypanel-shifted:after {
    margin-right: -8px;
}

.ui-overlaypanel:before {
    margin-right: -10px;
}

.ui-overlaypanel-flipped:after, .ui-overlaypanel-flipped:before {
    bottom: auto;
    top: 100%;
}

.ui-overlaypanel.ui-overlaypanel-flipped:after {
    border-bottom-color: transparent;
}

.ui-overlaypanel.ui-overlaypanel-flipped:before {
    border-bottom-color: transparent
}
.ui-organizationchart .ui-organizationchart-table {
    border-spacing: 0;
    border-collapse: separate;
    margin: 0 auto;
}

.ui-organizationchart .ui-organizationchart-table > tr > td {
    text-align: center;
    vertical-align: top;
    padding: 0;
    padding: 0 .75em;
}

.ui-organizationchart .ui-organizationchart-node-content {
    padding: .5em .75em;
    display: inline-block;
    position: relative;
}

.ui-organizationchart .ui-organizationchart-node-content .ui-node-toggler {
    position: absolute;
    bottom: -9px;
    margin-left: -8px;
    z-index: 2;
    left: 50%;
}

.ui-organizationchart .ui-organizationchart-line-down {
    margin: 0 auto;
    height: 20px;
    width: 1px;
    float: none;
}

.ui-organizationchart .ui-organizationchart-line-right {
    float: none;
    border-radius: 0px;
}

.ui-organizationchart .ui-organizationchart-line-left {
    float: none;
    border-radius: 0;
}

.ui-organizationchart .ui-organizationchart-node-content.ui-organizationchart-selectable-node {
    cursor: pointer;
}

.ui-paginator {
    margin: 0;
    text-align: center;
    padding: .125em;
}

.ui-paginator .ui-paginator-top {
    border-bottom: 0 none;
}

.ui-paginator .ui-paginator-bottom {
    border-top:0 none;
}

.ui-paginator .ui-paginator-left-content {
    float: left;
}

.ui-paginator .ui-paginator-right-content {
    float: right;
}

.ui-paginator .ui-paginator-page,
.ui-paginator .ui-paginator-pages,
.ui-paginator .ui-paginator-next,
.ui-paginator .ui-paginator-last,
.ui-paginator .ui-paginator-first,
.ui-paginator .ui-paginator-prev,
.ui-paginator .ui-paginator-current {
    display: inline-block;
    min-width: 1.5em;
    height: 1.5em;
    line-height: 1.5em;
	zoom: 1;
	margin-left: .063em;
	margin-right: .063em;
	text-decoration: none;
    vertical-align: middle;
    text-align: center;
    position: relative;
}

.ui-paginator .ui-paginator-pages {
    width: auto;
    line-height: 1;
}

.ui-paginator .ui-paginator-icon {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1em;
    height: 1em;
    margin-top: -.5em;
    margin-left: -.5em;
}

.ui-paginator .ui-paginator-page,
.ui-paginator .ui-paginator-next,
.ui-paginator .ui-paginator-last,
.ui-paginator .ui-paginator-first,
.ui-paginator .ui-paginator-prev{
    cursor: pointer;
}

.ui-paginator .ui-paginator-current,
.ui-paginator .ui-paginator-rpp-options {
	margin-left: 1em;
	margin-right: 1em;
    background-image: none;
}

.ui-paginator .ui-paginator-jtp-select option,
.ui-paginator .ui-paginator-rpp-options option {
    background-image: none;
    border: 0 none;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
}

.ui-paginator a.ui-state-disabled {
    outline: 0 none;
}

.ui-paginator .ui-dropdown {
    min-width: 4em;
    margin-left: .375em;
}

.ui-fluid .ui-paginator .ui-dropdown {
    width: auto;
}
.ui-panel {
	padding: 0.2em;
}

.ui-panel .ui-panel-titlebar {
	padding: .5em .75em;
}

.ui-panel .ui-panel-titlebar.ui-panel-titlebar-clickable {
    cursor: pointer;
}

.ui-panel .ui-panel-titlebar-icon {
	float: right;
    cursor: pointer;
}

.ui-panel .ui-panel-titlebar-icon {
	margin-left: 0.2em;
    margin-top: -0.1em;
}

.ui-panel .ui-panel-content {
	border: 0;
    background: none;
    padding: .5em .75em;
}

.ui-panel .ui-panel-footer {
	border-width: 1px 0 0;
	padding: .25em .5em;
	text-align:left;
}

.ui-panel-content-wrapper-overflown {
    overflow: hidden;
}
.ui-panelmenu {
    width: auto;
}

.ui-panelmenu .ui-menu-separator {
    border-width: 1px 0 0 0;
}

.ui-panelmenu .ui-panelmenu-content-wrapper {
    overflow: hidden;
}

.ui-panelmenu .ui-panelmenu-header {
    margin: -1px 0 0 0;
    zoom: 1;
}

.ui-panelmenu .ui-panelmenu-header-link {
    padding: .5em;
    display: block;
    text-decoration: none;
}

.ui-panelmenu .ui-panelmenu-icon {
    vertical-align: middle;
}

.ui-panelmenu .ui-menuitem-text {
    vertical-align: middle;
}

.ui-panelmenu .ui-menuitem-icon {
    margin-right: .25em;
    vertical-align: middle;
}

.ui-panelmenu .ui-panelmenu-content {
    padding: 0.25em;
    border-top: 0;
    margin-bottom: 1px;
}

.ui-panelmenu .ui-submenu-list {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-left: 1.5em;
}

.ui-panelmenu .ui-panelmenu-content > .ui-panelmenu-root-submenu >.ui-submenu-list {
    margin-left: 0;
}

.ui-panelmenu .ui-menuitem {
    overflow: hidden;
    margin: .125em 0;
}

.ui-panelmenu .ui-menuitem-link {
    padding: .25em;
    display: block;
    text-decoration: none;
}
.ui-password-panel {
    padding: .25em .5em;
    position: absolute;
}

.ui-password-panel .ui-password-meter {
    height: 10px;
    background:transparent url("./images/password-meter.png") no-repeat left top;
    padding: 0;
    margin: 0;
}

.ui-password-info {
    margin-top: .25em;
}

/* Overlay Animations */
.ui-password-panel {
    -webkit-transform: translateY(5%);
    -ms-transform: translateY(5%);
    transform: translateY(5%);
    opacity: 0;
    -webkit-transition: transform .3s, opacity .3s;
    transition: transform .3s, opacity .3s;
}

.ui-password-panel-visible {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
}

.ui-password-panel-hidden {
    opacity: 0;
    -webkit-transform: translateY(5%);
    -ms-transform: translateY(5%);
    transform: translateY(5%);
    -webkit-transition: transform .3s, opacity .15s;
    transition: transform .3s, opacity .15s;
}
.ui-progressbar {
    height: 1.2em;
    text-align: left;
    position: relative;
    overflow: hidden;
}

.ui-progressbar-determinate .ui-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    border: 0 none;
}

.ui-progressbar-determinate .ui-progressbar-value-animate {
    -webkit-transition: width 1s ease-in-out;
    -moz-transition: width 1s ease-in-out;
    -o-transition: width 1s ease-in-out;
    transition: width 1s ease-in-out;
}

.ui-progressbar-determinate .ui-progressbar-label {
    text-align: center;
    height: 100%;
    width: 100%;
    position: absolute;
    display: none;
    font-weight: bold;
}

.ui-progressbar-indeterminate {
    height: .5em;
}

.ui-progressbar-indeterminate .ui-progressbar-value {
    border: 0 none;
}

.ui-progressbar-indeterminate .ui-progressbar-value::before {
      content: '';
      position: absolute;
      background-color: inherit;
      top: 0;
      left: 0;
      bottom: 0;
      will-change: left, right;
      -webkit-animation: ui-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
              animation: ui-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.ui-progressbar-indeterminate .ui-progressbar-value::after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: ui-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
            animation: ui-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    -webkit-animation-delay: 1.15s;
            animation-delay: 1.15s;
}

@-webkit-keyframes ui-progressbar-indeterminate-anim {
  0% {
    left: -35%;
    right: 100%; }
  60% {
    left: 100%;
    right: -90%; }
  100% {
    left: 100%;
    right: -90%; }
}
@keyframes ui-progressbar-indeterminate-anim {
  0% {
    left: -35%;
    right: 100%; }
  60% {
    left: 100%;
    right: -90%; }
  100% {
    left: 100%;
    right: -90%; }
}

@-webkit-keyframes ui-progressbar-indeterminate-anim-short {
  0% {
    left: -200%;
    right: 100%; }
  60% {
    left: 107%;
    right: -8%; }
  100% {
    left: 107%;
    right: -8%; }
}
@keyframes ui-progressbar-indeterminate-anim-short {
  0% {
    left: -200%;
    right: 100%; }
  60% {
    left: 107%;
    right: -8%; }
  100% {
    left: 107%;
    right: -8%; }
}
.ui-picklist > div {
    float: left;
}

.ui-picklist .ui-picklist-buttons {
    height: 12.5em;
    padding: 0 .25em;
}

.ui-picklist .ui-picklist-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow:auto;
    height: 12.5em;
    width: 12.5em;
}

.ui-picklist .ui-picklist-list li {
    margin: 1px;
    padding: .125em;
}

.ui-picklist .ui-button {
    display:block;
    margin-bottom: 0.25em;
}

.ui-picklist .ui-button-text-icon-left {
    width: 100%;
}

.ui-picklist .ui-picklist-item {
    cursor: pointer;
    border: 0 none;
    font-weight: inherit;
}

.ui-picklist .ui-picklist-caption {
    text-align: center;
	padding: .5em .75em;
    border-bottom:0 none;
}

.ui-picklist table {
    width: 100%;
    border-collapse:collapse;
}

.ui-picklist .ui-picklist-filter-container {
    position: relative;
    width: 100%;
    padding: .5em .6em;
    border-bottom: 0 none;
}

.ui-picklist .ui-picklist-filter-container .ui-picklist-filter {
    text-indent: 1.1em;
    width: 100%;
}

.ui-picklist .ui-picklist-filter-container .ui-picklist-filter-icon {
    position: absolute;
    top: 50%;
    left: 1em;
    margin-top: -.6em;
}

.ui-picklist {
    display: table;
}

.ui-picklist > div {
    float: none;
    display: table-cell;
    vertical-align: top;
}

.ui-picklist .ui-picklist-buttons {
    vertical-align: middle;
}

/* Vertical */
.ui-picklist.ui-picklist-vertical {
    display: table;
}

.ui-picklist.ui-picklist-vertical > div {
    float: none;
    display: table-row;
    vertical-align: top;
}

.ui-picklist.ui-picklist-vertical .ui-picklist-buttons {
    text-align:center;
    height: auto;
}

.ui-picklist.ui-picklist-vertical .ui-picklist-buttons .ui-button {
    display: inline-block;
}

.ui-picklist.ui-picklist-vertical .ui-button {
    margin-top: 0.25em;
}

.ui-picklist-outline {
    outline: 1px dotted black;
    z-index: 1;
}

.ui-picklist .ui-picklist-droppoint {
    height: 6px;
    list-style-type: none;
}

.ui-picklist .ui-picklist-list .ui-picklist-droppoint-empty {
    height: 100%;
    list-style-type: none;
}

.ui-picklist-list.ui-picklist-source,
.ui-picklist-list.ui-picklist-target {
    outline: none;
}

/* Responsive */
.ui-picklist.ui-picklist-responsive * {
    box-sizing: border-box;
}

.ui-picklist.ui-picklist-responsive {
    width: 100%;
}

.ui-picklist.ui-picklist-responsive .ui-picklist-listwrapper {
    width: 35%;
}

.ui-picklist.ui-picklist-responsive .ui-picklist-listwrapper.ui-picklist-listwrapper-nocontrols {
    width: 45%;
}

.ui-picklist.ui-picklist-responsive .ui-picklist-buttons {
    width: 10%;
}

.ui-picklist.ui-picklist-responsive .ui-picklist-buttons button {
    width: 100%;
}

.ui-picklist.ui-picklist-responsive .ui-picklist-list {
    width: auto;
}

/* Responsive */
@media (max-width: 40em) {
    .ui-picklist.ui-picklist-responsive {
        display: block;
    }

    .ui-picklist.ui-picklist-responsive > div {
        display: block;
        width: 100% !important;
    }

    .ui-picklist.ui-picklist-responsive .ui-picklist-buttons {
        text-align: center;
        height: auto;
        padding: .4em 0;
    }

    .ui-picklist.ui-picklist-responsive .ui-picklist-buttons button {
        display: inline-block;
        width: 20%;
        margin-bottom: 0;
        margin-right: .25em;
    }

    .ui-picklist.ui-picklist-responsive .ui-picklist-source-controls.ui-picklist-buttons {
        padding-bottom: .4em;
    }

    .ui-picklist.ui-picklist-responsive .ui-picklist-target-controls.ui-picklist-buttons {
        padding-top: .4em;
    }

    .ui-picklist.ui-picklist-responsive .ui-picklist-buttons .pi-angle-right::before {
        content: "\e930";
    }

    .ui-picklist.ui-picklist-responsive .ui-picklist-buttons .pi-angle-double-right::before {
        content: "\e92c";
    }

    .ui-picklist.ui-picklist-responsive .ui-picklist-buttons .pi-angle-left::before {
        content: "\e933";
    }

    .ui-picklist.ui-picklist-responsive .ui-picklist-buttons .pi-angle-double-left::before {
        content: "\e92f";
    }
}

.ui-progress-spinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.ui-progress-spinner::before {
    content: '';
    display: block;
    padding-top: 100%;
}

.ui-progress-spinner-svg {
    animation: ui-progress-spinner-rotate 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.ui-progress-spinner-circle {
    stroke-dasharray: 89,200;
    stroke-dashoffset: 0;
    stroke: #d62d20;
    animation: ui-progress-spinner-dash 1.5s ease-in-out infinite, ui-progress-spinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes ui-progress-spinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes ui-progress-spinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}

@keyframes ui-progress-spinner-color {
    100%,
    0% {
        stroke: #d62d20;
    }
    40% {
        stroke: #0057e7;
    }
    66% {
        stroke: #008744;
    }
    80%,
    90% {
        stroke: #ffa700;
    }
}
.ui-radiobutton {
    display:inline-block;
    cursor: pointer;
    vertical-align: middle;
    margin-right: .25em;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
}

.ui-radiobutton-box {
    width: 1.125em;
    height: 1.125em;
    line-height: 1.125em;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    border-radius: 100%;
    text-align: center;
    position: relative;
}

.ui-radiobutton-icon {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1em;
    height: 1em;
    margin-top: -.5em;
    margin-left: -.5em;
}

.ui-radiobutton {
    vertical-align: middle;
}
.ui-rating {
    font-size: 1.25em;
}
.ui-fluid .fc .ui-button {
    width: auto;
}
.ui-scrollpanel-wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    float: left;
}

.ui-scrollpanel-content {
    height: calc(100% + 18px);
    width: calc(100% + 18px);
    padding: 0 18px 18px 0;
    position: relative;
    overflow: auto;
    box-sizing: border-box;
}

.ui-scrollpanel-bar {
    position: relative;
    background: #c1c1c1;
    border-radius: 3px;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.25s linear;
}

.ui-scrollpanel-bar-y {
    width: 9px;
    top: 0;
}

.ui-scrollpanel-bar-x {
    height: 9px;
    bottom: 0;
}

.ui-scrollpanel-hidden {
    visibility: hidden;
}

.ui-scrollpanel:hover .ui-scrollpanel-bar,
.ui-scrollpanel:active .ui-scrollpanel-bar {
    opacity: 1;
}

.ui-scrollpanel-grabbed {
    -o-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
.ui-selectbutton {
    display: inline-block;
}

.ui-selectbutton.ui-state-error {
    padding: 0;
}

.ui-selectbutton .ui-button.ui-state-focus {
    outline: none;
}
.ui-sidebar {
    position: fixed;
    padding: .5em 1em;
    -webkit-transition: transform .3s;
    transition: transform .3s;
}

.ui-sidebar-left {
    top: 0;
    left: 0;
    width: 20em;
    height: 100%;
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
}

.ui-sidebar-right {
    top: 0;
    right: 0;
    width: 20em;
    height: 100%;
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
}

.ui-sidebar-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 10em;
    -webkit-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    transform: translateY(-100%);
}

.ui-sidebar-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10em;
    -webkit-transform: translateY(100%);
    -ms-transform: translateY(100%);
    transform: translateY(100%);
}

.ui-sidebar-full {
    width: 100%;
    height: 100%;
    left: 0;
    -webkit-transition: transform 0s;
    transition: transform 0s;
}

.ui-sidebar-left.ui-sidebar-active,
.ui-sidebar-right.ui-sidebar-active {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0)
}

.ui-sidebar-left.ui-sidebar-sm,
.ui-sidebar-right.ui-sidebar-sm {
    width: 20em;
}

.ui-sidebar-left.ui-sidebar-md,
.ui-sidebar-right.ui-sidebar-md {
    width: 40em;
}

.ui-sidebar-left.ui-sidebar-lg,
.ui-sidebar-right.ui-sidebar-lg {
    width: 60em;
}

.ui-sidebar-top.ui-sidebar-active,
.ui-sidebar-bottom.ui-sidebar-active {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0)
}

.ui-sidebar-top.ui-sidebar-sm,
.ui-sidebar-bottom.ui-sidebar-sm {
    height: 10em;
}

.ui-sidebar-top.ui-sidebar-md,
.ui-sidebar-bottom.ui-sidebar-md {
    height: 20em;
}

.ui-sidebar-top.ui-sidebar-lg,
.ui-sidebar-bottom.ui-sidebar-lg {
    height: 30em;
}

.ui-sidebar-mask {
    position: fixed;
    width: 100%;
    height: 100%;
}

.ui-sidebar-close {
    float: right;
}

.ui-sidebar-close {
    cursor: pointer;
}

@media screen and (max-width: 64em) {
    .ui-sidebar-left.ui-sidebar-lg,
    .ui-sidebar-left.ui-sidebar-md,
    .ui-sidebar-right.ui-sidebar-lg,
    .ui-sidebar-right.ui-sidebar-md {
        width: 20em;
    }
}

.ui-slidemenu {
    width: 12.5em;
    padding: .25em;
}

.ui-slidemenu.ui-slidemenu-dynamic {
    position: absolute;
}

.ui-slidemenu .ui-menu-separator {
    border-width: 1px 0 0 0;
}

.ui-slidemenu ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.ui-slidemenu .ui-slidemenu-rootlist {
    position: absolute;
    top: 0;
}

.ui-slidemenu .ui-submenu-list {
    display: none;
    position: absolute;
    top: 0;
    width: 12.5em;
    padding: .25em;
}

.ui-slidemenu .ui-menuitem-link {
    padding: .25em;
    display: block;
    position: relative;
    text-decoration: none;
}

.ui-slidemenu .ui-menuitem-icon {
    margin-right: .25em;
    vertical-align: middle;
}

.ui-slidemenu .ui-menuitem-text {
    vertical-align: middle;
}


.ui-slidemenu .ui-menuitem {
    position: relative;
    margin: .125em 0;
}

.ui-slidemenu .ui-menuitem-link .ui-submenu-icon {
    position: absolute;
    margin-top: -.5em;
    right: 0;
    top: 50%;
}

.ui-slidemenu .ui-slidemenu-wrapper {
    position: relative;
}

.ui-slidemenu .ui-slidemenu-content {
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
}

.ui-slidemenu-backward {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.25em;
    cursor: pointer;
    display: none;
}

.ui-slidemenu-backward .ui-slidemenu-backward-icon {
    vertical-align: middle;
}

.ui-slidemenu-backward span {
    vertical-align: middle;
}

.ui-slidemenu .ui-menuitem-active {
    position: static;
}

.ui-slidemenu .ui-menuitem-active > .ui-submenu > .ui-submenu-list {
    display: block;
}

.ui-slidemenu ul:not(.ui-active-submenu) > .ui-menuitem:not(.ui-menuitem-active),
.ui-slidemenu .ui-active-submenu > .ui-menuitem-active > .ui-submenu > .ui-submenu-list {
    display: none;
}

.ui-slidemenu .ui-active-submenu > .ui-menuitem-active ~ .ui-menuitem {
    display: block;
}
.ui-slider {
	position: relative;
	text-align: left;
}
.ui-slider .ui-slider-handle {
	position: absolute;
	width: 1.2em;
	height: 1.2em;
	cursor: default;
	-ms-touch-action: none;
	touch-action: none;
    z-index: 1;
}
.ui-slider .ui-slider-handle.ui-slider-handle-active {
    z-index: 2;
}
.ui-slider .ui-slider-range {
	position: absolute;
	font-size: .7em;
	display: block;
	border: 0;
	background-position: 0 0;
}

.ui-slider-horizontal {
	height: .8em;
}
.ui-slider-horizontal .ui-slider-handle {
	top: -.25em;
	margin-left: -.6em;
}
.ui-slider-horizontal .ui-slider-range {
	top: 0;
	height: 100%;
}
.ui-slider-horizontal .ui-slider-range-min {
	left: 0;
}
.ui-slider-horizontal .ui-slider-range-max {
	right: 0;
}

.ui-slider-vertical {
	width: .8em;
	height: 100px;
}
.ui-slider-vertical .ui-slider-handle {
	left: -.25em;
	margin-left: 0;
	margin-bottom: -.6em;
}
.ui-slider-vertical .ui-slider-range {
	left: 0;
	width: 100%;
}
.ui-slider-vertical .ui-slider-range-min {
	bottom: 0;
}
.ui-slider-vertical .ui-slider-range-max {
	top: 0;
}

.ui-slider-animate .ui-slider-handle {
    transition: left .3s;
}
.ui-spinner {
    display: inline-block;
    overflow: visible;
    padding: 0;
    position: relative;
    vertical-align: middle;
}

.ui-spinner-input {
    vertical-align: middle;
    padding-right: 1.5em;
}

.ui-spinner-button {
    cursor: default;
    display: block;
    height: 50%;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    right: 0;
    text-align: center;
    vertical-align: middle;
    width: 1.5em;
}

.ui-spinner .ui-spinner-button-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -.5em;
    margin-left: -.5em;
    width: 1em;
}

.ui-spinner-up {
    top: 0;
}

.ui-spinner-down {
    bottom: 0;
}

/* Fluid */
.ui-fluid .ui-spinner {
    width: 100%;
}

.ui-fluid .ui-spinner .ui-spinner-input {
    padding-right: 2em;
    width: 100%;
}

.ui-fluid .ui-spinner .ui-spinner-button {
    width: 1.5em;
}

.ui-fluid .ui-spinner .ui-spinner-button .ui-spinner-button-icon {
    left: .7em;
}
.ui-splitbutton {
    position: relative;
    display: inline-block;
    zoom: 1;
}

.ui-splitbutton .ui-button.ui-splitbutton-menubutton {
    width: 2em;
    vertical-align: top;
}

.ui-splitbutton.ui-state-disabled button {
    cursor: default;
}

.ui-fluid .ui-splitbutton {
    width: 100%;
}

.ui-fluid .ui-splitbutton .ui-button:first-child {
    width: calc(100% - 2em);
}

.ui-fluid .ui-splitbutton .ui-button.ui-splitbutton-menubutton {
    width: 2em;
}

.ui-splitbutton .ui-menuitem-link {
    cursor: pointer;
}
.ui-steps ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.ui-steps .ui-steps-item {
    float: left;
    box-sizing: border-box;
    cursor: pointer;
}

.ui-steps.ui-steps-readonly .ui-steps-item {
    cursor: auto;
}

.ui-steps .ui-steps-item .ui-menuitem-link {
    text-decoration: none;
    display: block;
    padding: 1em;
    position: relative;
    text-align: center;
}

.ui-steps .ui-steps-item.ui-state-highlight .ui-menuitem-link,
.ui-steps .ui-steps-item.ui-state-disabled .ui-menuitem-link {
    cursor: default;
}

.ui-steps .ui-steps-number {
    font-size: 2em;
    display: block;
}

.ui-steps .ui-steps-title {
    display: block;
    white-space: nowrap;
}

/* Responsive */
@media (max-width: 40em) {
    .ui-steps .ui-steps-item .ui-menuitem-link {
        padding: 0.5em;
    }

    .ui-steps .ui-steps-item .ui-steps-title {
        display: none;
    }
}
.ui-table {
    position: relative;
}

.ui-table table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
}

.ui-table .ui-table-thead > tr > th,
.ui-table .ui-table-tbody > tr > td,
.ui-table .ui-table-tfoot > tr > td {
    padding: .25em .5em;
}

.ui-table .ui-sortable-column {
    cursor: pointer;
}

.ui-table p-sorticon {
    vertical-align: middle;
}

.ui-table-auto-layout > .ui-table-wrapper {
    overflow-x: auto;
}

.ui-table-auto-layout > .ui-table-wrapper > table {
    table-layout: auto;
}

/* Sections */
.ui-table-caption,
.ui-table-summary {
    padding: .25em .5em;
    text-align: center;
    font-weight: bold;
}

.ui-table-caption {
    border-bottom: 0 none;
}

.ui-table-summary {
    border-top: 0 none;
}

/* Paginator */
.ui-table .ui-paginator-top {
    border-bottom: 0 none;
}

.ui-table .ui-paginator-bottom {
    border-top: 0 none;
}

/* Scrollable */
.ui-table-scrollable-wrapper {
    position: relative;
}
.ui-table-scrollable-header,
.ui-table-scrollable-footer {
    overflow: hidden;
    border: 0 none;
}

.ui-table-scrollable-body {
    overflow: auto;
    position: relative;
}

.ui-table-virtual-table {
    position: absolute;
}

.ui-table-loading-virtual-table {
    display: none;
}

/* Frozen Columns */
.ui-table-frozen-view .ui-table-scrollable-body {
    overflow: hidden;
}

.ui-table-frozen-view > .ui-table-scrollable-body > table > .ui-table-tbody > tr > td:last-child {
    border-right: 0 none;
}

.ui-table-unfrozen-view {
    position: absolute;
    top: 0px;
}

/* Resizable */
.ui-table-resizable > .ui-table-wrapper {
    overflow-x: auto;
}

.ui-table-resizable .ui-table-thead > tr > th,
.ui-table-resizable .ui-table-tfoot > tr > td,
.ui-table-resizable .ui-table-tbody > tr > td {
    overflow: hidden;
}

.ui-table-resizable .ui-resizable-column {
    background-clip: padding-box;
    position: relative;
}

.ui-table-resizable-fit .ui-resizable-column:last-child .ui-column-resizer {
    display: none;
}

.ui-table .ui-column-resizer {
    display: block;
    position: absolute !important;
    top: 0;
    right: 0;
    margin: 0;
    width: .5em;
    height: 100%;
    padding: 0px;
    cursor:col-resize;
    border: 1px solid transparent;
}

.ui-table .ui-column-resizer-helper {
    width: 1px;
    position: absolute;
    z-index: 10;
    display: none;
}

/* Edit */
.ui-table .ui-table-tbody > tr > td.ui-editing-cell {
    padding: 0;
}

.ui-table .ui-table-tbody > tr > td.ui-editing-cell p-celleditor >  * {
    width: 100%;
}

/* Reorder */
.ui-table-reorder-indicator-up,
.ui-table-reorder-indicator-down {
    position: absolute;
    display: none;
}

/* Responsive */
.ui-table-responsive .ui-table-tbody > tr > td .ui-column-title {
    display: none;
}

@media screen and (max-width: 40em) {
    .ui-table-responsive .ui-table-thead > tr > th,
    .ui-table-responsive .ui-table-tfoot > tr > td {
        display: none !important;
    }

    .ui-table-responsive colgroup {
        display: none !important;
    }

    .ui-table-responsive .ui-table-tbody > tr > td {
        text-align: left;
        display: block;
        border: 0 none;
        width: 100% !important;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		float: left;
		clear: left;
    }

    .ui-table-responsive .ui-table-tbody > tr > td .ui-column-title {
        padding: .4em;
        min-width: 30%;
        display: inline-block;
        margin: -.4em 1em -.4em -.4em;
        font-weight: bold;
    }
}

/* Loader */
.ui-table-loading {
    position: absolute;
    width: 100%;
    height: 100%;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)";
    opacity: 0.1;
    z-index: 1;
}

.ui-table-loading-content {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    margin-top: -1em;
    margin-left: -1em;
}

.ui-table .ui-table-loading-icon {
    font-size: 2em;
}

.ui-tabview {
    padding: .25em;
}

.ui-tabview .ui-tabview-nav {
    margin: 0;
}

.ui-tabview .ui-tabview-nav li {
    list-style: none;
    float: left;
    position: relative;
    margin: 0 .125em 1px 0;
    padding: 0;
    white-space: nowrap;
}

.ui-tabview .ui-tabview-nav li a {
    float: left;
    padding: .5em 1em;
    text-decoration: none;
}

.ui-tabview .ui-tabview-nav li.ui-tabview-selected a,
.ui-tabview .ui-tabview-nav li.ui-state-disabled a,
.ui-tabview .ui-tabview-nav li.ui-state-processing a {
    cursor: text;
}

.ui-tabview .ui-tabview-nav li a,
.ui-tabview.ui-tabview-collapsible .ui-tabview-nav li.ui-tabview-selected a {
    cursor: pointer;
}

.ui-tabview .ui-tabview-panel {
    border-width: 0;
    padding: 1em;
    background: none;
}

.ui-tabview .ui-tabview-nav li {
    display: block;
}

.ui-tabview .ui-tabview-nav li .ui-tabview-left-icon {
    margin-right: .25em;
    vertical-align: middle;
}

.ui-tabview .ui-tabview-nav li .ui-tabview-right-icon {
    margin-left: .25em;
    vertical-align: middle;
}

.ui-tabview .ui-tabview-title {
    vertical-align: middle;
}

.ui-tabview .ui-tabview-nav li .ui-tabview-close {
    margin: 0.5em 0.3em 0 0;
    cursor: pointer;
}

/* per orientation settings */
/* top and bottom */
.ui-tabview.ui-tabview-top > .ui-tabview-nav li {
    border-bottom: 0;
    top: 1px;
}

.ui-tabview.ui-tabview-top > .ui-tabview-nav {
    padding: .2em .2em 0;
}

.ui-tabview.ui-tabview-bottom > .ui-tabview-nav {
    padding: 0 .2em .2em;
}

.ui-tabview.ui-tabview-bottom > .ui-tabview-nav li {
    border-top: 0;
}

/* left and right*/
.ui-tabview-left::after,
.ui-tabview-right::after {
    clear:both;
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
}

.ui-tabview-left > .ui-tabview-nav {
    float:left;
    width: 25%;
    height: 300px;
    background-image: none;
    padding-top: 1px;
}

.ui-tabview-left > .ui-tabview-panels {
    float:right;
    width: 75%;
}

.ui-tabview.ui-tabview-left > .ui-tabview-nav li,
.ui-tabview.ui-tabview-right > .ui-tabview-nav li{
    display: block;
    float: right;
    white-space: normal;
    width: 99%;
}

.ui-tabview.ui-tabview-left > .ui-tabview-nav li {
    margin: 0 0 1px 0;
    border-right:0 none;
}

.ui-tabview.ui-tabview-right > .ui-tabview-nav {
    float:right;
    width: 25%;
    height: 300px;
    background-image: none;
    padding-top: 1px;
}

.ui-tabview.ui-tabview-right > .ui-tabview-panels {
    float:left;
    width: 75%;
}

.ui-tabview.ui-tabview-right > .ui-tabview-nav li {
    margin: 0 0 1px 0;
    border-left:0 none;
}

/* RTL */
.ui-rtl .ui-tabview .ui-tabview-nav li {
    float: right;
}

/** TabMenu **/
.ui-tabmenu .ui-tabmenu-nav {
    margin: 0;
    padding: .25em .5em 0 .25em;
}

.ui-tabmenu .ui-tabmenu-nav .ui-tabmenuitem {
    list-style: none;
    float: left;
    position: relative;
    margin: 0 .2em 1px 0;
    padding: 0;
    white-space: nowrap;
    display: block;
    border-bottom: 0;
    top: 1px;
}

.ui-tabmenu .ui-tabmenu-nav .ui-tabmenuitem a {
    float: left;
    padding: 0.5em 1em;
    text-decoration: none;
}

.ui-tabmenu .ui-tabmenu-nav a {
    padding: 0.5em 1em;
}

.ui-tabmenu .ui-menuitem-icon  {
    margin-right: .25em;
    vertical-align: middle;
}

.ui-tabmenu .ui-menuitem-text  {
    vertical-align: middle;
}

.ui-tabmenu .ui-tabmenu-nav .ui-tabmenuitem.ui-state-disabled a {
     cursor: default;
}
.ui-terminal {
    height: 18em;
    overflow: auto;
    padding: .25em;
}

.ui-terminal-input {
    border: 0 none;
    background-color: transparent;
    color: inherit;
    padding: 0;
    margin: 0 0 0 .125em;
    width: 75%;
    outline: none;
    vertical-align: baseline;
}

.ui-terminal-command {
    margin-left: .125em;
    -moz-margin-start: .125em;
}

.ui-terminal-input::-ms-clear {
    display: none;
}
.ui-tieredmenu {
    width: 12.5em;
    padding: .25em;
}

.ui-tieredmenu.ui-tieredmenu-dynamic {
    position: absolute;
}

.ui-tieredmenu .ui-menu-separator {
    border-width: 1px 0 0 0;
}

.ui-tieredmenu ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.ui-tieredmenu .ui-submenu-list {
    display: none;
    position: absolute;
    width: 12.5em;
    padding: .25em;
}

.ui-tieredmenu .ui-menuitem-link {
    padding: .25em;
    display: block;
    cursor: pointer;
    position: relative;
    text-decoration: none;
}

.ui-tieredmenu .ui-menuitem-icon {
    margin-right: .25em;
    vertical-align: middle;
}

.ui-tieredmenu .ui-menuitem-text {
    vertical-align: middle;
}

.ui-tieredmenu .ui-menuitem {
    position: relative;
    margin: .125em 0;
}

.ui-tieredmenu .ui-menuitem-link .ui-submenu-icon {
    position: absolute;
    margin-top: -.5em;
    right: 0;
    top: 50%;
}

.ui-tieredmenu .ui-menuitem-active > .ui-submenu > .ui-submenu-list {
    display: block;
}
.ui-toast {
	position: fixed;
    width: 20em;
}

.ui-toast .ui-toast-message {
    position: relative;
	display: block;
    margin-bottom: .75em;
    overflow: hidden;
}

.ui-toast .ui-toast-message-content {
    padding: .5em 1em;
}

.ui-toast .ui-toast-close-icon {
	position: absolute;
	top: .25em;
	right: .25em;
    cursor: pointer;
    display: inline-block;
}

.ui-toast .ui-toast-summary {
	font-weight: bold;
	padding: 0 0 .5em 0;
	display: block;
}

.ui-toast .ui-toast-icon {
    position: absolute;
    display: inline-block;
    left: .5em;
    top: .25em;
    padding: 0;
    font-size: 2em;
}

.ui-toast .ui-toast-message-text-content {
	padding: 0 0 .25em 0;
    margin-left: 2.5em;
}
/* Positions */
.ui-toast-top-right {
	top: 20px;
	right: 20px;
}

.ui-toast-top-left {
	top: 20px;
	left: 20px;
}

.ui-toast-bottom-right {
	bottom: 20px;
	right: 20px;
}

.ui-toast-bottom-left {
	bottom: 20px;
	left: 20px;
}

.ui-toast-top-center {
	top: 20px;
    left: 50%;
    margin-left: -10em;
}

.ui-toast-bottom-center {
	bottom: 20px;
	left: 50%;
    margin-left: -10em;
}

.ui-toast-center {
	left: 50%;
	top: 50%;
    min-width: 20vw;
    transform: translate(-50%, -50%);
}
.ui-tree {
    width: 18em;
}

.ui-tree .ui-treenode-selectable.ui-treenode-content {
    cursor: pointer;
}

.ui-tree .ui-tree-container {
    height: 100%;
    margin: 0;
    overflow: auto;
    padding: .25em;
    white-space: nowrap;
}

.ui-tree-empty-message {
    padding: .25em;
}

.ui-tree .ui-treenode-children {
    margin: 0;
    padding: 0 0 0 1em;
}

.ui-tree .ui-treenode {
    background-attachment: scroll;
    background-color: transparent;
    background-image: none;
    background-position: 0 0;
    background-repeat: repeat-y;
    list-style: none outside none;
    margin: 0;
    padding: .125em 0 0 0;
}

.ui-tree .ui-treenode-droppoint {
    height: 4px;
    list-style-type: none;
}

.ui-tree .ui-treenode-droppoint-active {
    border: 0 none;
}

.ui-tree .ui-tree-toggler {
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
}

.ui-tree .ui-treenode-icon {
    display: inline-block;
    vertical-align: middle;
}

.ui-tree .ui-treenode-label {
    display: inline-block;
    padding: 0 .25em;
    vertical-align: middle;
}

.ui-tree .ui-treenode-label.ui-state-hover,
.ui-tree .ui-treenode-label.ui-state-highlight {
    font-weight: normal;
    border: 0 none;
}

.ui-tree .ui-treenode.ui-treenode-leaf > .ui-treenode-content > .ui-tree-toggler {
    visibility: hidden;
}

.ui-tree .ui-chkbox-box {
    cursor: pointer;
}

.ui-tree .ui-chkbox {
    display: inline-block;
    vertical-align: middle;
}

.ui-tree .ui-chkbox .ui-chkbox-icon {
    margin-left: 1px;
}

.ui-tree .ui-tree-filter {
    width: 100%;
    box-sizing: border-box;
    padding-right: 1.5em;
}

.ui-tree .ui-tree-filter-container {
    position: relative;
    margin: 0;
    padding: 0.4em;
    display: inline-block;
    width: 100%;
}

.ui-tree .ui-tree-filter-container .ui-tree-filter-icon {
    position: absolute;
    top: .8em;
    right: 1em;
}

/** Fluid **/
.ui-fluid .ui-tree {
    width: 100%;
}

/** Horizontal Tree **/
.ui-tree-horizontal {
    width:auto;
    padding: .5em 0;
    overflow:auto;
}

.ui-tree.ui-tree-horizontal table,
.ui-tree.ui-tree-horizontal tr,
.ui-tree.ui-tree-horizontal td {
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    vertical-align: middle;
}

.ui-tree.ui-tree-horizontal .ui-tree-toggler {
    vertical-align: middle;
    margin: 0;
}

.ui-tree-horizontal .ui-treenode-content {
    font-weight: normal;
    padding: 0.4em 1em 0.4em 0.2em;
}

.ui-tree.ui-tree-horizontal .ui-tree-node-label {
    margin: 0;
}

.ui-tree-horizontal .ui-treenode-parent .ui-treenode-content {
    font-weight: normal;
    white-space: nowrap;
}

.ui-tree.ui-tree-horizontal .ui-treenode {
    background: url("./images/line.gif") repeat-x scroll center center transparent;
    padding: .25em 2.5em;
}

.ui-tree.ui-tree-horizontal .ui-treenode.ui-treenode-leaf,
.ui-tree.ui-tree-horizontal .ui-treenode.ui-treenode-collapsed {
    padding-right: 0;
}

.ui-tree.ui-tree-horizontal .ui-treenode-children {
    padding: 0;
    margin: 0;
}

.ui-tree.ui-tree-horizontal .ui-treenode-connector {
    width: 1px;
}

.ui-tree.ui-tree-horizontal .ui-treenode-connector-table {
    height: 100%;
    width: 1px;
}

.ui-tree.ui-tree-horizontal .ui-treenode-connector-line {
    background: url("./images/line.gif") repeat-y scroll 0 0 transparent;
    width: 1px;
}

.ui-tree.ui-tree-horizontal table {
	height: 0;
}

.ui-tree.ui-tree-horizontal .ui-chkbox {
    vertical-align: bottom;
    margin-right: .25em;
}

/** Loading **/
.ui-tree.ui-tree-loading {
    position: relative;
    min-height: 4em;
}

.ui-tree .ui-tree-loading-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)";
    opacity: 0.1;
    z-index: 1;
}

.ui-tree .ui-tree-loading-content {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    margin-top: -1em;
    margin-left: -1em;
}

.ui-tree .ui-tree-loading-content .ui-tree-loading-icon {
    font-size: 2em;
}

.ui-toolbar {
    padding: .25em .5em;
}

.ui-toolbar-group-left {
    float:left
}

.ui-toolbar-group-right {
    float:right
}
.ui-tooltip {
    position:absolute;
    display:none;
    padding: .25em .5em;
    max-width: 12.5em;
}

.ui-tooltip.ui-tooltip-right,
.ui-tooltip.ui-tooltip-left {
    padding: 0 .25em;
}

.ui-tooltip.ui-tooltip-top,
.ui-tooltip.ui-tooltip-bottom {
    padding:.25em 0;
}

.ui-tooltip .ui-tooltip-text {
   padding: .125em .5em;
   background-color: rgb(76, 76, 76);
   color: #ffffff;
   white-space: pre-line;
}

.ui-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
}

.ui-tooltip-right .ui-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: -.25em;
    border-width: .25em .25em .25em 0;
    border-right-color: rgb(76, 76, 76);
}

.ui-tooltip-left .ui-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: -.25em;
    border-width: .25em 0 .25em .25em;
    border-left-color: rgb(76, 76, 76);
}

.ui-tooltip.ui-tooltip-top {
    padding: .25em 0;
}

.ui-tooltip-top .ui-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: -.25em;
    border-width: .25em .25em 0;
    border-top-color: rgb(76, 76, 76);
}

.ui-tooltip-bottom .ui-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: -.25em;
    border-width: 0 .25em .25em;
    border-bottom-color: rgb(76, 76, 76);
}
.ui-treetable {
    position: relative;
}

.ui-treetable table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
}

.ui-treetable .ui-treetable-thead > tr > th,
.ui-treetable .ui-treetable-tbody > tr > td,
.ui-treetable .ui-treetable-tfoot > tr > td {
    padding: .25em .5em;
}

.ui-treetable .ui-treetable-toggler {
    cursor: pointer;
    display: inline-block;
    height: 1em;
    position: relative;
    top: 50%;
    margin-top: -.5em;
}

.ui-treetable .ui-sortable-column {
    cursor: pointer;
}

.ui-treetable p-treetablesorticon {
    vertical-align: middle;
}

.ui-treetable-auto-layout > .ui-treetable-wrapper {
    overflow-x: auto;
}

.ui-treetable-auto-layout > .ui-treetable-wrapper > table {
    table-layout: auto;
}

.ui-treetable .ui-treetable-chkbox {
    margin: 0 .25em;
    vertical-align: middle;
}

/* Sections */
.ui-treetable-caption,
.ui-treetable-summary {
    padding: .25em .5em;
    text-align: center;
    font-weight: bold;
}

.ui-treetable-caption {
    border-bottom: 0 none;
}

.ui-treetable-summary {
    border-top: 0 none;
}

/* Paginator */
.ui-treetable .ui-paginator-top {
    border-bottom: 0 none;
}

.ui-treetable .ui-paginator-bottom {
    border-top: 0 none;
}

/* Scrollable */
.ui-treetable-scrollable-wrapper {
    position: relative;
}
.ui-treetable-scrollable-header,
.ui-treetable-scrollable-footer {
    overflow: hidden;
    border: 0 none;
}

.ui-treetable-scrollable-body {
    overflow: auto;
    position: relative;
}

.ui-treetable-scrollable-body > table > .ui-treetable-tbody > tr:first-child > td {
    border-top: 0 none;
}

.ui-treetable-virtual-table {
    position: absolute;
}

/* Frozen Columns */
.ui-treetable-frozen-view .ui-treetable-scrollable-body {
    overflow: hidden;
}

.ui-treetable-frozen-view > .ui-treetable-scrollable-body > table > .ui-treetable-tbody > tr > td:last-child {
    border-right: 0 none;
}

.ui-treetable-unfrozen-view {
    position: absolute;
    top: 0px;
}

/* Resizable */
.ui-treetable-resizable > .ui-treetable-wrapper {
    overflow-x: auto;
}

.ui-treetable-resizable .ui-treetable-thead > tr > th,
.ui-treetable-resizable .ui-treetable-tfoot > tr > td,
.ui-treetable-resizable .ui-treetable-tbody > tr > td {
    overflow: hidden;
}

.ui-treetable-resizable .ui-resizable-column {
    background-clip: padding-box;
    position: relative;
}

.ui-treetable-resizable-fit .ui-resizable-column:last-child .ui-column-resizer {
    display: none;
}

.ui-treetable .ui-column-resizer {
    display: block;
    position: absolute !important;
    top: 0;
    right: 0;
    margin: 0;
    width: .5em;
    height: 100%;
    padding: 0px;
    cursor:col-resize;
    border: 1px solid transparent;
}

.ui-treetable .ui-column-resizer-helper {
    width: 1px;
    position: absolute;
    z-index: 10;
    display: none;
}

/* Reorder */
.ui-treetable-reorder-indicator-up,
.ui-treetable-reorder-indicator-down {
    position: absolute;
    display: none;
}

/* Responsive */
.ui-treetable-responsive .ui-treetable-tbody > tr > td .ui-column-title {
    display: none;
}

@media screen and (max-width: 40em) {
    .ui-treetable-responsive .ui-treetable-thead > tr > th,
    .ui-treetable-responsive .ui-treetable-tfoot > tr > td {
        display: none !important;
    }

    .ui-treetable-responsive .ui-treetable-tbody > tr > td {
        text-align: left;
        display: block;
        border: 0 none;
        width: 100% !important;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		float: left;
		clear: left;
    }

    .ui-treetable-responsive .ui-treetable-tbody > tr > td .ui-column-title {
        padding: .4em;
        min-width: 30%;
        display: inline-block;
        margin: -.4em 1em -.4em -.4em;
        font-weight: bold;
    }
}

/* Loader */
.ui-treetable-loading {
    position: absolute;
    width: 100%;
    height: 100%;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)";
    opacity: 0.1;
    z-index: 1;
}

.ui-treetable-loading-content {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    margin-top: -1em;
    margin-left: -1em;
}

.ui-treetable .ui-treetable-loading-icon {
    font-size: 2em;
}
.ui-virtualscroller .ui-virtualscroller-header {
    text-align: center;
	padding: .5em .75em;
    border-bottom: 0 none;
}

.ui-virtualscroller .ui-virtualscroller-footer {
    text-align: center;
    padding: .25em .625em;
    border-top: 0px none;
}

.ui-virtualscroller .ui-virtualscroller-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
</style>

</head>
<body>

<div class="container">
    {!! $message !!}
</div>
</body>
</html>
