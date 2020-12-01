<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Submissions;
use App\VendorList;
use App\Clients;
use Carbon\Carbon;
use Auth;

class ClientController extends Controller
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

            $clients = Clients::get();

        return response()->json(['clients' => $clients], 200);
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
            'clientName'    => 'required|unique:clients,clientName',
        ]);

            $job = new \App\Clients();
            $job->clientName = $request->clientName;
            $job->created_at = date('Y-m-d H:i:s');
            $job->save();

            $clients = \App\Clients::orderBy('created_at', 'DESC')
            ->get();
            $clientList = [];
            $clientList[] =["label"=>"Choosse Client","value"=>""];
            foreach($clients as $value)
            {
                        $clientList[] =["label"=>$value->clientName,"value"=>$value->clientId];

            }

            return response()->json(['clientId'=>$job->clientId,'clients'=>$clientList], 200);

    }

    public function show($id)
    {
        $submissions = Clients::where('clientId','=',$id)
        ->orderBy('created_at', 'DESC')
        ->get();

        return response()->json(['submissions' => $submissions], 200);
    }
    public function edit($id)
    {
        $submissions = Clients::where('clientId','=',$id)
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
