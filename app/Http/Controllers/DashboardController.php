<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Children;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $user = User::count();
        $children = Children::count();
        $male = Children::where('gender', 'LAKI LAKI')->count();
        $female = Children::where('gender', 'PEREMPUAN')->count();


        // $totalchild = Children::with('user')->get()->count();

        return Inertia::render('Dashboard', [
            'user' => $user,
            'children' => $children,
            'male' => $male,
            'female' => $female,
        ]);
        
    }

    public function article(){
        $article = Article::all();
        return Inertia::render('Dashboard', ['article' => $article]);
    }
}
