<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GrowthData extends Model
{
    use HasFactory;
    protected $fillable = [
        'height',
        'weight',
        'head_circum',
        'status',
        'date',
        'children_id',
    ];

    public function children(){
        return $this->belongsTo(Children::class);
    }
}
