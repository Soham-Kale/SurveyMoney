import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpenIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayCircleIcon,
  ChartBarIcon,
  LightBulbIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'templates', name: 'Survey Templates' },
    { id: 'guides', name: 'How-to Guides' },
    { id: 'best-practices', name: 'Best Practices' },
    { id: 'webinars', name: 'Webinars' },
    { id: 'case-studies', name: 'Case Studies' },
  ];

  const featuredResources = [
    {
      id: 1,
      title: 'Customer Satisfaction Survey Guide',
      description: 'Learn how to measure and improve customer satisfaction',
      category: 'guides',
      type: 'Guide',
      readTime: '10 min read',
      image: '/src/assets/feedback.png',
    },
    {
      id: 2,
      title: 'Employee Engagement Best Practices',
      description: 'Discover proven strategies for engaging employees',
      category: 'best-practices',
      type: 'Best Practice',
      readTime: '15 min read',
      image: '/src/assets/feedback2.png',
    },
  ];

  const popularTemplates = [
    {
      id: 1,
      title: 'Customer Satisfaction (CSAT)',
      category: 'Customer Feedback',
      questions: 10,
      responses: '1M+',
    },
    {
      id: 2,
      title: 'Employee Engagement',
      category: 'Human Resources',
      questions: 15,
      responses: '500K+',
    },
    // Add more templates...
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Survey Resources & Guides
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Everything you need to create effective surveys and gather meaningful insights
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search resources, templates, and guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-lg shadow-sm focus:ring-2 focus:ring-white/20 focus:outline-none"
                />
                <MagnifyingGlassIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Navigation */}
        <div className="flex space-x-4 mb-12 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredResources.map((resource) => (
            <Link
              key={resource.id}
              to={`/resources/${resource.id}`}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{resource.type}</span>
                  <span className="mx-2">•</span>
                  <span>{resource.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <span className="text-primary font-medium hover:text-primary-dark">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Popular Templates Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Popular Templates</h2>
            <Link
              to="/templates"
              className="text-primary hover:text-primary-dark font-medium flex items-center"
            >
              View all templates
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-medium mb-1">{template.title}</h3>
                    <p className="text-sm text-gray-500">{template.category}</p>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {template.responses} responses
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {template.questions} questions
                  </span>
                  <button className="text-primary hover:text-primary-dark font-medium text-sm">
                    Use this template
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <BookOpenIcon className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-lg font-medium">Guides & Tutorials</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Step-by-step instructions for creating effective surveys
            </p>
            <Link
              to="/resources/guides"
              className="text-primary hover:text-primary-dark font-medium"
            >
              Browse guides →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <AcademicCapIcon className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-lg font-medium">Best Practices</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Expert tips and recommendations for survey success
            </p>
            <Link
              to="/resources/best-practices"
              className="text-primary hover:text-primary-dark font-medium"
            >
              Learn more →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <PlayCircleIcon className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-lg font-medium">Webinars</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Live and recorded sessions with survey experts
            </p>
            <Link
              to="/resources/webinars"
              className="text-primary hover:text-primary-dark font-medium"
            >
              Watch now →
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Get the latest survey tips and trends
            </h2>
            <p className="text-gray-600 mb-6">
              Join our newsletter for expert insights, best practices, and industry updates
            </p>
            <form className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;