'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center py-6 px-4 md:px-10 bg-white ticky top-0 z-50">
            <div className="text-2xl font-bold text-blue-700">
                <Link href="/">Jay Jhaveri</Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 text-lg items-center">
                <Link href="/#about" className="hover:text-blue-600">About</Link>
                <Link href="/#skills" className="hover:text-blue-600">Skills</Link>
                <Link href="/#projects" className="hover:text-blue-600">Projects</Link>
                <Link href="/#contact" className="hover:text-blue-600">Contact</Link>
                <a href="https://linkedin.com/in/jayjhaveri9" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-sm">LinkedIn</a>
                <a href="https://github.com/jayjhaveri9" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-sm">GitHub</a>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl focus:outline-none">
                    {menuOpen ? '✖' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-20 right-4 left-4 bg-white rounded-lg shadow-lg p-6 flex flex-col space-y-4 text-lg">
                    <Link href="/#about" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link href="/#skills" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Skills</Link>
                    <Link href="/#projects" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Projects</Link>
                    <Link href="/#contact" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact</Link>
                    <a href="https://linkedin.com/in/jayjhaveri9" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-sm" onClick={() => setMenuOpen(false)}>LinkedIn</a>
                    <a href="https://github.com/jayjhaveri9" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-sm" onClick={() => setMenuOpen(false)}>GitHub</a>
                </div>
            )}
        </nav>
    );
}