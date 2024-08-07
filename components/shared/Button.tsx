import Link from "next/link";
import { Button } from "../ui/button";

interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    href: string;
    isCTA: boolean;
    className: string;
}

export default function RoundedButton({ title, href, isCTA, className, ...props }: ButtonInterface) {
    return (
        <Button
            className={`${
                isCTA ? "bg-[#003366]" : "bg-[#9bb3d3] border border-[#195778] hover:bg-[#295d92]/75"
            } rounded-full font-medium text-sm p-4 ${className}`}
            {...props}
            asChild
        >
            <Link href={href}>{title}</Link>
        </Button>
    );
}
