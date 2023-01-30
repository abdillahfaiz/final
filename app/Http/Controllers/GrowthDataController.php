<?php

namespace App\Http\Controllers;

use App\Models\Children;
use App\Models\GrowthData;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GrowthDataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Children $children, GrowthData $growthData, $id)
    {
        $children = Children::find($id);
        $growthData = GrowthData::where('children_id', $children->id)->get();
        return Inertia::render('GrowthData', ['children' => $children, 'growthData' => $growthData]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    //  public function detail(GrowthData $growthData, $id)
    //  {

    //     $growthData = GrowthData::find($id);
    //     return Inertia::render('GrowthData', ['growthData' => $growthData]);
        
    //  }
 
    public function store(Request $request, Children $children)
    {
        $request->validate([
            'height' => 'required',
            'weight' => 'required',
            'head_circum' => 'required',
            'status' => 'required',
            'date' => 'required',
            'children_id' => 'required',
            
        ]);
        
        GrowthData::create([
            'height' => $request->height,
            'weight' => $request->weight,
            'head_circum' => $request->head_circum,
            'status' => $request->status,
            'date' => $request->date,
            'children_id' => $request->children_id,
        ]);

        return redirect()->back()->with('succes','Data Berhasil Disimpan!');
        return Inertia::render('GrowthData',)->with('succes','Data Berhasil Disimpan!');
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
    public function destroy(GrowthData $growthData, $id)
    {
        $growthData = GrowthData::find($id);
        $growthData->delete();

        return redirect()->back()->with('succes', 'Data berhasil Diahapus');
    }
}
