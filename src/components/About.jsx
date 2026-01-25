import React from 'react';
import officeImage from '../assets/prabhat_office.png';

const About = () => {
    const stats = [
        { label: 'Cases Resolved', value: '500+' },
        { label: 'Years Experience', value: '20+' },
        { label: 'Success Rate', value: '98%' },
        { label: 'Expert Advocates', value: '15+' },
    ];

    return (
        <section id="about" className="py-16 lg:py-24 bg-bg overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Side: Content */}
                    <div className="space-y-8 animate text-center lg:text-left">
                        <div className="space-y-4">
                            <p className="text-secondary font-medium tracking-widest uppercase text-xs md:text-sm">Commitment to Justice</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                                A Legacy of Excellence in <br className="hidden md:block" />
                                <span className="text-secondary">Criminal Defense</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            <p>
                                Prabhat Khandelwal has dedicated over two decades to defending the rights of individuals in the most complex criminal cases. Our firm is built on the pillars of integrity, strategic brilliance, and an unwavering commitment to our clients.
                            </p>
                            <p>
                                We believe that every individual deserves a powerful voice in the courtroom. Our approach combines traditional legal wisdom with modern strategic analysis to deliver the best possible outcomes.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 md:gap-8 pt-4 md:pt-8 text-left">
                            {stats.map((stat, index) => (
                                <div key={index} className="border-l-2 border-secondary/30 pl-4 md:pl-6 space-y-1">
                                    <p className="text-2xl md:text-3xl font-serif font-bold text-secondary">{stat.value}</p>
                                    <p className="text-[10px] md:text-sm uppercase tracking-wider text-text-muted">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 md:pt-6">
                            <button className="btn btn-outline relative group overflow-hidden px-6 py-2.5 md:px-8 md:py-3 text-sm md:text-base border-secondary/30">
                                <span className="relative z-10 transition-colors duration-300">Learn Our Philosophy</span>
                                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-secondary transform scale-x-75 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Image with Decorative Elements */}
                    <div className="relative group order-first lg:order-last mb-12 lg:mb-0 max-w-[500px] mx-auto lg:max-w-none">
                        {/* Background decorative box */}
                        <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full border-2 border-secondary/20 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>

                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={officeImage}
                                alt="Our Premium Law Office"
                                className="w-full h-auto object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                            />
                        </div>

                        {/* Absolute badge */}
                        {/* Absolute badge */}
                        <div className="absolute top-2 -left-2 bg-bg-card border border-secondary/30 p-1 rounded-xl shadow-2xl hidden xl:block animate-float">
                            <p className="font-serif text-2xl text-secondary italic">"Integrity is the essence of everything we do."</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
