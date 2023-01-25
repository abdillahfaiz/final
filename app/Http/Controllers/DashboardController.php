<?php

namespace App\Http\Controllers;

use App\Models\Children;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

class DashboardController extends Controller
{
    public function index()
    {
        $children = Children::count();
        $male = Children::where('gender', 'LAKI LAKI')->count();
        $female = Children::where('gender', 'PEREMPUAN')->count();


        // $totalchild = Children::with('user')->get()->count();

        return Inertia::render('Dashboard', [
            'children' => $children,
            'male' => $male,
            'female' => $female,
        ]);
        
    }
}
