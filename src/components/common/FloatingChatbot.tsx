import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real implementation, this would send the message to a chatbot service
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-dark-800/95 backdrop-blur-xl rounded-2xl shadow-cyber-lg border border-cyber-blue/30 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-secondary-500 to-primary-500 p-4 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-cyber-grid opacity-20" style={{ backgroundSize: '20px 20px' }} />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                    <MessageCircle className="h-4 w-4 animate-bounce" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Assistant</h3>
                    <p className="text-xs opacity-90">Powered by Advanced AI</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8 backdrop-blur-sm"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto">
              <div className="bg-dark-700/60 backdrop-blur-sm border border-cyber-blue/20 rounded-lg p-3 max-w-[80%] shadow-glow">
                <p className="text-sm text-gray-200">
                  Hello! I'm here to help you learn more about iDigitalMind's services. 
                  What would you like to know?
                </p>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-dark-600">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 bg-dark-700/60 border-dark-600 text-white placeholder:text-gray-400"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  disabled={!message.trim()}
                  className="bg-gradient-to-r from-secondary-500 to-primary-500 hover:from-secondary-400 hover:to-primary-400 shadow-glow"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full shadow-glow hover:shadow-glow-lg flex items-center justify-center z-50 text-white group relative overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          },
        }}
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-cyber-grid opacity-30 animate-rotate-slow" style={{ backgroundSize: '10px 10px' }} />
        
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyber-pink rounded-full animate-pulse shadow-glow" />
        
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full border-2 border-cyber-blue/30 animate-ping" />
      </motion.button>
    </>
  );
};

export default FloatingChatbot;