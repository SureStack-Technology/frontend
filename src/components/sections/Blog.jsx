// src/components/sections/Blog.jsx
import React from 'react';

// Modularized blog post card
const BlogPostCard = ({ post }) => (
  <article className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition">
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
);

const blogPostsData = [
  // Keeping data outside the component
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

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Insights</h2>
          <p className="text-xl text-slate-300">Stay updated with our latest research and developments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPostsData.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;