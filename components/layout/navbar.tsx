import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Navbar = () => {

    const linkStyle = 'text-neutral-200 hover:text-white transition-colors font-medium'

    return (
        <nav className='py-8 flex items-center justify-between'>

            <div className='flex items-center gap-8'>

                {/* Logo */}
                <div className='flex items-center gap-2'>
                    <a href="/" className='text-xl font-extrabold'>Mindly</a>
                </div>

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
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white text-2xl transition-colors"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                {/* Sign Up Button */}
                <a
                    href="/signup"
                    className="px-4 py-2 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-secondary transition-colors"
                >
                    Sign Up
                </a>
                {/* Get Started Button */}
                <a
                    href="/get-started"
                    className="px-4 py-2 bg-primary text-secondary rounded-lg font-semibold hover:bg-[#FFD7B0] transition-colors"
                >
                    Get Started
                </a>
            </div>
        </nav>
    )
}

export default Navbar