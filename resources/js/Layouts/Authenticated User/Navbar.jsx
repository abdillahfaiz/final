import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Navbar({ auth, header, content, email }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    {

    }
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href={route("home")} className="flex items-center">
                <ApplicationLogo className={"h-12 mr-3 sm:h-16"}/>
                    <span className="hidden self-center text-xl font-semibold whitespace-nowrap md:block">
                        MyPosyandu
                    </span>
                </a>
                <div className="flex items-center md:order-2">
                    <div className="mx-6 justify-end">
                    <p className="text-sm">{email}</p>
                    </div>
                    <button
                        type="button"
                        className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        id="user-menu-button"
                        aria-expanded="false"
                        data-dropdown-toggle="user-dropdown"
                        data-dropdown-placement="bottom"
                    >
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="w-10 rounded-full"
                            src="https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg"
                            alt="user photo"
                        />
                    </button>
                </div>
                {/* <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Artikel
                            </a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>
    );
}
