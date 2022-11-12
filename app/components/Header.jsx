import Link from "next/link";

const Header = () => {
    return (
        <header className="py-10 w-full bg-black">
            <div className="container">
                <div>
                    <Link href={"/"}>
                        <svg
                            className="ml-10 w-12 text-white"
                            viewBox="119.52 125.981 193.177 183.558"
                        >
                            <path
                                strokeLinecap="round"
                                fill="currentColor"
                                d="M 119.52 183.086 L 175.138 244.652 L 303.03 125.981 L 119.52 183.086 Z"
                            />
                            <path
                                fill="currentColor"
                                d="M 129.187 247.973 L 184.805 309.539 L 312.697 190.868 L 129.187 247.973 Z"
                                transform="matrix(-1, 0, 0, -1, 441.883972, 500.407013)"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
