import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'Car enthusiast with 20+ years in luxury automotive industry',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      social: ['fab fa-linkedin', 'fab fa-twitter']
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Head of Auctions',
      bio: 'Former Sotheby\'s automotive specialist with a passion for rare finds',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      social: ['fab fa-linkedin', 'fab fa-instagram']
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      role: 'Client Relations',
      bio: 'Connecting collectors with their dream vehicles since 2015',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
      social: ['fab fa-linkedin', 'fab fa-facebook']
    }
  ];

  const stats = [
    { value: '250+', label: 'Luxury Cars Auctioned' },
    { value: '$1.2B', label: 'Total Sales' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Countries Served' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1583&q=80" 
          alt="Luxury Cars"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Redefining luxury automotive auctions since 2010
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Our Mission"
              className="w-full rounded-xl shadow-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <span className="text-yellow-500 font-semibold">OUR MISSION</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Excellence in Every Detail</h2>
            <p className="text-gray-600 mb-6">
              At BidMaster, we've transformed the luxury car auction experience by combining cutting-edge technology with white-glove service. Our platform connects discerning collectors with the world's most exceptional vehicles.
            </p>
            <p className="text-gray-600 mb-8">
              Founded by a team of automotive experts and technology innovators, we've curated over $1.2 billion in sales while maintaining an industry-leading 98% client satisfaction rate.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition duration-300">
                Our Auction Process
              </button>
              <button className="bg-transparent hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 border border-gray-300 rounded-full transition duration-300">
                View Testimonials
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-yellow-500 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Experts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team combines decades of automotive expertise with a passion for collector cars
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-500">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-yellow-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  {member.social.map((icon, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="text-gray-400 hover:text-yellow-500 transition duration-300"
                    >
                      <i className={`${icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Ready to Join Our Community?</h2>
          <p className="text-black/80 mb-8 max-w-2xl mx-auto">
            Register today to access exclusive auctions, private viewings, and personalized collecting advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Create Free Account
            </button>
            <button className="bg-white hover:bg-gray-100 text-black font-bold py-3 px-8 rounded-full transition duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
