import { useEffect } from "react";
import React, { useState } from "react";
import { Head, Link, useForm, router } from '@inertiajs/react';
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Navbar from "@/Layouts/Authenticated Admin/Navbar";
import Footer from "@/Layouts/Authenticated Admin/Footer";

function daftaruser({ errors }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            password,
        };

        console.log(data);
        router.post('/store-user', data);
        setName;
        setEmail;
        setPassword;
    };

    return (
        <>
            {/* <Head title='Register User' />   */}
            <Navbar />
            <div className="block m-12 mt-[16vh] p-6 mb-[16vh] bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Resgister User
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Daftarkan User dengan menghubungi langsung ke admin
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form onSubmit={(e) => {
                            handleSubmit(e);
                        }}>
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                for="name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Nama Lengkap
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                autocomplete="given-name"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                onChange={(name) =>
                                                    setName(name.target.value)
                                                }
                                                value={name}
                                            />

                                            <InputError
                                                message={errors.name}
                                                className="mt-2"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                for="email"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                autocomplete="email"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                onChange={(email) =>
                                                    setEmail(email.target.value)
                                                }
                                                value={email}
                                            />
                                            <InputError
                                                message={errors.email}
                                                className="mt-2"
                                            />
                                        </div>

                                        <div className="col-span-6">
                                            <label
                                                for="password"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                autocomplete="given-name"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                onChange={(password) =>
                                                    setPassword(password.target.value)
                                                }
                                                value={password}
                                            />
                                            <InputError
                                                message={errors.password}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                    <input type="submit" className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xs px-2.5 py-1 md:text-sm md:px-5 md:py-2.5  text-center mr-2 mb-2 mt-4" value="Tambah User" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default daftaruser