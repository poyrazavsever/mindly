import React from 'react'

const HeroSection = () => {
    return (
        <section className="w-full flex flex-col md:flex-row items-center justify-between gap-24 py-32">

            {/* Sol taraf: Başlık, metin ve butonlar */}
            <div className="flex flex-col items-start gap-4">
                <h1 className="text-5xl md:text-6xl font-semibold text-primary">
                    Mindly, Meet Your <span className='font-bold italic text-gray-300'>AI Assistant</span>
                </h1>
                <p className="text-lg text-primary/80 max-w-xl">
                    Mindly is an AI platform that makes your daily life easier, inspires you, and increases your productivity. Start exploring now!
                </p>
                <div className="flex gap-4 mt-2">
                    <a
                        href="/signup"
                        className="px-6 py-1 rounded-full bg-primary text-secondary font-semibold hover:bg-primary/90 transition-colors"
                    >
                        Get Started
                    </a>
                    <a
                        href="/product"
                        className="px-6 py-1 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-secondary transition-colors"
                    >
                        Learn More
                    </a>
                </div>
            </div>

            {/* Sağ taraf: Görsel */}
            <div className="flex flex-col items-end mt-10 md:mt-0 max-w-sm">
                <img
                    src="/images/hero-image.png"
                    alt="Mindly platform illustration"
                    className="max-w-xs md:max-w-md rounded-xl"
                />

                <div className='w-xs md:w-md h-8 rounded-full bg-gray-500 blur-3xl'/>
            </div>

        </section>
    )
}

export default HeroSection