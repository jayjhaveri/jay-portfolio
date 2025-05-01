
import React from 'react';
import Layout from '../components/Layout';
import TechItem from '../components/TechItem';

const About = () => {
  const techStack = [
    { name: 'Flutter', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-10 h-10" /> },
    { name: 'Firebase', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-10 h-10" /> },
    { name: 'OpenAI', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="OpenAI" className="w-10 h-10" /> },
    { name: 'TypeScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-10 h-10" /> },
    { name: 'Anthropic', icon: <span className="text-2xl font-bold">A\\</span> },
    { name: 'Kotlin', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin" className="w-10 h-10" /> }
  ];

  return (
    <Layout>
      <div className="py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-16">About Me</h1>

        <div className="mb-12">
          <p className="text-lg text-center text-gray-700 leading-relaxed max-w-3xl mx-auto">
            A Senior Software Engineer with 8+ years of experience blending mobile development expertise with cutting-edge AI technologies. I specialize in building intelligent, production-ready applications using Flutter, Firebase Cloud Functions, and Generative AI models like OpenAI and Anthropic. Focused on turning ideas into scalable products, automating workflows, and delivering seamless user experiences.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center mt-24 mb-12">Tech I Work With</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <TechItem key={index} name={tech.name} icon={tech.icon} />
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default About;
