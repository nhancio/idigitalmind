import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Target, Heart, Lightbulb, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import AnimatedSection from '../components/common/AnimatedSection';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex business challenges.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of partnership and work closely with our clients to achieve shared success.',
    },
    {
      icon: Heart,
      title: 'Customer-Centric',
      description: 'Our clients are at the heart of everything we do. Their success is our ultimate measure of achievement.',
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'We focus on delivering measurable outcomes that create lasting value for our clients.',
    },
  ];

  const timeline = [
    { year: '2012', event: 'Founded iDigitalMind with a vision to transform businesses through AI innovation' },
    { year: '2015', event: 'Expanded into AI and machine learning solutions, becoming early adopters in the Australian market' },
    { year: '2018', event: 'Launched our healthcare platform, revolutionizing patient management systems' },
    { year: '2020', event: 'Pivoted to support businesses during AI transformation accelerated by global changes' },
    { year: '2022', event: 'Introduced advanced AI chatbots and NLP solutions for enterprise clients' },
    { year: '2024', event: 'Continuing to lead AI transformation across industries with innovative solutions' },
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Founder & CEO',
      bio: 'PhD in Computer Science with 15+ years experience in AI transformation and AI solutions.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      bio: 'Former tech lead at major Australian banks, specializing in enterprise architecture and cloud solutions.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Design',
      bio: 'Award-winning UX designer with expertise in creating intuitive AI-powered experiences.',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'James Park',
      role: 'AI Solutions Director',
      bio: 'Machine learning expert with a track record of implementing AI solutions for Fortune 500 companies.',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ];

  const achievements = [
    { number: '12+', label: 'Years of Excellence' },
    { number: '200+', label: 'Successful Projects' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '95%', label: 'Client Retention Rate' },
  ];

  return (
    <div className="min-h-screen pt-20">

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid opacity-5" style={{ backgroundSize: '50px 50px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We exist to bridge the gap between traditional business practices and the AI-powered future. 
                Our mission is to empower organizations with the tools, strategies, and expertise they 
                need to thrive in an increasingly connected world.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through innovative technology solutions, strategic consulting, and unwavering commitment 
                to our clients' success, we're building a more AI-empowered business landscape 
                across Australia and beyond.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-dark-700/60 to-dark-600/60 backdrop-blur-sm border border-dark-600 p-6 rounded-2xl text-center shadow-neural hover:shadow-glow transition-all duration-300"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyber-blue to-secondary-400 bg-clip-text text-transparent mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-400">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-network opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <Card className="h-full text-center group hover:bg-dark-700/60 backdrop-blur-sm border-dark-600 bg-dark-800/40">
                  <CardHeader>
                    <div className="mx-auto bg-gradient-to-br from-secondary-500 to-primary-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow group-hover:shadow-glow-lg">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800 relative">
        <div className="absolute inset-0 bg-cyber-grid opacity-5" style={{ backgroundSize: '80px 80px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Over a decade of innovation and growth
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyber-blue/30 transform md:-translate-x-0.5" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimatedSection key={item.year} delay={index * 0.1}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 md:w-1/2">
                      <div className={`bg-dark-700/60 backdrop-blur-sm p-6 rounded-2xl shadow-neural border-l-4 border-cyber-blue ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                        <div className="flex items-center mb-2">
                          <div className="bg-gradient-to-r from-cyber-blue to-secondary-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {item.year}
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{item.event}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-cyber-blue rounded-full transform -translate-x-2 md:-translate-x-2 shadow-glow" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-network opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <Card className="h-full group hover:bg-dark-700/60 transition-all duration-300 overflow-hidden backdrop-blur-sm border-dark-600 bg-dark-800/40">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-cyber-blue font-medium mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;