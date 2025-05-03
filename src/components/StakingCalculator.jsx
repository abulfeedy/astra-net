import { useState } from "react";
import { motion } from "framer-motion";

const StakingCalculator = () => {
  const [amount, setAmount] = useState(1000);
  const [duration, setDuration] = useState(6); // in months
  const apy = 15; // 15% annual percentage yield

  const calculateRewards = () => {
    const monthlyRate = apy / 12 / 100;
    const rewards = amount * monthlyRate * duration;
    return rewards.toFixed(2);
  };

  return (
    <section id="staking-calculator" className="py-16 px-4 bg-gradient-to-b from-black to-slate-900">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Staking Calculator</h2>
      <div className="max-w-lg mx-auto bg-slate-900/70 backdrop-blur-md p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Amount to Stake (ASTRA)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 bg-slate-900/50 border border-violet-500 rounded-lg text-white focus:outline-none focus:border-emerald-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Staking Duration (Months)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full p-3 bg-slate-900/50 border border-violet-500 rounded-lg text-white focus:outline-none focus:border-emerald-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <p className="text-lg">
            Estimated Rewards: <span className="text-emerald-300">{calculateRewards()} ASTRA</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StakingCalculator;