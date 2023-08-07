"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const router = usePathname();

    return (
        <div className='flex flex-col  md:flex-row justify-between md:space-x-10  md:items-center items-start'>

            <Link href="/">
                <h1 className="font-semibold text-xl dark:text-gray-100">
                    Serkan Yalçınkaya
                </h1>
                <p className="text-base font-light text-gray-500 dark:text-gray-300">
                    Full-stack Developer
                </p>
            </Link>
            <div className="space-x-8  flex my-5  md:my-0">
                <Link
                    href="/about"
                    className={`text-base  ${router === "/about"
                        ? "text-gray-800 font-bold dark:text-gray-400"
                        : "text-gray-600 dark:text-gray-300 font-normal "
                        }`}
                >
                    About{" "}
                    {router === "/about" && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-down inline-block h-3 w-3"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                            />
                        </svg>
                    )}
                </Link>
                <Link
                    href="/blog"
                    className={`text-base  ${router === "/projects"
                        ? "text-gray-800 font-bold dark:text-gray-400"
                        : "text-gray-600 dark:text-gray-300 font-normal "
                        }`}
                >
                    
                    Blogs
                    
                    {router === "/blog" && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-down inline-block h-3 w-3"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                            />
                        </svg>
                    )}
                </Link>
                <Link
                    href="/experience"
                    className={`text-base  ${router === "/experience"
                        ? "text-gray-800 font-bold dark:text-gray-400"
                        : "text-gray-600 dark:text-gray-300 font-normal "
                        }`}
                >
                    Experience{" "}
                    {router === "/experience" && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-down inline-block h-3 w-3"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                            />
                        </svg>
                    )}
                </Link>
                <Link
                    href="/contact"
                    className={`text-base  ${router === "/contact"
                        ? "text-gray-800 font-bold dark:text-gray-400"
                        : "text-gray-600 dark:text-gray-300 font-normal "
                        }`}
                >
                    Contact
                    {router === "/contact" && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-down inline-block h-3 w-3"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                            />
                        </svg>
                    )}
                </Link>
            </div>
        </div>
    )
}

export default Navbar