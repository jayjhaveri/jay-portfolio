
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  bgColor?: string;
  href?: string;
  image?: string;
  comingSoon?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  bgColor = "bg-red-50",
  href,
  image,
  comingSoon = false
}) => {
  return (
    <div className={`${bgColor} rounded-2xl p-6 h-full`}>
      {image && (
        <div className="mb-4">
          <img src={image} alt={title} className="w-full rounded-lg" />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      
      {comingSoon ? (
        <div className="text-gray-400 font-medium">Coming Soon</div>
      ) : (
        href && (
          <a 
            href={href} 
            className="inline-flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project <i className="bi bi-box-arrow-up-right ml-1 text-sm"></i>
          </a>
        )
      )}
    </div>
  );
};

export default ProjectCard;
