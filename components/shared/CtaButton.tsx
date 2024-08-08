import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import React from "react";

interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    href: string;
    isCTA: boolean;
    className: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CtaButton({ title, href, isCTA, className, onClick, ...props }: ButtonInterface) {
    const router = useRouter();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick(event);
        setTimeout(() => {
            router.push(href);
        }, 1200);
    };

    return (
        <Button
            className={`${
                isCTA ? "bg-[#003366]" : "bg-slate-400"
            } rounded-full font-medium text-zinc-100/85 text-sm p-4 ${className} hover:scale-105 hover:bg-blue-800 hover:border-blue-950 duration-300 transition`}
            onClick={handleClick}
            {...props}
        >
            {title}
        </Button>
    );
}
