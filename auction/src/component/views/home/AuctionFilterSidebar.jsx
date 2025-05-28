import React from 'react'

function AuctionFilterSidebar() {
  return (
    <>
<div className="bg-white p-4 rounded-lg shadow-md">
  <h3 className="font-bold text-lg mb-4 border-b pb-2">Filter Auctions</h3>
  <div className="mb-5">
    <h4 className="font-semibold text-sm uppercase text-gray-500 mb-2">Categories</h4>
    <ul className="space-y-2">
      <li className="flex items-center">
        <input id="art" type="checkbox" className="rounded text-yellow-500 focus:ring-yellow-500" />
        <label htmlFor="art" className="ml-2 text-sm">Art &amp; Collectibles</label>
      </li>
      <li className="flex items-center">
        <input id="jewelry" type="checkbox" className="rounded text-yellow-500 focus:ring-yellow-500" defaultChecked />
        <label htmlFor="jewelry" className="ml-2 text-sm">Jewelry &amp; Watches</label>
      </li>
      <li className="flex items-center">
        <input id="electronics" type="checkbox" className="rounded text-yellow-500 focus:ring-yellow-500" />
        <label htmlFor="electronics" className="ml-2 text-sm">Electronics</label>
      </li>
      <li className="flex items-center">
        <input id="vehicles" type="checkbox" className="rounded text-yellow-500 focus:ring-yellow-500" />
        <label htmlFor="vehicles" className="ml-2 text-sm">Vehicles</label>
      </li>
    </ul>
  </div>
  <div className="mb-5">
    <h4 className="font-semibold text-sm uppercase text-gray-500 mb-2">Price Range</h4>
    <div className="flex items-center justify-between mb-2">
      <input type="number" placeholder="Min" className="w-20 p-1 border rounded text-sm" />
      <span className="mx-2">to</span>
      <input type="number" placeholder="Max" className="w-20 p-1 border rounded text-sm" />
    </div>
    <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-3 rounded text-sm transition">
      Apply
    </button>
  </div>
  <div className="mb-5">
    <h4 className="font-semibold text-sm uppercase text-gray-500 mb-2">Auction Status</h4>
    <select className="w-full p-2 border rounded text-sm focus:ring-yellow-500 focus:border-yellow-500">
      <option>All Auctions</option>
      <option>Live Auctions</option>
      <option>Upcoming Auctions</option>
      <option>Ended Auctions</option>
    </select>
  </div>
  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded font-medium transition">
    Filter Results
  </button>
</div>
   
    </>
  )
}

export default AuctionFilterSidebar
