"use client";

import { useCallback, useState } from "react";
import WordPullUp from "../magicui/word-pull-up";
import RoundedButton from "../shared/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import CtaButton from "../shared/CtaButton";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Hero() {
    const router = useRouter();
    const [isSelected, setIsSelected] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [animationOrigin, setAnimationOrigin] = useState({ x: 0, y: 0 });

    const handleStartQuiz = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();
            const rect = event.currentTarget.getBoundingClientRect();
            setAnimationOrigin({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            });
            setIsSelected(true);
            setShowLoading(true);

            setTimeout(() => {
                router.push(`/auth/signup`);
            }, 500);
        },
        [router]
    );

    return (
        <>
            <section className="bg-zinc-900 w-full h-[100dvh] min-h-[500px] px-0 pb-0 md:px-2 md:pb-2">
                <div className="bg-gradient-to-tr from-[#D9D9D9]  to-[#a4bad7] relative w-full h-full flex flex-col items-center justify-center gap-1 rounded-b-[2rem] overflow-hidden">
                    {/* <AnimatedGridPattern
                        numSquares={30}
                        maxOpacity={0.1}
                        duration={3}
                        repeatDelay={1}
                        className={cn(
                            "inset-0 w-full absolute h-full [mask-image:radial-gradient(500px_circle_at_center,white,transparent)] z-20"
                        )}
                    /> */}
                    <WordPullUp
                        className="text-2xl md:text-4xl font-normal text-zinc-700"
                        words="Rediscover the Runes"
                    />
                    <div className="relative z-30 flex justify-center items-center flex-col">
                        <motion.h2
                            initial={{ opacity: 0, translateY: 20 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "tween", delay: 0.5 }}
                            className="text-base md:text-lg font-normal text-zinc-500"
                        >
                            Explore the ancient runic alphabet.
                        </motion.h2>
                        <div className="flex flex-row gap-4">
                            <motion.div
                                initial={{ opacity: 0, translateY: 20 }}
                                whileInView={{ opacity: 1, translateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "tween", delay: 0.5, duration: 1 }}
                            >
                                <CtaButton
                                    title="Start Learning"
                                    href="/auth/signup"
                                    isCTA={true}
                                    className="mt-4"
                                    onClick={handleStartQuiz}
                                />
                            </motion.div>
                            {/* <motion.div
                                initial={{ opacity: 0, translateY: 20 }}
                                whileInView={{ opacity: 1, translateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "tween", delay: 0.5, duration: 1 }}
                            >
                                <RoundedButton title="About Runes" href="/about" isCTA={false} className="mt-4" />
                            </motion.div> */}
                        </div>
                    </div>
                </div>
            </section>
            {typeof window !== "undefined" &&
                createPortal(
                    <AnimatePresence>
                        {isSelected && (
                            <motion.div
                                initial={{
                                    clipPath: `circle(0px at ${animationOrigin.x}px ${animationOrigin.y}px)`,
                                }}
                                animate={{
                                    clipPath: `circle(150% at ${animationOrigin.x}px ${animationOrigin.y}px)`,
                                }}
                                exit={{
                                    clipPath: `circle(0px at ${animationOrigin.x}px ${animationOrigin.y}px)`,
                                }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className={`fixed top-0 left-0 w-screen h-screen bg-[#e4e4e4] flex items-center justify-center`}
                                style={{ zIndex: 9999 }}
                            ></motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
        </>
    );
}
