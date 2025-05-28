import React from 'react'

function BidFormComponent() {
  return (
    <>
 <div className="bg-white rounded-lg shadow-md p-5">
  <h3 className="font-bold text-lg mb-4">Place Your Bid</h3>
  <div className="mb-4 p-3 bg-gray-50 rounded">
    <div className="flex justify-between text-sm mb-1">
      <span className="text-gray-600">Current Bid:</span>
      <span className="font-semibold">$1,250.00</span>
    </div>
    <div className="flex justify-between text-sm">
      <span className="text-gray-600">Minimum Increment:</span>
      <span className="font-semibold">$50.00</span>
    </div>
  </div>
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">Your Bid Amount</label>
    <div className="relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-gray-500 sm:text-sm">$</span>
      </div>
      <input type="number" className="focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-7 pr-12 py-2 border-gray-300 rounded-md" placeholder={0.00} />
      <div className="absolute inset-y-0 right-0 flex items-center">
        <span className="text-gray-500 bg-gray-100 h-full px-3 flex items-center rounded-r-md">USD</span>
      </div>
    </div>
    <p className="mt-1 text-xs text-gray-500">Enter $1,300.00 or more</p>
  </div>
  <div className="mb-4">
    <label className="flex items-center">
      <input type="checkbox" className="rounded text-yellow-500 focus:ring-yellow-500" />
      <span className="ml-2 text-sm text-gray-700">Automatically increase my bid to maintain position</span>
    </label>
  </div>
  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded font-medium transition">
    Submit Bid
  </button>
  <div className="mt-4 pt-3 border-t border-gray-200">
    <p className="text-xs text-gray-500">By placing a bid, you agree to our <a href="#" className="text-yellow-600 hover:underline">Terms of Service</a> and <a href="#" className="text-yellow-600 hover:underline">Bidding Policy</a>.</p>
  </div>
</div>
  
    </>
  )
}

export default BidFormComponent
