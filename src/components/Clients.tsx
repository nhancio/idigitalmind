import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clientImages = [
    "/idigitalmind/work/portfolio1.jpg",
    "/idigitalmind/work/portfolio2.jpg",
    "/idigitalmind/work/portfolio3.jpg",
    "/idigitalmind/work/portfolio4.jpg",
    "/idigitalmind/work/portfolio5.jpg",
    "/idigitalmind/work/portfolio6.jpg",
    "/idigitalmind/work/portfolio7.jpg",
    "/idigitalmind/work/portfolio8.jpg",
    "/idigitalmind/work/portfolio9.jpg",
    "/idigitalmind/work/portfolio10.jpg",
    "/idigitalmind/work/portfolio11.jpg",
    "/idigitalmind/work/smithfield_family_medical_practice.jpg",
    "/idigitalmind/work/studiogl.jpg"
  ];

  // Duplicate the images for infinite scroll effect
  const duplicatedImages = [...clientImages, ...clientImages];

  return (
    <section id="clients" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to work with innovative companies worldwide
          </p>
        </div>

        {/* Auto-scrolling carousel */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-indigo-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-pink-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling container */}
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -1 * (clientImages.length * 320)], // 320 = 304px width + 16px gap
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 h-48 bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-white/50"
              >
                <img
                  src={image}
                  alt={`Client project ${(index % clientImages.length) + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/400x300?text=Project';
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Delivering AI-powered solutions to businesses across industries
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
