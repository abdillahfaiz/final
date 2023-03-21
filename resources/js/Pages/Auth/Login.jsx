import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Icon } from '@iconify/react';

export default function Login({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="LogIn" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <section className="h-screen">
                <div className="px-6 h-full text-gray-800 my-10">
                    <div className="md:flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                        <div className=" xl:w-6/12 lg:w-6/12 md:w-9/12 md:mb-0">
                            <div className="flex items-center">
                                <p className="text-center text-xl font-bold mx-auto mb-4 md:text-2xl xl:text-3xl">
                                    Selamat Datang di MyPosyandu Monitoring System Information
                                </p>
                            </div>
                            <ApplicationLogo className={"w-1/2 m-auto"} />
                        </div>
                        <div className="xl:ml-20 xl:w-4/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 ">
                            <form onSubmit={submit}>
                                <div className="h-5"></div>

                                <div className="items-center justify-items-center">
                                    <p className="text-center text-2xl md:text-4xl font-bold  mb-7">
                                        Log In
                                    </p>
                                </div>

                                {/* <!-- Email input --> */}
                                <div className="mb-6">
                                    <InputLabel
                                        forInput="email"
                                        value="Email"
                                    />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        placeholder="Alamat Email"
                                        handleChange={onHandleChange}
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mb-6">
                                    <InputLabel
                                        forInput="password"
                                        value="Password"
                                    />
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="current-password"
                                        handleChange={onHandleChange}
                                        placeholder="Password"
                                    />
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="text-center lg:text-left">
                                    <PrimaryButton
                                        className="w-full text-sm px-5 py-2.5 "
                                        processing={processing}
                                    >
                                        Log In
                                    </PrimaryButton>
                                    <p className="text-center text-sm font-semibold mt-2 pt-1 mb-0">
                                        Belum punya akun ?
                                    </p>
                                    <a href="https://wa.me/6281991467356">
                                        <button className="justify-center flex w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xs px-2.5 py-1 md:text-sm md:px-5 md:py-2.5  text-center mr-2 mb-2 mt-4" type="button">
                                            <Icon icon="ic:baseline-whatsapp" color="white" width="25" /><p className="my-1 mx-1">Hubungi Admin</p>
                                        </button>
                                    </a>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}
