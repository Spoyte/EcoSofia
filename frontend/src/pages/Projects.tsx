import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Green Corridor Initiative',
      description: 'Creating a network of parks and green spaces to improve air quality and biodiversity.',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1000',
      status: 'In Progress' as const,
    },
    {
      title: 'Smart Waste Management System',
      description: 'Implementing IoT-enabled waste bins and optimized collection routes to reduce emissions.',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000',
      status: 'Proposed' as const,
    },
    {
      title: 'Solar-Powered Public Transport',
      description: 'Transitioning public buses to solar-powered electric vehicles to reduce carbon emissions.',
      image: 'https://images.unsplash.com/photo-1570891836654-d4961a7b6929?auto=format&fit=crop&q=80&w=1000',
      status: 'Completed' as const,
    },
    {
      title: 'Urban Farming Network',
      description: 'Establishing a network of community gardens and vertical farms to promote local food production.',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1000',
      status: 'In Progress' as const,
    },
    {
      title: 'Energy-Efficient Building Retrofits',
      description: 'Upgrading existing buildings with energy-efficient technologies to reduce energy consumption.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
      status: 'Proposed' as const,
    },
    {
      title: 'Eco-Friendly Water Treatment Plant',
      description: 'Implementing a new water treatment facility using natural purification methods and renewable energy.',
      image: 'https://images.unsplash.com/photo-1422207199074-a7c7f2c9deae?auto=format&fit=crop&q=80&w=1000',
      status: 'Completed' as const,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Eco-Friendly Urban Development Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;