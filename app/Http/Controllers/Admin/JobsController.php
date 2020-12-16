<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Jobs;
use Carbon\Carbon;
use Auth;

class JobsController extends Controller
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

            $jobs = Jobs::with('user_details')
                ->where("jobStatus", '=', 'A')
                ->orderBy('created_at', 'DESC')
                ->get();

        return response()->json(['jobs' => $jobs], 200);
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
            'jobTitle' => 'required',

        ]);

            $job = new \App\Jobs();
            $job->jobTitle = $request->jobTitle;
            $job->jobDescription = $request->jobDescription;
            $job->jobTechnology = $request->jobTechnology;
            $job->jobExperience = $request->jobExperience;
            $job->jobLocation = $request->jobLocation;
            $job->jobVisaType = $request->jobVisaType;
            $job->jobResponsibility = $request->jobResponsibility;
            $job->client = $request->client;
            $job->jobStatus = $request->jobStatus;
            $job->duration = $request->duration;
            $job->rate = $request->rate;
            $job->mainRequirement = $request->mainRequirement;
            $job->workType = $request->workType;
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
                $timesheet = \App\Reports::with('user_details')
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
        //
        $user = \App\Jobs::find($id);

        return response()->json(['user' => $user], 200);
    }
    public function edit($id)
    {

        $user = \App\Jobs::find($id);
        return response()->json(['user' => $user], 200);
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
            'jobTitle' => 'required',
        ]);

            $job = \App\Jobs::find($id);
            $job->jobTitle = $request->jobTitle;
            $job->jobDescription = $request->jobDescription;
            $job->jobTechnology = $request->jobTechnology;
            $job->jobExperience = $request->jobExperience;
            $job->jobLocation = $request->jobLocation;
            $job->jobVisaType = $request->jobVisaType;
            $job->jobResponsibility = $request->jobResponsibility;
            $job->client = $request->client;
            $job->duration = $request->duration;
            $job->rate = $request->rate;
            $job->mainRequirement = $request->mainRequirement;
            $job->workType = $request->workType;
            $job->jobStatus = $request->jobStatus;
            $job->save();
            return response()->json(['user' => $job], 200);


    }
}
