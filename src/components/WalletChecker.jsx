import { useState } from "react";
import { motion } from "framer-motion";
import { fetchWalletBalance } from "../libr/Api";



const WalletChecker = () => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(null);

  const checkBalance = async () => {
    if (address) {
      const data = await fetchWalletBalance(address);
      setBalance(data.balance);
    }
  };

  return (
    <section id="wallet-checker" className="py-16 px-4 bg-gradient-to-b from-slate-900 to-black">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Wallet Checker</h2>
      <div className="max-w-lg mx-auto bg-slate-900/70 backdrop-blur-md p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Wallet Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 bg-slate-900/50 border border-violet-500 rounded-lg text-white focus:outline-none focus:border-emerald-300"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 136, 0.5)" }}
          onClick={checkBalance}
          className="w-full bg-gradient-to-r from-violet-500 to-emerald-300 text-white px-4 py-2 rounded-full"
        >
          Check Balance
        </motion.button>
        {balance !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center"
          >
            <p className="text-lg">
              Balance: <span className="text-emerald-300">{balance} ASTRA</span>
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WalletChecker;