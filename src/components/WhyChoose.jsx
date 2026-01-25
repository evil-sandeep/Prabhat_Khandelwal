import React from 'react';

const achievements = [
    { icon: '⭐', label: 'Success Rate', value: '98%' },
    { icon: '⚖️', label: 'Years of Justice', value: '20+' },
    { icon: '🔥', label: 'High-Stakes Cases', value: '150+' },
    { icon: '💎', label: 'Client Satisfaction', value: '4.9/5' },
];

const WhyChoose = () => {
    return (
        <section id="why" className="py-24 bg-bg relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    {/* Left Side: Stats Grid */}
                    <div className="grid grid-cols-2 gap-6 w-full lg:w-1/2 order-2 lg:order-1">
                        {achievements.map((item, i) => (
                            <div
                                key={i}
                                className="p-8 bg-bg-card border border-white/5 rounded-2xl text-center space-y-4 shadow-xl hover:border-secondary transition-colors duration-500"
                            >
                                <div className="text-3xl">{item.icon}</div>
                                <div>
                                    <p className="text-4xl font-serif font-bold text-secondary">{item.value}</p>
                                    <p className="text-xs uppercase tracking-widest text-text-muted font-semibold mt-2">{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-1/2 space-y-8 order-1 lg:order-2">
                        <div className="space-y-4">
                            <p className="text-secondary font-medium tracking-widest uppercase text-sm">Why Prabhat Khandelwal?</p>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                                Aggressive Defense <br />
                                Proven Results
                            </h2>
                        </div>

                        <p className="text-text-muted text-lg leading-relaxed">
                            In criminal defense, experience isn't just a number—it's the difference between freedom and conviction. We provide a powerhouse defense that levels the playing field against government resources.
                        </p>

                        <ul className="space-y-4 pt-4">
                            {[
                                'Former Prosecutor Perspective',
                                'Unwavering Confidentiality',
                                'Tailored Strategic Litigation',
                                '24/7 Crisis Response Unit'
                            ].map((text, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg">
                                    <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-sm">✔</span>
                                    {text}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6">
                            <a href="#contact" className="btn px-10 py-4">Secure Representation</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
