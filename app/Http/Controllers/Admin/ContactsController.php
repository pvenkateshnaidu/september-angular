<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\vendorDetails;
use Carbon\Carbon;
use Auth;

class ContactsController extends Controller
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

            $contacts = vendorDetails::get();

        return response()->json(['contacts' => $contacts], 200);
    }
    public function show($id)
    {
        $contacts = \App\vendorDetails::where('vid','=',$id)->get();
        $vendorContactslist = [];
        $vendorContactslist[] =["label"=>"Choosse Consultant","value"=>""];
        foreach($contacts as $value)
        {
                $vendorContactslist[] =["label"=>$value->contactEmail,"value"=>$value->vendorDetailId];

        }
        return response()->json(['contacts' => $vendorContactslist], 200);
    }
    public function edit($id)
    {

        $contacts = \App\vendorDetails::where('vid','=',$id)->get();
        $vendorContactslist = [];
        $vendorContactslist[] =["label"=>"Choosse Email","value"=>""];
        foreach($contacts as $value)
        {
                $vendorContactslist[] =["label"=>$value->contactEmail,"value"=>$value->vendorDetailId];

        }
        return response()->json(['contacts' => $vendorContactslist], 200);
    }

    public function getDetails(Request $request)
    {
        $contacts = \App\vendorDetails::find($request->index);
        return response()->json(['contactDetails' => $contacts], 200);
    }
}
