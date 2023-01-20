import React from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/inertia-react";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import ThirdyButton from "@/Components/ThirdyButton";
import Navbar from "@/Layouts/Authenticated/Navbar";

export default function UserData() {
    return (
        <>
            <Navbar />
            <Head title="Data User" />
            <div className="my-24 mx-10">
                {/* --TABLE START-- */}

                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-sm text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-6">
                                    Nama User
                                </th>
                                <th scope="col" class="px-6 py-6">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-6 text-center">
                                    Jumlah Anak
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
                                    Rahayu Pratiwi{" "}
                                </th>
                                <td class="px-6 py-4">
                                    maheswara.hari@yahoo.com
                                </td>
                                <td class="px-6 py-4 text-center">1</td>
                                <td class="px-6 py-4 text-center">
                                    <ThirdyButton>
                                        Tambah Data Anak
                                    </ThirdyButton>
                                    <SecondaryButton>Edit</SecondaryButton>
                                    <DangerButton>Hapus</DangerButton>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-300 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Shakila Widiastuti{" "}
                                </th>
                                <td class="px-6 py-4">
                                    prayoga.jessica@maryadi.biz
                                </td>
                                <td class="px-6 py-4 text-center">2</td>
                                <td class="px-6 py-4 text-center">
                                    <ThirdyButton>
                                        Tambah Data Anak
                                    </ThirdyButton>
                                    <SecondaryButton>Edit</SecondaryButton>
                                    <DangerButton>Hapus</DangerButton>
                                </td>
                            </tr>
                            <tr class="bg-white border-b border-gray-300 dark:bg-gray-900 dark:border-gray-700">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Natalia Sudiati{" "}
                                </th>
                                <td class="px-6 py-4">
                                    vanggriawan@yahoo.co.id
                                </td>
                                <td class="px-6 py-4 text-center">1</td>
                                <td class="px-6 py-4 text-center">
                                    <ThirdyButton>
                                        Tambah Data Anak
                                    </ThirdyButton>
                                    <SecondaryButton>Edit</SecondaryButton>
                                    <DangerButton>Hapus</DangerButton>
                                </td>
                            </tr>
                            <tr class="border-b bg-gray-50 border-gray-300 dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Vera Permata{" "}
                                </th>
                                <td class="px-6 py-4">qmaryati@gmail.com</td>
                                <td class="px-6 py-4 text-center">1</td>
                                <td class="px-6 py-4 text-center">
                                    <ThirdyButton>
                                        Tambah Data Anak
                                    </ThirdyButton>
                                    <SecondaryButton>Edit</SecondaryButton>
                                    <DangerButton>Hapus</DangerButton>
                                </td>
                            </tr>
                            <tr>
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Farah Puspita{" "}
                                </th>
                                <td class="px-6 py-4">
                                    timbul.suryatmi@budiman.org
                                </td>
                                <td class="px-6 py-4 text-center">1</td>
                                <td class="px-6 py-4 text-center">
                                    <ThirdyButton>
                                        Tambah Data Anak
                                    </ThirdyButton>
                                    <SecondaryButton>Edit</SecondaryButton>
                                    <DangerButton>Hapus</DangerButton>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* --TABLE END-- */}
            </div>
        </>
    );
}
