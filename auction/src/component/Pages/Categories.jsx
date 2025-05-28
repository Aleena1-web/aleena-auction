import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  // Luxury car categories data
  const carCategories = [
    {
      id: 1,
      name: 'Supercars',
      image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      items: 42,
      startingPrice: '$250,000'
    },
    {
      id: 2,
      name: 'Classic Cars',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80',
      items: 36,
      startingPrice: '$120,000'
    },
    {
      id: 3,
      name: 'Hypercars',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      items: 18,
      startingPrice: '$1,000,000'
    },
    {
      id: 4,
      name: 'Luxury SUVs',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      items: 29,
      startingPrice: '$90,000'
    },
    {
      id: 5,
      name: 'Muscle Cars',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
      items: 24,
      startingPrice: '$75,000'
    },
    {
      id: 6,
      name: 'Concept Cars',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      items: 8,
      startingPrice: '$500,000'
    },
    {
      id: 7,
      name: 'Rare Collectibles',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      items: 12,
      startingPrice: '$2,500,000'
    },
    {
      id: 8,
      name: 'Racing Legends',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      items: 15,
      startingPrice: '$3,000,000'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
          alt="Luxury Cars"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Premium Auto Collection</h1>
          <p className="text-xl text-white max-w-2xl mx-auto mb-8">
            Curated selection of the world's most exclusive vehicles
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
            View Live Auctions
          </button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Browse By Category</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {carCategories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-500">
              <div className="h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm">{category.items} vehicles</span>
                  <span className="text-yellow-400 font-medium">{category.startingPrice}</span>
                </div>
              </div>
              <Link 
                to={`/category/${category.id}`}
                className="absolute inset-0 z-10"
              ></Link>
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {category.items} lots
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Auction */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Featured Auction"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="text-yellow-500 font-semibold">FEATURED AUCTION</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">1967 Ferrari 275 GTB/4</h2>
              <p className="text-gray-300 mb-8">
                One of only 330 examples produced, this matching-numbers Ferrari is considered by many to be the most beautiful car ever made. Finished in Rosso Corsa over Nero leather.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <span className="block text-gray-400">Current Bid</span>
                  <span className="text-2xl font-bold text-yellow-500">$3,250,000</span>
                </div>
                <div>
                  <span className="block text-gray-400">Auction Ends In</span>
                  <span className="text-2xl font-bold">2d 14h 32m</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition duration-300 flex-1">
                  Place Bid
                </button>
                <button className="bg-transparent hover:bg-gray-800 text-white font-bold py-3 px-8 border border-white rounded-full transition duration-300 flex-1">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Get Exclusive Access</h2>
          <p className="text-gray-300 mb-8">
            Join our newsletter to receive early access to private auctions, VIP events, and curated collections before they go public.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full transition duration-300 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;