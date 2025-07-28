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
      color: 'from-blue-500 to-blue-600'
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
      color: 'from-green-500 to-green-600'
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
      color: 'from-purple-500 to-purple-600'
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
      color: 'from-pink-500 to-pink-600'
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
      color: 'from-indigo-500 to-indigo-600'
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
      color: 'from-teal-500 to-teal-600'
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
      color: 'from-orange-500 to-orange-600'
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
      color: 'from-red-500 to-red-600'
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
      color: 'from-yellow-500 to-yellow-600'
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
      color: 'from-gray-500 to-gray-600'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Comprehensive digital solutions designed to transform your business and 
              accelerate your growth in the digital economy.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Card className="h-full group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-neutral-50/50 overflow-hidden relative">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${service.color}`} />
                  
                  <CardHeader className="relative pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`bg-gradient-to-br ${service.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="relative pt-0">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-neutral-600">
                          <CheckCircle className="h-4 w-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-all duration-300"
                      asChild
                    >
                      <Link to="/contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
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
                  <div className="bg-primary-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a tailored solution 
              that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link to="/approach">View Our Approach</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;