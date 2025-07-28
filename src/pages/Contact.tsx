import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import AnimatedSection from '../components/common/AnimatedSection';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
  };

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
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Sat: 10am-7pm',
      description: 'Sunday: Closed'
    }
  ];

  const services = [
    'Digital Strategy',
    'AI & Machine Learning',
    'Web Development',
    'Mobile Apps',
    'Chatbots & NLP',
    'E-commerce',
    'Cloud Services',
    'Other'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
        <AnimatedSection>
          <Card className="max-w-md mx-auto text-center">
            <CardContent className="p-8">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                Thank You!
              </h2>
              <p className="text-neutral-600 mb-6">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Ready to transform your business? Let's discuss your project requirements 
              and create a tailored solution that drives results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <p className="text-neutral-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          {...register('name')}
                          placeholder="Your name"
                          className={errors.name ? 'border-red-500' : ''}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          {...register('email')}
                          type="email"
                          placeholder="your@email.com"
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Company
                        </label>
                        <Input
                          {...register('company')}
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          {...register('phone')}
                          placeholder="+61 xxx xxx xxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Service of Interest *
                      </label>
                      <select
                        {...register('service')}
                        className={`w-full h-12 px-4 rounded-xl border border-neutral-200 bg-white/80 backdrop-blur-sm text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                          errors.service ? 'border-red-500' : ''
                        }`}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        {...register('message')}
                        placeholder="Tell us about your project requirements..."
                        rows={5}
                        className={errors.message ? 'border-red-500' : ''}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Information */}
            <div className="space-y-8">
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  Let's Start a Conversation
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  We're here to help you navigate your digital transformation journey. 
                  Whether you have a specific project in mind or just want to explore 
                  possibilities, we'd love to hear from you.
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <AnimatedSection key={info.title} delay={0.1 + index * 0.1}>
                    <Card className="h-full group hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-primary-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-neutral-900 mb-1">
                              {info.title}
                            </h3>
                            <p className="text-primary-600 font-medium mb-1">
                              {info.content}
                            </p>
                            <p className="text-sm text-neutral-500">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>

              {/* Map Placeholder */}
              <AnimatedSection delay={0.5}>
                <Card className="overflow-hidden shadow-lg">
                  <div className="h-64 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                      <p className="text-primary-100">
                        Macquarie Park, NSW, 2113<br />
                        Australia
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-600">
              Quick answers to common questions
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on complexity and scope. Most projects range from 8-16 weeks, starting with a 2-4 week proof of concept phase.'
              },
              {
                question: 'Do you work with international clients?',
                answer: 'Yes, we work with clients globally. Our RaaS model allows us to provide support across different time zones effectively.'
              },
              {
                question: 'What technologies do you specialize in?',
                answer: 'We specialize in modern web technologies (React, Node.js), mobile development, AI/ML, cloud services (AWS, Azure), and emerging technologies like AR/VR.'
              },
              {
                question: 'Do you provide ongoing support after project completion?',
                answer: 'Absolutely. We offer various support packages including 24/7 monitoring, regular updates, and continuous optimization services.'
              }
            ].map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 0.1}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </p>
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

export default Contact;