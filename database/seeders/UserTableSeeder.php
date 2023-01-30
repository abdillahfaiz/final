<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'name' => 'admin',
            'email' => 'admin@myson.com',
            'password' => bcrypt('password'),
        ]);

        $admin->assignRole('admin');

        $user1 = User::create([
            'name' => 'Fatimah',
            'email' => 'fatimah@myson.com',
            'password' => bcrypt('password'),
        ]);

        $user1->assignRole('user');
        
        $user2 = User::create([
            'name' => 'Aisyah',
            'email' => 'aisyah@myson.com',
            'password' => bcrypt('password'),
        ]);

        $user2->assignRole('user');
    }
}
