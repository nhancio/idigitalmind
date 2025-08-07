import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI assistant. How can I help you learn more about iDigitalMind's services today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add user message
      const userMessage: Message = {
        id: Date.now().toString(),
        text: message,
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setMessage('');

      // Simulate bot response
      setTimeout(() => {
        const botResponses = [
          "That's a great question! Let me help you with that.",
          "I'd be happy to provide more information about our services.",
          "Our team specializes in AI transformation and AI solutions.",
          "Would you like to know more about our specific services?",
          "I can connect you with our team for a detailed consultation."
        ];
        
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: randomResponse,
          sender: 'bot',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-dark-800/95 backdrop-blur-xl rounded-2xl shadow-cyber-lg border border-cyber-blue/30 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-secondary-500 to-primary-500 p-4 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-cyber-grid opacity-20" style={{ backgroundSize: '20px 20px' }} />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                    <Bot className="h-4 w-4 animate-bounce" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Assistant</h3>
                    <p className="text-xs opacity-90">Online • Powered by Advanced AI</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8 backdrop-blur-sm transition-all duration-200"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-cyber-blue/30 scrollbar-track-dark-700/30">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.sender === 'bot' 
                        ? 'bg-gradient-to-r from-secondary-500 to-primary-500' 
                        : 'bg-gradient-to-r from-cyber-blue to-secondary-400'
                    }`}>
                      {msg.sender === 'bot' ? (
                        <Bot className="h-3 w-3 text-white" />
                      ) : (
                        <User className="h-3 w-3 text-white" />
                      )}
                    </div>
                    <div className={`rounded-lg p-3 ${
                      msg.sender === 'bot'
                        ? 'bg-dark-700/60 backdrop-blur-sm border border-cyber-blue/20 shadow-glow'
                        : 'bg-gradient-to-r from-cyber-blue/20 to-secondary-400/20 border border-cyber-blue/30'
                    }`}>
                      <p className="text-sm text-gray-200 leading-relaxed">
                        {msg.text}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-dark-600 bg-dark-800/50 backdrop-blur-sm">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 bg-dark-700/60 border-dark-600 text-white placeholder:text-gray-400 focus:border-cyber-blue/50 focus:ring-cyber-blue/20"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  disabled={!message.trim()}
                  className="bg-gradient-to-r from-secondary-500 to-primary-500 hover:from-secondary-400 hover:to-primary-400 shadow-glow disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full shadow-glow hover:shadow-glow-lg flex items-center justify-center z-50 text-white group relative overflow-hidden transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 3,
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
        
        {/* Hover effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-blue/20 to-secondary-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>
    </>
  );
};

export default FloatingChatbot;