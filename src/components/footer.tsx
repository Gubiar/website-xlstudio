import { JSX, SVGProps } from "react";

export function Footer() {
    return (
        <footer className="w-full py-6 flex">
            <div className="container flex items-center justify-between px-4 md:px-6 m-auto">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <a
                            href="https://www.instagram.com/xlstudio.br/"
                            aria-label="Link para o Instagram da XL Studio"
                        >
                            <InstagramIcon className="w-5 h-5" />
                        </a>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <p className="text-xs text-gray-500">© Xl Studio 2024</p>
                </div>
            </div>
        </footer>
    );
}

function InstagramIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}
