import React from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

const Projects = () => {
  return (
    <Layout>
      <div className="py-16">
        {/* TiramiAI Highlighted Section */}
        <div className="mb-16">
          <div className="bg-blue-950 text-white rounded-3xl overflow-hidden">
            <div className="flex flex-col-reverse lg:flex-row">
              <div className="p-8 lg:p-12 lg:w-1/2">
                <h2 className="text-3xl font-bold mb-2">TiramiAI – From Concept to Creation</h2>
                <p className="mb-8 text-blue-100">
                  At <strong>Thinkbridge</strong>, I contributed to <strong>TiramiAI</strong> — an AI-powered platform that generates both mobile and web apps from natural language prompts.
                  <br /><br />
                  My work focused on engineering the mobile workflows: generating complete Flutter apps from user inputs and building self-healing capabilities. Users can report issues or suggest changes directly from within the app, triggering regeneration of affected screens and automated deployment to the Play Store and App Store.
                  <br /><br />
                  We've already shipped <strong>20+ production-ready apps</strong> using this system, significantly accelerating development timelines.
                </p>
                <div className="flex flex-wrap gap-4">
                  <PrimaryButton href="https://play.google.com/store/apps/developer?id=ZPQV,+INC." external icon="play">
                    View Beta Apps on Play Store
                  </PrimaryButton>
                  <SecondaryButton href="https://tiram.ai" external>
                    View TiramiAI <i className="bi bi-box-arrow-up-right ml-1"></i>
                  </SecondaryButton>
                </div>
              </div>
              <div className="lg:w-1/2 bg-gradient-to-br from-blue-900 to-blue-950 p-8 flex items-center justify-center">
                <img
                  src="tiram-ai-image.png"
                  alt="TiramiAI Preview"
                  className="max-w-full max-h-96 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <ProjectCard
            title="CareAlert – Wellness Monitoring App"
            description="Migrated the CareAlert mobile app to Flutter, improving scalability, stability, and maintenance efficiency."
            bgColor="bg-red-50"
            href="https://www.sensorscall.com/"
          />

          <ProjectCard
            title="Product Engineering Bridge"
            description="Built an MVP tool for better PM-engineering collaboration. Breaks down product ideas into features, clarifications, and tech stacks."
            bgColor="bg-blue-50"
            href="https://huggingface.co/spaces/jayjhaveri9/Product-Engineering-Bridge"
          />

          <ProjectCard
            title="Stock Buddy – Indian Stock Advisor"
            description="Developed a conversational AI for Indian stock investors to check stock valuation metrics and offer beginner-friendly advice."
            bgColor="bg-green-50"
            href="https://huggingface.co/spaces/jayjhaveri9/stock-app"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="The Eternal Journey - AI Comic"
            description="Created an AI-generated mythological comic series, blending storytelling and visual design through Generative AI models."
            bgColor="bg-amber-50"
            href="https://drive.google.com/file/d/1EAWhCdBZcPWO5Yw2kCsOQayud2A1nsaO/view"
          />

          <ProjectCard
            title="IoT Smart Air Purifier App"
            description="Built a Bluetooth-enabled Flutter app to control smart air purifiers, improving product usability and control experience."
            bgColor="bg-purple-50"
            comingSoon
          />
        </div>
      </div>
    </Layout>
  );
};

export default Projects;