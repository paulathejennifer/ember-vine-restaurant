"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/app/components/ui/Button";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-obsidian/95 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                    : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-16 py-5">

                {/* Logo — script style matching the design */}
                <Link
                    href="/"
                    className="font-logo text-gold text-3xl tracking-wide"
                >
                    Ember & Vine
                </Link>

                {/* Nav links */}
                <ul className="hidden lg:flex items-center gap-x-8 font-sans text-xs text-ivory uppercase tracking-[0.15em]">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="hover:text-gold transition-colors duration-200 pb-1 border-b border-transparent hover:border-gold"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>

                    </li>
                </ul>

                {/* CTA */}
                <div className="hidden lg:block">
                    <Button href="#reservations" variant="secondary">
                        Reserve a Table
                    </Button>
                </div>

            </nav>
        </header>
    );
}