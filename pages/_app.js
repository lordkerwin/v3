import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
    const url = `https://seankerwin.dev${router.route}`
    return (
        <ThemeProvider attribute="class">
            <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <Component {...pageProps} canonical={url} key={url} />
            </AnimatePresence>
        </ThemeProvider>
    )
}

export default MyApp
