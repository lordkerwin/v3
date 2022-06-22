import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

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
                <main className="flex flex-col" id="content">
                    {children}
                </main>
                <footer>Footer</footer>
            </div>
        </div>
    )
}

export default Container
