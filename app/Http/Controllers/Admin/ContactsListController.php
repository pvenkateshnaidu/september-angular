<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Submissions;
use App\VendorList;
use App\Clients;
use Carbon\Carbon;
use Auth;

class ContactsListController extends Controller
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

            $submissions = Submissions::with('user_details','consultant','vendorlist','clients')->orderBy('created_at', 'DESC')
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
            'vendorcontactEmail'    => 'required|email|unique:vendordetails,contactEmail',
            'cvid' => 'required',
        ]);

            $job = new \App\vendorDetails();
            $job->contactName = $request->vendorcontactName;
            $job->contactMobile = $request->vendorcontactMobile;
            $job->ext = $request->vendorext;
            $job->vid = $request->cvid;
            $job->contactEmail = $request->vendorcontactEmail;
            $job->created_at = date('Y-m-d H:i:s');
            $job->save();

            return response()->json(['contactId'=>$job->vendorDetailId], 200);

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
            'jobTitle' => 'required',
        ]);

            $job = \App\Jobs::find($id);
            $job->jobTitle = $request->jobTitle;
            $job->jobDescription = $request->jobDescription;
            $job->jobTechnology = $request->jobTechnology;
            $job->jobExperience = $request->jobExperience;
            $job->jobLocation = $request->jobLocation;
            $job->jobVisaType = $request->jobVisaType;
            $job->jobStatus = $request->jobStatus;
            $job->save();
            return response()->json(['user' => $job], 200);


    }

}
