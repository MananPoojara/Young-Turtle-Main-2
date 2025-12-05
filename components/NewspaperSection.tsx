import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';

export const NewspaperSection = () => {
    return (
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-100 overflow-hidden relative">
            {/* Background Texture Detail */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-[#275669]/5 rounded-full blur-3xl"></div>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

                {/* Left: The Narrative (History of Turtle Strategy) */}
                <div className="w-full lg:w-3/5 space-y-6">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
                        The Origin of <br />
                        <span className="text-[#275669]">"The Turtle"</span>
                    </h3>

                    <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                        <p>
                            The name <strong>Young Turtle</strong> is a homage to the most famous experiment in financial history. In 1983, legendary commodities trader <strong>Richard Dennis</strong> wagered that trading was a learned science, not an innate gift.
                        </p>
                        <p>
                            He recruited a group of novices—called the <strong>"Turtles"</strong>—and taught them a specific set of trend-following rules. He famously said, <span className="italic text-slate-800">"We are going to grow traders just like they grow turtles in Singapore."</span>
                        </p>
                        <p className="text-sm text-slate-500 pt-2 border-t border-slate-100 mt-4">
                            The result? His students earned over <strong>$175 million</strong> in four years, proving that with discipline, mathematics, and a robust system, consistency can be engineered.
                        </p>
                    </div>
                </div>

                {/* Right: The Evidence (Newspaper Image) */}
                <div className="w-full lg:w-2/5 relative">
                    {/* Decorative Frame */}
                    <div className="absolute inset-0 bg-slate-900/5 transform translate-x-3 translate-y-3 rounded-xl"></div>
                    <div className="absolute -top-6 -right-6 text-[#275669]/10">
                        <Quote size={80} />
                    </div>

                    <div className="relative bg-white p-2 rounded-xl shadow-lg border border-slate-200 group overflow-hidden">
                        {/* 
                           Replace src with your actual image path: /perspective-img/wsj-article.jpg 
                        */}
                        <img
                            src="/perspective-img/artical.png"
                            alt="Wall Street Journal Article - Winning Commodity Traders May Be Made"
                            className="w-full h-auto rounded grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement?.classList.add('h-64', 'flex', 'items-center', 'justify-center', 'bg-slate-50');
                                const div = document.createElement('div');
                                div.className = "text-center p-4 text-slate-400 text-sm";
                                div.innerHTML = "Image not found.<br/>Add <b>wsj-article.jpg</b> to perspective-img folder.";
                                e.currentTarget.parentElement?.appendChild(div);
                            }}
                        />

                        {/* Overlay Tag */}
                        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md border border-slate-200 px-3 py-1 rounded shadow-sm">
                            <span className="text-[10px] font-mono font-bold text-[#275669] uppercase tracking-wider">
                                WSJ • SEPT 1989
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};