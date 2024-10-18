import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Leaf, BarChart, Lock, Database, Vote, Recycle } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureCard from './components/FeatureCard';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function Home() {
  const features = [
    { icon: <Leaf />, title: 'AI-Powered Sustainability Scoring', description: 'Analyze and score urban development proposals based on environmental impact.' },
    { icon: <Lock />, title: 'Privacy-Preserving Urban Data Analysis', description: 'Utilize confidential computing to analyze sensitive urban data without exposing individual information.' },
    { icon: <Database />, title: 'Decentralized Eco-Project Repository', description: 'Store and manage eco-friendly project proposals on a decentralized network.' },
    { icon: <BarChart />, title: 'Real-Time Environmental Monitoring', description: 'Track air quality, energy usage, and other key environmental metrics.' },
    { icon: <Vote />, title: 'Anonymous Citizen Voting', description: 'Enable citizens to vote on eco-initiatives using zero-knowledge proofs.' },
    { icon: <Recycle />, title: 'Smart Waste Management', description: 'Optimize waste collection routes and implement blockchain-based recycling tracking.' },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-green-800 mb-4">EcoSofia: AI-Driven Sustainable Urban Development</h1>
        <p className="text-xl text-green-700">Empowering Sofia's future through technology and citizen engagement</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </section>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;