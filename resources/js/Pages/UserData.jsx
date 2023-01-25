import React from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Link, Head } from "@inertiajs/inertia-react";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import ThirdyButton from "@/Components/ThirdyButton";
import Navbar from "@/Layouts/Authenticated/Navbar";

export default function UserData({user}) {
    console.log(user);
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
                            {
                            user.map((index, key) => {
                                return (
                                    <tr class="bg-white border-b border-gray-300 dark:bg-gray-900 dark:border-gray-700">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {index.name}
                                </th>
                                <td class="px-6 py-4">
                                    {index.email}
                                </td>
                                <td class="px-6 py-4 text-center">1</td>
                                <td class="px-6 py-4 text-center">
                                    <a href={route("add-child")}>
                                        <ThirdyButton>
                                            Tambah Data Anak
                                        </ThirdyButton>
                                    </a>
                                    <SecondaryButton>Edit</SecondaryButton>
                                    <DangerButton>Hapus</DangerButton>
                                </td>
                            </tr>
                                )
                            })

                            }
                        </tbody>
                    </table>
                </div>

                {/* --TABLE END-- */}
            </div>
        </>
    );
}
