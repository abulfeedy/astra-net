import { motion } from "framer-motion";

const roadmapItems = [
  { quarter: "Q1 2025", milestones: ["Launch Mainnet", "Staking Program"] },
  { quarter: "Q2 2025", milestones: ["GPU Marketplace", "Partnerships"] },
  { quarter: "Q3 2025", milestones: ["Storage Integration", "Rendering Beta"] },
  { quarter: "Q4 2025", milestones: ["Full Ecosystem", "Governance"] },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-16 px-4 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Roadmap</h2>
      <div className="max-w-5xl mx-auto relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-500 to-emerald-300" />
        {roadmapItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            <div className="w-1/2 text-right pr-8">
              {index % 2 === 0 && (
                <>
                  <h3 className="text-xl font-semibold">{item.quarter}</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    {item.milestones.map((milestone, i) => (
                      <li key={i}>{milestone}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="w-6 h-6 bg-emerald-300 rounded-full border-4 border-slate-900 z-10" />
            <div className="w-1/2 text-left pl-8">
              {index % 2 !== 0 && (
                <>
                  <h3 className="text-xl font-semibold">{item.quarter}</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    {item.milestones.map((milestone, i) => (
                      <li key={i}>{milestone}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;