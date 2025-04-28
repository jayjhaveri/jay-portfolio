'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        title: 'TiramAi – AI App Generator',
        description: 'Built automation workflows that generate Flutter apps from user voice or text input, reducing development time from 1 month to under 1 hour.',
        link: 'https://www.tiram.ai/', // Add link if available
    },
    {
        title: 'CareAlert – Remote Wellness Monitoring App',
        description: 'Migrated the CareAlert mobile app to Flutter, improving scalability, stability, and maintenance efficiency.',
        link: 'https://www.sensorscall.com/',
    },
    {
        title: 'Product Engineering Bridge',
        description: 'Built an MVP tool for better PM–engineering collaboration. It breaks down product ideas into features, clarifications, and suggested tech stacks. Built with Groq + Gradio + LLaMA, deployed on Hugging Face Spaces.',
        link: 'https://huggingface.co/spaces/jayjhaveri9/Product-Engineering-Bridge',
    },
    {
        title: 'Stock Buddy – Indian Stock Advisor',
        description: 'Developed a conversational AI for Indian stock investors to check stock valuation metrics (P/E, EPS, 52W range) and offer beginner-friendly advice (Buy / Hold / Avoid). Built with Yahoo Finance + Gradio + LLaMA, deployed on Hugging Face.',
        link: 'https://huggingface.co/spaces/jayjhaveri9/stock-app',
    },
    {
        title: 'IoT Smart Air Purifier App',
        description: 'Built a Bluetooth-enabled Flutter app to control smart air purifiers, improving product usability and real-time control experience.',
        link: '', // Add link if available
    },
    {
        title: 'The Eternal Journey - AI Comic Project',
        description: 'Created an AI-generated mythological comic series, blending storytelling and visual design through Generative AI models.',
        link: 'https://drive.google.com/file/d/1EAWhCdBZcPWO5Yw2kCsOQayud2A1nsaO/view', // Add link if available
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-4xl font-bold mb-12">Projects</h2>

                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto px-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="bg-white shadow-lg hover:shadow-2xl border border-gray-200 rounded-xl p-6 flex flex-col justify-between min-h-[250px]"
                        >
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                                <p className="text-gray-600 mb-6">{project.description}</p>
                            </div>

                            {project.link ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 font-bold hover:underline mt-auto"
                                >
                                    View Project →
                                </a>
                            ) : (
                                <span className="text-gray-400 font-bold mt-auto cursor-default">
                                    Coming Soon
                                </span>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}