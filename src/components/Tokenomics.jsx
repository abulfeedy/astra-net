import { motion } from "framer-motion";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-16 px-4 bg-gradient-to-b from-slate-900 to-black">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Tokenomics</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Supply", value: "1B ASTRA" },
          { label: "Staking Rewards", value: "30%" },
          { label: "Burn Mechanism", value: "5% per Tx" },
          { label: "Initial Price", value: "$0.50" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-slate-900/70 backdrop-blur-md p-6 rounded-lg text-center shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all"
          >
            <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
            <p className="text-emerald-300 text-xl">{item.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tokenomics;