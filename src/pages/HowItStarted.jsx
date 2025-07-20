import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Rocket, Trophy, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const HowItStarted = () => {
  const milestones = [
    {
      year: "2020",
      title: "The Spark",
      description: "5 passionate students came together with a vision to create an inclusive tech community",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      year: "2021",
      title: "First Launch",
      description: "Launched our first community platform with 50 members from 5 colleges",
      icon: <Rocket className="h-8 w-8" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      year: "2022",
      title: "Growing Strong",
      description: "Reached 200+ members and hosted our first major tech conference",
      icon: <Users className="h-8 w-8" />,
      color: "bg-green-100 text-green-600"
    },
    {
      year: "2023",
      title: "Recognition",
      description: "Won multiple awards for community impact and innovation in tech education",
      icon: <Trophy className="h-8 w-8" />,
      color: "bg-red-100 text-red-600"
    },
    {
      year: "2024",
      title: "Present Day",
      description: "500+ active members across 50+ colleges, continuing to grow and inspire",
      icon: <ArrowRight className="h-8 w-8" />,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-red-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                How It All <span className="text-red-600">Started</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From 5 passionate students to a thriving community of 500+ members. This is our story of growth, innovation, and impact.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold text-gray-900">The Beginning</h2>
                <p className="text-lg text-gray-600">
                  It all started in 2020 when five students from different backgrounds came together with a shared vision: to create a supportive, inclusive community where women in tech could thrive, learn, and grow together.
                </p>
                <p className="text-lg text-gray-600">
                  What began as informal study sessions and coding meetups has evolved into a comprehensive platform that empowers hundreds of students across the country.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <div className="text-center">
                  <div className="text-6xl font-bold text-red-600 mb-4">5</div>
                  <p className="text-xl text-gray-900 font-semibold">Founding Members</p>
                  <p className="text-gray-600 mt-2">Who started with just a dream and determination</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Growth Journey</h2>
              <p className="text-xl text-gray-600">Key milestones that shaped our community</p>
            </motion.div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-8"
                >
                  <div className={`${milestone.color} p-4 rounded-full flex-shrink-0`}>
                    {milestone.icon}
                  </div>
                  <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-2xl font-bold text-red-600">{milestone.year}</span>
                      <h3 className="text-2xl font-semibold text-gray-900">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-6">Looking to the Future</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Our journey is far from over. We're committed to expanding our reach, enhancing our programs, and continuing to empower the next generation of female leaders in technology.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">1000+</div>
                  <div className="text-gray-300">Members by 2025</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
                  <div className="text-gray-300">Partner Colleges</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">Global</div>
                  <div className="text-gray-300">Expansion</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default HowItStarted;
