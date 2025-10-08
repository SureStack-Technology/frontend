import React, { useState, useEffect } from 'react';
import { client } from "../../sanity.js";
import imageUrlBuilder from '@sanity/image-url';
import dayjs from 'dayjs';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source)
}

// Card Template
const BlogPostCard = ({ post }) => (
  <article className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition">
    <img src={urlFor(post.mainImage).url()} alt="Image" className="w-full h-48 object-cover" />
    <div className="p-6">
        <p className="text-cyan-400 text-sm mb-2">{dayjs(post.publishedAt).format('MMM D, YYYY')}</p>
        <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
        <p className="text-slate-300 mb-4">{post.excerpt}</p>
        <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold">
            Read More →
        </a>
    </div>
  </article>
);

const POSTS_QUERY = `*[_type == "post"]|order(publishedAt asc)`;

const options = { next: { revalidate: 30 } };

const Blog = () => {

    const [postData, setPost] = useState([]);

    useEffect(() => {
        client
            .fetch(POSTS_QUERY, {}, options)
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);

    return (
        <section id="blog" className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Latest Insights</h2>
                    <p className="text-xl text-slate-300">Stay updated with our latest research and developments</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {postData.map((post, index) => (
                        <BlogPostCard key={index} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;