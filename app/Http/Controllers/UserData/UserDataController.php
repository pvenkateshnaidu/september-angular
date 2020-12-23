<?php

namespace App\Http\Controllers\UserData;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Libraries\Access;

class UserDataController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {


        // filters
        $where = [];

        $users = \App\UserData::get();
        return response()->json( $users, 200);

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
            'title'     => 'required|alpha_spaces',
            'firstName'     => 'required',
            'lastName'     => 'required',
            'email'    => 'required|email|valid_email',
            'password' => 'required|string|password'
        ];

            // add user
            $user            = new \App\UserData();
            $user->title      = $request->title;
            $user->firstName      = $request->firstName;
            $user->lastName      = $request->lastName;
            $user->email     = $request->email;
            $user->role     = $request->role;
            $user->password  = $request->password;
            $user->isDeleting  = 0;
            $user->save();

            return response()->json( $user, 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $userTypes = config('slik.userTypes');
        $user      = \App\UserData::find($id);;
        return response()->json( $user, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {


        $userTypes = config('slik.userTypes');
        $user      = \App\UserData::find($id);
        return response()->json( $user, 200);
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

            // add user
            $user            = \App\UserData::find($id);
            $user->title      = $request->title;
            $user->firstName      = $request->firstName;
            $user->lastName      = $request->lastName;
            $user->role     = $request->role;
            $user->email     = $request->email;
            if($request->password)
            $user->password  = $request->password;
            $user->save();
            return response()->json( $user, 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $user = \App\UserData::find($id)->delete();
        return response()->json( $user, 200);
    }



}
