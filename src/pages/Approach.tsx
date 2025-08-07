import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Zap, 
  Repeat, 
  Users, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  Target,
  Clock,
  Shield
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import AnimatedSection from '../components/common/AnimatedSection';
import { Link } from 'react-router-dom';

const Approach = () => {
  const approaches = [
    {
      title: 'Proof-of-Concept First',
      icon: Lightbulb,
      description: 'We start with rapid prototyping to validate ideas and demonstrate value before full-scale development.',
      details: [
        'Rapid prototype development in 2-4 weeks',
        'Stakeholder validation and feedback integration',
        'Risk mitigation through early testing',
        'Clear go/no-go decisions based on data'
      ],
      benefits: [
        'Reduced project risk by 60%',
        'Faster time to market validation',
        'Lower initial investment requirements',
        'Higher stakeholder confidence'
      ],
      color: 'from-cyber-blue to-secondary-400'
    },
    {
      title: 'Agile & Lean Methodology',
      icon: Zap,
      description: 'Iterative development with continuous feedback loops to ensure we build exactly what you need.',
      details: [
        '2-week sprint cycles with regular reviews',
        'Daily standups and transparent progress tracking',
        'Continuous integration and deployment',
        'Regular retrospectives for process improvement'
      ],
      benefits: [
        '40% faster delivery times',
        'Higher quality through iterative testing',
        'Flexible scope adjustments',
        'Enhanced team collaboration'
      ],
      color: 'from-secondary-500 to-primary-500'
    },
    {
      title: 'Continuous Delivery',
      icon: Repeat,
      description: 'Automated pipelines ensure reliable, frequent releases with minimal downtime and maximum quality.',
      details: [
        'Automated testing and quality assurance',
        'Blue-green deployment strategies',
        'Real-time monitoring and alerting',
        'Rollback capabilities for quick recovery'
      ],
      benefits: [
        '99.9% uptime reliability',
        '80% reduction in deployment issues',
        'Faster feature delivery to users',
        'Improved security through regular updates'
      ],
      color: 'from-cyber-purple to-cyber-pink'
    },
    {
      title: 'Team Augmentation',
      icon: Users,
      description: 'Seamlessly integrate our experts with your team to accelerate development and knowledge transfer.',
      details: [
        'Skilled professionals across all technologies',
        'Flexible engagement models (part-time to full-time)',
        'Knowledge transfer and mentoring programs',
        'Cultural alignment and team integration'
      ],
      benefits: [
        'Access to specialized expertise',
        'Reduced hiring time and costs',
        'Scalable team size based on needs',
        'Enhanced internal capabilities'
      ],
      color: 'from-cyber-blue to-secondary-500'
    },
    {
      title: 'RaaS Model (Resources as a Service)',
      icon: Globe,
      description: 'Global talent pool providing specialized skills on-demand with flexible engagement models.',
      details: [
        'Access to global talent network',
        'Flexible scaling based on project needs',
        'Cost-effective resource allocation',
        'Time zone coverage for continuous development'
      ],
      benefits: [
        '50% cost savings on resource allocation',
        '24/7 development capabilities',
        'Access to niche expertise',
        'Reduced administrative overhead'
      ],
      color: 'from-secondary-500 to-primary-500'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'Deep dive into your business requirements, challenges, and objectives.',
      duration: '1-2 weeks',
      deliverables: ['Requirements Analysis', 'Technical Architecture', 'Project Roadmap']
    },
    {
      step: '02',
      title: 'Proof of Concept',
      description: 'Rapid prototype development to validate core concepts and assumptions.',
      duration: '2-4 weeks',
      deliverables: ['Working Prototype', 'Technical Validation', 'Stakeholder Feedback']
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'Agile development with regular reviews and continuous integration.',
      duration: '8-16 weeks',
      deliverables: ['Production-ready Solution', 'Quality Assurance', 'User Training']
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Seamless deployment with ongoing support and optimization.',
      duration: 'Ongoing',
      deliverables: ['Live Deployment', '24/7 Support', 'Performance Monitoring']
    }
  ];

  const aiGrowthPathway = [
    {
      step: '01',
      title: 'AI Discovery',
      description: 'Understanding your business needs and identifying AI opportunities.',
      icon: '🔍',
      color: 'from-cyber-blue to-secondary-400'
    },
    {
      step: '02',
      title: 'AI Education',
      description: 'Training your team and building AI literacy across the organization.',
      icon: '📚',
      color: 'from-secondary-500 to-primary-500'
    },
    {
      step: '03',
      title: 'AI Implementation',
      description: 'Deploying AI solutions and integrating them into your workflows.',
      icon: '⚡',
      color: 'from-cyber-purple to-cyber-pink'
    },
    {
      step: '04',
      title: 'AI Maintenance',
      description: 'Ongoing optimization, monitoring, and continuous improvement.',
      icon: '🔄',
      color: 'from-cyber-blue to-secondary-500'
    }
  ];

  return (
    <div className="min-h-screen pt-20">

      {/* AI Growth Pathway */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-network opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Growth Pathway
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A comprehensive journey from AI discovery to sustainable implementation
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {aiGrowthPathway.map((path, index) => (
              <AnimatedSection key={path.step} delay={index * 0.1}>
                <Card className="h-full group hover:bg-dark-700/60 transition-all duration-300 backdrop-blur-sm border-dark-600 bg-dark-800/40 hover:shadow-neural">
                  <CardContent className="p-8 text-center">
                    <div className={`bg-gradient-to-br ${path.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                      <span className="text-2xl">{path.icon}</span>
                    </div>
                    <div className="bg-gradient-to-br from-cyber-blue to-secondary-400 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                      {path.step}
                    </div>
                    <h3 className="font-semibold text-white mb-3 text-lg">
                      {path.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {path.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Core Approaches */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid opacity-5" style={{ backgroundSize: '50px 50px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Methodologies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Five key approaches that ensure project success and client satisfaction
            </p>
          </AnimatedSection>

          <div className="space-y-16">
            {approaches.map((approach, index) => (
              <AnimatedSection key={approach.title} delay={index * 0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`bg-gradient-to-br ${approach.color} p-4 rounded-xl shadow-glow`}>
                        <approach.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {approach.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {approach.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-white mb-3">Key Details</h4>
                        <ul className="space-y-2">
                          {approach.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-cyber-blue mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-300">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-white mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {approach.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-2">
                              <Target className="h-4 w-4 text-secondary-400 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <Card className="bg-dark-800/40 backdrop-blur-sm border-dark-600 shadow-neural">
                      <CardContent className="p-8">
                        <div className={`w-full h-64 bg-gradient-to-br ${approach.color} rounded-xl flex items-center justify-center shadow-glow`}>
                          <approach.icon className="h-24 w-24 text-white opacity-80" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-neural-network opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A structured approach from concept to deployment and beyond
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyber-blue/30 transform md:-translate-x-0.5" />

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <AnimatedSection key={step.step} delay={index * 0.1}>
                  <div className={`flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 md:w-1/2">
                      <Card className={`bg-dark-700/60 backdrop-blur-sm shadow-neural border-l-4 border-cyber-blue ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                            <div className="flex items-center space-x-2 text-sm text-gray-400">
                              <Clock className="h-4 w-4" />
                              <span>{step.duration}</span>
                            </div>
                          </div>
                          <p className="text-gray-300">{step.description}</p>
                        </CardHeader>
                        <CardContent>
                          <div>
                            <h4 className="font-semibold text-white mb-2">Key Deliverables</h4>
                            <ul className="space-y-1">
                              {step.deliverables.map((deliverable, deliverableIndex) => (
                                <li key={deliverableIndex} className="flex items-center space-x-2">
                                  <Shield className="h-4 w-4 text-cyber-blue" />
                                  <span className="text-sm text-gray-300">{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 bg-gradient-to-br from-cyber-blue to-secondary-400 text-white w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold transform -translate-x-8 md:-translate-x-8 shadow-glow">
                      {step.step}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Approach Works */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid opacity-5" style={{ backgroundSize: '80px 80px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Our Approach Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven results across industries and project types
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: '95%',
                label: 'Project Success Rate',
                description: 'Projects delivered on time and within budget'
              },
              {
                metric: '40%',
                label: 'Faster Delivery',
                description: 'Compared to traditional development approaches'
              },
              {
                metric: '60%',
                label: 'Risk Reduction',
                description: 'Through proof-of-concept validation'
              },
              {
                metric: '99.9%',
                label: 'System Uptime',
                description: 'Reliable, production-ready solutions'
              }
            ].map((stat, index) => (
              <AnimatedSection key={stat.metric} delay={index * 0.1}>
                <Card className="text-center h-full group hover:bg-dark-700/60 transition-all duration-300 backdrop-blur-sm border-dark-600 bg-dark-800/40">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold bg-gradient-to-r from-cyber-blue to-secondary-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.metric}
                    </div>
                    <h3 className="font-semibold text-white mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {stat.description}
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
              Ready to Experience Our Approach?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and show you how our proven methodology 
              can deliver exceptional results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-gradient-to-r from-cyber-blue to-secondary-400 hover:from-cyber-blue/90 hover:to-secondary-400/90">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white">
                  View Our Services
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Approach;