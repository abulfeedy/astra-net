import { useState } from "react";
import { motion } from "framer-motion";
import { ethers } from "ethers"; 
import heroBg from "../assets/hero-bg.jpg";

const Hero = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Function to connect wallet using ethers.js
  const connectWallet = async () => {
    setIsLoading(true);
    try {
      if (!window.ethereum) {
        setError("Please install MetaMask to connect your wallet.");
        // Clear error after 5 seconds
        setTimeout(() => setError(null), 5000);
        setIsLoading(false);
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []); // Request wallet connection
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);
      setError(null); // Clear any previous error on successful connection
    } catch (err) {
      // Check if the error is due to user cancellation (MetaMask error code 4001)
      if (err.code === 4001) {
        setError("Wallet connection canceled.");
      } else {
        setError("Failed to connect wallet. Please try again.");
      }
      // Clear error after 5 seconds
      setTimeout(() => setError(null), 5000);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0, 1, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="text-center relative z-10 mt-28">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
        >
          AstraNet: Decentralized Cloud Computing
        </motion.h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 px-4">
          Rent or provide GPU power, storage, and rendering in a Web3 ecosystem.
        </p>
        <motion.p
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }} 
        className=" text-center text-lg sm:text-xl lg:text-2xl text-gray-300 mb-14 mt-16 px-4 leading-relaxed"
        >
          <span className="text-emerald-300 ">ASTRA</span> is the utility token for a Web3 cloud network,<br className="hidden md:block" />
          enabling secure, scalable computational resources.
        </motion.p>
        {walletAddress ? (
          <p className="text-astraTeal text-lg">
            Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </p>
        ) : (
          <motion.button
          onClick={connectWallet}
           whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 136, 0.5)" }}
           className="bg-gradient-to-r from-violet-500 to-emerald-300 text-white px-6 py-3 rounded-full text-lg cursor-pointer"
         >
             {isLoading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8h-8z"
                  />
                </svg>
                Connecting...
              </span>
            ) : (
              "Get Started"
            )}
          </motion.button>
        )}
        {error && <p className="text-red-400 mt-4">{error}</p>}
        {/* Animated Particles */}
        <motion.div
          className="absolute w-2 h-2 bg-astraTeal rounded-full top-20 left-10"
          variants={particleVariants}
          animate="animate"
        />
        <motion.div
          className="absolute w-3 h-3 bg-astraPurple rounded-full bottom-20 right-10"
          variants={particleVariants}
          animate="animate"
        />
      </div>
    </section>
  );
};

export default Hero;

