import React from "react";

const practiceAreas = [
    {
        title: "Federal Crimes",
        description: "Vigorous defense against federal investigations, including RICO, conspiracy, and cross-border offenses.",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        title: "White Collar",
        description: "Sophisticated representation for fraud, embezzlement, insider trading, and corporate misconduct cases.",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Drug Offenses",
        description: "Strategic defense for possession, trafficking, and manufacturing charges at both state and federal levels.",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
        ),
    },
    {
        title: "DUI & Traffic",
        description: "Protecting your license and freedom with aggressive technical and legal defense against impaired driving charges.",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: "Violent Crimes",
        description: "Unwavering defense for serious charges including homicide, assault, and weapons-related offenses.",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: "Appeals",
        description: "Expert analysis and representation in appellate courts to challenge wrongful convictions or unfair sentences.",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
];

const Practice = () => {
    return (
        <section id="practice" className="py-16 lg:py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-[80px] md:blur-[100px] -z-10"></div>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-20 space-y-4">
                    <p className="text-secondary font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs">Specialized Defense</p>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">Elite Practice Areas</h2>
                    <div className="h-[2px] w-12 bg-secondary mx-auto mt-4 md:mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {practiceAreas.map((area, index) => (
                        <div
                            key={index}
                            className="group relative p-8 md:p-12 bg-[#151515] hover:bg-[#1a1a1a] border border-white/5 hover:border-secondary/30 rounded-2xl md:rounded-3xl transition-all duration-700 hover:-translate-y-2 md:hover:-translate-y-3 cursor-default h-full flex flex-col items-start overflow-hidden shadow-2xl"
                        >
                            {/* Decorative line */}
                            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl md:blur-2xl group-hover:bg-secondary/10 transition-colors duration-500"></div>

                            <div className="text-secondary mb-6 md:mb-8 p-3 md:p-4 bg-secondary/10 rounded-xl md:rounded-2xl group-hover:scale-110 transition-transform duration-500 ring-1 ring-secondary/20">
                                <span className="w-8 h-8 md:w-12 md:h-12 block">{area.icon}</span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 md:mb-4 text-white group-hover:text-secondary transition-colors duration-500">
                                {area.title}
                            </h3>

                            <p className="text-text-muted leading-relaxed text-base md:text-lg flex-grow">
                                {area.description}
                            </p>

                            <div className="mt-8 md:mt-10 flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-[10px] md:text-xs opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:gap-4 relative overflow-hidden pb-1">
                                <span>Explore Expertise <span className="text-lg md:text-xl">⇀</span></span>
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Practice;
