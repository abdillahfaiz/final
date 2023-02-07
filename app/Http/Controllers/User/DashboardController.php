<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Children;
use App\Models\GrowthData;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Children $children, GrowthData $growthData)
    {
        $children = Children::where('user_id', Auth::id())->get();
        foreach ($children as $child) {
            $growthData = GrowthData::where('children_id', $child?->id)->latest()->first();
        }
        return Inertia::render('Home', ['children' => $children, 'growthData' => $growthData]);
    }
}
