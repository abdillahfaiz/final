import React from "react";
import Footer from "@/Layouts/Authenticated Admin/Footer";
import Navbar from "@/Layouts/Authenticated Admin/Navbar";
import { Head } from "@inertiajs/inertia-react";
import Delete from "@/Components/Delete";

export default function Articles({ article }) {
    console.log(article);
    return (
        <>
            <Head title="Artikel" />
            <Navbar />
            <div className="mt-36 ">
                <div className="text-center mx-10">
                </div>
                <div className="my-8 justify-center grid grid-rows-1 gap-1 md:grid-cols-2 md:gap-2 md:justify-center xl:grid-cols-4 xl:gap-4 ">
                    <div className=" mx-12 mb-8 w-64 bg-white  rounded-lg  hover:drop-shadow-2xl duration-1000">
                        <a href={route("add-article")}>
                            <img
                                className="rounded-t-lg w-64 h-42"
                                src={"storage/Frame 26.png"}
                                alt=""
                            />
                        </a>
                        <div className="p-5">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                New
                            </span>

                            <a href={route("add-article")}>
                                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                    Tambah Artikel Baru
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                                <a href={route("add-article")}>Klik Disini</a>
                            </p>
                        </div>
                    </div>
                    {article != 0 ? (
                        article.map((index) => {
                            return (
                                <>
                                    <div className=" mx-12 mb-8 w-64 bg-white  rounded-lg  hover:drop-shadow-2xl duration-1000">
                                        <div className="max-w-64 max-h-42">
                                            <a href={route("add-article")}>
                                                <img
                                                    className="rounded-t-lg w-64 h-42 "
                                                    src={`storage/blogs/${index.image}`}
                                                    alt="Gambar Sampul Artikel"
                                                />
                                            </a>
                                        </div>
                                        <div className="p-5">
                                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                                {index.category}
                                            </span>

                                            <a href="#">
                                                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                                    {index.title}
                                                </h5>
                                            </a>
                                            <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                                                {index.description}
                                            </p>
                                            <Delete
                                                    URL={"/hapus-artikel"}
                                                    id={index.id}
                                                />
                                        </div>
                                    </div>
                                </>
                            );
                        })
                    ) : (
                       <></>
                    )}
                </div>
                {/* <div className="my-8 justify-center grid grid-rows-1 gap-1 md:grid-cols-2 md:gap-2 md:justify-center xl:grid-cols-4 xl:gap-4 ">
                    
                    <div className=" mx-12 mb-8 w-64 bg-white  rounded-lg hover:drop-shadow-2xl duration-1000">
                        <a href="#">
                            <img
                                className="rounded-t-lg w-64 h-42"
                                src="https://ibupediacdn.imgix.net/images/cunox4cnjpvjz0xur.jpeg"
                                alt=""
                            />
                        </a>
                        <div className="p-5">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                Makanan
                            </span>

                            <a href="#">
                                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                    Buah Kaya Manfaat, Ini Cara Mudah Menyajikan
                                    Kiwi Untuk Bayi
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology ....
                            </p>
                        </div>
                    </div>
                    <div className=" mx-12 mb-8 w-64 bg-white  rounded-lg  hover:drop-shadow-2xl duration-1000">
                        <a href="#">
                            <img
                                className="rounded-t-lg w-64 h-42"
                                src="https://ibupediacdn.imgix.net/images/wo96aehm21cz07esu.jpeg"
                                alt=""
                            />
                        </a>
                        <div className="p-5">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                Makanan
                            </span>

                            <a href="#">
                                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                    Buah Kaya Manfaat, Ini Cara Mudah Menyajikan
                                    Kiwi Untuk Bayi
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology ....
                            </p>
                        </div>
                    </div>
                    <div className=" mx-12 mb-8 w-64 bg-white  rounded-lg  hover:drop-shadow-2xl duration-1000">
                            <a href="#">
                            <img
                                className="rounded-t-lg w-64 h-42"
                                src="https://ibupediacdn.imgix.net/images/90acchovx66a7iffa.jpg"
                                alt=""
                            />
                        </a>
                        <div className="p-5">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                Makanan
                            </span>

                            <a href="#">
                                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                    Buah Kaya Manfaat, Ini Cara Mudah Menyajikan
                                    Kiwi Untuk Bayi
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology ....
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
            <Footer />
        </>
    );
}
