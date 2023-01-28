<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserDataController;
use App\Http\Controllers\ChildDataController;
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

Route::redirect('/', 'login');

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth'])->name('dashboard');

//DATA USER PAGE
Route::get('/data-user', [UserDataController::class, 'index'])->middleware(['auth'])->name('user-data');
Route::delete('/hapus-user/{id}', [UserDataController::class, 'delete'])->middleware(['auth'])->name('delete-user');

Route::get('/data-anak', [ChildDataController::class, 'index'])->middleware(['auth'])->name('child-data');
Route::get('/data-pertumbuhan/{id}', [ChildDataController::class, 'detail'])->middleware(['auth'])->name('growth-data');
// Route::get('/data-anak', function () {
//     return Inertia::render('ChildData');
// })->middleware(['auth', 'verified', 'role:admin'])->name('child-data');

Route::get('/artikel', function () {
    return Inertia::render('Articles');
})->middleware(['auth', 'verified', 'role:admin'])->name('articles');

Route::get('/tambah-artikel', function () {
    return Inertia::render('AddArticle');
})->middleware(['auth', 'verified', 'role:admin'])->name('add-article');

// Route::get('/tambah-anak', function () {
//     return Inertia::render('AddChild');
// })->middleware(['auth', 'verified', 'role:admin'])->name('add-child');

//DETAIL CHILD PAGE
Route::get('/tambah-anak/{id}', [UserDataController::class, 'detail'])->middleware(['auth'])->name('add-child');
Route::post('/tambah-anak', [UserDataController::class, 'store'])->middleware(['auth'])->name('store-child');
Route::delete('/hapus-anak/{id}', [UserDataController::class, 'destroy'])->middleware(['auth'])->name('delete-child');

Route::get('/data-pertumbuhan', function () {
    return Inertia::render('GrowthData');
})->middleware(['auth', 'verified', 'role:admin'])->name('growth-data');

Route::get('register', function () {
    return Inertia::render('Register');
})->name('register');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
