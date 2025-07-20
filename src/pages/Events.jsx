import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, Filter, Search, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Events = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'hackathon', label: 'Hackathons' },
    { id: 'conference', label: 'Conferences' },
    { id: 'networking', label: 'Networking' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Design Systems Workshop",
      date: "2024-02-15",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual",
      attendees: 45,
      maxAttendees: 50,
      type: "workshop",
      image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Learn to build scalable design systems from industry experts.",
      featured: true
    },
    {
      id: 2,
      title: "Spring Hackathon 2024",
      date: "2024-03-20",
      time: "9:00 AM - 9:00 PM",
      location: "San Francisco, CA",
      attendees: 120,
      maxAttendees: 150,
      type: "hackathon",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "48-hour hackathon focused on social impact solutions.",
      featured: true
    },
    {
      id: 3,
      title: "Women in Tech Conference",
      date: "2024-04-10",
      time: "10:00 AM - 6:00 PM",
      location: "New York, NY",
      attendees: 200,
      maxAttendees: 300,
      type: "conference",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Annual conference celebrating women leaders in technology.",
      featured: false
    },
    {
      id: 4,
      title: "React Advanced Workshop",
      date: "2024-02-28",
      time: "1:00 PM - 4:00 PM",
      location: "Virtual",
      attendees: 30,
      maxAttendees: 40,
      type: "workshop",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Deep dive into advanced React patterns and performance optimization.",
      featured: false
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Annual Tech Conference 2023",
      date: "2023-11-15",
      attendees: 250,
      type: "conference",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400",
      highlights: ["50+ Speakers", "20+ Workshops", "500+ Attendees"]
    },
    {
      id: 6,
      title: "Winter Hackathon 2023",
      date: "2023-12-10",
      attendees: 180,
      type: "hackathon",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
      highlights: ["30+ Projects", "10+ Prizes", "48 Hours of Coding"]
    },
    {
      id: 7,
      title: "UI/UX Design Bootcamp",
      date: "2023-10-20",
      attendees: 60,
      type: "workshop",
      image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400",
      highlights: ["5-Day Intensive", "Portfolio Projects", "Industry Mentors"]
    }
  ];

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesFilter = selectedFilter === 'all' || event.type === selectedFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                🎉 Join Our Events
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-red-600">Events</span> & Workshops
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our community events, workshops, and hackathons. Learn, network, and grow with like-minded individuals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <div className="flex space-x-2">
                  {filters.map((filter) => (
                    <motion.button
                      key={filter.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedFilter(filter.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedFilter === filter.id
                          ? 'bg-red-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {filter.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-xl text-gray-600">Don't miss out on these amazing opportunities</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                    event.featured ? 'ring-2 ring-red-200' : ''
                  }`}
                >
                  {event.featured && (
                    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 text-sm font-semibold">
                      ⭐ Featured Event
                    </div>
                  )}
                  
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{event.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-red-600" />
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Clock className="h-4 w-4 mr-2 text-red-600" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-red-600" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Users className="h-4 w-4 mr-2 text-red-600" />
                        {event.attendees}/{event.maxAttendees} registered
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div 
                          className="bg-red-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                        />
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Register Now</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
              <p className="text-xl text-gray-600">Celebrating our successful events</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex items-center text-gray-600 text-sm mb-4">
                      <Calendar className="h-4 w-4 mr-2 text-red-600" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mb-4">
                      <Users className="h-4 w-4 mr-2 text-red-600" />
                      {event.attendees} attendees
                    </div>
                    <div className="space-y-2">
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-2" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Want to Host an Event?</h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Have an idea for a workshop or event? We'd love to collaborate with you!
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Propose an Event</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Events;