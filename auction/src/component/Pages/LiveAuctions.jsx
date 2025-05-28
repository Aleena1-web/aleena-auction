import React from 'react';

function LiveAuctions() {
  const auctions = [
    {
      id: 1,
      title: 'Rare NFT Art #01',
      image: 'https://media.istockphoto.com/id/1174735766/photo/the-heads-of-chaos.jpg?s=612x612&w=0&k=20&c=5nbaOucqVqrElY6hi2m-JJzmrJdSWQM7DQoJdwHD72w=',
      currentBid: '2.5 ETH',
      timeLeft: '2h 15m',
    },
    {
      id: 2,
      title: 'Vintage Crypto Card',
      image: 'https://images.unsplash.com/photo-1650824665270-351c45e32f8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VmludGFnZSUyMENyeXB0byUyMENhcmQlMjBwaWMlMjBzbWFsbCUyMGluJTIwc2l6ZXxlbnwwfHwwfHx8MA%3D%3D',
      currentBid: '1.8 ETH',
      timeLeft: '1h 42m',
    },
    {
      id: 3,
      title: '3D Model Collectible',
      image: 'https://plus.unsplash.com/premium_photo-1744102094827-bba5540c5011?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M0QlMjBNb2RlbCUyMENvbGxlY3RpYmxlJTIwcGljJTIwc21hbGwlMjBpbiUyMHNpemV8ZW58MHx8MHx8fDA%3D',
      currentBid: '3.2 ETH',
      timeLeft: '3h 9m',
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Live Auctions</h2>
        <p className="text-gray-600 text-lg mb-12">
          Place your bids now. Don’t miss your chance to own exclusive digital assets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {auctions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover rounded-t-2xl"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-1">
                  Current Bid: <span className="font-semibold">{item.currentBid}</span>
                </p>
                <p className="text-gray-600 mb-4">
                  Time Left: <span className="font-semibold">{item.timeLeft}</span>
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full transition-colors duration-300">
                  Place Bid
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LiveAuctions;
