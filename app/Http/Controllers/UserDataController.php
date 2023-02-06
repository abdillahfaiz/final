<?php

namespace App\Http\Controllers;

use App\Models\Children;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class UserDataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // if($request->search){
        //     // $search = $request->get('search');
        //     $user = User::where('name', 'like', '%' . request("search") . '%');
        // }else{
        //     $user = User::all();
        // }
        // $user = User::search(request('search'));
        $user = User::where('id', '!=', '1')->get();
        return Inertia::render('UserData', ['user' => $user]);
    }

    public function detail(User $user, $id, Children $children)
    {
        $user = User::find($id);
        $children = Children::where('user_id', $user->id)->get();
        $countChild = Children::where('user_id', $user->id)->count();
        return Inertia::render('AddChild', ['user' => $user, 'children' => $children, 'countChild' => $countChild]);
    }

    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'mom_name' => 'required',
            'address' => 'required',
            'birthdate' => 'required',
            'user_id' => 'required',
            'gender' => 'required',
        ]);

        Children::create([
            'name' => $request->name,
            'mom_name' => $request->mom_name,
            'address' => $request->address,
            'birthdate' => $request->birthdate,
            'user_id' => $request->user_id,
            'gender' => $request->gender,
        ]);
        return redirect()->back()->with('succes','Data Berhasil Disimpan!');
        return Inertia::render('AddChild',)->with('succes','Data Berhasil Disimpan!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Children $children, $id)
    {
        $children = Children::find($id);
        $children->delete();

        return redirect()->back()->with('succes', 'Data berhasil di hapus');
    }

    public function delete(User $user, $id)
    {
        // dd($user);
        $user = User::find($id);
        $user->delete();

        return redirect()->route('user-data')->with('succes','Data Berhasil Disimpan!');
    }
}
