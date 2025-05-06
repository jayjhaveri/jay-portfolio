
import React from 'react';
import Layout from '../components/Layout';
import PrimaryButton from '../components/PrimaryButton';

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-20">
        <h1 className="text-6xl font-bold mb-8">Let's Work Together</h1>

        <p className="text-xl text-gray-700 mb-12 max-w-2xl">
          I'm always excited to collaborate, innovate, and build meaningful solutions. Whether you have a project, a job opportunity, or just want to connect — let's talk!
        </p>

        <div className="mb-12">
          <PrimaryButton href="mailto:jay.jhaveri15@gmail.com" icon="envelope">
            Get in Touch
          </PrimaryButton>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
