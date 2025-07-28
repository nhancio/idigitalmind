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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Our Products
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Innovative platforms designed to solve real-world challenges across communities, 
              businesses, and healthcare sectors.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="communities" className="w-full">
            <AnimatedSection>
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto p-2">
                {products.map((product) => (
                  <TabsTrigger
                    key={product.id}
                    value={product.id}
                    className="flex flex-col items-center space-y-2 p-4 h-auto text-sm"
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
                        <div className="bg-primary-500 p-3 rounded-xl">
                          <product.icon className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-neutral-900">
                          {product.title}
                        </h2>
                      </div>
                      
                      <p className="text-lg text-neutral-600 leading-relaxed">
                        {product.longDescription}
                      </p>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-neutral-900">
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                              <span className="text-neutral-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-neutral-900">
                          Proven Results
                        </h3>
                        <ul className="space-y-2">
                          {product.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-2">
                              <ArrowRight className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                              <span className="text-neutral-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" asChild>
                          <Link to="/contact">
                            Request Demo
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                          <Link to="/contact">Learn More</Link>
                        </Button>
                      </div>
                    </div>

                    {/* Image & Technologies */}
                    <div className="space-y-6">
                      <div className="relative overflow-hidden rounded-2xl shadow-xl">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Technologies Used</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {product.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
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
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
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
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary-500 mb-2">
                      {stat.metric}
                    </div>
                    <p className="text-lg text-neutral-700 mb-2">
                      {stat.description}
                    </p>
                    <p className="text-sm text-neutral-500">
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
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Discover how our platforms can address your specific challenges and 
              drive meaningful results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link to="/about">Learn About Our Company</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Products;