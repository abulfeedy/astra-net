import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UseCase from "./components/UseCase";
import WhyAstraNet from "./components/WhyAstraNet";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import StakingCalculator from "./components/StakingCalculator";
import PriceSimulator from "./components/PriceSimulator";
import WalletChecker from "./components/WalletChecker";
import TrustedPartners from "./components/TrustedPartners";
import Community from "./components/Community";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader"; 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  }, []);

  return (
    <div className="min-h-screen bg-astraDark">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <UseCase />
          <WhyAstraNet />
          <TrustedPartners />
          <Tokenomics />
          <Roadmap />
          <StakingCalculator />
          <PriceSimulator />
          <WalletChecker />
          <Community />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}

export default App;