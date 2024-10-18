import React from 'react';
import { Leaf, Shield, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8">About EcoSofia</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-green-700 mb-4">
          EcoSofia is an innovative AI-driven platform designed to revolutionize urban development in Sofia, Bulgaria. Our mission is to create a sustainable, smart, and citizen-centric city that balances technological advancement with environmental preservation.
        </p>
        <p className="text-green-700 mb-4">
          By leveraging cutting-edge technologies such as artificial intelligence, blockchain, and confidential computing, EcoSofia empowers city planners, developers, and citizens to make informed decisions about urban projects while prioritizing sustainability and privacy.
        </p>
      </div>
      <h2 className="text-2xl font-semibold text-green-800 mb-4">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <Leaf className="text-green-600 mb-4" size={32} />
          <h3 className="text-xl font-semibold text-green-800 mb-2">Sustainability</h3>
          <p className="text-green-700">We prioritize eco-friendly solutions and promote green initiatives to create a more sustainable urban environment.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <Shield className="text-green-600 mb-4" size={32} />
          <h3 className="text-xl font-semibold text-green-800 mb-2">Privacy</h3>
          <p className="text-green-700">We ensure the protection of sensitive data through advanced privacy-preserving technologies and secure data handling practices.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <Users className="text-green-600 mb-4" size={32} />
          <h3 className="text-xl font-semibold text-green-800 mb-2">Citizen Engagement</h3>
          <p className="text-green-700">We empower citizens to actively participate in the decision-making process for urban development projects.</p>
        </div>
      </div>
    </div>
  );
};

export default About;