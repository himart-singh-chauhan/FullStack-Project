import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Users, Trophy, Calendar, Award, Lightbulb, Target } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Community = () => {
  const perks = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Hands-on Skill Development",
      description: "Learn cutting-edge technologies through real-world projects and mentorship",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative Projects",
      description: "Work on innovative design and development projects that challenge your creativity",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Recognition Opportunities",
      description: "Showcase your work and get recognized by industry professionals",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Events & Workshops",
      description: "Participate in exclusive events, workshops, and networking sessions",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Mentorship Program",
      description: "Connect with experienced professionals and industry leaders",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Career Guidance",
      description: "Get personalized career advice and job placement assistance",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  const events = [
    {
      title: "Annual Tech Conference",
      date: "March 2024",
      attendees: "200+",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Design Workshop Series",
      date: "Monthly",
      attendees: "50+",
      image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Hackathon 2024",
      date: "June 2024",
      attendees: "150+",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400"
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
                Our <span className="text-red-600">Community</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join a vibrant community of passionate individuals who are shaping the future of technology and design.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: "500+", label: "Active Students", sub: "Across multiple disciplines", bg: "bg-red-600", text: "text-white", subText: "text-red-100" },
                { value: "50+", label: "Partner Colleges", sub: "Nationwide network", bg: "bg-gray-900", text: "text-white", subText: "text-gray-300" },
                { value: "100+", label: "Events Hosted", sub: "Workshops, hackathons, and more", bg: "bg-red-600", text: "text-white", subText: "text-red-100" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`text-center ${stat.bg} ${stat.text} p-8 rounded-lg`}
                >
                  <div className="text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-xl">{stat.label}</div>
                  <p className={`${stat.subText} mt-2`}>{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Perks</h2>
              <p className="text-xl text-gray-600">What makes our community special</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {perks.map((perk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`${perk.color} p-3 rounded-lg inline-block mb-4`}>
                    {perk.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{perk.title}</h3>
                  <p className="text-gray-600">{perk.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Gallery */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Highlights</h2>
              <p className="text-xl text-gray-600">Some of our most memorable events</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex justify-between items-center text-gray-600">
                      <span>{event.date}</span>
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
                        {event.attendees} attendees
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Join?</h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Become part of our growing community and start your journey in tech and design today.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Join Our Community
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Community;
