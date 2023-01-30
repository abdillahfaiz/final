<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserDataController;
use App\Http\Controllers\ChildDataController;
use App\Http\Controllers\GrowthDataController;
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
Route::get('/data-pertumbuhan/{id}', [GrowthDataController::class, 'index'])->middleware(['auth'])->name('growth-data');
Route::post('/tambah-data-pertumbuhan', [GrowthDataController::class, 'store'])->middleware(['auth'])->name('store-growth-data');
Route::delete('/hapus-data-pertumbuhan/{id}', [GrowthDataController::class, 'destroy'])->middleware(['auth'])->name('delete-growth-data');


Route::get('/artikel', [ArticleController::class, 'index'])->middleware('auth')->name('articles');
Route::get('/tambah-artikel', [ArticleController::class, 'create'])->middleware(['auth', 'verified', 'role:admin'])->name('add-article');

//DETAIL ADD CHILD PAGE
Route::get('/tambah-anak/{id}', [UserDataController::class, 'detail'])->middleware(['auth'])->name('add-child');
Route::post('/tambah-anak', [UserDataController::class, 'store'])->middleware(['auth'])->name('store-child');
Route::delete('/hapus-anak/{id}', [UserDataController::class, 'destroy'])->middleware(['auth'])->name('delete-child');


Route::get('register', function () {
    return Inertia::render('Register');
})->name('register');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
