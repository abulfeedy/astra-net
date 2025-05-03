import { motion } from "framer-motion";

import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";
import partner6 from "../assets/partner6.png";

const partners = [
  { name: "NexCompute", logo: partner4 },
  { name: "CloudMatrix", logo: partner2 },
  { name: "RenderCore", logo: partner1 },
  { name: "MetaGrid", logo: partner5 },
  { name: "QuantumNode", logo: partner3 },
  { name: "PixelForge", logo: partner6 },
];

const TrustedPartners = () => {
  // Animation variants with slower speed
  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30, 
          ease: "linear",
          repeatDelay: 1.5, 
        },
      },
    },
  };



  return (
    <section id="trusted-partners" className="py-10 px-4 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Trusted Partners</h2>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-row gap-8"
          variants={marqueeVariants}
          animate="animate"
          style={{ minWidth: "400%" }} 
          key={`marquee-${marqueeVariants.animate.transition.x.duration}`} 
        >
          {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
            <div key={index} className="flex items-center flex-shrink-0">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-32 w-32 sm:h-36 sm:w-36 object-contain"
              />
              <span className="-ml-8 mb-2  sm:-ml-10 sm:mb-3 text-base sm:text-lg text-gray-300">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartners;