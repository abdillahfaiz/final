import ApplicationLogo from '@/Components/ApplicationLogo';
import { Icon } from '@iconify/react';

export default function Footer() {
    return (
        <>
            <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900 drop-shadow-[0_0_166px_-35px_rgba(0,0,0,0.25)]">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a
                            href="https://flowbite.com/"
                            className="flex items-center"
                        >
                            <ApplicationLogo className="h-12 mr-3"/>
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                                MyPosyandu
                            </span>
                        </a>
                        <p className="text-base">Monitoring Information System</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Resources
                            </h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a
                                        href="https://flowbite.com/"
                                        className="hover:underline"
                                    >
                                        Flowbite
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://tailwindcss.com/"
                                        className="hover:underline"
                                    >
                                        Tailwind CSS
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Follow us
                            </h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com"
                                        className="hover:underline "
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://discord.gg"
                                        className="hover:underline"
                                    >
                                        Discord
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Legal
                            </h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023{" "}
                        <a href="https://www.instagram.com/faiz.abdlh/" className="hover:underline">
                            My Posyandu  </a> created with 💖 by  
                        <a href="https://www.instagram.com/faiz.abdlh/" className="hover:underline"> faiz.abdlh
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a
                            href="https://www.facebook.com/abdillah.faiz.75/"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <svg
                                className="w-8 h-8 "
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
<Icon icon="ic:baseline-facebook" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a
                            href="https://www.instagram.com/faiz.abdlh/"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <svg
                                className="w-8 h-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <Icon icon="mdi:instagram" />
                            </svg>
                            <span className="sr-only">Instagram page</span>
                        </a>
                        <a
                            href="https://twitter.com/faaaaaaaaaaizzz"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <svg
                                className="w-8 h-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                            <Icon icon="mdi:twitter" />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a
                            href="https://github.com/abdillahfaiz"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <svg
                                className="w-8 h-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <Icon icon="mdi:github" />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <svg
                                className="w-8 h-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                               <Icon icon="icon-park-outline:dribble" />
                            </svg>
                            <span className="sr-only">Dribbbel account</span>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
