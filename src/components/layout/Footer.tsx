import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Digital Strategy',
    'AI & Machine Learning',
    'Web Development',
    'Mobile Apps',
    'Cloud Services',
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
  ];

  return (
    <footer className="bg-dark-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-neural-network" />
        <div className="absolute inset-0 bg-cyber-grid" style={{ backgroundSize: '100px 100px' }} />
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyber-blue rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-br from-secondary-500 to-primary-500 p-2 rounded-xl shadow-glow">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  iDigitalMind
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming businesses through digital innovation and AI solutions since 2012. 
                Your trusted partner for digital transformation.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-gray-400 hover:text-cyber-blue transition-colors duration-300">
                  <MapPin className="h-4 w-4" />
                  <span>Macquarie Park, NSW, 2113, Australia</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 hover:text-cyber-blue transition-colors duration-300">
                  <Phone className="h-4 w-4" />
                  <span>+61‑405014720</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 hover:text-cyber-blue transition-colors duration-300">
                  <Mail className="h-4 w-4" />
                  <span>contact@idigitalmind.com.au</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 text-sm relative group"
                    >
                      {link.name}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-blue group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service} className="text-gray-400 text-sm hover:text-secondary-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <p className="text-gray-400 text-sm mb-4">
                Support Hours: Mon–Sat, 10am–7pm
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-dark-800 p-2 rounded-lg hover:bg-gradient-to-br hover:from-secondary-500 hover:to-primary-500 transition-all duration-300 hover:shadow-glow"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm">
                © 2024 iDigitalMind. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link to="/privacy" className="text-gray-500 hover:text-cyber-blue transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-500 hover:text-cyber-blue transition-colors duration-300">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;