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
class vendorDetails extends Model
{
	protected $table = 'vendordetails';
	protected $primaryKey = 'vendorDetailId';

	protected $fillable = [
		'vendorName',
		'vendorMobileNumber',
		'vendorCompanyName',
		'vendorEmail',
		'vid',
		'clientId'

	];
	public function Vendor_detail()
		{
			return $this->belongsTo(VendorList::class, 'vid');
		}
	public function client_detail()
		{
			return $this->belongsTo(Clients::class, 'clientId');
		}

}
