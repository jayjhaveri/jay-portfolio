'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold mb-6"
            >
                Hi, I'm Jay Jhaveri <span className="inline-block">👋</span>
            </motion.h1>


            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl mb-4"
            >
                Senior Software Engineer | Mobile Development | AI Integration Specialist
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-gray-600 text-lg max-w-2xl mb-8"
            >
                I build intelligent mobile solutions powered by Flutter, Firebase, and Generative AI.
            </motion.p>

            <Link href="#projects">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition cursor-pointer"
                >
                    View My Projects
                </motion.div>
            </Link>
        </section>
    );
}