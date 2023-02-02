// import FivthyButton from "@/Components/FivthyButton";
import FourthyButton from "@/Components/FourthyButton";
import Footer from "@/Layouts/Authenticated Admin/Footer";
import Navbar from "@/Layouts/Authenticated Admin/Navbar";
import ThirdyButton from "@/Components/ThirdyButton";
import { Link, Head } from "@inertiajs/inertia-react";
import React from "react";
import { Icon } from "@iconify/react";


export default function ChildData({ children }) {
    return (
        <>
            <Head title="Data Anak" />
            <Navbar />
            <div className="my-24 mx-10 min-h-screen">
                <div className="block  p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 ">
                    <h1 className="flex text-xl font-extrabold text-black mb-2">
                        <div className="pt-1 mx-1">
                            <Icon icon="material-symbols:filter-list-rounded" />
                        </div>
                        List
                        <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">
                            Data Anak
                        </small>
                    </h1>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-sm text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-6">
                                        Nama Anak
                                    </th>
                                    <th scope="col" className="px-6 py-6">
                                        Gender
                                    </th>
                                    <th scope="col" className="px-6 py-6">
                                        Nama Ibu
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-6 text-center"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {children.map((index) => {
                                    return (
                                        <tr className="bg-white border-b border-gray-300 dark:bg-gray-900 dark:border-gray-700">
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {index.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {index.gender}
                                            </td>
                                            <td className="px-6 py-4">
                                                {index.mom_name}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <Link
                                                    href={`/data-pertumbuhan/${index.id}`}
                                                >
                                                    <ThirdyButton>
                                                        Detail Perkembangan
                                                    </ThirdyButton>
                                                </Link>
                                                {/* <Link href={route("growth-data")}>
                                                <FivthyButton>
                                                    Data Pertumbuhan
                                                </FivthyButton>
                                            </Link> */}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
