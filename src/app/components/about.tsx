'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    I'm Jay Jhaveri, a Senior Software Engineer blending 8+ years of mobile development expertise with cutting-edge AI technologies.
                    I specialize in building intelligent, production-ready applications using Flutter, Firebase Cloud Functions, and Generative AI models like OpenAI and Anthropic.
                    Focused on turning ideas into scalable products, automating workflows, and delivering seamless user experiences.
                </p>
            </motion.div>
        </section>
    );
}