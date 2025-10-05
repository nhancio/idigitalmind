import React from 'react';
import { Bot, LineChart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Agentic Automations",
      description: "Transform your business operations with intelligent AI agents that work autonomously. Our agentic automation solutions leverage cutting-edge AI to handle complex workflows, make intelligent decisions, and adapt to changing conditions—freeing your team to focus on strategic initiatives.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Data Science & ML",
      description: "Unlock the power of your data with advanced machine learning and data science solutions. We build predictive models, perform deep analytics, and create data-driven insights that transform raw information into competitive advantages for your business.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "AI Transformation",
      description: "Navigate your complete AI journey with confidence. From discovery and education to implementation and maintenance, we guide organizations through digital transformation—embedding AI into your core operations and culture to drive sustainable innovation and growth.",
      color: "bg-green-100 text-green-600"
    }
  ];

  const cardVariants = {
    offscreen: { opacity: 0, y: 40 },
    onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.7 } }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our AI Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions to transform your business with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/30 flex flex-col h-full min-h-[320px]"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.07, boxShadow: '0 0 24px 2px #a78bfa' }}
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;