import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import NoScrollLink from '../components/NoScrollLink'

const variants = {
    hidden: { opacity: 0, x: 0, y: -10 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -10 },
}

const Container = (props) => {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()
    const { children, ...customMeta } = props
    const router = useRouter()

    useEffect(() => setMounted(true), [])

    const meta = {
        title: 'Sean Kerwin',
        description: 'Front End Developer based in Wiltshire, UK',
        type: 'website',
        ...customMeta,
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Head>
                <title>{meta.title}</title>
            </Head>
            <div className="flex flex-col min-h-screen gap-y-10">
                <nav>
                    <NoScrollLink href={'/'} passHref>
                        Home
                    </NoScrollLink>
                    <NoScrollLink href={'/about'} passHref>
                        About
                    </NoScrollLink>
                    <button
                        onClick={() =>
                            setTheme(
                                resolvedTheme === 'dark' ? 'light' : 'dark'
                            )
                        }
                    >
                        Toggle Theme
                    </button>
                </nav>
                <motion.main
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{ type: 'linear' }}
                    className="flex flex-col"
                    id="content"
                >
                    {children}
                </motion.main>

                <footer>Footer</footer>
            </div>
        </div>
    )
}

export default Container
