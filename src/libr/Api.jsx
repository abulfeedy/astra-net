// Mock API for price simulation and wallet balance
export const fetchPriceSimulation = async () => {
    return { price: 0.85, change: 5.2 }; // Mocked price in USD and 24h change
  };
  
  export const fetchWalletBalance = async (address) => {
    return { balance: 1500.25, address }; // Mocked balance in ASTRA tokens
  };