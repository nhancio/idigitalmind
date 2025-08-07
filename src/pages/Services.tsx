import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Cpu, 
  Globe, 
  Smartphone, 
  Bot, 
  ShoppingCart, 
  Cloud, 
  Users2, 
  Palette, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import AnimatedSection from '../components/common/AnimatedSection';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'AI Marketing',
      description: 'Revolutionize your marketing with AI-powered strategies that deliver personalized experiences and maximize ROI.',
      icon: BarChart3,
      features: [
        'AI-Powered Customer Segmentation',
        'Predictive Marketing Analytics',
        'Personalized Content Generation',
        'Automated Campaign Optimization',
        'Real-time Performance Monitoring',
        'ROI-Driven Marketing Strategies'
      ],
      color: 'from-cyber-blue to-secondary-400'
    },
    {
      title: 'AI Automation',
      description: 'Streamline operations and boost efficiency with intelligent automation solutions.',
      icon: Cpu,
      features: [
        'Process Automation & Workflows',
        'Intelligent Document Processing',
        'Customer Service Automation',
        'Data Entry & Validation',
        'Report Generation & Analytics',
        'System Integration & APIs'
      ],
      color: 'from-secondary-500 to-primary-500'
    },
    {
      title: 'AI Product Development',
      description: 'Build innovative AI-powered products that solve real business challenges and create competitive advantages.',
      icon: Lightbulb,
      features: [
        'AI Product Strategy & Roadmapping',
        'Custom AI Model Development',
        'Machine Learning Pipeline Design',
        'AI Integration & APIs',
        'Product Testing & Validation',
        'Scalable AI Architecture'
      ],
      color: 'from-cyber-purple to-cyber-pink'
    },
    {
      title: 'AI Upskilling',
      description: 'Empower your team with AI knowledge and skills to drive AI transformation from within.',
      icon: Users2,
      features: [
        'AI Literacy Training Programs',
        'Technical AI Skills Development',
        'AI Ethics & Governance Training',
        'Hands-on AI Workshops',
        'Certification Programs',
        'Ongoing Learning Support'
      ],
      color: 'from-cyber-pink to-cyber-purple'
    },
    {
      title: 'AI CoE (Center of Excellence)',
      description: 'Establish a centralized AI hub to drive innovation, best practices, and organizational AI maturity.',
      icon: Globe,
      features: [
        'AI Strategy & Governance',
        'Best Practices & Standards',
        'AI Project Portfolio Management',
        'Cross-functional Collaboration',
        'AI Innovation Lab Setup',
        'Performance Monitoring & KPIs'
      ],
      color: 'from-cyber-blue to-secondary-500'
    }
  ];

  return (
    <div className="min-h-screen pt-20">

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid opacity-5" style={{ backgroundSize: '50px 50px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Card className="h-full group hover:bg-dark-700/60 transition-all duration-300 border-dark-600 bg-dark-800/40 backdrop-blur-sm overflow-hidden relative">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${service.color}`} />
                  
                  <CardHeader className="relative pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`bg-gradient-to-br ${service.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-glow group-hover:shadow-glow-lg`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-white group-hover:text-cyber-blue transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="relative pt-0">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/contact" className="w-full">
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-cyber-blue group-hover:text-white group-hover:border-cyber-blue transition-all duration-300 border-dark-600 text-gray-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-dark-950 via-secondary-900/20 to-primary-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-network opacity-30" />
        <div className="absolute inset-0 bg-cyber-grid opacity-10" style={{ backgroundSize: '60px 60px' }} />
        
        {/* Floating elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyber-blue/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get in Touch?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a tailored solution 
              that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/approach">
                <Button size="lg" variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white">
                  View Our Approach
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;