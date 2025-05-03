const Footer = () => {
    return (
      <footer className="py-8 px-4 bg-slate-900/90">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-lg font-bold">AstraNet</div>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-300 hover:text-emerald-300">Privacy</a>
            <a href="#" className="text-gray-300 hover:text-emerald-300">Terms</a>
            <a href="#" className="text-gray-300 hover:text-emerald-300">Contact</a>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-4">© 2025 AstraNet. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;