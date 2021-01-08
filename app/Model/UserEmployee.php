<?php

/**
 * Created by Reliese Model.
 */

namespace App\Model;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class User
 *
 * @property int $id
 * @property string $user_type
 * @property string $name
 * @property string $email
 * @property Carbon $email_verified_at
 * @property string $password
 * @property string $remember_token
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property string $user_status
 *
 * @package App\Models
 */
class UserEmployee extends Model
{
	protected $table = 'users';
	 protected $connection = 'reporting';
	protected $dates = [
		'email_verified_at'
	];

	protected $hidden = [
		'password',
		'remember_token'
	];

	protected $fillable = [
		'user_type',
		'name',
		'email',
		'email_verified_at',
		'password',
		'remember_token',
        'user_status',
        'reportId',
        'technology',
        'city',
        'state',
        'role'
	];
}
