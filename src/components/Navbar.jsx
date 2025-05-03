import { useState } from "react";
import { motion } from "framer-motion";
import { ethers } from "ethers";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle smooth scrolling
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address.slice(0, 6) + "..." + address.slice(-4));
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">AstraNet</div>
        <div className="hidden md:flex space-x-6">
          <a href="#use-cases"  onClick={(e) => handleSmoothScroll(e, "use-cases")}
             className="text-gray-300 hover:text-emerald-400">Use Cases</a>
          <a href="#tokenomics" onClick={(e) => handleSmoothScroll(e, "tokenomics")}
             className="text-gray-300 hover:text-emerald-400">Tokenomics</a>
          <a href="#roadmap"   onClick={(e) => handleSmoothScroll(e, "roadmap")}
             className="text-gray-300 hover:text-emerald-400">Roadmap</a>
          <a href="#community" onClick={(e) => handleSmoothScroll(e, "community")}
             className="text-gray-300 hover:text-emerald-400">Community</a>
        </div>
        <motion.button
          onClick={connectWallet}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 136, 0.5)" }}
          className="hidden md:block bg-gradient-to-r from-violet-500 to-emerald-400 text-white px-4 py-2 rounded-full cursor-pointer"
        >
          Connect Wallet
        </motion.button>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-900/90 p-4">
          <a href="#use-cases" onClick={(e) => handleSmoothScroll(e, "use-cases")}
             className="block py-2 text-gray-300 hover:text-emerald-400">Use Cases</a>
          <a href="#tokenomics" onClick={(e) => handleSmoothScroll(e, "tokenomics")}
             className="block py-2 text-gray-300 hover:text-emerald-400">Tokenomics</a>
          <a href="#roadmap"  onClick={(e) => handleSmoothScroll(e, "roadmap")} 
             className="block py-2 text-gray-300 hover:text-emerald-400">Roadmap</a>
          <a href="#community" onClick={(e) => handleSmoothScroll(e, "community")}
             className="block py-2 text-gray-300 hover:text-emerald-400">Community</a>
          <button className="mt-4 bg-gradient-to-r from-violet-500 to-emerald-400 text-white px-4 py-2 rounded-full w-full">
            Connect Wallet
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;