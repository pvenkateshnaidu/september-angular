<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Model\UserEmployee;
use Auth;
use Mail;
use Swift_Mailer;
use Swift_SmtpTransport;
use Illuminate\Support\Facades\View;
use Swift_Transport;
use Swift_Message;
class UserListController extends Controller
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

/*
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
            'message' => '<h1>Hello Webmobilez!</h1>'
        ]);

        $html = $view->render();
        $mail = (new \Swift_Message());
        $emailtosend= \Auth::user()->email;
        $mail->setFrom($emailtosend)
             ->setTo('pvenkateshnaidu@gmail.com')
             ->setSubject('Email subject')
             ->setBody($html)
             ->setContentType('text/html');


        if ($mailer->send($mail)) { */
            $user = User::get();
            return response()->json(['user' => $user], 200);
       // }

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = User::select('name', 'email', 'id')->find(Auth::user()->id);

        return response()->json($user, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        $rules     = [
            'name' => 'required|min:3',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:5',
        ];
        $validator = \Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json(['message' => "Validation Error"], 400);
        } else {
            // add user
            $user     = new \App\User();
            $user->name      = $request->name;
            $user->email     = $request->email;
            $user->role = $request->role;
            $user->password  = bcrypt($request->password);
            $user->save();

            return response()->json(['user' => "User Created Successfully"], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $user = User::find($id);
        return response()->json(['user' => $user], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $user = User::find($id);
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

        $user = User::find($id);
        if ($request->name)
            $user->name      = $request->name;
        if ($request->email)
            $user->email     = $request->email;
        if ($request->role)
            $user->role = $request->role;
        if ($request->password)
            $user->password  = bcrypt($request->password);
        $user->save();
        return response()->json(['user' => $user, 'message' => 'User Updated Successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return response()->json(['user' => $user, 'message' => 'User Deleted Successfully'], 200);
    }
    public function getUserDetails()
    {
    }
}
