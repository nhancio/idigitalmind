import { motion } from 'framer-motion';
import { ArrowUp, MessageCircle, Phone, Mail } from 'lucide-react';

interface FloatingButtonProps {
  icon?: 'arrow-up' | 'message' | 'phone' | 'mail';
  onClick?: () => void;
  className?: string;
  position?: 'bottom-right' | 'bottom-left';
}

const FloatingButton = ({ 
  icon = 'arrow-up', 
  onClick, 
  className = '',
  position = 'bottom-right'
}: FloatingButtonProps) => {
  const getIcon = () => {
    switch (icon) {
      case 'message':
        return <MessageCircle className="h-5 w-5" />;
      case 'phone':
        return <Phone className="h-5 w-5" />;
      case 'mail':
        return <Mail className="h-5 w-5" />;
      default:
        return <ArrowUp className="h-5 w-5" />;
    }
  };

  const getPositionClasses = () => {
    // If custom className is provided, use it; otherwise use position prop
    if (className.includes('bottom-') && className.includes('right-')) {
      return className;
    }
    
    switch (position) {
      case 'bottom-left':
        return 'bottom-6 left-6';
      case 'bottom-right':
      default:
        return 'bottom-6 right-6';
    }
  };

  return (
    <motion.button
      onClick={onClick}
      className={`fixed ${getPositionClasses()} w-12 h-12 bg-gradient-to-r from-cyber-blue to-secondary-400 rounded-full shadow-glow hover:shadow-glow-lg flex items-center justify-center z-40 text-white group relative overflow-hidden transition-all duration-300`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 animate-rotate-slow" style={{ backgroundSize: '8px 8px' }} />
      
      {getIcon()}
      
      {/* Hover effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-blue/20 to-secondary-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
};

export default FloatingButton; 