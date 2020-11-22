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
class VendorList extends Model
{
	protected $table = 'vendorlist';
	protected $primaryKey = 'vid';

	protected $fillable = [
        'vendorCompanyName',
        'vendorWebsite',
        'status'


	];

		public function vendor_detail()
		{
			return $this->belongsTo(vendorDetails::class, 'vid');
		}

}
