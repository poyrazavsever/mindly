import React, { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { supabase } from '@/lib/supabaseClient'

const Navbar = () => {
    const linkStyle = 'text-neutral-200 hover:text-white transition-colors font-medium'
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser()
            setUser(data.user)
        }
        getUser()
        // Oturum değişikliklerini dinle
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
        })
        return () => {
            listener.subscription.unsubscribe()
        }
    }, [])

    return (
        <nav className='py-8 flex items-center justify-between'>

            <div className='flex items-center gap-8'>

                {/* Logo */}
                <a href="/" className='flex items-center gap-2'>
                    <img src="/images/logo.png" alt="Mindly Logo" className='w-8 h-8 pb-1' />
                    <span className='text-xl font-extrabold'>Mindly</span>
                </a>

                {/* Navigation Links */}
                <div className='flex items-center gap-4'>
                    <a href="/product" className={linkStyle}>Product</a>
                    <a href="/docs" className={linkStyle}>Docs</a>
                    <a href="/blog" className={linkStyle}>Blog</a>
                    <a href="/community" className={linkStyle}>Community</a>
                </div>

            </div>

            <div className='flex items-center gap-4'>
                {/* GitHub Icon */}
                <a
                    href="https://github.com/poyrazavsever/mindly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 py-1  px-4 rounded-full border border-neutral-400 hover:text-white hover:border-neutral-100 text-base transition-colors flex items-center gap-2"
                    aria-label="GitHub"
                >
                    <FaGithub />
                    <span className='text-xs'>GitHub</span>
                </a>
                {!user ? (
                    <>
                        {/* Sign Up Button */}
                        <a
                            href="/signup"
                            className="text-neutral-300 font-medium hover:text-white transition-colors"
                        >
                            Sign Up
                        </a>
                        {/* Get Started Button */}
                        <a
                            href="/login"
                            className="px-4 py-1 bg-primary text-secondary rounded-full font-medium hover:bg-primary/80 transition-colors"
                        >
                            Get Started
                        </a>
                    </>
                ) : (
                    <a
                        href="/dashboard"
                        className="px-4 py-1 bg-primary text-secondary rounded-full font-medium hover:bg-primary/80 transition-colors"
                    >
                        Dashboard
                    </a>
                )}
            </div>
        </nav>
    )
}

export default Navbar