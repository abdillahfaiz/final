<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserDataController;
use App\Http\Controllers\ChildDataController;
use App\Http\Controllers\GrowthDataController;
use App\Http\Controllers\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\DashboardController as UserDashboardController;
use App\Models\Article;
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

// Route::redirect('/', 'login');
// Route::get('register', function () {
//     return Inertia::render('Register');
// })->name('register');

Route::get('/', function () {
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});
// Route::middleware('auth', 'role:user')->name('user')->group(function (){
// Route::get('/', [HomeController::class, 'index'])->name('user.home');
// });

Route::get('/dashboard-user', [UserDashboardController::class, 'index'])->middleware(['auth', 'role:user'])->name('home');
Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'role:admin'])->name('dashboard');
// Route::get('/dashboard-user', [HomeController::class, 'index'])->middleware(['auth', 'role:user'])->name('dashboard-user');

//DATA USER PAGE
Route::get('/data-user', [UserDataController::class, 'index'])->middleware(['auth', 'role:admin'])->name('user-data');
Route::delete('/hapus-user/{id}', [UserDataController::class, 'delete'])->middleware(['auth', 'role:admin'])->name('delete-user');

Route::get('/data-anak', [ChildDataController::class, 'index'])->middleware(['auth', 'role:admin'])->name('child-data');
Route::get('/data-pertumbuhan/{id}', [GrowthDataController::class, 'index'])->middleware(['auth', 'role:admin'])->name('growth-data');
Route::post('/tambah-data-pertumbuhan', [GrowthDataController::class, 'store'])->middleware(['auth', 'role:admin'])->name('store-growth-data');
Route::delete('/hapus-data-pertumbuhan/{id}', [GrowthDataController::class, 'destroy'])->middleware(['auth', 'role:admin'])->name('delete-growth-data');

Route::get('/artikel', [ArticleController::class, 'index'])->middleware('auth')->name('articles');
Route::get('/tambah-artikel', [ArticleController::class, 'create'])->middleware(['auth', 'verified', 'role:admin'])->name('add-article');
Route::post('/store-artikel', [ArticleController::class, 'store'])->middleware(['auth', 'verified', 'role:admin'])->name('store-article');
Route::delete('/hapus-artikel/{id}', [ArticleController::class, 'destroy'])->middleware(['auth', 'verified', 'role:admin'])->name('destroy-article');
// 
//DETAIL ADD CHILD PAGE
Route::get('/tambah-anak/{id}', [UserDataController::class, 'detail'])->middleware(['auth'])->name('add-child');
Route::post('/tambah-anak', [UserDataController::class, 'store'])->middleware(['auth'])->name('store-child');
Route::delete('/hapus-anak/{id}', [UserDataController::class, 'destroy'])->middleware(['auth'])->name('delete-child');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
