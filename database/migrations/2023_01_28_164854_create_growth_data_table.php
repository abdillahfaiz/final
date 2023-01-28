<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('growth_data', function (Blueprint $table) {
            $table->id();
            $table->foreignId('children_id')->references('id')->on('chiildrens')->cascadeOnDelete();
            $table->integer('height');
            $table->integer('weight');
            $table->integer('head_circum');
            $table->string('date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('growth_data');
    }
};
