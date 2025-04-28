import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold text-blue-700">
                <Link href="/">Jay Jhaveri</Link>
            </div>
            <div className="space-x-6 text-lg flex items-center">
                <Link href="/#about" className="hover:text-blue-600">About</Link>
                <Link href="/#skills" className="hover:text-blue-600">Skills</Link>
                <Link href="/#projects" className="hover:text-blue-600">Projects</Link>
                <Link href="/#contact" className="hover:text-blue-600">Contact</Link>
                <a
                    href="https://linkedin.com/in/jayjhaveri9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 text-sm"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/jayjhaveri9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 text-sm"
                >
                    GitHub
                </a>
            </div>
        </nav>
    );
}