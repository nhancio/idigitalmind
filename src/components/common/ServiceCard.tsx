import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  features,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card className="h-full bg-gradient-to-br from-dark-800/60 to-dark-700/40 border border-dark-600 shadow-neural hover:shadow-glow-lg group overflow-hidden relative backdrop-blur-md">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyber-blue/0 via-cyber-blue/50 to-cyber-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '1px' }}>
          <div className="w-full h-full bg-dark-800/90 rounded-2xl" />
        </div>
        
        <CardHeader className="relative">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-br from-secondary-500 to-primary-500 p-3 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-glow group-hover:shadow-glow-lg">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-xl font-bold text-white group-hover:text-cyber-blue transition-colors duration-300">
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        
        <CardContent className="relative">
          <p className="text-gray-300 mb-4 leading-relaxed">
            {description}
          </p>
          
          {features && (
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full mr-2 animate-pulse" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
          
          {/* Hover effect overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-500 via-cyber-blue to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;