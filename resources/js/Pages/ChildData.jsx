import FivthyButton from "@/Components/FivthyButton";
import FourthyButton from "@/Components/FourthyButton";
import Footer from "@/Layouts/Authenticated/Footer";
import Navbar from "@/Layouts/Authenticated/Navbar";
import React from "react";

export default function ChildData() {
    return (
        <>
            <Navbar />
            <div className="my-24 mx-10 min-h-screen">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-sm text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-6">
                                    Nama Anak
                                </th>
                                <th scope="col" class="px-6 py-6">
                                    Gender
                                </th>
                                <th scope="col" class="px-6 py-6">
                                    Nama Ibu
                                </th>
                                <th scope="col" class="px-6 py-6 text-center">
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
                                    Zalindra Lailasari{" "}
                                </th>
                                <td class="px-6 py-4">Perempuan</td>
                                <td class="px-6 py-4">Ayu Yuniar</td>
                                <td class="px-6 py-4 text-center">
                                    <a href={route('growth-data')}>
                                    <FourthyButton>
                                        Data Pertumbuhan
                                    </FourthyButton>
                                    </a>
                                    <FivthyButton>Data Imunisasi</FivthyButton>
                                </td>
                            </tr>
                            <tr class="bg-white border-b border-gray-300 dark:bg-gray-900 dark:border-gray-700">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Michelle Fujiati{" "}
                                </th>
                                <td class="px-6 py-4">Perempuan</td>
                                <td class="px-6 py-4">Kardi Natsir </td>
                                <td class="px-6 py-4 text-center">
                                    <FourthyButton>
                                    Data Pertumbuhan
                                    </FourthyButton>
                                    <FivthyButton>Data Imunisasi</FivthyButton>
                                </td>
                            </tr>
                            <tr class="bg-white border-b border-gray-300 dark:bg-gray-900 dark:border-gray-700">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Ika Uyainah{" "}
                                </th>
                                <td class="px-6 py-4">Perempuan</td>
                                <td class="px-6 py-4">Michelle Halimah </td>
                                <td class="px-6 py-4 text-center">
                                    <FourthyButton>
                                    Data Pertumbuhan
                                    </FourthyButton>
                                    <FivthyButton>Data Imunisasi</FivthyButton>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-300 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Hasan Hakim{" "}
                                </th>
                                <td class="px-6 py-4">Laki Laki</td>
                                <td class="px-6 py-4">Dinda Haryanti </td>
                                <td class="px-6 py-4 text-center">
                                    <FourthyButton>
                                    Data Pertumbuhan
                                    </FourthyButton>
                                    <FivthyButton>Data Imunisasi</FivthyButton>
                                </td>
                            </tr>
                            <tr>
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Mahmud Prasetya{" "}
                                </th>
                                <td class="px-6 py-4">Laki Laki</td>
                                <td class="px-6 py-4">Nova Puspita </td>
                                <td class="px-6 py-4 text-center">
                                    
                                    <FourthyButton>
                                    Data Pertumbuhan
                                    </FourthyButton>
                                    <FivthyButton>Data Imunisasi</FivthyButton>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
}
