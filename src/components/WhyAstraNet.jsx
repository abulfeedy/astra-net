import { motion } from "framer-motion";

const benefits = [
  {
    title: "Cost-Efficient",
    description: "Lower costs than centralized cloud providers.",
  },
  {
    title: "Censorship-Resistant",
    description: "Operate freely without centralized control.",
  },
  {
    title: "Scalable",
    description: "Scale seamlessly with blockchain technology.",
  },
];

const WhyAstraNet = () => {
  return (
    <section id="why-astranet" className="py-16 px-4 bg-gradient-to-b from-black to-slate-900">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why AstraNet?</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative bg-slate-900/50 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 border-2 border-transparent rounded-lg"
              whileHover={{
                borderColor: ["rgba(139, 92, 246, 0)", "rgba(0, 255, 136, 1)", "rgba(139, 92, 246, 0)"],
                transition: { duration: 1.5, repeat: Infinity },
              }}
              whileTap={{
                borderColor: ["rgba(139, 92, 246, 0)", "rgba(0, 255, 136, 1)", "rgba(139, 92, 246, 0)"],
                transition: { duration: 1.5, repeat: 1 },
              }}
            />
            <h3 className="text-xl font-semibold mb-2 text-emerald-300">{benefit.title}</h3>
            <p className="text-sm sm:text-base text-gray-300">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyAstraNet;