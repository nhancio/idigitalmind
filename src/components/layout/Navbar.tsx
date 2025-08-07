import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Brain } from 'lucide-react';
import { Button } from '../ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Approach', path: '/approach' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set consistent background for pages without hero sections
  useEffect(() => {
    const pagesWithoutHero = ['/about', '/services', '/approach', '/contact'];
    if (pagesWithoutHero.includes(location.pathname)) {
      setIsScrolled(true);
    }
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-900/90 backdrop-blur-xl shadow-cyber border-b border-cyber-blue/20'
          : 'bg-dark-900/20 backdrop-blur-sm'
      }`}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10" style={{ backgroundSize: '50px 50px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-secondary-500 to-primary-500 p-2 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-glow group-hover:shadow-glow-lg">
              <Brain className="h-6 w-6 text-white group-hover:animate-pulse" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              iDigitalMind
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm relative group ${
                  location.pathname === item.path
                    ? 'text-cyber-blue bg-cyber-blue/10 shadow-cyber'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-gradient-to-r from-cyber-blue to-secondary-400 hover:from-cyber-blue/90 hover:to-secondary-400/90">
              <Link to="/contact">Enquire Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-dark-900/95 backdrop-blur-xl border-t border-cyber-blue/20"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-cyber-blue bg-cyber-blue/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button asChild className="w-full bg-gradient-to-r from-cyber-blue to-secondary-400 hover:from-cyber-blue/90 hover:to-secondary-400/90">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Enquire Now
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;