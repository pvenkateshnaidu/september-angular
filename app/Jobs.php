<?php

/**
 * Created by Reliese Model.
 */

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Jobs
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
class Jobs extends Model
{
	protected $table = 'jobs';
	protected $primaryKey = 'jobId';

	protected $fillable = [

		'jobTitle',
		'jobDescription',
		'jobTechnology',
		'created_at ',
		'jobExperience',
		'jobLocation',
		'jobVisaType',
		'userId'
	];

		public function user_details()
	{
		return $this->belongsTo(User::class, 'userId');
	}

}
