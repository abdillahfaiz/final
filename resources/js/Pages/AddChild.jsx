import React from "react";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import { Head } from "@inertiajs/inertia-react";
import PrimaryButton from "@/Components/PrimaryButton";
import Footer from "@/Layouts/Authenticated/Footer";
import { Icon } from "@iconify/react";
import Navbar from "@/Layouts/Authenticated/Navbar";

export default function AddChild() {
    return (
        <>
        <Navbar/>
            <Head title="Tambah Data Anak" />

            <div class="mt-28 mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center py-8">
                    <img
                        class="w-24 h-24 mb-3 rounded-full shadow-lg"
                        src="https://source.unsplash.com/random/200x200?sig=1"
                        alt="Bonnie image"
                    />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        Rahayu Pratiwi
                    </h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                        maheswara.hari@yahoo.com
                    </span>
                </div>
            </div>

            <div className="block m-12 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 ">
                <div className="flex">
                    <Icon icon="material-symbols:filter-list-rounded" />
                    <div className="mb-3 mx-1">
                        <h1 class="text-xl font-extrabold text-black">
                            List
                            <small class="ml-2 font-semibold text-gray-500 dark:text-gray-400">
                                Data Anak
                            </small>
                        </h1>
                    </div>
                </div>

                <div class="relative overflow-x-auto  sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-sm text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-6">
                                    Nama Lengkap Anak
                                </th>
                                <th scope="col" class="px-6 py-6">
                                    Nama Ibu
                                </th>
                                <th scope="col" class="px-6 py-6 text-center">
                                    Tanggal Lahir
                                </th>
                                <th scope="col" class="px-6 py-6 text-center">
                                    Gender
                                </th>
                                <th scope="col" class="px-6 py-6  text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b border-gray-300 dark:bg-gray-900 dark:border-gray-700">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Budi Mahendra
                                </th>
                                <td class="px-6 py-4">Rahayu Pratiwi</td>
                                <td class="px-6 py-4 text-center">
                                    28 - 05 - 2020
                                </td>
                                <td class="px-6 py-4 text-center">Laki Laki</td>
                                <td class="px-6 py-4 text-center">
                                    <SecondaryButton>Edit</SecondaryButton>
                                    <DangerButton>Hapus</DangerButton>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="block m-12 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 ">
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                        <div class="px-4 sm:px-0">
                            <h3 class="text-lg font-medium leading-6 text-gray-900">
                                Identitas Anak
                            </h3>
                            <p class="mt-1 text-sm text-gray-600">
                                Sesuaikan identitas anak seperti yang tertera
                                pada akta kelahiran
                            </p>
                        </div>
                    </div>
                    <div class="mt-5 md:col-span-2 md:mt-0">
                        <form action="#" method="POST">
                            <div class="overflow-hidden shadow sm:rounded-md">
                                <div class="bg-white px-4 py-5 sm:p-6">
                                    <div class="grid grid-cols-6 gap-6">
                                        <div class="col-span-6 sm:col-span-3">
                                            <label
                                                for="first-name"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Nama Lengkap Anak
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autocomplete="given-name"
                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label
                                                for="last-name"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Nama Ibu
                                            </label>
                                            <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autocomplete="family-name"
                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div class="col-span-6">
                                            <label
                                                for="street-address"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Alamat Rumah
                                            </label>
                                            <input
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autocomplete="street-address"
                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label
                                                for="city"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Tanggal Lahir
                                            </label>
                                            <input
                                                type="date"
                                                name="birthdate"
                                                id="birthdate"
                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label
                                                for="countries"
                                                class="block  text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Gender
                                            </label>
                                            <select
                                                id="countries"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            >
                                                <option selected>
                                                    Pilih Gender
                                                </option>
                                                <option value="LAKI LAKI">
                                                    LAKI LAKI
                                                </option>
                                                <option value="PEREMPUAN">
                                                    PEREMPUAN
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <PrimaryButton className="w-full my-6">
                                        Tambah
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
