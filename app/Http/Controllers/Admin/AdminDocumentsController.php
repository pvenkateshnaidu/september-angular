<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\TimeSheetDocuments;
use Carbon\Carbon;
use Auth;
class myObject
{
    public $documentId;
    public $dateOfWeek;
    public $name;
    public $doucmentName;
    public $startWeek;
    public $endWeek;
}
class AdminDocumentsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {


        $timesheet = TimeSheetDocuments::with('user_details')->orderBy('dateOfWeek', 'ASC')
        ->get();


        $MyObjects = array();

        foreach($timesheet as $value)
        {
            $MyObject = new myObject;
            $MyObject->documentId =$value->documentId;
            $MyObject->dateOfWeek =$value->dateOfWeek;
            $MyObject->name=$value->user_details->name;
            $MyObject->doucmentName =$value->doucmentName;
            $from= Carbon::parse($value->dateOfWeek)->startOfWeek(Carbon::SUNDAY)->format('Y-m-d');
            $to= Carbon::parse($value->dateOfWeek)->endOfWeek(Carbon::SATURDAY)->format('Y-m-d');
            $MyObject->startWeek =$from;
            $MyObject->endWeek =$to;
            $MyObjects[] = $MyObject;
        }
        return response()->json(['documents' => $MyObjects ], 200);
    }
}
