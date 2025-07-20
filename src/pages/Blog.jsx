import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag } from 'lucide-react';
import AnimatedSection from '../components/AnimateSection';

const blogPosts = [
  {
    title: 'The Future of Women in Tech',
    date: 'July 15, 2024',
    readTime: '5 min read',
    category: 'Inspiration',
    image: 'https://source.unsplash.com/600x400/?technology,women',
  },
  {
    title: 'Top 10 UI/UX Trends in 2024',
    date: 'June 28, 2024',
    readTime: '7 min read',
    category: 'Design',
    image: 'https://source.unsplash.com/600x400/?design,ui',
  },
  {
    title: 'How to Land Your First Tech Internship',
    date: 'June 10, 2024',
    readTime: '6 min read',
    category: 'Career',
    image: 'https://source.unsplash.com/600x400/?career,internship',
  },
];

const Blog = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <AnimatedSection direction="up">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Latest from Our Blog
        </h2>
      </AnimatedSection>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
        {blogPosts.map((post, index) => (
          <AnimatedSection
            key={index}
            delay={index * 0.1}
            className="bg-gray-50 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <motion.img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
              <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                <span className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Tag className="h-4 w-4" />
                  <span>{post.category}</span>
                </span>
              </div>
              <button className="text-red-600 hover:underline font-medium">
                Read More →
              </button>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Blog;
