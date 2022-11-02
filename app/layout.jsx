import { Inter } from "@next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
    return (
        <html lang="en" className={inter.className}>
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            <body>{children}</body>
        </html>
    );
};

export default Layout;
