<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Reports;
use Carbon\Carbon;
use Auth;
class ConsultantController extends Controller
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
        //->where('userId','=',Auth::user()->id)

        $timesheet = Reports::with('user_details')
        ->orderBy('created_at', 'DESC')
        ->get();

        return response()->json(['timesheet' => $timesheet ], 200);
    }
 /**$journal
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {


        $rules = [
            'consultatName' => 'required|unique:reports,consultantEmail',
            'ssn' => 'numeric',
            'consultatMobileNumber' =>'required|min:10',
            'reportStatus' => 'required'
        ];
        $validator = \Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json(['user' =>$validator], 400);

        } else {


            // add user
            $user = new \App\Reports();
            //   $user->reportDate     = date('Y-m-d H:i:s');
            $user->consultatName = $request->consultatName;
            $user->consultantLastName = $request->consultantLastName;
            $user->consultatMobileNumber = $request->consultatMobileNumber;
            $user->technology ='Java Developer';
            $user->otherTechnologies = $request->otherTechnologies;
            $user->consultantEmail = $request->consultantEmail;
            $user->rate = $request->rate;
            $user->experience = $request->experience;
            $user->visaType = $request->visaType;
            $user->city = $request->city;
            $user->state = $request->state;
            $user->willingLocation = $request->willingLocation;
            $user->resource = $request->resource;
            if($request->comments){
            $user->comments = $request->comments;
            }
            if($request->note){
                $user->note = $request->note;
            }
            $user->reportStatus = $request->reportStatus;
            $user->skypeId = $request->skypeId;
            $user->linkedInUrl = $request->linkedInUrl;
            $user->priority = $request->priority;
            $user->availability = $request->availability;
            $user->bestContactNumber = $request->bestContactNumber;
            $user->ssn = $request->ssn;
            $user->userStatus = 'u';
            $user->documentsCollected = $request->documentsCollected;
            $user->userId = \Auth::user()->id;
            $user->wStatus = 'A';
            $user->created_at = date('Y-m-d H:i:s');
            $user->save();

            return response()->json(['consultant' =>$user], 200);
        }
    }
    public function statusChange(Request $request) {
        $rules = [
            'index' => 'required|numeric',
            'status' => 'required|in:p,u',
        ];
        $validator = \Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            \Log::error($validator);
            return array('error' => true, 'msg' => 'Some thing went wrong');
        } else {
            $user = \App\Models\Reports::find($request->index);
            $user->userStatus = 'p';
            $user->save();


            return response()->json(['consultant' =>$user], 200);
        }
    }

}
