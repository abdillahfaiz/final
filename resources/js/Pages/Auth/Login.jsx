import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
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
                <div className="px-6 h-full text-gray-800">
                    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                        <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                            <div className="flex items-center">
                                <p className="text-center text-xl font-bold mx-auto mb-4 md:text-2xl xl:text-3xl">
                                    Selamat Datang di MyPosyandu Monitoring System Information
                                </p>
                            </div>
                            <img
                                src="https://1.bp.blogspot.com/-vNcUzj8YRPo/YNaCWN7kmLI/AAAAAAAAFaE/Q0YIFTjsM-kDUxl8VXWNHN86WZtELt8MwCLcBGAsYHQ/s1600/Logo%2BPosyandu.png"
                                className="w-1/2 m-auto"
                                alt="Logo Posyandu"
                            />
                        </div>
                        <div className="xl:ml-20 xl:w-4/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form onSubmit={submit}>
                                <div className="h-5"></div>

                                <div className="items-center justify-items-center">
                                    <p className="text-center text-4xl font-bold  mb-7">
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

                                <div className="flex justify-between items-center mb-6">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            value={data.remember}
                                            handleChange={onHandleChange}
                                        />
                                        <span className="ml-2 text-sm text-gray-600">
                                            Remember me
                                        </span>
                                    </label>
                                    {canResetPassword && (
                                        <Link
                                            href={route("password.request")}
                                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Forgot your password?
                                        </Link>
                                    )}
                                </div>

                                <div className="text-center lg:text-left">
                                    <PrimaryButton
                                        className="w-full"
                                        processing={processing}
                                    >
                                        Log In
                                    </PrimaryButton>
                                    <p className="text-center text-sm font-semibold mt-2 pt-1 mb-0">
                                        Don't have an account?
                                        <a
                                            href={route('register')}
                                            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                        >
                                            Register
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
       
    );
}
