import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  company,
  content,
  rating,
  avatar,
}) => {
  return (
    <Card className="h-full bg-gradient-to-br from-dark-800/80 to-dark-700/60 border border-dark-600 shadow-neural hover:shadow-glow-lg transition-all duration-500 group backdrop-blur-md">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <Quote className="h-8 w-8 text-cyber-blue opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="flex space-x-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-cyber-yellow text-cyber-yellow animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed italic group-hover:text-white transition-colors duration-300">
          "{content}"
        </p>
        
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full flex items-center justify-center text-white font-semibold shadow-glow group-hover:shadow-glow-lg group-hover:scale-110 transition-all duration-300">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
            ) : (
              name.charAt(0)
            )}
          </div>
          <div>
            <h4 className="font-semibold text-white">{name}</h4>
            <p className="text-sm text-gray-400">{position}</p>
            <p className="text-sm text-cyber-blue font-medium">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;