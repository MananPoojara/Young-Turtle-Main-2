export const TortoiseQuote = () => {
    return (
        <div className='relative text-center px-4 sm:px-6 md:px-8 max-w-6xl mx-auto'>
            {/* Subtle gradient overlay behind text */}
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent rounded-3xl blur-3xl'></div>

            {/* Main content */}
            <div className='relative z-10'>
                {/* Main headline */}
                <h1
                    className='
                        font-serif 
                        text-white 
                        text-4xl
                        xl:text-6xl
                        2xl:text-7xl
                        sm:text-5xl
                        md:text-6xl
                        lg:text-6xl
                        leading-tight
                        tracking-tight
                        mb-6
                    '
                >
                    <span className='text-[#ffb900] font-bold'>Mathematics</span>
                    {' '}Over{' '}
                    <span className='text-[#ffb900] font-bold'>Intuition.</span>
                </h1>

                {/* Subheadline */}
                <div className='space-y-3 max-w-4xl mx-auto'>
                    <h2
                        className='
                            font-serif 
                            text-white/95
                            text-xl
                            sm:text-2xl
                            md:text-3xl
                            lg:text-4xl
                            leading-relaxed
                            tracking-tight
                            font-light
                            italic
                        '
                    >
                        Algorithms beat gut feelings.
                    </h2>

                    <p
                        className='
                            font-serif 
                            text-white/90
                            text-lg
                            sm:text-xl
                            md:text-2xl
                            lg:text-3xl
                            leading-relaxed
                            tracking-tight
                            font-light
                            italic
                        '
                    >
                        We build{' '}
                        <span className='text-[#ffb900] font-medium'>
                            rigorous, quantitative approaches
                        </span>
                        {' '}as{' '}
                        <span className='text-[#ffb900] font-medium'>
                            numbers reveal truth.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}
