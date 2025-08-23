import React, { useState } from 'react';
import { BookOpen, Video, FileText, Search, Download, Eye, Filter } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: 'article' | 'video' | 'pdf';
  category: string;
  url: string;
  thumbnail: string;
  author?: string;
  date: string;
}

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const resources: Resource[] = [
    {
      id: 6,
      title: "Bangladesh 2.0",
      description: "Learn about the principles of Islamic banking and finance in the modern world.",
      type: "video",
      category: "Islamic Socity",
      url: "https://www.youtube.com/watch?v=AM-i6Qc-KxE",
      thumbnail: "https://i.ytimg.com/an_webp/AM-i6Qc-KxE/mqdefault_6s.webp?du=3000&sqp=CPTWpMUG&rs=AOn4CLB2SJxkVZtnzlEco-aiOF9J4P208A",
      author: "Dr. Sarah Ahmed",
      date: "2024-02-01"
    },
    {
      id: 2,
      title: "হারানো খিলাফত",
      description: "Listen to the melodious recitation of Surah Al-Fatiha with English translation and commentary.",
      type: "article",
      category: "History",
      url: "https://hoytoba.com/history/harano-khilafot",
      thumbnail: "https://cms.bibijaan.com/wp-content/uploads/2020/04/harano-khilafot.jpg",
      author: "আহমাদ উসমান",
      date: "2020-01-20"
    },
    {
      id: 3,
      title: "সখী ভালোবাসা কারে কয়",
      description: "A detailed PDF guide on applying Islamic ethical principles in contemporary society.",
      type: "article",
      category: "Islamic Ethics",
      url: "https://hoytoba.com/sokhi-valobasha-kare-koy",
      thumbnail: "https://cms.bibijaan.com/wp-content/uploads/2011/10/sokhi-valobasha-kare-koy.jpg",
      author: " স্বপ্নচারী আব্দুল্লাহ",
      date: "2011-01-10"
    },
    {
      id: 4,
      title: "ডোপামিন ডিটক্স: নাফসকে নিয়ন্ত্রণে আনার উপায়",
      description: "An inspiring video series about the life and teachings of Prophet Muhammad (Peace be upon him).",
      type: "video",
      category: "Productive",
      url: "https://youtu.be/SFWPfq21x_s?si=Bf8E14xan5vhL4R2",
      thumbnail: "https://i.ytimg.com/an_webp/SFWPfq21x_s/mqdefault_6s.webp?du=3000&sqp=CLLipMUG&rs=AOn4CLCQio6flzNMGzD3ShxFZUNBOfeGMw",
      author: "Sheikh Abdullah",
      date: "2024-01-25"
    },
    {
      id: 5,
      title: "সংশয়",
      description: "A collection of essential daily prayers and supplications with Arabic text and translations.",
      type: "article",
      category: "Duas",
      url: "https://hoytoba.com/pearl/songshoy",
      thumbnail: "https://cms.bibijaan.com/wp-content/uploads/2020/01/behind-prison-bars.jpg",
      author: "Islamic Center",
      date: "2024-01-30"
    },
    {
      id: 1,
      title: "হাসবুনাল্লা-হু ওয়া নি'মাল ওয়াকীল",
      description: "A comprehensive guide to understanding the fundamental pillars of Islamic faith and practice.",
      type: "article",
      category: "Spritual",
      url: "https://hoytoba.com/hasbunallahu-wanikmal-wakil",
      thumbnail: "https://cms.bibijaan.com/wp-content/uploads/2018/07/46849201_439181363571957_2039943289020350464_n.jpg",
      author: "Bujhtesina Bishoyta",
      date: "2025-01-15"
    }
  ];

  const categories = ['all', ...Array.from(new Set(resources.map(r => r.category)))];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <FileText size={16} />;
      case 'video':
        return <Video size={16} />;
      case 'pdf':
        return <Download size={16} />;
      default:
        return <BookOpen size={16} />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article':
        return 'bg-blue-100 text-blue-800';
      case 'video':
        return 'bg-red-100 text-red-800';
      case 'pdf':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-teal-600 to-amber-600 text-white py-16 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">Islamic Resources</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto animate-slide-up delay-200">
            Explore our collection of authentic Islamic knowledge, articles, videos, and educational materials
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-slide-up">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedType === 'all'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedType('article')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedType === 'article'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Articles
              </button>
              <button
                onClick={() => setSelectedType('video')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedType === 'video'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Videos
              </button>
              <button
                onClick={() => setSelectedType('pdf')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedType === 'pdf'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                PDFs
              </button>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up delay-200">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={resource.thumbnail}
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getTypeColor(resource.type)}`}>
                    {getTypeIcon(resource.type)}
                    <span className="capitalize">{resource.type}</span>
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-teal-600 font-medium">{resource.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{resource.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  {resource.author && <span>By {resource.author}</span>}
                  <span>{new Date(resource.date).toLocaleDateString()}</span>
                </div>

                {/* FIXED SECTION */}
                <div className="flex space-x-2">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors duration-300 font-medium flex items-center justify-center space-x-2"
                  >
                    <Eye size={16} />
                    <span>View</span>
                  </a>
                  {resource.type === 'pdf' && (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center"
                    >
                      <Download size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No resources found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage;
