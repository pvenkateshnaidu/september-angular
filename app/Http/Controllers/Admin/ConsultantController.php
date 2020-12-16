<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Reports;
use App\Technologies;
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
        if (Auth::user()->role == "Admin") {
            $timesheet = Reports::with('user_details')
                ->where("userStatus", '=', 'p')
                ->where('reports.wStatus', '!=', 'R')
                ->orderBy('created_at', 'DESC')
                ->get();
        } else if (Auth::user()->role == "HeadHunters") {
            $timesheet = Reports::with('user_details')
                ->where("userId", "=", \Auth::user()->id)
                ->where('reports.wStatus', '!=', 'R')
                ->orderBy('created_at', 'DESC')
                ->get();

        }else if (Auth::user()->role == "HeadHuntersAdmin") {
            $timesheet = Reports::with('user_details')
            ->where("userStatus", '=', 'p')
            ->where('reports.wStatus', '!=', 'R')
            ->orderBy('created_at', 'DESC')
            ->get();

        }else if(Auth::user()->role == "BenchSales" || Auth::user()->role == "Recruiters" )
        {
            $timesheet = \App\Reports::with('user_details','vendor_add')
            ->withCount([
                'vendor_cout as sclients'=> function ($query) {
                    $query->where('vendors.vendorStatus','=', 'Submitted to Client');
                } ,
                'vendor_cout as interviews' => function ($query) {
                    $query->where('vendors.vendorStatus','=', 'Interview scheduled');
                }])
                            ->orderBy('reports.created_at', 'desc')
                            ->where('reports.wStatus','=', 'A')
                            ->where('reports.adminStatus', '=', 'A')
                            ->get();

        }else if(Auth::user()->role == "Recruiters")
        {
            $timesheet = Reports::with('user_details')
            ->where('reports.wStatus', '=', 'A')
            ->where('reports.adminStatus', '=', 'A')
            ->orderBy('created_at', 'DESC')
            ->get();
        }

        return response()->json(['timesheet' => $timesheet,'path'=>storage_path("app/uploads/resume")], 200);
    }
    public function getDocumentsforadmin()
    {
        //->where('userId','=',Auth::user()->id)
        if (Auth::user()->role == "Admin") {

            $timesheet = \App\Reports::with('user_details','vendor_add')
            ->withCount([
                'vendor_cout as sclients'=> function ($query) {
                    $query->where('vendors.vendorStatus','=', 'Submitted to Client');
                } ,
                'vendor_cout as interviews' => function ($query) {
                    $query->where('vendors.vendorStatus','=', 'Interview scheduled');
                }])
                            ->orderBy('reports.created_at', 'desc')
                            ->where('reports.wStatus','=', 'A')
                            ->where('reports.adminStatus', '=', 'A')
                            ->get();


        }

        return response()->json(['timesheet' => $timesheet], 200);
    }
    public function getInactiveDocuments()
    {
        //->where('userId','=',Auth::user()->id)
        if (Auth::user()->role == "Admin") {

            $timesheet = \App\Reports::with('user_details','vendor_add')
            ->withCount([
                'vendor_cout as sclients'=> function ($query) {
                    $query->where('vendors.vendorStatus','=', 'Submitted to Client');
                } ,
                'vendor_cout as interviews' => function ($query) {
                    $query->where('vendors.vendorStatus','=', 'Interview scheduled');
                }])
                                 ->whereIn('reports.wStatus', ['R','S'])
                            ->orderBy('reports.created_at', 'desc')
                            ->where('reports.adminStatus', '=', 'A')
                            ->get();


        }

        return response()->json(['timesheet' => $timesheet], 200);
    }

    public function removeDocument(Request $request)
    {
        if($request->resume=='yes')
        {
            $user = \App\Reports::find($request->id);
            $user->resume = '';
            $user->save();
            $user = \App\Reports::with('user_details')->find($request->id);
            return response()->json(['user' => $user], 200);
        }
        if($request->otherDocument=='yes')
        {
            $user = \App\Reports::find($request->id);
            $user->otherDocument = '';
            $user->save();
            $user = \App\Reports::with('user_details')->find($request->id);
            return response()->json(['user' => $user], 200);
        }
        if($request->workAuthorization=='yes')
        {
            $user = \App\Reports::find($request->id);
            $user->workAuthorization = '';
            $user->save();
            $user = \App\Reports::with('user_details')->find($request->id);
            return response()->json(['user' => $user], 200);
        }
    }
    public function saveDocument(Request $request)
    {
        /* $this->validate($request, [
            'duration' => 'required'
        ]); */


        $otherDocumentpath = '';

        if ($request->hasFile('resume')) {

            $filenameWithExt = $request->file('resume')->getClientOriginalName();
            //Get just filename
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            // Get just ext
            $extension = $request->file('resume')->getClientOriginalExtension();
            // Filename to store
            $resumepath = $filename . '_' . time() . '.' . $extension;
            // Upload Image
            $path = $request->file('resume')->storeAs('uploads/resume', $resumepath);


         /*   $stringname = preg_replace('/\s+/', '', Auth::user()->name);
            $id = Auth::user()->id;
            // Get filename with the extension
            $filenameWithExt = $request->file('resume')->getClientOriginalName();
            //Get just filename
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            // Get just ext
            $extension = $request->file('resume')->getClientOriginalExtension();
            // Filename to store
            $otherDocumentpath = $stringname . '-' . $id . '.' . $extension;
            // Upload Image
            $path = $request->file('resume')->storeAs('uploads/resume', $otherDocumentpath); */


            return response()->json(['path' => $resumepath], 200);
        }

        if ($request->hasFile('otherDocument')) {
          /*  $stringname = preg_replace('/\s+/', '', Auth::user()->name);
            $id = Auth::user()->id;
            // Get filename with the extension
            $filenameWithExt = $request->file('otherDocument')->getClientOriginalName();
            //Get just filename
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            // Get just ext
            $extension = $request->file('otherDocument')->getClientOriginalExtension();
            // Filename to store
            $otherDocumentpath = $stringname . '-' . $id . '.' . $extension;
            // Upload Image
            $path = $request->file('otherDocument')->storeAs('uploads/otherDocument', $otherDocumentpath); */
            $filenameWithExt = $request->file('otherDocument')->getClientOriginalName();
            //Get just filename
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            // Get just ext
            $extension = $request->file('otherDocument')->getClientOriginalExtension();
            // Filename to store
            $otherDocumentpath = $filename . '_' . time() . '.' . $extension;
            // Upload Image
            $path = $request->file('otherDocument')->storeAs('uploads/otherDocument', $otherDocumentpath);

            return response()->json(['path' => $otherDocumentpath], 200);
        }

        if ($request->hasFile('workAuthorization')) {
           /* $stringname = preg_replace('/\s+/', '', Auth::user()->name);
            $id = Auth::user()->id;
            // Get filename with the extension
            $filenameWithExt = $request->file('workAuthorization')->getClientOriginalName();
            //Get just filename
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            // Get just ext
            $extension = $request->file('workAuthorization')->getClientOriginalExtension();
            // Filename to store
            $otherDocumentpath = $stringname . '-' . $id . '.' . $extension;
            // Upload Image
            $path = $request->file('workAuthorization')->storeAs('uploads/workAuthorization', $otherDocumentpath); */
            $filenameWithExt = $request->file('workAuthorization')->getClientOriginalName();
            //Get just filename
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            // Get just ext
            $extension = $request->file('workAuthorization')->getClientOriginalExtension();
            // Filename to store
            $workpath = $filename . '_' . time() . '.' . $extension;
            // Upload Image
            $path = $request->file('workAuthorization')->storeAs('uploads/workauthorization', $workpath);

            return response()->json(['path' => $workpath], 200);
        }

        return response()->json(['user' => "Error"], 400);
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
            'consultatName' => 'required',
            'consultantLastName' => 'required',
            'consultantEmail' => 'required|unique:reports,consultantEmail',
            'ssn' => 'numeric',
            'consultatMobileNumber' => 'required|min:10',
            'reportStatus' => 'required',
            'rate' => 'required',
            'experience' => 'required',
            'visaType' => 'required',
            'city' => 'required',
            'state' => 'required',
            'willingLocation'=>'required',
            'documentsCollected' => 'required',
            'reportStatus' =>'required',
            'technology' => 'required'
        ]);


            $resumepath = '';
            $workpath = '';
            $otherDocumentpath = '';


            // add user
            $user = new \App\Reports();
            //   $user->reportDate     = date('Y-m-d H:i:s');
            $user->consultatName = $request->consultatName;
            $user->consultantLastName = $request->consultantLastName;
            $user->consultatMobileNumber = $request->consultatMobileNumber;
            $user->technology = $request->technology;
            $user->otherTechnologies = $request->otherTechnologies;
            $user->consultantEmail = $request->consultantEmail;
            $user->rate = $request->rate;
            $user->experience = $request->experience;
            $user->visaType = $request->visaType;
            $user->city = $request->city;
            $user->state = $request->state;
            $user->willingLocation = $request->willingLocation;
            $user->resource = $request->resource;
            if ($request->comments) {
                $user->comments = $request->comments;
            }
            if ($request->note) {
                $user->note = $request->note;
            }
            $user->reportStatus = $request->reportStatus;
            $user->skypeId = $request->skypeId;
            $user->linkedInUrl = $request->linkedInUrl;
            $user->priority = $request->priority;
            $user->availability = $request->availability;
            $user->bestContactNumber = $request->bestContactNumber;
            $user->ssn = $request->ssn;
            $user->documentsCollected = $request->documentsCollected;
            $user->userId = \Auth::user()->id;
            $user->wStatus = 'A';
            $user->created_at = date('Y-m-d H:i:s');
            if ($request->resume) {
                $user->resume = $request->resume;
            }
            if ($request->otherDocument) {
                $user->otherDocument = $request->otherDocument;
            }
            if ($request->workAuthorization) {
                $user->workAuthorization = $request->workAuthorization;
            }
            if (\Auth::user()->role == 'Admin' || \Auth::user()->role == 'HeadHuntersAdmin') {
                $user->userStatus = 'p';
            } else {
                $user->userStatus = 'u';
            }
            $user->documentsCollected = $request->documentsCollected;
            $user->userId = \Auth::user()->id;
            $user->save();
            if($request->technology1)
            {

                $params  = new \App\Technologies();
                $params->reportId     = $user->reportId;
                $params->name     = $request->technology1 ;
                $params->rating     = $request->rating1;
                $params->save();

            }
            if($request->technology2)
            {

                $params  = new \App\Technologies();
                $params->reportId     = $user->reportId;
                $params->name     = $request->technology2 ;
                $params->rating     = $request->rating2;
                $params->save();

            }
            if($request->technology3)
            {

                $params  = new \App\Technologies();
                $params->reportId     = $user->reportId;
                $params->name     = $request->technology3;
                $params->rating     = $request->rating3;
                $params->save();

            }
            if($request->technology4)
            {

                $params  = new \App\Technologies();
                $params->reportId     = $user->reportId;
                $params->name     = $request->technology4;
                $params->rating     = $request->rating4;
                $params->save();

            }

            return response()->json(['consultant' => $user], 200);

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
            if (Auth::user()->role == "Admin" || Auth::user()->role == "HeadHuntersAdmin" ) {
                $user = \App\Reports::find($request->index);
                $user->adminStatus = $request->value;
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
        $user = \App\Reports::with('user_details')->find($id);

        return response()->json(['user' => $user,'path'=>storage_path("app/uploads/resume")], 200);
    }
    public function edit($id)
    {

        $user = \App\Reports::with('user_details')->find($id);
        return response()->json(['user' => $user,'path'=>storage_path("app/uploads/resume")], 200);
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
            'consultantEmail' => 'required|unique:reports,consultantEmail,' . $id . ',reportId',
        ]);


            $resumepath = '';
            $workpath = '';
            $otherDocumentpath = '';
            // add user
            $user = \App\Reports::find($id);
            $user->consultatName = $request->consultatName;
            $user->consultantLastName = $request->consultantLastName;
            $user->consultatMobileNumber = $request->consultatMobileNumber;
            $user->technology = $request->technology;
            $user->otherTechnologies = $request->otherTechnologies;
            $user->rate = $request->rate;
            $user->experience = $request->experience;
            $user->visaType = $request->visaType;
            $user->city = $request->city;
            $user->state = $request->state;
            $user->willingLocation = $request->willingLocation;
            $user->consultantEmail = $request->consultantEmail;
            $user->comments = $request->comments;
            if ($request->note) {
                $user->note = $request->note;
            }
            $user->reportStatus = $request->reportStatus;
            $user->resource = $request->resource;
            $user->ssn = $request->ssn;
            $user->availability = $request->availability;
            $user->documentsCollected = $request->documentsCollected;
            $user->skypeId = $request->skypeId;
            $user->linkedInUrl = $request->linkedInUrl;
            $user->priority = $request->priority;
            $user->bestContactNumber = $request->bestContactNumber;
            if ($request->resume) {
                $user->resume =  $request->resume;
            }
            if ($request->otherDocument) {
                $user->otherDocument = $request->otherDocument;
            }
            if ($request->workAuthorization) {
                $user->workAuthorization = $request->workAuthorization;
            }

            if (\Auth::user()->role == 'Admin' || \Auth::user()->role == 'HeadHuntersAdmin') {
                $user->save();
                return response()->json(['user' => $user], 200);
            } elseif ($user->userStatus == 'u') {
                $user->save();
                return response()->json(['user' => $user], 200);
            } else {
                return response()->json(['error' => "Error"], 400);
            }


    }
    public function downloadResume($filename) {

        return response()->download(storage_path("app/uploads/resume/{$filename}"));
    }
}
