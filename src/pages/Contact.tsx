import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import AnimatedSection from '../components/common/AnimatedSection';

const Contact = () => {
  const contactInfo = [
    {
      icon: Building,
      title: 'Company',
      content: 'iDigitalMind Pty Ltd.',
      description: 'Your AI Transformation Partner'
    },
    {
      icon: Phone,
      title: 'Mobile',
      content: '+61-405014720',
      description: 'Call us anytime'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@idigitalmind.com.au',
      description: 'Send us an email'
    },
    {
      icon: Globe,
      title: 'Website',
      content: 'www.idigitalmind.com.au',
      description: 'Visit our website'
    }
  ];

  return (
    <div className="min-h-screen pt-20">

      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid opacity-5" style={{ backgroundSize: '50px 50px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's Start a Conversation
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We're here to help you navigate your digital transformation journey. 
                Whether you have a specific project in mind or just want to explore 
                possibilities, we'd love to hear from you.
              </p>
            </AnimatedSection>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} delay={index * 0.1}>
                <Card className="h-full group hover:bg-dark-700/60 transition-all duration-300 backdrop-blur-sm border-dark-600 bg-dark-800/40 hover:shadow-neural">
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-br from-cyber-blue to-secondary-400 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2 text-lg">
                      {info.title}
                    </h3>
                    <p className="text-cyber-blue font-medium mb-2 text-lg">
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

          {/* Map Placeholder */}
          <AnimatedSection delay={0.5}>
            <Card className="overflow-hidden shadow-neural border-dark-600 bg-dark-800/40 max-w-4xl mx-auto">
              <div className="h-64 bg-gradient-to-br from-cyber-blue to-secondary-400 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                  <p className="text-cyber-blue/80">
                    Macquarie Park, NSW, 2113<br />
                    Australia
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;