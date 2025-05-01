
import React from 'react';
import Layout from '../components/Layout';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

const Index = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-20">
        <h1 className="text-6xl sm:text-7xl font-bold mb-4">
          Hi, I'm Jay Jhaveri
        </h1>
        <h2 className="text-2xl text-gray-700 mb-8">
          Senior Software Engineer | AI Integration Specialist
        </h2>

        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          I engineer intelligent systems that automate workflows, power user experiences, and leverage AI innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <PrimaryButton to="/projects" icon="grid">
            View Projects
          </PrimaryButton>
          <SecondaryButton href="/resume.pdf" icon="download" external>
            Download Resume
          </SecondaryButton>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
