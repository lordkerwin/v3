import { Rubik } from "@next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

const Layout = ({ children }) => {
    return (
        <html lang="en" className={rubik.className}>
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>

            <body>
                <Header />
                <main className="container">{children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default Layout;
