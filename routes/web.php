<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserDataController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', 'prototype/login');

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth'])->name('dashboard');

Route::get('/data-user', [UserDataController::class, 'index'])->middleware(['auth'])->name('user-data');

Route::get('/data-anak', function () {
    return Inertia::render('ChildData');
})->middleware(['auth', 'verified', 'role:admin'])->name('child-data');

Route::get('/artikel', function () {
    return Inertia::render('Articles');
})->middleware(['auth', 'verified', 'role:admin'])->name('articles');

Route::get('/tambah-artikel', function () {
    return Inertia::render('AddArticle');
})->middleware(['auth', 'verified', 'role:admin'])->name('add-article');

Route::get('/tambah-anak', function () {
    return Inertia::render('AddChild');
})->middleware(['auth', 'verified', 'role:admin'])->name('add-child');

Route::get('/data-pertumbuhan', function () {
    return Inertia::render('GrowthData');
})->middleware(['auth', 'verified', 'role:admin'])->name('growth-data');

Route::prefix('prototype')->name('prototype.')->group(function () {
    Route::get('login', function () {
        return Inertia::render('Prototype/Login');
    })->name('login');
    Route::get('register', function () {
        return Inertia::render('Prototype/Register');
    })->name('register');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
