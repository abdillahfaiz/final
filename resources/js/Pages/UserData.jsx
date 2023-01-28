import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
// import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/Delete";
import ThirdyButton from "@/Components/ThirdyButton";
import Navbar from "@/Layouts/Authenticated/Navbar";
import Delete from "@/Components/Delete";
import { Icon } from "@iconify/react";


export default function UserData({ user }) {
    console.log(user);
    return (
        <>
            <Navbar />
            <Head title="Data User" />
            <div className="my-24">
                {/* --TABLE START-- */}
                <div className="block m-12 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 ">
                <h1 class="flex text-xl font-extrabold text-black mb-2">
                            <div className="pt-1 mx-1">
                                <Icon icon="material-symbols:filter-list-rounded" />
                            </div>
                            List
                            <small class="ml-2 font-semibold text-gray-500 dark:text-gray-400">
                                Data User
                            </small>
                        </h1>
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
                                    <th
                                        scope="col"
                                        class="px-6 py-6 text-center"
                                    >
                                        Created At
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-6  text-center"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.map((index) => {
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
                                            <td class="px-6 py-4 text-center">
                                                {index.created_at}
                                            </td>
                                            <td class="px-6 py-4 text-center">
                                                <Link
                                                    href={`/tambah-anak/${index.id}`}
                                                >
                                                    <ThirdyButton>
                                                        Detail
                                                    </ThirdyButton>
                                                </Link>
                                                <Delete
                                                    URL={"/hapus-user"}
                                                    id={index.id}
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* --TABLE END-- */}
            </div>
        </>
    );
}
