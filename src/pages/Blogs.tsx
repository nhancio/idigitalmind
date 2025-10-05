import React from 'react';
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Lightbulb, ArrowLeft } from 'lucide-react';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How AI is Fundamentally Changing the Future of Work",
      excerpt: "Artificial Intelligence isn't just automating tasks—it's reshaping entire industries, redefining job roles, and creating opportunities we never imagined. Discover how AI is transforming workplaces globally and what it means for your career.",
      author: "iDigitalMind Team",
      date: "October 5, 2025",
      readTime: "8 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      tags: ["AI", "Future of Work", "Digital Transformation"],
      icon: <Lightbulb className="w-6 h-6" />,
      content: `The workplace landscape is undergoing a seismic shift, driven by artificial intelligence technologies that are transforming how we work, collaborate, and create value. This isn't about robots replacing humans—it's about AI augmenting human capabilities in unprecedented ways.

AI is eliminating repetitive tasks, allowing knowledge workers to focus on strategic thinking, creativity, and complex problem-solving. From automated customer service agents that handle routine inquiries 24/7, to AI-powered analytics that provide real-time business insights, the integration of AI is making organizations more efficient and employees more productive.

The most significant change? AI is democratizing expertise. Tools like ChatGPT and specialized AI assistants are making expert-level knowledge accessible to everyone, breaking down traditional barriers and enabling rapid skill acquisition. This means junior employees can perform at senior levels with AI assistance, while senior professionals can multiply their impact.

Companies that embrace AI-first strategies are seeing dramatic improvements: 40% reduction in operational costs, 3x faster product development cycles, and unprecedented scalability. The future belongs to organizations that successfully blend human creativity with AI efficiency.`
    },
    {
      id: 2,
      title: "Automation at Scale: How AI Powers Business Operations",
      excerpt: "From small startups to Fortune 500 companies, intelligent automation is revolutionizing operations. Learn how AI-driven automation enables businesses to scale exponentially while reducing costs and improving quality.",
      author: "iDigitalMind Team",
      date: "October 3, 2025",
      readTime: "10 min read",
      category: "Automation",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80",
      tags: ["Automation", "Scale", "AI Operations"],
      icon: <TrendingUp className="w-6 h-6" />,
      content: `Scaling a business traditionally meant hiring more people, opening new offices, and multiplying infrastructure costs. AI automation has completely disrupted this model, enabling companies to grow revenue 10x without proportionally increasing headcount or expenses.

Intelligent automation combines robotic process automation (RPA), machine learning, and AI agents to handle everything from data entry and invoice processing to customer onboarding and quality assurance. These systems work 24/7, never make human errors, and continuously improve through machine learning.

Consider this: A traditional customer service team might handle 50 tickets per day per person. An AI-powered automation system can handle 10,000+ interactions simultaneously, with consistent quality and instant response times. This isn't about replacing humans—it's about handling the volume that would be impossible for human teams alone.

The ROI is compelling: Companies implementing comprehensive automation strategies report 60-80% reduction in process completion times, 90% reduction in errors, and the ability to scale operations 5-10x without significant cost increases. The future of business operations is automated, intelligent, and infinitely scalable.`
    },
    {
      id: 3,
      title: "Agentic AI: The Next Evolution of Intelligent Automation",
      excerpt: "AI agents that think, decide, and act autonomously are transforming business operations. Discover how agentic AI systems are revolutionizing everything from customer service to complex business workflows.",
      author: "iDigitalMind Team",
      date: "October 1, 2025",
      readTime: "7 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
      tags: ["Agentic AI", "AI Agents", "Automation"],
      icon: <Lightbulb className="w-6 h-6" />,
      content: `The evolution from simple automation to agentic AI represents a quantum leap in business technology. While traditional automation follows fixed rules, agentic AI systems can reason, plan, and make intelligent decisions autonomously—adapting to new situations without human intervention.

Imagine an AI agent that manages your entire customer support operation: It understands context, remembers past interactions, escalates complex issues to humans, learns from every conversation, and even proactively reaches out to customers who might need help. This isn't science fiction—it's happening now.

Agentic AI combines large language models (LLMs), decision-making algorithms, and action capabilities to create truly autonomous systems. These agents can navigate complex workflows, integrate with multiple tools, and execute tasks that previously required human judgment.

The impact is transformative: Companies deploying agentic AI report 75% reduction in response times, 90% improvement in consistency, and the ability to provide personalized service at massive scale. We're entering an era where AI agents work alongside humans as intelligent colleagues, not just tools.`
    },
    {
      id: 4,
      title: "Machine Learning for Business: From Data to Decisions",
      excerpt: "Machine learning is turning raw data into competitive advantages. Explore how ML models predict customer behavior, optimize operations, and drive strategic decisions in real-time.",
      author: "iDigitalMind Team",
      date: "September 28, 2025",
      readTime: "9 min read",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?auto=format&fit=crop&w=800&q=80",
      tags: ["Machine Learning", "Data Science", "Predictive Analytics"],
      icon: <TrendingUp className="w-6 h-6" />,
      content: `Every business generates massive amounts of data, but few extract its full value. Machine learning bridges this gap, transforming raw data into predictive insights that drive intelligent business decisions.

ML models can predict customer churn before it happens, forecast demand with unprecedented accuracy, detect fraud in real-time, and personalize experiences for millions of users simultaneously. The key is understanding that ML isn't about perfect predictions—it's about making better decisions more consistently than humans alone.

Modern ML systems learn from every interaction, continuously improving their predictions. A recommendation engine gets smarter with each click. A fraud detection system adapts to new attack patterns. A demand forecasting model refines its accuracy with each sales cycle.

The business impact is measurable: Companies leveraging ML report 20-30% improvement in customer retention, 40% reduction in inventory costs through better forecasting, and 50% faster identification of business opportunities. ML turns your data from a historical record into a competitive weapon.`
    },
    {
      id: 5,
      title: "AI Transformation: A Roadmap for Business Leaders",
      excerpt: "Successfully implementing AI requires more than technology—it demands cultural change, strategic planning, and organizational transformation. Here's your comprehensive guide to AI transformation.",
      author: "iDigitalMind Team",
      date: "September 25, 2025",
      readTime: "12 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
      tags: ["AI Transformation", "Strategy", "Leadership"],
      icon: <Lightbulb className="w-6 h-6" />,
      content: `AI transformation isn't a technology project—it's an organizational evolution. The companies that successfully transform are those that approach AI holistically, addressing technology, processes, culture, and strategy simultaneously.

The journey begins with AI literacy. Before deploying sophisticated AI systems, organizations must build understanding across all levels. Employees need to comprehend AI's capabilities and limitations, executives need to think strategically about AI's role in business strategy, and technical teams need the skills to implement and maintain AI systems.

Successful transformation follows a clear path: Discovery (identifying AI opportunities), Education (building organizational AI literacy), Implementation (deploying AI solutions), and Maintenance (continuous improvement and optimization). Each phase builds on the previous, creating sustainable AI capabilities.

The results speak for themselves: Organizations that successfully complete AI transformation report 2-3x faster time-to-market, 50% reduction in operational costs, and the ability to compete effectively against larger, better-funded competitors. AI transformation isn't optional—it's essential for long-term competitiveness.`
    },
    {
      id: 6,
      title: "The Rise of Intelligent Workflows: AI Meets Process Automation",
      excerpt: "Combining AI with workflow automation creates intelligent systems that handle complex business processes end-to-end. Discover how leading companies are building AI-powered workflows that adapt and improve.",
      author: "iDigitalMind Team",
      date: "September 20, 2025",
      readTime: "8 min read",
      category: "Automation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["Workflows", "AI", "Process Automation"],
      icon: <BookOpen className="w-6 h-6" />,
      content: `Traditional workflow automation follows fixed paths: if this happens, do that. Intelligent workflows powered by AI make dynamic decisions, adapt to context, and learn from outcomes—creating truly flexible business processes.

Consider an intelligent invoice processing workflow: AI extracts data from various invoice formats (even handwritten ones), validates information against multiple systems, identifies anomalies, routes approvals based on complexity and risk, and learns to handle exceptions. What once took days now happens in minutes.

Modern platforms like n8n combined with AI capabilities enable businesses to build sophisticated workflows without extensive coding. These systems integrate with hundreds of tools, use AI for decision-making, and provide visibility into every step of complex processes.

The efficiency gains are remarkable: Companies implementing intelligent workflows report 80% reduction in process completion time, 95% reduction in errors, and the ability to handle 10x more volume with the same team. Intelligent workflows aren't just faster—they're smarter.`
    },
    {
      id: 7,
      title: "Generative AI in Business: Beyond ChatGPT",
      excerpt: "Generative AI is creating content, code, designs, and solutions at unprecedented scale. Learn how businesses are leveraging generative AI to multiply creative output and accelerate innovation.",
      author: "iDigitalMind Team",
      date: "September 15, 2025",
      readTime: "10 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      tags: ["Generative AI", "Innovation", "Content Creation"],
      icon: <Lightbulb className="w-6 h-6" />,
      content: `Generative AI represents a paradigm shift in how we create value. These systems don't just process information—they generate new content, ideas, and solutions. From writing marketing copy to designing products to generating code, generative AI is amplifying human creativity across every business function.

Marketing teams use generative AI to create personalized content at scale—producing thousands of unique ad variations, email campaigns, and social media posts tailored to individual customer segments. Product teams generate design variations, test concepts, and accelerate time-to-market.

Developers leverage AI coding assistants to write boilerplate code, debug complex issues, and learn new technologies faster. The result? Development cycles that once took months now take weeks, with higher quality and fewer bugs.

The competitive advantage is clear: Organizations effectively using generative AI report 5x improvement in content production, 50% faster product development, and the ability to personalize at a scale previously impossible. Generative AI isn't replacing human creativity—it's multiplying it.`
    },
    {
      id: 8,
      title: "Data-Driven Decision Making: AI Analytics Revolution",
      excerpt: "AI-powered analytics provide real-time insights that transform decision-making. Discover how intelligent analytics systems help businesses respond faster and make smarter strategic choices.",
      author: "iDigitalMind Team",
      date: "September 10, 2025",
      readTime: "7 min read",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["Analytics", "AI", "Decision Making"],
      icon: <TrendingUp className="w-6 h-6" />,
      content: `Traditional analytics tell you what happened. AI-powered analytics tell you what's happening now, what will happen next, and what you should do about it. This evolution from descriptive to prescriptive analytics is revolutionizing business decision-making.

Modern AI analytics systems process millions of data points in real-time, identifying patterns humans would never spot. They alert you to emerging trends before they become obvious, predict outcomes with increasing accuracy, and recommend optimal actions based on historical patterns and current context.

The power lies in speed and scale. While human analysts might take days to analyze a dataset and prepare recommendations, AI systems deliver insights instantly. This enables businesses to respond to market changes, customer behavior shifts, and operational issues in real-time rather than after the fact.

Companies leveraging AI analytics report 40% faster decision-making cycles, 30% improvement in forecast accuracy, and 25% increase in operational efficiency. In today's fast-moving markets, the ability to see clearly and act quickly isn't just an advantage—it's survival.`
    }
  ];

  const categories = ["All", "AI & Technology", "Web Development", "Data Science", "Design", "Automation"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [openBlog, setOpenBlog] = React.useState<null | typeof blogPosts[0]>(null);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  if (openBlog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <button
            className="flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 mb-8"
            onClick={() => setOpenBlog(null)}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blogs
          </button>
          <img src={openBlog.image} alt={openBlog.title} className="w-full h-56 object-cover rounded-2xl mb-6" />
          <h2 className="text-3xl font-bold mb-2">{openBlog.title}</h2>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span><User className="inline w-4 h-4 mr-1" />{openBlog.author}</span>
            <span><Calendar className="inline w-4 h-4 mr-1" />{openBlog.date}</span>
            <span>{openBlog.readTime}</span>
          </div>
          <div className="mb-4">
            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-2xl text-xs font-medium">{openBlog.category}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {openBlog.tags.map((tag, idx) => (
              <span key={idx} className="bg-purple-100 text-purple-600 px-3 py-1 rounded-2xl text-xs font-medium">{tag}</span>
            ))}
          </div>
          <div className="prose prose-lg max-w-none">
            {openBlog.content?.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-purple-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on AI, technology, and innovation from our team of experts
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white/70 text-gray-700 hover:bg-purple-100 hover:text-purple-600'
              }`}
              style={{
                boxShadow: selectedCategory === category 
                  ? '0 8px 32px rgba(147, 51, 234, 0.3)' 
                  : 'inset 0 2px 4px rgba(255, 255, 255, 0.6), 0 4px 16px rgba(0, 0, 0, 0.1)',
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gradient-to-br from-white/85 to-white/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-white/30 group"
              style={{
                boxShadow: 'inset 0 6px 12px rgba(255, 255, 255, 0.9), inset 0 -6px 12px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-2xl text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-2">
                  {post.icon}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-600 px-3 py-1 rounded-2xl text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <button
                    className="flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors group"
                    onClick={() => setOpenBlog(post)}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;