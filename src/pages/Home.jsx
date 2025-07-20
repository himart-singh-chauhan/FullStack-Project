import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Palette, Users, Trophy, Calendar, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import AnimatedSection from '../components/AnimateSection';
import CounterAnimation from '../components/CounterAnimation';

const Home = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Hands-on Learning",
      description: "Build real projects with cutting-edge technologies",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative Projects",
      description: "Design and develop innovative solutions",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Strong Network",
      description: "Connect with like-minded individuals",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Recognition",
      description: "Showcase your work and get recognized",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const stats = [
    { number: 500, suffix: '+', label: 'Active Members' },
    { number: 50, suffix: '+', label: 'Partner Colleges' },
    { number: 100, suffix: '+', label: 'Events Hosted' },
    { number: 95, suffix: '%', label: 'Success Rate' }
  ];

  return (
    <PageTransition>
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Choose <span className="text-red-600">Our Community</span>?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join a vibrant community where your passion for technology and design meets opportunity
            </motion.p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                direction="up"
              >
                <motion.div
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="bg-white p-8 rounded-2xl text-center shadow-lg border border-gray-100 hover:border-red-200 transition-all duration-300 group"
                >
                  <motion.div 
                    className={`bg-gradient-to-r ${feature.color} p-4 rounded-xl inline-block mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-red-100">Making a difference in tech education</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
                >
                  <div className="text-5xl font-bold text-white mb-2">
                    <CounterAnimation end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-red-100 font-medium">{stat.label}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Take the first step towards building your future in tech and design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/join"
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/about"
                  className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>Learn More</span>
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest from Our Community</h2>
            <p className="text-xl text-gray-600">Stay updated with recent events and achievements</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Annual Tech Conference 2024",
                description: "Join us for our biggest event of the year with 50+ speakers and workshops.",
                image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400",
                date: "March 15, 2024",
                type: "Event"
              },
              {
                title: "New Partnership with Google",
                description: "Exciting collaboration bringing more opportunities for our members.",
                image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
                date: "February 28, 2024",
                type: "News"
              },
              {
                title: "Member Spotlight: Sarah's Journey",
                description: "From community member to Google software engineer in 18 months.",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
                date: "February 20, 2024",
                type: "Success Story"
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{item.date}</span>
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="text-red-600 font-semibold text-sm flex items-center space-x-1"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12" delay={0.3}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/blog"
                className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors inline-flex items-center space-x-2"
              >
                <span>View All Updates</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
