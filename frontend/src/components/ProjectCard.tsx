import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  status: 'Proposed' | 'In Progress' | 'Completed';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, status }) => {
  const statusColors = {
    'Proposed': 'bg-yellow-100 text-yellow-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    'Completed': 'bg-green-100 text-green-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
        <p className="text-green-700 mb-4">{description}</p>
        <span className={`px-2 py-1 rounded-full text-sm font-semibold ${statusColors[status]}`}>
          {status}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;