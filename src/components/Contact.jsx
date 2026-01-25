import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // EmailJS Configuration - Paste your IDs here
        const serviceID = 'service_vtanny4';
        const templateID = 'template_avj0ic5';
        const publicKey = 'zgB6zxdyW_k8knpXz';

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                alert("Message Sent Successfully!");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message: " + error.text);
            });
    };

    const contactLinks = [
        {
            label: 'Balasore',
            value: 'Motiganj Bazar, Balasore, Odisha 756003, India',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            label: 'Secure Line',
            value: '+91 8984480099',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            )
        },
        {
            label: 'WhatsApp',
            value: 'Message Prabhat Khandelwal',
            link: 'https://wa.me/918984480099?text=Hello%20Sir,%0A%0AI%20visited%20your%20website%20and%20would%20like%20to%20connect%20regarding%20a%20legal%20matter.%0A%0AName:%0AMobile%20Number:%0ABrief%20Details:',
            highlight: true,
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .011 5.403.008 12.039c0 2.12.553 4.189 1.603 6l-1.706 6.23 6.376-1.674a11.841 11.841 0 005.767 1.498h.005c6.634 0 12.032-5.403 12.035-12.042.003-3.213-1.248-6.234-3.522-8.508z" />
                </svg>
            )
        },
    ];

    const socialLinks = [
        {
            label: 'LinkedIn',
            link: 'https://www.linkedin.com/in/prabhat-kumar-khandelwal-15182014/',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            )
        },
        {
            label: 'Instagram',
            link: 'https://www.instagram.com/prabhat.mamoria/',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            )
        },
        {
            label: 'GitHub',
            link: 'https://github.com/evil-sandeep/',
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577
                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
                -.546-1.387-1.333-1.757-1.333-1.757
                -1.089-.745.083-.73.083-.73
                1.205.085 1.84 1.237 1.84 1.237
                1.07 1.834 2.809 1.304 3.495.997
                .108-.776.418-1.305.762-1.605
                -2.665-.3-5.466-1.332-5.466-5.93
                0-1.31.469-2.38 1.236-3.22
                -.124-.303-.535-1.523.117-3.176
                0 0 1.008-.322 3.301 1.23
                .957-.266 1.983-.399 3.003-.404
                1.02.005 2.047.138 3.006.404
                2.291-1.552 3.297-1.23 3.297-1.23
                .653 1.653.242 2.873.118 3.176
                .77.84 1.235 1.91 1.235 3.22
                0 4.61-2.805 5.625-5.475 5.92
                .43.37.823 1.102.823 2.222
                0 1.604-.015 2.896-.015 3.286
                0 .322.218.694.825.576
                C20.565 21.796 24 17.3 24 12
                24 5.373 18.627 0 12 0z"
                        clipRule="evenodd"
                    />
                </svg>
            )
        },

    ];

    return (
        <section id="contact" className="py-16 lg:py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Side: Contact Info */}
                    <div className="w-full lg:w-1/3 space-y-8 md:space-y-12 text-center lg:text-left">
                        <div className="space-y-4">
                            <p className="text-secondary font-medium tracking-widest uppercase text-xs md:text-sm">Get in Touch</p>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold italic">Secure <br className="hidden md:block" />Consultation</h2>
                            <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                                Contact us immediately for a confidential case analysis. Your privacy and protection are our primary concerns.
                            </p>
                        </div>

                        <div className="space-y-4 md:space-y-8 text-left max-w-sm mx-auto lg:mx-0">
                            {contactLinks.map((item, i) => (
                                <div key={i}>
                                    {item.link ? (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex gap-4 md:gap-6 p-4 rounded-2xl transition-all duration-300 ${item.highlight ? 'bg-secondary/10 border border-secondary/20 hover:scale-105 shadow-lg shadow-secondary/5' : 'hover:bg-white/5'}`}
                                        >
                                            <div className={`text-secondary shrink-0 ${item.highlight ? 'animate-pulse' : ''}`}>{item.icon}</div>
                                            <div>
                                                <p className="text-secondary font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1">{item.label}</p>
                                                <p className={`text-base md:text-lg font-medium ${item.highlight ? 'text-white' : 'text-text-muted'}`}>{item.value}</p>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className={`flex gap-4 md:gap-6 p-4 rounded-2xl transition-all duration-300 ${item.highlight ? 'bg-secondary/10 border border-secondary/20 group' : 'hover:bg-white/5'}`}>
                                            <div className={`text-secondary shrink-0 ${item.highlight ? 'animate-pulse' : ''}`}>{item.icon}</div>
                                            <div>
                                                <p className="text-secondary font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1">{item.label}</p>
                                                <p className={`text-base md:text-lg font-medium ${item.highlight ? 'text-white' : 'text-text-muted'}`}>{item.value}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 md:pt-8">
                            <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-4 md:mb-6">Digital Presence</p>
                            <div className="flex justify-center lg:justify-start gap-4">
                                {socialLinks.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-bg-card border border-white/10 rounded-xl text-text-muted hover:text-secondary hover:border-secondary transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full lg:w-2/3 bg-bg-card p-6 md:p-10 lg:p-16 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group">
                        {/* Subtle interactive glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] -z-10 group-hover:bg-secondary/10 transition-colors duration-500"></div>

                        <form ref={form} onSubmit={sendEmail} className="grid md:grid-cols-2 gap-6 md:gap-8 relative">
                            <div className="space-y-2">
                                <label className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-text-muted">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="e.g. Prabhat Khandelwal"
                                    required
                                    className="w-full bg-bg border-b border-white/10 p-3 md:p-4 focus:border-secondary outline-none transition-colors text-white text-sm md:text-base"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-text-muted">Direct Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="law@example.com"
                                    required
                                    className="w-full bg-bg border-b border-white/10 p-3 md:p-4 focus:border-secondary outline-none transition-colors text-white text-sm md:text-base"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-text-muted">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="e.g. +91 89844 80099"
                                    required
                                    className="w-full bg-bg border-b border-white/10 p-3 md:p-4 focus:border-secondary outline-none transition-colors text-white text-sm md:text-base"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-text-muted">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Case Consultation"
                                    required
                                    className="w-full bg-bg border-b border-white/10 p-3 md:p-4 focus:border-secondary outline-none transition-colors text-white text-sm md:text-base"
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-text-muted">Detailed Narrative</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Describe your situation..."
                                    required
                                    className="w-full bg-bg border-b border-white/10 p-3 md:p-4 focus:border-secondary outline-none transition-colors resize-none text-white text-sm md:text-base"
                                ></textarea>
                            </div>
                            <div className="md:col-span-2 pt-4 md:pt-6">
                                <button type="submit" className="btn w-full py-4 md:py-5 text-lg md:text-xl tracking-[0.1em] md:tracking-[0.2em] font-bold">SUBMIT CONFIDENTIAL REQUEST</button>
                                <div className="mt-6 md:mt-8 flex items-center justify-center gap-4 text-text-muted px-4">
                                    <div className="h-px bg-white/10 flex-grow hidden sm:block"></div>
                                    <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-center">Attorney-Client Privilege Guaranteed</p>
                                    <div className="h-px bg-white/10 flex-grow hidden sm:block"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
