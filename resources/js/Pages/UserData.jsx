import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import ThirdyButton from "@/Components/ThirdyButton";
import Navbar from "@/Layouts/Authenticated Admin/Navbar";
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
                    <h1 className="flex text-xl font-extrabold text-black mb-2">
                        <div className="pt-1 mx-1">
                            <Icon icon="material-symbols:filter-list-rounded" />
                        </div>
                        List
                        <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">
                            Data User
                        </small>
                    </h1>
                    <div className="my-6">
                        <form class="flex items-center">
                            <label for="simple-search" class="sr-only">
                                Search
                            </label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                name="search"
                                    type="text"
                                    id="simple-search"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search Data User"
                                    required
                                    
                                />
                            </div>
                            <button
                                type="submit"
                                class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                <svg
                                    class="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </form>
                    </div>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-sm text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-6">
                                        Nama User
                                    </th>
                                    <th scope="col" className="px-6 py-6">
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-6 text-center"
                                    >
                                        Created At
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-6  text-center"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {user != 0 ? (
                                    user.map((index) => {
                                        return (
                                            <tr className="bg-white border-b border-gray-300 dark:bg-gray-900 dark:border-gray-700">
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                >
                                                    {index.name}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {index.email}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    {index.created_at}
                                                </td>
                                                <td className="px-6 py-4 text-center">
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
                                    })
                                ) : (
                                    <td>Belum ada Data</td>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* --TABLE END-- */}
            </div>
        </>
    );
}
