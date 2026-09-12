import bannerImage from "../assets/banner-stack.png"

function Hero() {
    return (
        <section id="home" className="bg-white">
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:px-8 lg:py-28">

                {/* Left Content */}
                <div>
                    <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Build Your Ideal
                        <br />
                        <span className="brand-gradient-text">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#technologies"
                            className="brand-gradient-bg rounded-lg px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                        >
                            Explore Technologies
                        </a>

                        <a
                            href="#about"
                            className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="mt-8 flex items-center justify-center lg:mt-0">
                    <img
                        src={bannerImage}
                        alt="Development stack illustration"
                        className="w-[280px] object-contain sm:w-[340px] lg:w-full lg:max-w-lg"
                    />
                </div>

            </div>
        </section>
    )
}

export default Hero