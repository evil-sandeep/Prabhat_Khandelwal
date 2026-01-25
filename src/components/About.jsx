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
        <section id="about" className="py-24 bg-bg overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Content */}
                    <div className="space-y-8 animate">
                        <div className="space-y-4">
                            <p className="text-secondary font-medium tracking-widest uppercase text-sm">Commitment to Justice</p>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                                A Legacy of Excellence in <br />
                                <span className="text-secondary">Criminal Defense</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-text-muted text-lg leading-relaxed">
                            <p>
                                Prabhat Khandelwal has dedicated over two decades to defending the rights of individuals in the most complex criminal cases. Our firm is built on the pillars of integrity, strategic brilliance, and an unwavering commitment to our clients.
                            </p>
                            <p>
                                We believe that every individual deserves a powerful voice in the courtroom. Our approach combines traditional legal wisdom with modern strategic analysis to deliver the best possible outcomes.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-8 pt-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="border-l-2 border-secondary/30 pl-6 space-y-1">
                                    <p className="text-3xl font-serif font-bold text-secondary">{stat.value}</p>
                                    <p className="text-sm uppercase tracking-wider text-text-muted">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <button className="btn btn-outline px-8 py-3">Learn More Our Philosophy</button>
                        </div>
                    </div>

                    {/* Right Side: Image with Decorative Elements */}
                    <div className="relative group">
                        {/* Background decorative box */}
                        <div className="absolute -top-6 -right-6 w-full h-full border-2 border-secondary/20 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>

                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={officeImage}
                                alt="Our Premium Law Office"
                                className="w-full h-auto object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                            />
                        </div>

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
