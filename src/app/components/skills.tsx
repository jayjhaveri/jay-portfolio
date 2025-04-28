'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
    { name: 'Flutter', logo: '/flutter.svg' },
    { name: 'Firebase', logo: '/firebase.svg' },
    { name: 'OpenAI', logo: '/openai.svg' },
    { name: 'TypeScript', logo: '/typescript.svg' },
    { name: 'Anthropic', logo: '/anthropic.svg' },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-4xl font-bold mb-10">Tech I Work With</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            className="flex flex-col items-center space-y-4"
                        >
                            <Image
                                src={skill.logo}
                                alt={skill.name}
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                            <p className="text-lg">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}