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
      color: 'from-blue-500 to-blue-600'
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
      color: 'from-green-500 to-green-600'
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
      color: 'from-purple-500 to-purple-600'
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
      color: 'from-orange-500 to-orange-600'
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
      color: 'from-teal-500 to-teal-600'
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

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Our Approach
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              A proven methodology that combines industry best practices with innovative thinking 
              to deliver exceptional results for every project.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Approaches */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Core Methodologies
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
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
                      <div className={`bg-gradient-to-br ${approach.color} p-4 rounded-xl`}>
                        <approach.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900">
                        {approach.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-neutral-600 leading-relaxed">
                      {approach.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-3">Key Details</h4>
                        <ul className="space-y-2">
                          {approach.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-primary-500 mt-1 flex-shrink-0" />
                              <span className="text-sm text-neutral-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {approach.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-2">
                              <Target className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-sm text-neutral-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <Card className="bg-gradient-to-br from-neutral-50 to-white border-0 shadow-xl">
                      <CardContent className="p-8">
                        <div className={`w-full h-64 bg-gradient-to-br ${approach.color} rounded-xl flex items-center justify-center`}>
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
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              A structured approach from concept to deployment and beyond
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-0.5" />

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <AnimatedSection key={step.step} delay={index * 0.1}>
                  <div className={`flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 md:w-1/2">
                      <Card className={`bg-white shadow-lg border-l-4 border-primary-500 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <CardTitle className="text-xl">{step.title}</CardTitle>
                            <div className="flex items-center space-x-2 text-sm text-neutral-500">
                              <Clock className="h-4 w-4" />
                              <span>{step.duration}</span>
                            </div>
                          </div>
                          <p className="text-neutral-600">{step.description}</p>
                        </CardHeader>
                        <CardContent>
                          <div>
                            <h4 className="font-semibold text-neutral-900 mb-2">Key Deliverables</h4>
                            <ul className="space-y-1">
                              {step.deliverables.map((deliverable, deliverableIndex) => (
                                <li key={deliverableIndex} className="flex items-center space-x-2">
                                  <Shield className="h-4 w-4 text-primary-500" />
                                  <span className="text-sm text-neutral-700">{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 bg-primary-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold transform -translate-x-8 md:-translate-x-8 shadow-lg">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why Our Approach Works
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
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
                <Card className="text-center h-full group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.metric}
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-neutral-600">
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
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Our Approach?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and show you how our proven methodology 
              can deliver exceptional results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Approach;