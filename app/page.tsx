"use client";
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import { ReactLenis, useLenis } from "lenis/react";
import Image from "next/image";

export default function Home() {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    });
    return (
        <ReactLenis root>
            <main className="">
                <Hero />
                <About />
            </main>
        </ReactLenis>
    );
}
