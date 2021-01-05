<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Reports;
use Carbon\Carbon;
use Auth;

class HotListController extends Controller
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
        $journals = \App\Reports::where('reports.wStatus', '=', 'A')
              ->where('reports.adminStatus', '=', 'A')
            ->orderBy('reports.created_at', 'desc')
            ->get();


        return response()->json(['timesheet' => $journals], 200);
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
        //
        $user = \App\Reports::find($id);

        return response()->json(['user' => $user], 200);
    }
    public function edit($id)
    {

        $user = \App\Reports::find($id);
        return response()->json(['user' => $user], 200);
    }
}
