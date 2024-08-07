"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FaGoogle, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io";
import { motion } from "framer-motion";
export default function SignUp() {
    return (
        <main>
            <section className="bg-[#e4e4e4] w-full h-[100dvh] min-h-[500px] flex justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "tween", duration: 0.5 }}
                    className="w-full max-w-md p-6 space-y-6 bg-card rounded-lg shadow-lg"
                >
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Sign Up</h1>
                        <p className="text-muted-foreground">Create your account to get started.</p>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="example@email.com" required />
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="Enter your password" required />
                        </div>
                        <Button type="submit" className="w-full">
                            Sign Up
                        </Button>
                    </form>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-muted" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="px-2 bg-background text-muted-foreground">Or sign up with</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <Button variant="outline" className="flex items-center justify-center">
                            <FaGoogle className="h-5 w-5 mr-2" />
                            Google
                        </Button>
                        <Button variant="outline" className="flex items-center justify-center">
                            <FaXTwitter className="h-5 w-5 mr-2" />
                            Twitter
                        </Button>
                        <Button variant="outline" className="flex items-center justify-center">
                            <FaLinkedin className="h-5 w-5 mr-2" />
                            LinkedIn
                        </Button>
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="#" className="underline" prefetch={false}>
                            Log in
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
