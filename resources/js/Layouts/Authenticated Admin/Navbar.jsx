import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import NavLink from "@/Components/NavLink";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Navbar() {
    return (
        <nav className="flex justify-between bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href={route("dashboard")} className="flex items-center">
                    <ApplicationLogo className={"h-12 mr-3 sm:h-16"} />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">
                        MyPosyandu
                    </span>
                </a>
                <div className="flex md:order-2">
                    <ResponsiveNavLink
                        method="post"
                        href={route("logout")}
                        as="button"
                    >
                        Log Out
                    </ResponsiveNavLink>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Beranda
                            </NavLink>
                        </li>
                        <li>
                            <NavLink

                                href={route("add-user")}
                                active={route().current("add-user")}
                            >
                                Register user
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                href={route("user-data")}
                                active={route().current("user-data")}
                            >
                                Data User
                            </NavLink>
                        </li>
                        <li>
                            <NavLink

                                href={route("child-data")}
                                active={route().current("child-data")}
                            >
                                Data Anak
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                href={route("articles")}
                                active={route().current("articles")}
                            >
                                Artikel
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
