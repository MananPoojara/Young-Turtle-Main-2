import React from 'react';
import { Quote } from 'lucide-react';

export const NewspaperSection = () => {
    return (
        <div className="bg-[#275669] rounded-3xl relative overflow-hidden shadow-2xl group selection:bg-amber-400/30">
            {/* Subtle Texture/Grain Overlay to reduce flatness without changing color */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none transition-opacity duration-1000 group-hover:opacity-70"></div>

            <div className="relative p-8 sm:p-12 lg:p-16">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* Left: The Narrative */}
                    <div className="w-full lg:w-1/2 space-y-8 z-10">

                        {/* Header Group */}
                        <div>
                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white leading-[1.1]">
                                The Origin of <br />
                                <span className="text-amber-400 italic">"The Turtle"</span>
                            </h3>
                        </div>

                        {/* Featured Pull Quote */}
                        <blockquote className="relative border-l-4 border-amber-400/80 pl-6 py-4 my-6 bg-black/10 rounded-r-xl pr-6 backdrop-blur-sm">
                            <Quote className="absolute top-2 right-2 w-8 h-8 text-white/5" />
                            <p className="text-xl font-serif text-white/95 italic leading-relaxed">
                                "I always say that you could publish my trading rules in the newspaper and no one would follow them. The key is consistency and discipline."
                            </p>
                            <footer className="mt-4 flex items-center gap-3">
                                <div className="h-px w-8 bg-amber-400/50"></div>
                                <span className="text-sm font-mono uppercase tracking-wider text-amber-400/90 font-semibold">Richard Dennis, 1983</span>
                            </footer>
                        </blockquote>

                        {/* Body Text */}
                        <div className="space-y-4 text-slate-100 text-lg font-light leading-relaxed opacity-90">
                            <p>
                                <strong>Young Turtle</strong> is a homage to the most famous experiment in financial history. Dennis wagered that trading was a learned science, not an innate gift.
                            </p>
                            <p>
                                He recruited a group of novices—called "Turtles"—and taught them a specific set of trend-following rules. His students earned over <strong>$175 million</strong> in four years, proving that with discipline and mathematics, consistency can be engineered.
                            </p>
                        </div>
                    </div>

                    {/* Right: The Evidence (Image) */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Decorative Background Quote */}
                        <div className="absolute -top-12 -right-12 text-white/5 transform rotate-12 pointer-events-none transition-transform duration-700 group-hover:rotate-45">
                            <Quote size={200} />
                        </div>

                        {/* Image Container with 'Artifact' styling */}
                        <div className="relative transform transition-all duration-700 hover:scale-[1.02] hover:-rotate-1 group-hover:z-20">
                            {/* Scotch Tape Visual */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-white/20 backdrop-blur-[2px] -rotate-2 z-20 shadow-sm opacity-60 border-l border-r border-white/10"></div>

                            <div className="bg-[#fdfbf7] p-3 rounded shadow-2xl rotate-1 overflow-hidden relative">
                                <div className="relative border border-slate-200 rounded-sm overflow-hidden">
                                    <div className="absolute inset-0 bg-amber-900/10 pointer-events-none mix-blend-multiply z-10"></div>
                                    <img
                                        src="/perspective-img/artical.png"
                                        alt="Wall Street Journal Article"
                                        className="w-full h-auto sepia-[0.3] contrast-[1.15] grayscale hover:grayscale-0 hover:sepia-0 transition-all duration-700"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement?.classList.add('h-64', 'flex', 'items-center', 'justify-center', 'bg-slate-100');
                                            const div = document.createElement('div');
                                            div.className = "text-center p-4 text-slate-500 text-sm";
                                            div.innerHTML = "Image placeholder.<br/>(artical.png)";
                                            e.currentTarget.parentElement?.appendChild(div);
                                        }}
                                    />
                                </div>

                                {/* Caption below image inside the paper frame */}
                                <div className="pt-3 pb-1 px-1 flex justify-between items-center font-serif">
                                    <span className="text-xs text-slate-800 font-bold tracking-wide">THE WALL STREET JOURNAL.</span>
                                    <span className="text-[10px] text-slate-500 font-mono border border-slate-300 px-1 rounded">SEPT 1989</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};