<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('my-name', 'Auth\PassportController@nameDisp');

Route::group(['middleware' => ['cors'], 'namespace' => 'Auth'], function () {
    Route::post('login', 'PassportController@login');
    Route::post('register', 'PassportController@register');
});

Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'Auth'], function () {
    Route::post('logout', 'PassportController@logout');
});
/*
Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'admin'], function () {
    Route::get('getUserDetails', 'UserListController@getUserDetails');
});
*/

Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'Admin'], function () {
    Route::resource('user-list', 'UserListController');
});

Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'Admin'], function () {
    Route::resource('time-sheet', 'TimeSheetController');
});
Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'Admin'], function () {
    Route::resource('time-sheet-documents', 'TimeSheetDocumentsController');
});
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'Admin'], function () {
    Route::get('getAllConsultants', 'ConsultantController@index');
});
Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'Admin'], function () {
    Route::get('getAllDocuments', 'AdminDocumentsController@index');
});
Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'Admin'], function () {
    Route::resource('store-consultant', 'ConsultantController');
});
Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'Admin'], function () {
    Route::post('status-consultant', 'ConsultantController@statusChange');
});
Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'Admin'], function () {
    Route::post('status-consultant', 'ConsultantController@statusChange');
});
Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'Admin'], function () {
    Route::post('getTotalInterviewShecdules', 'SubmissionsController@getTotalInterviewShecdules');
});

Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'Admin'], function () {
    Route::post('saveDocument', 'ConsultantController@saveDocument');
});
Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'Admin'], function () {
    Route::resource('getHotlistConsultants', 'HotListController');
});

Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'Admin'], function () {
    Route::resource('jobs', 'JobsController');
});

Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'Admin'], function () {
    Route::resource('submissions', 'SubmissionsController');
});
Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'Admin'], function () {
    Route::get('getConsultantsList', 'SubmissionsController@getConsultans');
});

Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'Admin'], function () {
    Route::resource('contacts', 'ContactsController');
});
Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'Admin'], function () {
    Route::post('contactsDetails', 'ContactsController@getDetails');
});
Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'Admin'], function () {
    Route::resource('vendorlist', 'VendorListController');
});

Route::group(['middleware' => ['cors','auth:api'], 'namespace' => 'Admin'], function () {
    Route::resource('contactslist', 'ContactsListController');
});
