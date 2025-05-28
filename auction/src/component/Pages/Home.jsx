import { useState } from 'react';
import ProductCard from '../views/home/ProductCardComponent';
import AuctionStatusBadge from '../views/home/AuctionStatusBadge';
import CardLayout from '../layout/CardLayout';
import SectionContainer from '../layout/SectionContainer'
import AuctionFilterSidebar from '../views/home/AuctionFilterSidebar';
import BidFormComponent from '../views/home/BidFormComponent';
import BidHistory from '../views/home/BidHistory';
import CountdownTimerComponent from '../views/home/CountdownTimerComponent';

function App() {
  const [count, setCount] = useState(0);

  const featuredItems = [
    {
      id: 1,
      title: "1967 Shelby GT500",
      description: "Classic American muscle car",
      image: "https://images.unsplash.com/photo-1590933099983-eb674670ace3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fDE5NjclMjBTaGVsYnklMjBHVDUwMCUyMHBpYyUyMHNtYWxsJTIwaW4lMjBzaXplfGVufDB8fDB8fHww",

      currentBid: 125000.00,
      bidsCount: 24,
      timeLeft: "2h 15m",
      status: "live"
    },
    {
      id: 2,
      title: "Patek Philippe Nautilus",
      description: "Rare 5711/1A stainless steel",
      image: "https://images.unsplash.com/photo-1526045431048-f857369baa09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      currentBid: 85000.00,
      bidsCount: 18,
      timeLeft: "1h 45m",
      status: "live"
    },
    {
      id: 3,
      title: "Ferrari 250 GTO",
      description: "1962 model, 1 of 36 made",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      currentBid: 48000000.00,
      bidsCount: 6,
      timeLeft: "4h 30m",
      status: "live"
    },
    {
      id: 4,
      title: "Rolex Daytona Paul Newman",
      description: "Rare 'Paul Newman' dial",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      currentBid: 175000.00,
      bidsCount: 32,
      timeLeft: "3h 10m",
      status: "live"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=80" 
          alt="Luxury auction items" 
          className="w-full h-96 object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center z-20 px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Premier Luxury Auctions</h1>
            <p className="text-xl mb-6">Bid on the world's most exclusive cars, watches, and collectibles</p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Explore Live Auctions
            </button>
          </div>
        </div>
      </div>

      {/* Featured Auctions */}
      <SectionContainer 
        title="Featured Auctions" 
        subtitle="Discover rare and unique items up for bid"
        className="py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map(item => (
            <ProductCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              currentBid={item.currentBid}
              bidsCount={item.bidsCount}
              timeLeft={item.timeLeft}
              className="transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl"
            />
          ))}
        </div>
      </SectionContainer>

      {/* Main Auction Section */}
      <SectionContainer className="py-12 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CardLayout title="Auction Details" className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=80" 
                  alt="Auction item" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <AuctionStatusBadge status="live" />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">1967 Shelby GT500</h2>
                <p className="text-gray-600 mb-4">One of only 2,048 produced. Numbers matching 428ci V8 engine. Documented ownership history.</p>
                
                <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Current Bid</p>
                    <p className="text-2xl font-bold">$125,000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Auction ends in</p>
                    <CountdownTimerComponent />
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Item Details</h3>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <li><span className="font-medium">Year:</span> 1967</li>
                    <li><span className="font-medium">Mileage:</span> 32,450</li>
                    <li><span className="font-medium">Engine:</span> 428ci V8</li>
                    <li><span className="font-medium">Transmission:</span> 4-speed manual</li>
                    <li><span className="font-medium">Color:</span> Candy Apple Red</li>
                    <li><span className="font-medium">Interior:</span> Black leather</li>
                  </ul>
                </div>
              </div>
            </CardLayout>

            <CardLayout title="Place Your Bid" className="mt-8 border border-gray-200 rounded-xl overflow-hidden">
              <div className="p-6">
                <BidFormComponent />
              </div>
            </CardLayout>
          </div>

          <div>
            <AuctionFilterSidebar className="sticky top-4" />
            
            <CardLayout title="Bidding Activity" className="mt-8 border border-gray-200 rounded-xl overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Bid History (24)</h3>
                  <button className="text-sm text-amber-600 hover:text-amber-700">View All</button>
                </div>
                <BidHistory />
              </div>
            </CardLayout>
          </div>
        </div>
      </SectionContainer>

      {/* Upcoming Auctions */}
      <SectionContainer 
        title="Upcoming Auctions" 
        subtitle="Mark your calendar for these exclusive events"
        className="py-12 bg-gray-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              id: 5,
              title: "Classic Car Collection",
              date: "May 15, 2023",
              image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              items: "32 vehicles"
            },
            {
              id: 6,
              title: "Rare Watch Auction",
              date: "June 2, 2023",
              image: "https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              items: "45 timepieces"
            },
            {
              id: 7,
              title: "Fine Art & Sculptures",
              date: "June 18, 2023",
              image: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              items: "28 artworks"
            }
          ].map(item => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-3">{item.date}</p>
                <p className="text-sm text-amber-600 font-medium">{item.items}</p>
                <button className="mt-4 text-sm font-medium text-white bg-gray-800 hover:bg-black py-2 px-4 rounded-lg transition duration-300">
                  View Catalog
                </button>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}

export default App;
