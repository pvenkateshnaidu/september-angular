<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

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
class Company extends Model
{
	protected $table = 'companies';
	protected $primaryKey = 'companyId';

	protected $fillable = [
		'companyname',
		'fullname',	
		'mobileNumber',
        'email',
        'consultantId'	
		
	];

	
}
