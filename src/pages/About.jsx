import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Code, Palette, Trophy } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About = () => {
  const phases = [
    {
      version: "1.0",
      title: "Ideation",
      description: "Started with a simple idea to connect passionate individuals",
      color: "bg-red-100 text-red-600"
    },
    {
      version: "2.0",
      title: "First Launch",
      description: "Launched our first community platform with basic features",
      color: "bg-gray-100 text-gray-600"
    },
    {
      version: "3.0",
      title: "Current Success",
      description: "Portfolio-driven, skills-first approach with real-world projects",
      color: "bg-black text-white"
    }
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-red-600">Our Community</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built by students, for students. We're creating the future of tech and design education through hands-on experience and real-world projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-3">
                  <Target className="h-8 w-8 text-red-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600">
                  To empower the next generation of female leaders in technology and design by providing hands-on learning experiences, mentorship, and a supportive community that fosters creativity and innovation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-3">
                  <Eye className="h-8 w-8 text-red-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600">
                  A world where women are equally represented in technology and design fields, leading innovation and creating solutions that make a positive impact on society.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Unspecified 3.0 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Introducing <span className="text-red-600">Community 3.0</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our latest evolution focuses on portfolio-driven, skills-first approach with real client work and industry partnerships.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <Code className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real Projects</h3>
                <p className="text-gray-600">Work on actual client projects and build a portfolio that stands out</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <Palette className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Design Focus</h3>
                <p className="text-gray-600">Learn from industry professionals and create stunning designs</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <Trophy className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Recognition</h3>
                <p className="text-gray-600">Get recognized for your work and build your professional reputation</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600">From a small idea to a thriving community</p>
            </motion.div>

            <div className="space-y-8">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className="max-w-md">
                    <div className={`${phase.color} px-6 py-4 rounded-lg`}>
                      <div className="text-2xl font-bold mb-2">{phase.version}</div>
                      <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                      <p className="opacity-90">{phase.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
