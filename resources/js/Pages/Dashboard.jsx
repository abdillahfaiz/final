import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Layouts/Authenticated Admin/Navbar";
import Footer from "@/Layouts/Authenticated Admin/Footer";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, } from "chart.js";
import { Doughnut, } from "react-chartjs-2";
import { Icon } from "@iconify/react";

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Dashboard({ auth, children, male, female, user }) {
    const data = {
        labels: ["Laki Laki", "Perempuan", "Jumlah Anak", "Total User"],
        datasets: [
            {
                label: "Gender",
                data: [male, female, children, user],
                backgroundColor: ["#458DB3", "#5CBF88", "#EA7777" , "#C7F37E"],
            },
        ],
    };

    const options = {};
    return (
        <>
            <Navbar />

            <div className="my-24 mx-10">
                <Head title="Dashboard" />
                <div className="w-full block p-3 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
                        <h1>Hi! Welcome back {auth.user.name}</h1>
                    </div>
                <div className="my-28">
                    <h1 className="animate-pulse mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Sistem Informasi Monitoring{" "}
                        <span className="text-blue-600 dark:text-blue-500">
                           Pertumbuhan Anak 
                        </span>{" "}
                        dan
                        <span className="text-blue-600 dark:text-blue-500">{" "}
                            Imunisasi
                        </span>
                    </h1>
                    <p className="mb-12 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                        Dibuat dan dikembangkan agar mempermudah input data perkembangan anak setiap bulan bagi kader posyandu setempat dan membantu para ibu untuk mempermudah dalam monitoring perkembangan anak nya
                    </p>
                    <p><span className="bg-blue-100 text-blue-800 text-xl font-semibold  px-2.5 py-0.5 rounded">Total User : {user}</span></p>
                </div>

                <div>
                    

                    {/* -- COUNT -- */}
                    <div className="container mb-24 mt-16 px-6 mx-auto">
                        <section className="mb-32 text-gray-800 mt-40 text-center">
                            <h2 className="text-3xl font-bold mb-20">
                                Statistik Jumlah Data Anak
                            </h2>

                            <div className="grid lg:gap-x-12 lg:grid-cols-3">
                                <div className="mb-12 lg:mb-0">
                                    <div className="rounded-lg shadow-lg h-full block bg-white">
                                        <div className="flex justify-center">
                                            <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block -mt-8">
                                            <Icon icon="fa6-solid:children" color="#f1f1f1" width="30" height="30" />
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-2xl font-bold text-blue-600 mb-4">
                                                {children}
                                            </h3>
                                            <h5 className="text-lg font-bold mb-4">
                                                Anak Anak
                                            </h5>
                                            <p className="text-gray-500">
                                                Data anak dari jumlah
                                                keseluruhan anak laki laki
                                                maupun perempuan
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-12 lg:mb-0">
                                    <div className="rounded-lg shadow-lg h-full block bg-white">
                                        <div className="flex justify-center">
                                            <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block -mt-8">
                                            <Icon icon="mdi:face-female" color="#f1f1f1" width="30" height="30" />
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-2xl font-bold text-blue-600 mb-4">
                                                {female}
                                            </h3>
                                            <h5 className="text-lg font-bold mb-4">
                                                Perempuan
                                            </h5>
                                            <p className="text-gray-500">
                                                Jumlah data anak perempuan dari
                                                seluruh jumlah data sebanyak{" "}
                                                {children} anak
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="rounded-lg shadow-lg h-full block bg-white">
                                        <div className="flex justify-center">
                                            <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block -mt-8">
                                            <Icon icon="mdi:face-male" color="#f1f1f1" width="30" height="30" />

                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-2xl font-bold text-blue-600 mb-4">
                                                {male}
                                            </h3>
                                            <h5 className="text-lg font-bold mb-4">
                                                Laki Laki
                                            </h5>
                                            <p className="text-gray-500">
                                                Jumlah data anak laki laki dari
                                                seluruh jumlah data sebanyak{" "}
                                                {children} anak
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* -- END COUNT -- */}

                    {/* -- CHART START -- */}
                    <div className="flex justify-center">
                        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                            <Doughnut data={data} options={options}></Doughnut>
                        </div>
                    </div>

                    {/* -- CHART END -- */}

                    {/* --ARTICLES-- */}
                </div>

            </div>
            <Footer />
        </>
    );
}
