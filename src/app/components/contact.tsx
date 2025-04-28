'use client';

import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>

                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                    I'm always excited to collaborate, innovate, and build meaningful solutions.
                    Whether you have a project, a job opportunity, or just want to connect — let's talk!
                </p>

                <a
                    href="mailto:jay.jhaveri15@gmail.com"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition inline-block"
                >
                    Get In Touch
                </a>
            </motion.div>
        </section>
    );
}