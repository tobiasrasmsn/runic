"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const controls = useAnimation();
    const isInitialMount = useRef(true);

    useEffect(() => {
        const handleScroll = () => {
            if (isInitialMount.current) {
                isInitialMount.current = false;
                return;
            }

            if (window.scrollY > 350) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!isInitialMount.current) {
            if (scrolled) {
                controls.start({
                    position: "fixed",
                    top: "10px",
                    opacity: 1,
                    y: 0,
                    borderRadius: "1rem",
                    transition: { duration: 0.3 },
                });
            } else {
                controls
                    .start({
                        opacity: 0,
                        y: -20,
                        transition: { duration: 0.3 },
                    })
                    .then(() => {
                        controls.start({
                            position: "absolute",
                            top: 0,
                            y: 0,
                            opacity: 1,
                            borderRadius: "0 0 1rem 1rem",
                            transition: { duration: 0 },
                        });
                    });
            }
        }
    }, [scrolled, controls]);

    return (
        <motion.header
            className="w-full z-50 px-2"
            animate={controls}
            initial={{ position: "absolute", top: 0, width: "100%", borderRadius: "0 0 1rem 1rem", opacity: 1, y: 0 }}
        >
            <div className="w-full py-3 px-5 shadow-md shadow-zinc-700/[0.05] rounded-xl flex flex-row justify-between items-center bg-zinc-100/50 backdrop-blur-md">
                <h2>Runic</h2>
                <nav>
                    <ul className="flex flex-row items-center gap-4 text-sm">
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
