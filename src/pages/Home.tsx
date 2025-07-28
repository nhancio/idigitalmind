import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Award, Zap, Target, Sparkles, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import AnimatedSection from '../components/common/AnimatedSection';
import ServiceCard from '../components/common/ServiceCard';
import TestimonialCard from '../components/common/TestimonialCard';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Globe,
  Smartphone,
  Bot,
  ShoppingCart,
  Cloud,
  Lightbulb,
  Users2,
  Palette,
  BarChart3
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Digital Strategy',
      description: 'Transform your business with comprehensive digital roadmaps tailored to your industry.',
      icon: Lightbulb,
      features: ['Strategic Planning', 'Digital Roadmaps', 'Technology Assessment']
    },
    {
      title: 'AI & Machine Learning',
      description: 'Harness the power of AI to automate processes and gain competitive advantages.',
      icon: Cpu,
      features: ['Predictive Analytics', 'Process Automation', 'Custom AI Models']
    },
    {
      title: 'Web Development',
      description: 'Build modern, responsive websites that drive engagement and conversions.',
      icon: Globe,
      features: ['React/Next.js', 'E-commerce', 'CMS Solutions']
    },
    {
      title: 'Mobile Apps',
      description: 'Create intuitive mobile experiences for iOS and Android platforms.',
      icon: Smartphone,
      features: ['Native Development', 'Cross-platform', 'UI/UX Design']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart Australia',
      content: 'iDigitalMind transformed our digital presence completely. Their AI solutions increased our efficiency by 40%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      company: 'Healthcare Plus',
      content: 'The team delivered an exceptional healthcare platform that streamlined our patient management system.',
      rating: 5
    },
    {
      name: 'Emma Williams',
      position: 'Director',
      company: 'RetailHub',
      content: 'Outstanding e-commerce solution that boosted our online sales by 65% in just 6 months.',
      rating: 5
    }
  ];

  const clientLogos = [
    'TechStart', 'Healthcare+', 'RetailHub', 'EduFlow', 'FinanceCore', 'CloudTech'
  ];

  const stats = [
    { number: '200+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '12+', label: 'Years Experience' },
    { number: '95%', label: 'Client Satisfaction' }
  ];

  const workProjects = [
    {
      title: 'Healthcare Platform',
      description: 'Comprehensive patient management system with AI-powered diagnostics',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      category: 'Healthcare',
      technologies: ['React', 'Node.js', 'AI/ML', 'PostgreSQL']
    },
    {
      title: 'E-commerce Solution',
      description: 'Modern online retail platform with advanced analytics and personalization',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      category: 'E-commerce',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Redis']
    },
    {
      title: 'AI Chatbot Platform',
      description: 'Intelligent customer service automation with natural language processing',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      category: 'AI/ML',
      technologies: ['Python', 'TensorFlow', 'NLP', 'AWS']
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure financial management application with biometric authentication',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      category: 'Fintech',
      technologies: ['React Native', 'Firebase', 'Biometrics', 'Blockchain']
    },
    {
      title: 'Smart City Dashboard',
      description: 'Real-time urban analytics and IoT integration platform',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      category: 'IoT',
      technologies: ['Vue.js', 'IoT', 'Real-time', 'Azure']
    },
    {
      title: 'Educational Platform',
      description: 'Interactive learning management system with adaptive content',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      category: 'Education',
      technologies: ['Angular', 'AI', 'Video Streaming', 'Analytics']
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'contact@idigitalmind.com.au',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+61‑405014720',
      description: 'Mon-Sat, 10am-7pm AEST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Macquarie Park, NSW, 2113',
      description: 'Australia'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Neural network background */}
          <div className="absolute inset-0 bg-neural-network opacity-30" />
          <div className="absolute inset-0 bg-cyber-grid opacity-20" style={{ backgroundSize: '100px 100px' }} />
          
          {/* Floating orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyber-blue/20 to-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyber-pink/20 to-cyber-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          
          {/* Animated particles */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyber-blue rounded-full animate-float opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-secondary-500/20 to-primary-500/20 border border-cyber-blue/30 backdrop-blur-sm mb-6"
              >
                <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse mr-2" />
                <span className="text-cyber-blue text-sm font-medium">Now with Advanced AI & Digital Technology</span>
              </motion.div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform your business with{' '}
              <span className="bg-gradient-to-r from-cyber-blue via-secondary-400 to-cyber-purple bg-clip-text text-transparent animate-gradient-x">
                digital thinking
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We partner with organisations to unlock growth and navigate the digital era with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/services">
                <Button size="lg" className="text-lg px-8 py-4">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyber-blue to-secondary-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-cyber-blue/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-cyber-blue rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-cyber-grid opacity-5" style={{ backgroundSize: '50px 50px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions to accelerate your business transformation
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>

          <AnimatedSection className="text-center mt-12" delay={0.4}>
            <Link to="/services">
              <Button size="lg">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-network opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Work
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Showcasing innovative solutions that drive real business impact
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workProjects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <Card className="group overflow-hidden bg-dark-800/40 backdrop-blur-sm border-dark-600 hover:bg-dark-700/60 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyber-blue to-secondary-400 text-white text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyber-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gradient-to-r from-cyber-blue/20 to-secondary-400/20 text-cyber-blue text-xs rounded border border-cyber-blue/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12" delay={0.6}>
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-neural-network opacity-20" />
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-transparent via-cyber-blue/30 to-transparent animate-data-flow"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose iDigitalMind?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We bring expertise, innovation, and dedication to every project
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <Card className="text-center h-full group hover:bg-dark-700/60">
                <CardHeader>
                  <div className="mx-auto bg-gradient-to-br from-secondary-500 to-primary-500 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-glow group-hover:shadow-glow-lg group-hover:scale-110 transition-all duration-300">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white">Innovation First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    We leverage cutting-edge technologies and methodologies to deliver 
                    solutions that keep you ahead of the competition.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="text-center h-full group hover:bg-dark-700/60">
                <CardHeader>
                  <div className="mx-auto bg-gradient-to-br from-cyber-blue to-secondary-500 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-cyber group-hover:shadow-cyber-lg group-hover:scale-110 transition-all duration-300">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white">Collaborative Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    We work closely with your team to understand your unique challenges 
                    and deliver tailored solutions that fit your business.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="text-center h-full group hover:bg-dark-700/60">
                <CardHeader>
                  <div className="mx-auto bg-gradient-to-br from-cyber-purple to-cyber-pink p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-glow group-hover:shadow-glow-lg group-hover:scale-110 transition-all duration-300">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white">Results Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Our focus is on delivering measurable results that drive growth 
                    and create lasting value for your organization.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800 relative">
        <div className="absolute inset-0 bg-cyber-grid opacity-5" style={{ backgroundSize: '80px 80px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Trusted by leading organizations across Australia
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.1}>
                <TestimonialCard {...testimonial} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/5 to-primary-500/5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Trusted by Leading Organizations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={logo}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-700/40 backdrop-blur-sm border border-dark-600 p-6 rounded-xl shadow-neural hover:shadow-glow transition-all duration-300 flex items-center justify-center h-20 group hover:border-cyber-blue/30"
                >
                  <span className="text-gray-300 group-hover:text-white font-semibold text-lg transition-colors duration-300">
                    {logo}
                  </span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Let's discuss how we can help you navigate the digital landscape 
              and achieve your business goals.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} delay={index * 0.1}>
                <Card className="text-center h-full group hover:bg-dark-700/60 transition-all duration-300 backdrop-blur-sm border-dark-600 bg-dark-800/40">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-cyber-blue to-secondary-400 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">
                      {info.title}
                    </h3>
                    <p className="text-cyber-blue font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-sm text-gray-400">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;