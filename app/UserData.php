<?php

/**
 * Created by Reliese Model.
 * Date: Thu, 04 Jul 2019 09:15:45 +0000.
 */

namespace App;

use Illuminate\Database\Eloquent\Model as Eloquent;
use Illuminate\Database\Eloquent\Model;

/**
 * Class User
 *
 * @property int $id

 */
class UserData extends Model
{


	protected $table = 'user';
	protected $primaryKey = 'id';
    protected $fillable = [
        'title',
        'firstName',
        'lastName',
        'email',
        'role',
        'password'
    ];



}
