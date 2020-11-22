<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Submissions;
use App\VendorList;
use App\Clients;
use Carbon\Carbon;
use Auth;
use Illuminate\Validation\Rule;
class SubmissionsController extends Controller
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
    public function getConsultans()
    {

            $submissions = \App\Reports::orderBy('created_at', 'DESC')
                ->get();
                $submissionslist = [];
                $submissionslist[] =["label"=>"Choosse Consultant","value"=>""];
                foreach($submissions as $value)
                {
                        $submissionslist[] =["label"=>$value->consultatName." ".$value->consultantLastName,"value"=>$value->reportId];

                }
                $vendors = \App\VendorList::orderBy('created_at', 'DESC')
                ->get();
                $vendorslist = [];
                $vendorslist[] =["label"=>"Choosse Vendor","value"=>""];
                foreach($vendors as $value)
                {
                            $vendorslist[] =["label"=>$value->vendorCompanyName,"value"=>$value->vid];

                }
                $clients = \App\Clients::orderBy('created_at', 'DESC')
                ->get();
                $clientList = [];
                $clientList[] =["label"=>"Choosse Client","value"=>""];
                foreach($clients as $value)
                {
                            $clientList[] =["label"=>$value->clientName,"value"=>$value->clientId];

                }
                $jobs = \App\Jobs::orderBy('created_at', 'DESC')
                ->get();
                $jobList = [];
                $jobList[] =["label"=>"Choosse Job","value"=>""];
                foreach($jobs as $value)
                {
                            $jobList[] =["label"=>$value->jobTitle,"value"=>$value->jobId];

                }


        return response()->json(['submissions' => $submissionslist,'vendorslist'=>$vendorslist,"clients"=>$clientList,"jobs"=>$jobList], 200);
    }

public function getTotalInterviewShecdules(Request $request)
{
    $interViewSubmissions = Submissions::find( $request->vid)
    ->where('vendorStatus','=','Interview scheduled')
    ->get();
    $interViewCount = $interViewSubmissions->count();
    $submitclientSubmissions = Submissions::find( $request->vid)
    ->where('vendorStatus','=','Submitted to Client')
    ->get();
    $submitclientCount = $submitclientSubmissions->count();
    return response()->json(['interviews' => $interViewCount,'submitclient'=>$submitclientCount], 200);
}
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

            $submissions = Submissions::with('user_details','consultant','vendorlist','clients','vendorDetail')->orderBy('created_at', 'DESC')
                ->get();

        return response()->json(['submissions' => $submissions], 200);
    }


    /**$journal
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $this->validate($request, [
            'actualRate' => 'required',
            'vid' => 'required',
            'vendorDetailId' => 'required',
            'clientId' => Rule::unique('submissions')->where(function ($query) use ($request) {
                return $query->where('vendorDetailId', $request->vendorDetailId)
                   ->where('reportId', $request->state)
                   ->where('clientId', $request->clientId);
             })
        ]);

            $job = new \App\Submissions();
            $job->actualRate = $request->actualRate;
            $job->vendorComments = $request->vendorComments;
            $job->submissionRate = $request->submissionRate;
            $job->vid = $request->vid;
            $job->vendorDetailId = $request->vendorDetailId;
            $job->clientId = $request->clientId;
            $job->endClientLocation= $request->endClientLocation;
            $job->reportId= $request->state;
            $job->vendorStatus =$request->vendorStatus;
            $job->userId = \Auth::user()->id;
            $job->created_at = date('Y-m-d H:i:s');
            $job->save();

            return response()->json(['job' => $job], 200);

    }
    public function statusChange(Request $request)
    {
        $rules = [
            'index' => 'required|numeric',
            //   'status' => 'required|in:p,u',
        ];
        $validator = \Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            \Log::error($validator);
            return array('error' => true, 'msg' => 'Some thing went wrong');
        } else {
            if (Auth::user()->role == "Admin") {
                $user = \App\Reports::find($request->index);
                $user->adminStatus = 'A';
                $user->save();
                $timesheet = Reports::with('user_details')
                    ->where("userStatus", '=', 'p')
                    ->where('reports.wStatus', '!=', 'R')
                    ->orderBy('created_at', 'DESC')
                    ->get();
            } else {
                $user = \App\Reports::find($request->index);
                $user->userStatus = 'p';
                $user->save();
                $timesheet = Reports::with('user_details')
                    ->where("userId", "=", \Auth::user()->id)
                    ->where('reports.wStatus', '!=', 'R')
                    ->orderBy('created_at', 'DESC')
                    ->get();
            }



            return response()->json(['timesheet' => $timesheet], 200);
        }
    }
    public function show($id)
    {
        $submissions = Submissions::with('user_details','vendorlist','clients','vendorDetail')
        ->where('reportId','=',$id)
        ->orderBy('created_at', 'DESC')
        ->get();

        return response()->json(['submissions' => $submissions], 200);
    }
    public function edit($id)
    {
        $submissions = Submissions::with('user_details','consultant','vendorlist','clients')
        ->where('reportId','=',$id)
        ->orderBy('created_at', 'DESC')
        ->get();

        return response()->json(['submissions' => $submissions], 200);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'vendorStatus' => 'required',
        ]);
            $submission = \App\Submissions::find($id);
            $submission->vendorStatus = $request->vendorStatus;
            if($request->vendorStatus)
            $submission->scheduleDate = $request->scheduleDate;
            if($request->timezone)
            $submission->timezone = $request->timezone;
            $submission->vendorComments = $request->vendorComments;
            $submission->save();
            $submissions = Submissions::with('user_details','consultant','vendorlist','clients','vendorDetail')->orderBy('created_at', 'DESC')
            ->get();

    return response()->json(['submissions' => $submissions], 200);


    }

}
