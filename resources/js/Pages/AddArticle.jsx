import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Layouts/Authenticated/Navbar";
import Footer from "@/Layouts/Authenticated/Footer";

export default function AddArticle() {
    return (
        <>
            <Navbar />
            <Head title="Tambah Artikel" />
            <div className="my-24">
                <div className="block m-12 p-6 bg-white border border-gray-300 rounded-2xl shadow-md hover:bg-gray-100 ">
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="md:col-span-1">
                            <div class="px-4 sm:px-0">
                                <h3 class="text-lg font-medium leading-6 text-gray-900">
                                    Artikel
                                </h3>
                                <p class="mt-1 text-sm text-gray-600">
                                    Tambah artikel dengan mengisi form disamping
                                </p>
                            </div>
                        </div>
                        <div class="mt-5 md:col-span-2 md:mt-0">
                            <form action="#" method="POST">
                                <div class="shadow sm:overflow-hidden sm:rounded-md">
                                    <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                                        <div class="grid grid-cols-3 gap-6">
                                            <div class="col-span-3 sm:col-span-2">
                                                <label
                                                    for="title"
                                                    class="block text-sm font-medium text-gray-700"
                                                >
                                                    Judul Artikel
                                                </label>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div class="col-span-3 sm:col-span-2">
                                                <label
                                                    for="title"
                                                    class="block text-sm font-medium text-gray-700"
                                                >
                                                    Nama Creator
                                                </label>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div class="col-span-3 sm:col-span-2">
                                                <label
                                                    for="title"
                                                    class="block text-sm font-medium text-gray-700"
                                                >
                                                   Kategori
                                                </label>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                for="about"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Deskripsi
                                            </label>
                                            <div class="mt-1">
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                ></textarea>
                                            </div>
                                            <p class="mt-2 text-sm text-gray-500">
                                                Deskripsi singkat tentang artikel yang akan ditambahkan max:50 huruf
                                            </p>
                                        </div>
                                        <div>
                                            <label
                                                for="about"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Konten / Isi Artikel
                                            </label>
                                            <div class="mt-1">
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    rows="30"
                                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700">
                                                Gambar Sampul Artikel
                                            </label>
                                            <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                                <div class="space-y-1 text-center">
                                                    <svg
                                                        class="mx-auto h-12 w-12 text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                    <div class="flex text-sm text-gray-600">
                                                        <label
                                                            for="file-upload"
                                                            class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                                        >
                                                           
                                                            <input type="file" name="" id="" className="rounded-lg border-solid border-2 border-gray-200 my-6" />
                                                           
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>{" "}
            <Footer />
        </>
    );
}
