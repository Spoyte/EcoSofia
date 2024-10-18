import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Wallet } from 'lucide-react';
import { ethers } from 'ethers';

const Header: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [userAddress, setUserAddress] = useState('');

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          setIsConnected(true);
          setUserAddress(accounts[0]);
        }
      } catch (error) {
        console.log('No wallet connected yet');
      }
    }
  };

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setIsConnected(true);
        setUserAddress(address);
      } catch (error) {
        if (error.code === 4001) {
          console.log('User rejected the connection request');
        } else {
          console.error('Error connecting to MetaMask:', error);
        }
      }
    } else {
      alert('Please install MetaMask to use this feature');
    }
  };

  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Sprout size={32} />
          <span className="text-2xl font-bold">EcoSofia</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-green-200">Home</Link></li>
            <li><Link to="/projects" className="hover:text-green-200">Projects</Link></li>
            <li><Link to="/about" className="hover:text-green-200">About</Link></li>
            <li><Link to="/contact" className="hover:text-green-200">Contact</Link></li>
          </ul>
          {isConnected ? (
            <div className="flex items-center space-x-2 bg-green-700 px-3 py-1 rounded">
              <Wallet size={20} />
              <span className="text-sm">{`${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`}</span>
            </div>
          ) : (
            <button
              onClick={connectWallet}
              className="flex items-center space-x-2 bg-green-700 hover:bg-green-800 px-3 py-1 rounded transition-colors duration-300"
            >
              <Wallet size={20} />
              <span>Connect Wallet</span>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;