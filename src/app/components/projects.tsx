'use client';

import { motion } from 'framer-motion';

// 🔵 Standout TiramAi Project
const tiramAiProject = {
    title: 'TiramAi – From Concept to Creation',
    description: `Built TiramAi, an AI-driven mobile code generation and self-healing engine.
It generates full Flutter apps from user text or voice prompts — and continuously evolves them.

Users can report issues or suggest improvements directly from the app.
TiramAi analyzes feedback, regenerates affected screens, and automatically updates the apps to Play Store and App Store — accelerating traditional development cycles by 10x.

20+ production-ready apps generated and shipped in beta using this system.`,
    link: 'https://www.tiram.ai/',
    playstoreLink: 'https://play.google.com/store/apps/developer?id=ZPQV,+INC.&hl=en',
};

// 🔹 Remaining Projects
const otherProjects = [
    {
        title: 'CareAlert – Remote Wellness Monitoring App',
        description: 'Migrated the CareAlert mobile app to Flutter, improving scalability, stability, and maintenance efficiency.',
        link: 'https://www.sensorscall.com/',
    },
    {
        title: 'Product Engineering Bridge',
        description: 'Built an MVP tool for better PM–engineering collaboration. Breaks down product ideas into features, clarifications, and suggested tech stacks.',
        link: 'https://huggingface.co/spaces/jayjhaveri9/Product-Engineering-Bridge',
    },
    {
        title: 'Stock Buddy – Indian Stock Advisor',
        description: 'Developed a conversational AI for Indian stock investors to check stock valuation metrics and offer beginner-friendly advice.',
        link: 'https://huggingface.co/spaces/jayjhaveri9/stock-app',
    },
    {
        title: 'IoT Smart Air Purifier App',
        description: 'Built a Bluetooth-enabled Flutter app to control smart air purifiers, improving product usability and control experience.',
        link: '',
    },
    {
        title: 'The Eternal Journey - AI Comic Project',
        description: 'Created an AI-generated mythological comic series, blending storytelling and visual design through Generative AI models.',
        link: 'https://drive.google.com/file/d/1EAWhCdBZcPWO5Yw2kCsOQayud2A1nsaO/view',
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
                <h2 className="text-5xl font-extrabold mb-4">Projects</h2>
                <div className="h-1 w-24 bg-blue-600 mx-auto mb-12 rounded-full"></div>

                {/* --- Standout TiramAi Card --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-blue-50 border-2 border-blue-400 shadow-xl hover:shadow-2xl rounded-xl p-8 max-w-4xl mx-auto mb-16 text-center"
                >
                    <h3 className="text-3xl font-bold mb-4">{tiramAiProject.title}</h3>
                    <p className="text-gray-700 whitespace-pre-line mb-6 leading-relaxed">{tiramAiProject.description}</p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-auto justify-center items-center">
                        <a
                            href={tiramAiProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 font-bold hover:underline"
                        >
                            View TiramAi →
                        </a>
                        <a
                            href={tiramAiProject.playstoreLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full font-semibold text-sm text-center"
                        >
                            View Beta Apps on Play Store
                        </a>
                    </div>
                </motion.div>

                {/* --- Grid of Other Projects --- */}
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto px-6 justify-center items-center">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="bg-white shadow-lg hover:shadow-2xl border border-gray-200 rounded-xl p-6 flex flex-col justify-between min-h-[280px]"
                        >
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                                <p className="text-gray-600 mb-6">{project.description}</p>
                            </div>

                            <div className="flex flex-col gap-3 mt-auto">
                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 font-bold hover:underline"
                                    >
                                        View Project →
                                    </a>
                                ) : (
                                    <span className="text-gray-400 font-bold cursor-default">
                                        Coming Soon
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}