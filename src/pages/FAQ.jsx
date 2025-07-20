import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, MessageCircle, Mail, Phone } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'membership', label: 'Membership' },
    { id: 'events', label: 'Events' },
    { id: 'technical', label: 'Technical' },
    { id: 'career', label: 'Career' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: "What is The Unspecified Community?",
      answer: "The Unspecified Community is a girls-powered tech and design community..."
    },
    {
      id: 2,
      category: 'membership',
      question: "Who can join The Unspecified Community?",
      answer: "Our community is primarily designed for college students..."
    },
    {
      id: 3,
      category: 'membership',
      question: "How much does it cost to join?",
      answer: "Membership in The Unspecified Community is completely free!..."
    },
    {
      id: 4,
      category: 'membership',
      question: "What is the application process like?",
      answer: "Our application process is straightforward and designed..."
    },
    {
      id: 5,
      category: 'events',
      question: "What types of events do you organize?",
      answer: "We organize a variety of events including technical workshops..."
    },
    {
      id: 6,
      category: 'technical',
      question: "What technologies and skills can I learn?",
      answer: "Our community covers a wide range of technologies..."
    },
    {
      id: 7,
      category: 'career',
      question: "How does the mentorship program work?",
      answer: "Our mentorship program pairs members with experienced professionals..."
    },
    {
      id: 8,
      category: 'general',
      question: "What makes Unspecified 3.0 different?",
      answer: "Unspecified 3.0 represents our evolution to a portfolio-driven..."
    },
    {
      id: 9,
      category: 'events',
      question: "Are events recorded for those who can't attend live?",
      answer: "Yes! We record most of our workshops and talks..."
    },
    {
      id: 10,
      category: 'career',
      question: "Do you help with job placement?",
      answer: "While we don't guarantee job placement, we provide extensive career support..."
    },
    {
      id: 11,
      category: 'technical',
      question: "Do I need prior coding experience to join?",
      answer: "Not at all! We welcome members from all experience levels..."
    },
    {
      id: 12,
      category: 'general',
      question: "How can I stay updated with community activities?",
      answer: "Once you join, you'll receive regular email updates..."
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <PageTransition>
      {/* ...same full JSX code here (unchanged structurally)... */}
    </PageTransition>
  );
};

export default FAQ;
