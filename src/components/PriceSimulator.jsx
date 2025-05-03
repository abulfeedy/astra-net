import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchPriceSimulation } from "../libr/Api";

const PriceSimulator = () => {
  const [priceData, setPriceData] = useState({ price: 0, change: 0 });

  useEffect(() => {
    const getPrice = async () => {
      const data = await fetchPriceSimulation();
      setPriceData(data);
    };
    getPrice();
  }, []);

  return (
    <section id="price-simulator" className="py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Price Simulator</h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto bg-slate-900/70 backdrop-blur-md p-6 rounded-lg shadow-lg text-center"
      >
        <p className="text-lg">
          Current Price: <span className="text-emerald-300">${priceData.price}</span>
        </p>
        <p className="text-lg">
          24h Change: <span className={priceData.change >= 0 ? "text-green-400" : "text-red-400"}>{priceData.change}%</span>
        </p>
      </motion.div>
    </section>
  );
};

export default PriceSimulator;