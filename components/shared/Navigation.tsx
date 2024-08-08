"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navigation() {
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    return (
        <motion.header className="w-full z-50 px-4 top-[10px] fixed">
            <div className="w-full text-zinc-900 py-3 h-16 px-5 shadow-md shadow-zinc-700/[0.05] rounded-xl flex flex-row justify-between items-center bg-zinc-100/50 backdrop-blur-md">
                <h2>Runic</h2>
                <nav>
                    <div
                        className="flex sm:hidden w-[30px] h-[30px] my-[4.34px] justify-center items-center gap-[5px] flex-col cursor-pointer"
                        onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                    >
                        <div
                            className={`w-full h-[2px] bg-zinc-800 transition-transform duration-300 ${
                                megaMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                            }`}
                        ></div>
                        <div
                            className={`w-full h-[2px] bg-zinc-800 transition-opacity duration-300 ${
                                megaMenuOpen ? "opacity-0" : ""
                            }`}
                        ></div>
                        <div
                            className={`w-full h-[2px] bg-zinc-800 transition-transform duration-300 ${
                                megaMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                            }`}
                        ></div>
                    </div>
                    <ul className="flex-row items-center gap-4 text-sm hidden sm:flex">
                        <li>
                            <Link href="/" className="hover:text-blue-600 transition-colors duration-200">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-blue-600 transition-colors duration-200">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-blue-600 transition-colors duration-200">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Button asChild size={"sm"}>
                                <Link href="/">Start Learning</Link>
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
}
