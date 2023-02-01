import React, {  useState } from "react";
import { Inertia } from '@inertiajs/inertia';
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Layouts/Authenticated/Navbar";
import Footer from "@/Layouts/Authenticated/Footer";
import PrimaryButton from "@/Components/PrimaryButton";

export default function AddArticle() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [creator, setCreator] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title,
            description,
            creator,
            category,
            content,
            image,
        };
        console.log(data);
        Inertia.post("/store-artikel", data);
        setTitle;
        setDescription;
        setCreator;
        setCategory;
        setContent;
        setImage;
    };
    return (
        <>
            <Navbar />
            <Head title="Tambah Artikel" />
            <div className="my-24">
                <div className="block m-12 p-6 bg-white border border-gray-300 rounded-2xl shadow-md hover:bg-gray-100 ">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    Artikel
                                </h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    Tambah artikel dengan mengisi form disamping
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <form onSubmit={handleSubmit}>
                                <div className="shadow sm:overflow-hidden sm:rounded-md">
                                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-3 gap-6">
                                            <div className="col-span-3 sm:col-span-2">
                                                <label
                                                    for="title"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Judul Artikel
                                                </label>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    onChange={(title) =>
                                                        setTitle(
                                                            title.target.value
                                                        )
                                                    }
                                                    value={title}
                                                />
                                            </div>
                                            <div className="col-span-3 sm:col-span-2">
                                                <label
                                                    for="creator"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Nama Creator
                                                </label>
                                                <input
                                                    type="text"
                                                    name="creator"
                                                    id="creator"
                                                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    onChange={(creator) =>
                                                        setCreator(
                                                            creator.target.value
                                                        )
                                                    }
                                                    value={creator}
                                                />
                                            </div>
                                            <div className="col-span-3 sm:col-span-2">
                                                <label
                                                    for="category"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Kategori
                                                </label>
                                                <input
                                                    type="text"
                                                    name="category"
                                                    id="category"
                                                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    onChange={(category) =>
                                                        setCategory(
                                                            category.target
                                                                .value
                                                        )
                                                    }
                                                    value={category}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                for="desc"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Deskripsi
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="desc"
                                                    name="desc"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    onChange={(description) =>
                                                        setDescription(
                                                            description.target
                                                                .value
                                                        )
                                                    }
                                                    value={description}
                                                ></textarea>
                                            </div>
                                            <p className="mt-2 text-sm text-gray-500">
                                                Deskripsi singkat tentang
                                                artikel yang akan ditambahkan
                                                max:50 huruf
                                            </p>
                                        </div>
                                        <div>
                                            <label
                                                for="content"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Konten / Isi Artikel
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="content"
                                                    name="content"
                                                    rows="30"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    onChange={(content) =>
                                                        setContent(
                                                            content.target.value
                                                        )
                                                    }
                                                    value={content}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Gambar Sampul Artikel
                                            </label>
                                            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                                <div className="space-y-1 text-center">
                                                    <svg
                                                        className="mx-auto h-12 w-12 text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <div className="flex text-sm text-gray-600">
                                                        <label
                                                            for="image"
                                                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                                        >
                                                            <input
                                                                type="file"
                                                                name="image"
                                                                id="image"
                                                                className="rounded-lg border-solid border-2 border-gray-200 my-6"
                                                                onChange={(image) =>
                                                                    setImage(image.target.value)
                                                                }
                                                                value={image} 
                                                            />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <PrimaryButton>Save</PrimaryButton>
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
