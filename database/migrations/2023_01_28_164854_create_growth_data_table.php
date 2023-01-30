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
            $table->foreignId('children_id')->references('id')->on('childrens')->cascadeOnDelete();
            $table->integer('height')->nullable();
            $table->integer('weight')->nullable();
            $table->integer('head_circum')->nullable();
            $table->enum('status', ['Gizi Buruk', 'Gizi Kurang', 'Gizi Baik', 'Risiko Gizi Lebih', 'Gizi Lebih', 'Obesitas']);
            $table->date('date')->nullable();
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
