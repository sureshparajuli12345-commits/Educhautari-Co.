import { Link, Outlet, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Menu, X, ChevronRight, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Study Destinations", path: "/destinations" },
    { name: "Our Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="tel:+9779800000000" className="flex items-center hover:text-orange-400 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +977 9800000000
            </a>
            <a href="mailto:info@edunepal.com" className="flex items-center hover:text-orange-400 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              info@edunepal.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Putalisadak, Kathmandu
            </span>
            <div className="flex space-x-3 ml-4 border-l border-blue-800 pl-4">
              <a href="#" className="hover:text-orange-400 transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-orange-400 transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-orange-400 transition-colors"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                EN
              </div>
              <span className="font-bold text-2xl text-blue-900 tracking-tight">
                Edu<span className="text-orange-500">Nepal</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors hover:text-orange-500 ${
                    location.pathname === link.path ? "text-orange-500" : "text-slate-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30"
              >
                Book Free Consultation
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-inner">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-orange-500"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-orange-500 text-white px-4 py-3 rounded-lg font-semibold shadow-md"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold">
                  EN
                </div>
                <span className="font-bold text-xl text-white tracking-tight">
                  Edu<span className="text-orange-500">Nepal</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed mb-6">
                Your trusted partner for studying abroad. We guide Nepali students to top universities in Australia, Canada, UK, USA, and Europe with a 95% visa success rate.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="hover:text-orange-400 transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Study Destinations</h3>
              <ul className="space-y-3">
                {["Study in Australia", "Study in Canada", "Study in UK", "Study in USA", "Study in Europe"].map((dest) => (
                  <li key={dest}>
                    <Link to="/destinations" className="hover:text-orange-400 transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                      {dest}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-orange-500 shrink-0 mt-0.5" />
                  <span>Putalisadak, Kathmandu<br />Bagmati, Nepal</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-orange-500 shrink-0" />
                  <a href="tel:+9779800000000" className="hover:text-white transition-colors">+977 9800000000</a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-orange-500 shrink-0" />
                  <a href="mailto:info@edunepal.com" className="hover:text-white transition-colors">info@edunepal.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} EduNepal Consulting. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/9779800000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-semibold py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with an Expert
        </span>
      </a>
    </div>
  );
}
