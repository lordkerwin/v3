import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-10 border-t mt-10">
            <div className="container">
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-semibold text-lg">Other Pages</h4>
                        <ul>
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"/uses"}>Uses</Link>
                            </li>
                            <li>
                                <Link href={"/contact"}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="justify-self-end">
                        <h4 className="font-semibold text-lg">Social Links</h4>
                        <ul>
                            <li>
                                <a href="https://foo.com" target="_blank">
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href="https://foo.com" target="_blank">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://foo.com" target="_blank">
                                    LnkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
