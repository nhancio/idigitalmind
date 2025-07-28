import { motion } from 'framer-motion';
import { Heart, Building, Stethoscope, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import AnimatedSection from '../components/common/AnimatedSection';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 'communities',
      title: 'Helping Communities',
      icon: Heart,
      description: 'A comprehensive platform designed to strengthen community connections and facilitate local engagement.',
      longDescription: 'Our community platform brings neighbors together through digital tools that promote local engagement, resource sharing, and collaborative problem-solving. Built with accessibility and inclusivity at its core.',
      features: [
        'Community Event Management',
        'Local Resource Sharing',
        'Volunteer Coordination',
        'Neighborhood Communication',
        'Emergency Alert Systems',
        'Local Business Directory'
      ],
      benefits: [
        'Increased community engagement by 70%',
        'Streamlined volunteer management',
        'Enhanced emergency response coordination',
        'Stronger local business connections'
      ],
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Socket.io', 'AWS'],
      image: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'enterprise',
      title: 'Business Enterprise Platform',
      icon: Building,
      description: 'A scalable business management solution that streamlines operations and enhances productivity.',
      longDescription: 'Our enterprise platform integrates all aspects of business operations into a unified system, from project management to customer relations, providing real-time insights and automated workflows.',
      features: [
        'Project & Task Management',
        'CRM Integration',
        'Financial Reporting',
        'Team Collaboration Tools',
        'Document Management',
        'Advanced Analytics Dashboard'
      ],
      benefits: [
        '40% improvement in operational efficiency',
        'Reduced manual processes by 60%',
        'Enhanced team collaboration',
        'Real-time business insights'
      ],
      technologies: ['React', 'Python', 'MongoDB', 'Redis', 'Docker', 'Kubernetes'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'doctors',
      title: 'Doctors Platform',
      icon: Stethoscope,
      description: 'Advanced healthcare management system designed specifically for medical practitioners.',
      longDescription: 'A comprehensive digital solution that empowers healthcare providers with intelligent patient management, automated scheduling, and integrated telemedicine capabilities.',
      features: [
        'Patient Record Management',
        'Appointment Scheduling',
        'Telemedicine Integration',
        'Prescription Management',
        'Medical Billing',
        'Clinical Decision Support'
      ],
      benefits: [
        '50% reduction in administrative tasks',
        'Improved patient satisfaction scores',
        'Enhanced care coordination',
        'Streamlined billing processes'
      ],
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'WebRTC', 'HL7 FHIR'],
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'health',
      title: 'Health Platform',
      icon: Shield,
      description: 'Comprehensive health management ecosystem for patients, providers, and healthcare organizations.',
      longDescription: 'An integrated health platform that connects patients, healthcare providers, and institutions through secure, intelligent health management tools that promote better health outcomes.',
      features: [
        'Personal Health Records',
        'Health Monitoring & Tracking',
        'Provider Network Management',
        'Insurance Integration',
        'Wellness Programs',
        'Health Analytics & Insights'
      ],
      benefits: [
        'Improved patient engagement by 65%',
        'Better health outcomes tracking',
        'Reduced healthcare costs',
        'Enhanced care coordination'
      ],
      technologies: ['Next.js', 'Express.js', 'MySQL', 'AI/ML APIs', 'HIPAA Compliance'],
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800'
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
              Our <span className="bg-gradient-to-r from-cyber-blue via-secondary-400 to-cyber-purple bg-clip-text text-transparent animate-gradient-x">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Innovative platforms designed to solve real-world challenges across communities, 
              businesses, and healthcare sectors.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid opacity-5" style={{ backgroundSize: '50px 50px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="communities" className="w-full">
            <AnimatedSection>
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto p-2 bg-dark-800/40 backdrop-blur-sm border-dark-600">
                {products.map((product) => (
                  <TabsTrigger
                    key={product.id}
                    value={product.id}
                    className="flex flex-col items-center space-y-2 p-4 h-auto text-sm text-gray-300 data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyber-blue data-[state=active]:to-secondary-400"
                  >
                    <product.icon className="h-6 w-6" />
                    <span className="font-medium">{product.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </AnimatedSection>

            {products.map((product, index) => (
              <TabsContent key={product.id} value={product.id} className="mt-8">
                <AnimatedSection delay={0.1}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-br from-cyber-blue to-secondary-400 p-3 rounded-xl shadow-glow">
                          <product.icon className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">
                          {product.title}
                        </h2>
                      </div>
                      
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {product.longDescription}
                      </p>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-5 w-5 text-cyber-blue mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">
                          Proven Results
                        </h3>
                        <ul className="space-y-2">
                          {product.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-2">
                              <ArrowRight className="h-5 w-5 text-cyber-blue mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact">
                          <Button size="lg" className="bg-gradient-to-r from-cyber-blue to-secondary-400 hover:from-cyber-blue/90 hover:to-secondary-400/90">
                            Request Demo
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </Link>
                        <Link to="/contact">
                          <Button size="lg" variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white">
                            Learn More
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Image & Technologies */}
                    <div className="space-y-6">
                      <div className="relative overflow-hidden rounded-2xl shadow-neural">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>

                      <Card className="bg-dark-800/40 backdrop-blur-sm border-dark-600">
                        <CardHeader>
                          <CardTitle className="text-lg text-white">Technologies Used</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {product.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-gradient-to-r from-cyber-blue/20 to-secondary-400/20 text-cyber-blue rounded-full text-sm font-medium border border-cyber-blue/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AnimatedSection>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-network opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real results from organizations using our platforms
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: '70%',
                description: 'Increase in community engagement',
                platform: 'Community Platform'
              },
              {
                metric: '40%',
                description: 'Improvement in operational efficiency',
                platform: 'Enterprise Platform'
              },
              {
                metric: '50%',
                description: 'Reduction in administrative tasks',
                platform: 'Healthcare Platforms'
              }
            ].map((stat, index) => (
              <AnimatedSection key={stat.platform} delay={index * 0.1}>
                <Card className="text-center h-full bg-dark-800/40 backdrop-blur-sm border-dark-600">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold bg-gradient-to-r from-cyber-blue to-secondary-400 bg-clip-text text-transparent mb-2">
                      {stat.metric}
                    </div>
                    <p className="text-lg text-gray-300 mb-2">
                      {stat.description}
                    </p>
                    <p className="text-sm text-gray-400">
                      {stat.platform}
                    </p>
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
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how our platforms can address your specific challenges and 
              drive meaningful results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-gradient-to-r from-cyber-blue to-secondary-400 hover:from-cyber-blue/90 hover:to-secondary-400/90">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white">
                  Learn About Our Company
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Products;