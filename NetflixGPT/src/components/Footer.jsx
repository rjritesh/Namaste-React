const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 mt-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Top Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm mb-8">
          <a href="#" className="hover:text-yellow-400">FAQ</a>
          <a href="#" className="hover:text-yellow-400">Help Center</a>
          <a href="#" className="hover:text-yellow-400">Account</a>
          <a href="#" className="hover:text-yellow-400">Media Center</a>
          <a href="#" className="hover:text-yellow-400">Investor Relations</a>
          <a href="#" className="hover:text-yellow-400">Jobs</a>
          <a href="#" className="hover:text-yellow-400">Ways to Watch</a>
          <a href="#" className="hover:text-yellow-400">Terms of Use</a>
          <a href="#" className="hover:text-yellow-400">Privacy</a>
          <a href="#" className="hover:text-yellow-400">Cookie Preferences</a>
          <a href="#" className="hover:text-yellow-400">Corporate Information</a>
          <a href="#" className="hover:text-yellow-400">Contact Us</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mb-6">
          <a href="#" className="hover:text-yellow-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-yellow-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-yellow-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-yellow-400">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        {/* Bottom */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} StreamPilot. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
