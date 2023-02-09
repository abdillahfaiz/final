<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Children extends Model
{
    use HasFactory;

    protected $guarded = [
        'id'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
    
    public function growthData(){
        return $this->hasMany(GrowthData::class);
    }
    
        public function immunization(){
            return $this->hasMany(Immunization::class);
        }
}
