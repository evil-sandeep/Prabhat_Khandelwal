import React from 'react';

const achievements = [
    { icon: '⭐', label: 'Success Rate', value: '98%' },
    { icon: '⚖️', label: 'Years of Justice', value: '20+' },
    { icon: '🔥', label: 'High-Stakes Cases', value: '150+' },
    { icon: '💎', label: 'Client Satisfaction', value: '4.9/5' },
];

const WhyChoose = () => {
    return (
        <section id="why" className="py-16 lg:py-24 bg-bg relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-[100px] md:blur-[120px] -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Left Side: Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 md:gap-6 w-full lg:w-1/2 order-2 lg:order-1">
                        {achievements.map((item, i) => (
                            <div
                                key={i}
                                className="p-6 md:p-8 bg-bg-card border border-white/5 rounded-2xl text-center space-y-3 md:space-y-4 shadow-xl hover:border-secondary transition-colors duration-500"
                            >
                                <div className="text-2xl md:text-3xl">{item.icon}</div>
                                <div>
                                    <p className="text-3xl md:text-4xl font-serif font-bold text-secondary">{item.value}</p>
                                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-text-muted font-semibold mt-1 md:mt-2">{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left">
                        <div className="space-y-4">
                            <p className="text-secondary font-medium tracking-widest uppercase text-xs md:text-sm">Why Prabhat Khandelwal?</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                                Aggressive Defense <br className="hidden md:block" />
                                Proven Results
                            </h2>
                        </div>

                        <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            In criminal defense, experience isn't just a number—it's the difference between freedom and conviction. We provide a powerhouse defense that levels the playing field against government resources.
                        </p>

                        <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4 text-left max-w-md mx-auto lg:mx-0">
                            {[
                                'Former Prosecutor Perspective',
                                'Unwavering Confidentiality',
                                'Tailored Strategic Litigation',
                                '24/7 Crisis Response Unit'
                            ].map((text, i) => (
                                <li key={i} className="flex items-center gap-3 md:gap-4 text-base md:text-lg">
                                    <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-xs">✔</span>
                                    {text}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-4 md:pt-6">
                            <a href="#contact" className="btn relative group overflow-hidden px-8 py-3 md:px-10 md:py-4 text-sm md:text-base border-secondary">
                                <span className="relative z-10 transition-colors duration-300">Secure Representation</span>
                                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-secondary transform scale-x-75 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
