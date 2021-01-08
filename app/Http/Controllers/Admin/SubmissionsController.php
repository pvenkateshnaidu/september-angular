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
use Illuminate\Support\Facades\View;

class SubmissionsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function emailsent(Request $request)
    {

        $smtpAddress = 'mail.webmobilez.com';
        $port = 26;
        $encryption = 'tls';

        $yourEmail = 'info@webmobilez.com';
        $yourPassword = 'Webmobilez$543';

        $transport = (new \Swift_SmtpTransport($smtpAddress, $port, $encryption))
            ->setUsername($yourEmail)
            ->setPassword($yourPassword);
        $mailer = (new \Swift_Mailer($transport));

        $view = View::make('email_template', [
            'message' => $request->message
        ]);

        $html = $view->render();
        $mail = (new \Swift_Message());
        $emailtosend = \Auth::user()->email;
        $ccemailsA = $request->cc;
        $ccemails = implode(",", $ccemailsA);
        $mail->setFrom($emailtosend)
            ->setTo($ccemailsA)
            ->setSubject($request->subject)
            ->setBody($html)
            ->setContentType('text/html');


        if ($mailer->send($mail)) {
            return response()->json(['sent' => "sent"], 200);
        }
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getConsultansOnly()
    {
        $submissions = \App\Reports::orderBy('created_at', 'DESC')
            ->where('adminStatus', '=', 'A')
            ->get();
        $submissionslist = [];
        $submissionslist[] = ["label" => "Choosse Consultant", "value" => ""];
        foreach ($submissions as $value) {
            $submissionslist[] = ["label" => $value->consultatName . " " . $value->consultantLastName, "value" => $value->reportId];
        }
        return response()->json(['submissions' => $submissionslist], 200);
    }

    public function getConsultans()
    {

        $submissions = \App\Reports::orderBy('created_at', 'DESC')
            ->where('adminStatus', '=', 'A')
            ->get();
        $submissionslist = [];
        $submissionslist[] = ["label" => "Choosse Consultant", "value" => ""];
        foreach ($submissions as $value) {
            $submissionslist[] = ["label" => $value->consultatName . " " . $value->consultantLastName, "value" => $value->reportId];
        }
        $vendors = \App\VendorList::orderBy('created_at', 'DESC')
            ->get();
        $vendorslist = [];
        $vendorslist[] = ["label" => "Choosse Vendor", "value" => ""];
        foreach ($vendors as $value) {
            $vendorslist[] = ["label" => $value->vendorCompanyName, "value" => $value->vid];
        }
        $clients = \App\Clients::orderBy('created_at', 'DESC')
            ->get();
        $clientList = [];
        $clientList[] = ["label" => "Choosse Client", "value" => ""];
        foreach ($clients as $value) {
            $clientList[] = ["label" => $value->clientName, "value" => $value->clientId];
        }
        $jobs = \App\Jobs::orderBy('created_at', 'DESC')
            ->get();
        $jobList = [];
        $jobList[] = ["label" => "Choosse Job", "value" => ""];
        foreach ($jobs as $value) {
            $jobList[] = ["label" => $value->jobTitle, "value" => $value->jobId];
        }
        $data = array();
        /* $data = Submissions::with('user_details','consultant')
                ->whereDate('created_at', Carbon::today())
                ->where("userId", "=", \Auth::user()->id)
                ->orderBy('created_at', 'DESC')->get(); */

        return response()->json(['submissions' => $submissionslist, 'vendorslist' => $vendorslist, "clients" => $clientList, "jobs" => $jobList, 'data' => $data], 200);
    }

    public function getTotalInterviewShecdules(Request $request)
    {
        $interViewSubmissions = Submissions::find($request->vid)
            ->where('vendorStatus', '=', 'Interview scheduled')

            ->get();
        $interViewCount = $interViewSubmissions->count();
        $submitclientSubmissions = Submissions::find($request->vid)
            ->where('vendorStatus', '=', 'Submitted to Client')

            ->get();
        $submitclientCount = $submitclientSubmissions->count();
        return response()->json(['interviews' => $interViewCount, 'submitclient' => $submitclientCount], 200);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // filters
        $where = [];


        if ($request->get('reportId')) {
            $where['reportId'] = $request->reportId;
        }
        if ($request->get('submissionRate')) {
            $where['submissionRate'] = $request->submissionRate;
        }
        if ($request->get('actualRate')) {
            $where['actualRate'] = $request->actualRate;
        }
        /*   if ($request->get('technology')) {

            $where['technology'] =$request->technology;
        } */
        //    if (Auth::user()->role != "Admin")
        // $where['userId'] = \Auth::user()->id;


        $submissions = Submissions::with(['user_details', 'consultant' => function ($q) {

            $q->select([
                '*', \DB::raw("CONCAT(COALESCE(consultatName	, ''),' ',COALESCE(consultantLastName, '')) as consultatName"),
                \DB::raw("CASE technology
                WHEN 'others' THEN otherTechnologies ELSE technology END AS technology")
            ]);
        }])
            ->whereHas('consultant', function ($q) use ($request) {
                if ($request->get('technology'))
                    $q->where('technology', 'like', '%' . $request->get('technology') . '%');
            })
            ->where($where)

            ->when($request->get('vendorCompanyName'), function ($query) use ($request) {
                $query->where('vendorCompanyName', 'like', '%' . $request->get('vendorCompanyName') . '%');
            })
            ->when($request->get('vendorName'), function ($query) use ($request) {
                $query->where('vendorName', 'like', '%' . $request->get('vendorName') . '%');
            })

            ->when($request->get('vendorEmail'), function ($query) use ($request) {
                $query->where('vendorEmail', 'like', '%' . $request->get('vendorEmail') . '%');
            })
            ->when($request->get('vendorMobileNumber'), function ($query) use ($request) {
                $query->where('vendorMobileNumber', 'like', '%' . $request->get('vendorMobileNumber') . '%');
            })
            ->when($request->get('endClientName'), function ($query) use ($request) {
                $query->where('endClientName', 'like', '%' . $request->get('endClientName') . '%');
            })

            ->when($request->get('vendorStatus'), function ($query) use ($request) {

                $arrha = explode(',', $request->get('vendorStatus'));
                $query->whereIn('vendorStatus', $arrha);
            })
            ->when($request->get('created_at'), function ($query) use ($request) {
                $query->whereDate('created_at', '=', \Carbon\Carbon::parse($request->get('created_at'))->format('Y-m-d'));
            })
            ->orderBy('created_at', 'DESC')
            ->paginate(20);

        // $submissions = Submissions::with('user_details','consultant','vendorlist','clients','vendorDetail')->orderBy('created_at', 'DESC')


        return response()->json(['submissions' => $submissions], 200);
    }
    public function interviewsubmissions()
    {
        // $submissions = Submissions::with('user_details','consultant','vendorlist','clients','vendorDetail')
        $submissions = Submissions::with(['user_details', 'consultant' => function ($q) {

            $q->select([
                '*',
                \DB::raw("CONCAT(COALESCE(consultatName	, ''),' ',COALESCE(consultantLastName, '')) as consultatName"), \DB::raw("CASE technology
                WHEN 'others' THEN otherTechnologies ELSE technology END AS technology")
            ]);
        }])
            ->whereIn('vendorStatus', ['Interview scheduled', 'Placed'])
            ->orderBy('scheduleDate', 'DESC')
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
            'clientId' => Rule::unique('vendors')->where(function ($query) use ($request) {
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
        $vlist = \App\VendorList::find($request->vid);
        $job->vendorCompanyName = $vlist->vendorCompanyName;

        $job->vendorDetailId = $request->vendorDetailId;
        $vDetail = \App\vendorDetails::find($request->vendorDetailId);
        $job->vendorName = $vDetail->contactName;
        $job->vendorMobileNumber = $vDetail->contactMobile;
        $job->vendorEmail = $vDetail->contactEmail;

        $job->clientId = $request->clientId;
        $vClient = \App\Clients::find($request->clientId);
        $job->endClientName =  $vClient->clientName;

        $job->endClientLocation = $request->endClientLocation;
        $job->reportId = $request->state;
        $job->vendorStatus = $request->vendorStatus;
        if ($request->timezone)
            $job->timezone = $request->timezone;
        if ($request->scheduleDate)
            $job->scheduleDate = $request->scheduleDate;
        $job->userId = \Auth::user()->id;
        $job->created_at = date('Y-m-d H:i:s');
        $job->save();
        $data = Submissions::with('user_details', 'consultant')
            ->where('vendorId', '=', $job->vendorId)
            ->get();

        return response()->json(['job' => $job, 'data' => $data], 200);
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
                $timesheet =  \App\Reports::with('user_details')
                    ->where("userStatus", '=', 'p')
                    ->where('reports.wStatus', '!=', 'R')
                    ->orderBy('created_at', 'DESC')
                    ->get();
            } else {
                $user = \App\Reports::find($request->index);
                $user->userStatus = 'p';
                $user->save();
                $timesheet =  \App\Reports::with('user_details')
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
        // $submissions = Submissions::with('user_details','vendorlist','clients','vendorDetail')
        $submissions = Submissions::with('user_details')
            ->where('reportId', '=', $id)
            ->orderBy('created_at', 'DESC')
            ->get();

        return response()->json(['submissions' => $submissions], 200);
    }
    public function edit($id)
    {
        $submissions = Submissions::with('user_details')
            ->where('reportId', '=', $id)
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
        if ($request->scheduleDate)
            $submission->scheduleDate = $request->scheduleDate;
        if ($request->timezone)
            $submission->timezone = $request->timezone;
        $submission->vendorComments = $request->vendorComments;
        $submission->save();
        //  $submissions = Submissions::with('user_details','consultant','vendorlist','clients','vendorDetail')->orderBy('created_at', 'DESC')
        $submissions = Submissions::with('user_details', 'consultant')->orderBy('created_at', 'DESC')
            // ->paginate(20, ['*'], 'page', 2);
            ->paginate(20);
        return response()->json(['submissions' => $submissions], 200);
    }
}
