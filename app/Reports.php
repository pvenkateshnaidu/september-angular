<?php

/**
 * Created by Reliese Model.
 */

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Journal
 *
 * @property int $journalId
 * @property string $journalName
 * @property string $journalStatus
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property Collection|JournalEventTaxConfig[] $journal_event_tax_configs
 *
 * @package App\Models
 */
class Reports extends Model
{
	protected $table = 'reports';
	protected $primaryKey = 'reportId';

	protected $fillable = [

		'consultatName',
		'consultatMobileNumber',
		'technology',
		'otherTechnologies',
		'rate',
		'experience',
		'visaType',
		'city',
		'state',
		'willingLocation',	'userStatus',
		'comments','workauthorization','resume','otherDocument',
		'reportStatus','userId'
	];

		public function user_details()
	{
		return $this->belongsTo(User::class, 'userId');
	}
		public function vendor_add()
	{
		return $this->hasMany(Submissions::class, 'reportId');
    }
	public function vendor_cout()
	{
		return $this->hasMany(Submissions::class ,'reportId');
    }

}
