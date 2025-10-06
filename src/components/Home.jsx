import React, { useState } from 'react';
import { Menu, X, ChevronRight, Shield, Zap, Users, TrendingUp, Check, Twitter, Github, Mail, Linkedin } from 'lucide-react';

import Navigation from "./sections/Navigation.jsx";
import Features from "./sections/Features.jsx";
import Footer from "./sections/Footer.jsx";


const Hero = () => (
  <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          The Future of <span className="text-cyan-400">Crypto Risk Assessment</span>
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          First and only platform integrating real-time market volatility into risk scoring and insurance pricing. 
          Updates every 30 seconds while competitors update daily.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#features" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-flex items-center justify-center">
            Learn More <ChevronRight className="ml-2" />
          </a>
          <a href="#contact" className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition">
            Get Started
          </a>
        </div>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700">
          <div className="text-cyan-400 text-3xl font-bold mb-2">2,880x</div>
          <div className="text-slate-300">Faster risk updates than competitors</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700">
          <div className="text-cyan-400 text-3xl font-bold mb-2">&gt;95%</div>
          <div className="text-slate-300">Claims accuracy rate</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700">
          <div className="text-cyan-400 text-3xl font-bold mb-2">24/7</div>
          <div className="text-slate-300">Real-time monitoring</div>
        </div>
      </div>
    </div>
  </section>
);


const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Nese Unsal",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      education: "PhD Financial Engineering",
      experience: "15 years institutional risk management",
      highlights: [
        "VP Risk Management, Goldman Sachs (2010-2015)",
        "Head of Crypto Risk, Coinbase Institutional (2015-2020)",
        "Founded two successful fintech startups (exits: $50M, $120M)",
        "12 peer-reviewed papers on risk modelling"
      ],
      linkedin: "#"
    },
    {
      name: "Christian Tanner",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      education: "MS Computer Science",
      experience: "Senior blockchain engineer with expertise in DeFi protocols",
      highlights: [
        "Familiar with Chainlink and Compound Protocol",
        "Expert in oracle networks and DeFi infrastructure",
        "Previously developed blockchain solutions at two successful crypto startups",
        "Specialized in smart contract security and optimization"
      ],
      linkedin: "#"
    },
    {
      name: "Mark Berry",
      role: "Head of Risk Management",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      education: "CFA Charterholder",
      experience: "12 years in financial risk modelling and regulatory compliance",
      highlights: [
        "Held senior position in institutional risk management",
        "Expertise in crypto asset valuation and derivatives",
        "Specialized in credit risk and market risk analytics",
        "Published thought leader in crypto risk frameworks"
      ],
      linkedin: "#"
    }
  ];

  return (
    <section id="team" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Full transparency with verified credentials and proven track records
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              onClick={() => setSelectedMember(member)}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition cursor-pointer"
            >
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 mb-3">{member.role}</p>
                <p className="text-slate-300 text-sm mb-4">{member.education}</p>
                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                  View Full Profile →
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedMember && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={() => setSelectedMember(null)}>
            <div className="bg-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <img src={selectedMember.image} alt={selectedMember.name} className="w-24 h-24 rounded-full object-cover mr-6" />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{selectedMember.name}</h3>
                      <p className="text-cyan-400 text-lg mb-2">{selectedMember.role}</p>
                      <p className="text-slate-300">{selectedMember.education}</p>
                    </div>
                  </div>
                  <button onClick={() => setSelectedMember(null)} className="text-slate-400 hover:text-white">
                    <X />
                  </button>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Experience</h4>
                  <p className="text-slate-300">{selectedMember.experience}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {selectedMember.highlights.map((highlight, i) => (
                      <li key={i} className="text-slate-300 flex items-start">
                        <Check className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href={selectedMember.linkedin} className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                  <Linkedin className="w-5 h-5 mr-2" />
                  View LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      title: "Introducing Real-Time Volatility Integration",
      excerpt: "How RISK Protocol's unique approach to market volatility sets a new standard in crypto risk assessment.",
      date: "Oct 4, 2025",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop"
    },
    {
      title: "The Future of Decentralized Insurance",
      excerpt: "Exploring how blockchain technology enables sustainable, transparent insurance models.",
      date: "Sep 28, 2025",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop"
    },
    {
      title: "Why Team Transparency Matters in DeFi",
      excerpt: "Building trust through full disclosure: our commitment to transparency in the crypto space.",
      date: "Sep 15, 2025",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Insights</h2>
          <p className="text-xl text-slate-300">Stay updated with our latest research and developments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-cyan-400 text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-slate-300 mb-4">{post.excerpt}</p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-slate-300 mb-8">
              Interested in partnering with us or learning more about the RISK Protocol? 
              We would love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-cyan-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a href="mailto:hello@surestack.tech" className="text-slate-300 hover:text-cyan-400">
                    hello@surestack.tech
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Github className="w-6 h-6 text-cyan-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">GitHub</h3>
                  <a href="https://github.com/surestack" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400">
                    github.com/surestack
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Shield className="w-6 h-6 text-cyan-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Website</h3>
                  <a href="https://surestack.tech" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400">
                    surestack.tech
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <div className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;