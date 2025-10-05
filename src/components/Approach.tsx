import React from 'react';
import { Search, BookOpen, Zap, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const Approach = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      number: "01",
      title: "AI Discovery",
      description: "Understanding your business needs and identifying AI opportunities.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      number: "02",
      title: "AI Education",
      description: "Training your team and building AI literacy across the organization.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      number: "03",
      title: "AI Implementation",
      description: "Deploying AI solutions and integrating them into your workflows.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      number: "04",
      title: "AI Maintenance",
      description: "Ongoing optimization, monitoring, and continuous improvement.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const cardVariants = {
    offscreen: { opacity: 0, y: 40 },
    onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.7 } }
  };

  return (
    <section id="approach" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic methodology to transform your business with AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/30 flex flex-col h-full"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.07, boxShadow: '0 0 24px 2px #6366f1' }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center`}>
                  {step.icon}
                </div>
                <div className="text-5xl font-bold text-gray-200">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;

