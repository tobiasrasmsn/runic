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
            className={`${isCTA ? "bg-[#003366]" : "bg-slate-400"} rounded-full font-medium text-sm p-4 ${className}`}
            onClick={handleClick}
            {...props}
        >
            {title}
        </Button>
    );
}
