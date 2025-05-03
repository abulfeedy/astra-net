import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import aiImage from "../assets/usecase-ai.jpg";
import storageImage from "../assets/usecase-storage.jpg";
import renderingImage from "../assets/usecase-rendering.jpg";

const useCases = [
  { title: "AI Training", description: "Rent GPU power for AI model training.", image: aiImage },
  { title: "Storage", description: "Decentralized storage for your data.", image: storageImage },
  { title: "Rendering", description: "High-speed rendering for 3D projects.", image: renderingImage },
];


const UseCase = () => {
  return (
    <section id="use-cases" className="py-16 px-4 mt-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Use Cases</h2>
      <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base text-center sm:text-lg mb-8 sm:mb-12 mx-auto"
        >
          ASTRA powers a decentralized cloud computing network. Pay with ASTRA to access GPU power for...
        </motion.p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {useCases.map((useCase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-slate-900/50 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition-all"
          >
            <img src={useCase.image} alt={useCase.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
            <p className="text-gray-300">{useCase.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UseCase;

