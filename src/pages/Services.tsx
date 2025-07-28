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
      title: 'Digital Strategy',
      description: 'Comprehensive digital roadmaps tailored to your business objectives and industry landscape.',
      icon: Lightbulb,
      features: [
        'Digital Transformation Planning',
        'Technology Assessment & Roadmapping',
        'Change Management Strategy',
        'ROI Analysis & KPI Framework',
        'Competitive Analysis',
        'Digital Maturity Assessment'
      ],
      color: 'from-cyber-blue to-secondary-400'
    },
    {
      title: 'Change Management',
      description: 'Expert guidance to navigate organizational change and ensure successful digital adoption.',
      icon: Users2,
      features: [
        'Stakeholder Engagement',
        'Training & Development Programs',
        'Communication Strategies',
        'Resistance Management',
        'Cultural Transformation',
        'Success Metrics & Monitoring'
      ],
      color: 'from-secondary-500 to-primary-500'
    },
    {
      title: 'Future of Work',
      description: 'Prepare your workforce for the digital age with modern collaboration and productivity solutions.',
      icon: BarChart3,
      features: [
        'Remote Work Solutions',
        'Digital Collaboration Tools',
        'Workflow Automation',
        'Employee Experience Design',
        'Skills Gap Analysis',
        'Digital Workplace Strategy'
      ],
      color: 'from-cyber-purple to-cyber-pink'
    },
    {
      title: 'Experience Design',
      description: 'Create intuitive, engaging user experiences that drive customer satisfaction and business growth.',
      icon: Palette,
      features: [
        'User Research & Analysis',
        'UI/UX Design',
        'Prototyping & Testing',
        'Design System Development',
        'Accessibility Compliance',
        'Conversion Rate Optimization'
      ],
      color: 'from-cyber-pink to-cyber-purple'
    },
    {
      title: 'Web & Mobile Development',
      description: 'Modern, scalable applications built with cutting-edge technologies and best practices.',
      icon: Globe,
      features: [
        'React/Next.js Development',
        'Native Mobile Apps',
        'Progressive Web Apps',
        'API Development & Integration',
        'Performance Optimization',
        'Security Implementation'
      ],
      color: 'from-cyber-blue to-secondary-500'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence to automate processes and gain insights.',
      icon: Cpu,
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Recommendation Systems',
        'Process Automation',
        'Custom AI Model Development'
      ],
      color: 'from-secondary-500 to-primary-500'
    },
    {
      title: 'Chatbots & NLP',
      description: 'Intelligent conversational interfaces that enhance customer service and engagement.',
      icon: Bot,
      features: [
        'Custom Chatbot Development',
        'Voice Assistant Integration',
        'Sentiment Analysis',
        'Multi-language Support',
        'CRM Integration',
        '24/7 Customer Support'
      ],
      color: 'from-cyber-purple to-cyber-pink'
    },
    {
      title: 'AR/VR & IoT',
      description: 'Immersive technologies and connected devices that transform user experiences.',
      icon: Smartphone,
      features: [
        'Augmented Reality Apps',
        'Virtual Reality Experiences',
        'IoT Device Integration',
        'Real-time Data Processing',
        'Edge Computing Solutions',
        'Immersive Training Platforms'
      ],
      color: 'from-cyber-blue to-secondary-400'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online retail platforms that drive sales and enhance customer experiences.',
      icon: ShoppingCart,
      features: [
        'Magento Development',
        'WooCommerce Solutions',
        'Shopify Customization',
        'Payment Gateway Integration',
        'Inventory Management',
        'Multi-channel Selling'
      ],
      color: 'from-secondary-500 to-primary-500'
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for improved efficiency and cost savings.',
      icon: Cloud,
      features: [
        'AWS/Azure Migration',
        'Infrastructure as Code',
        'DevOps Implementation',
        'Security & Compliance',
        'Monitoring & Analytics',
        '24/7 Support & Maintenance'
      ],
      color: 'from-cyber-purple to-cyber-pink'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-neural-network opacity-30" />
          <div className="absolute inset-0 bg-cyber-grid opacity-20" style={{ backgroundSize: '100px 100px' }} />
          
          {/* Floating orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyber-blue/20 to-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyber-blue via-secondary-400 to-cyber-purple bg-clip-text text-transparent animate-gradient-x">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Comprehensive digital solutions designed to transform your business and 
              accelerate your growth in the digital economy.
            </p>
          </AnimatedSection>
        </div>
      </section>

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

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-network opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We start by understanding your business, challenges, and objectives through comprehensive analysis.'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop a tailored approach and roadmap that aligns with your goals and technical requirements.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute the solution using agile methodologies with regular feedback and iteration cycles.'
              },
              {
                step: '04',
                title: 'Support',
                description: 'Provide ongoing maintenance, optimization, and support to ensure continued success.'
              }
            ].map((phase, index) => (
              <AnimatedSection key={phase.step} delay={index * 0.1}>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-cyber-blue to-secondary-400 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-glow">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
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
              Ready to Get Started?
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