'use client';

export default function Footer() {
    return (
        <footer className="mt-20 border-t pt-8 text-center text-gray-500 text-sm">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6">
                <a
                    href="https://linkedin.com/in/jayjhaveri9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/jayjhaveri9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                >
                    GitHub
                </a>
            </div>
            <p className="mt-4">&copy; 2025 Jay Jhaveri</p>
        </footer>
    );
}