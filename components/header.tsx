"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaReact } from "react-icons/fa6";

export default function Header() {

    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <header className="z-[999] relative">
            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem]
                w-full rounded-none border
                border-white border-opacity-40 bg-white opacity-80
                shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6
                sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:opacity-75"
                initial={{ y: -100, x: "-50%", opacity: 0 }} animate={{ y: 0, x: "-50%", opacity: 1 }}>
            </motion.div>

            <nav className="hidden sm:flex fixed top-[0.15rem] w-full justify-center left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className="flex flex-wrap items-center justify-between gap-y-1 tex-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {
                        links.map(link => (
                            <motion.li key={link.hash} className="h-3/4 relative flex items-center justify-center" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                                <Link href={link.hash}
                                    onClick={() => { setActiveSection(link.name); setTimeOfLastClick(Date.now()); }}
                                    className={clsx("flex w-full items-center justify-center px-2 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                                        { "text-gray-950 dark:!text-gray-200": activeSection === link.name }
                                    )}>{link.name} {
                                        link.name === activeSection && (<motion.span className="bg-gray-100 rounded-2xl absolute inset-0 -z-10 dark:bg-gray-800" layoutId="activeSection" transition={{ type: "spring", stiffness: 380, damping: 30 }}></motion.span>)
                                    }
                                </Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </nav>

            {/* Mobile navbar */}
            <Disclosure as="nav" className="fixed top-[0.15rem] w-full sm:hidden bg-white dark:bg-gray-950">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <motion.div className="absolute inset-y-0 left-0 flex items-center sm:hidden" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                            {/* Mobile menu button*/}
                            <DisclosureButton 
                                className="group relative inline-flex items-center
                                justify-center rounded-md p-2 text-gray-400
                              hover:text-black bg-gray-100 focus:ring-1 focus:outline-hidden
                                focus:ring-inset dark:bg-gray-800 dark:hover:text-white hover:scale-[1.18]
                                transition-all cursor-pointer border border-black/10 dark:border-white/10"
                                  >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                            </DisclosureButton>
                        </motion.div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <motion.div className="flex shrink-0 items-center
                                cursor-pointer text-violet-500 text-4xl
                                animate-pulse hover:animate-spin hover:scale-125 transition"
                                initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                                >
                             <FaReact/>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {
                            links.map(link => (
                                <motion.li key={link.hash} className="h-3/4 relative flex items-center justify-center" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                                    <Link href={link.hash}
                                        onClick={() => { setActiveSection(link.name); setTimeOfLastClick(Date.now()); }}
                                        className={clsx("flex w-full items-center justify-start px-2 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                                            { "text-gray-950 dark:!text-gray-200": activeSection === link.name }
                                        )}>{link.name} {
                                            link.name === activeSection && (<motion.span className="bg-gray-100 rounded absolute inset-0 -z-10 dark:bg-gray-800" layoutId="activeSection" transition={{ type: "spring", stiffness: 380, damping: 30 }}></motion.span>)
                                        }
                                    </Link>
                                </motion.li>
                            ))
                        }
                    </div>
                </DisclosurePanel>

            </Disclosure>
        </header>
    );
}

