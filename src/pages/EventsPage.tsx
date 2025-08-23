import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  type: 'upcoming' | 'past';
  attendees?: number;
}

const EventsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const events: Event[] = [
    {
      id: 1,
      title: "Islamic Knowledge Workshop",
      date: "2024-02-15",
      time: "2:00 PM - 4:00 PM",
      location: "SEU Auditorium",
      description: "Join us for an enlightening workshop on Islamic principles and their application in modern life.",
      image: "https://images.pexels.com/photos/8923775/pexels-photo-8923775.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "upcoming",
      attendees: 45
    },
    {
      id: 2,
      title: "March for Gaza | SEU x BUTEX",
      date: "2025-04-13",
      time: "12:00 PM - 04:00 PM",
      location: "SEU Main Campus to Shahbagh",
      description: "he students of Southeast University and Bangladesh University of Textiles (BUTEX) united for a powerful cause — the MARCH FOR GAZA. From Tejgaon to Shahbagh, we walked together in solidarity with the oppressed, raising our voices against injustice and calling for peace in Gaza.",
      image: "/marchForGaza.jpg",
      type: "past",
      attendees: 700
    },
    {
      id: 3,
      title: "Anti-Valentine's Day Campaign",
      date: "2025-02-06",
      time: "3:00 PM - 6:00 PM",
      location: "SEU Campus",
      description: "Spreading the message of Islam through peaceful street dawah activities.",
      image: "/valan.jpg",
      type: "past",
      attendees: 25
    },
    {
      id: 4,
      title: "Community Iftar",
      date: "2024-03-25",
      time: "6:30 PM - 8:00 PM",
      location: "SEU Cafeteria",
      description: "Breaking fast together as a community during the holy month of Ramadan.",
      image: "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "past",
      attendees: 120
    },
    {
      id: 5,
      title: "Islamic History Seminar",
      date: "2024-01-05",
      time: "1:00 PM - 3:00 PM",
      location: "SEU Conference Room",
      description: "Exploring the rich history of Islam and its contributions to civilization.",
      image: "https://images.pexels.com/photos/8923776/pexels-photo-8923776.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "past",
      attendees: 35
    }
  ];

  const filteredEvents = events.filter(event => 
    filter === 'all' || event.type === filter
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-teal-600 to-amber-600 text-white py-16 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">Events & Announcements</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto animate-slide-up delay-200">
            Stay updated with our latest events, workshops, and community activities
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        {/* Filter Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 animate-slide-up">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Our Events</h2>
          <div className="flex items-center space-x-4">
            <Filter className="text-gray-600" size={20} />
            <div className="flex space-x-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All Events
              </button>
              <button
                onClick={() => setFilter('upcoming')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'upcoming'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setFilter('past')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'past'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Past Events
              </button>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up delay-200">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.type === 'upcoming'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {event.type === 'upcoming' ? 'Upcoming' : 'Past Event'}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar size={16} />
                    <span className="text-sm">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock size={16} />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin size={16} />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  {event.attendees && (
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users size={16} />
                      <span className="text-sm">{event.attendees} attendees</span>
                    </div>
                  )}
                </div>

                {event.type === 'upcoming' && (
                  <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors duration-300 font-medium">
                    Register Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
            <p className="text-gray-500">Check back later for upcoming events and activities.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;