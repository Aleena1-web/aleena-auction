import React from 'react'

function BidHistory() {
  return (
    <>
   <div classname="bg-white rounded-lg shadow-md p-4">
  <h3 classname="font-bold text-lg mb-3 border-b pb-2">Bid History</h3>
  <div classname="space-y-3 max-h-64 overflow-y-auto">
    <div classname="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
      <div classname="flex items-center">
        <div classname="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-3">
          <span classname="text-xs font-semibold">JD</span>
        </div>
        <div>
          <p classname="text-sm font-medium">JohnDoe</p>
          <p classname="text-xs text-gray-500">5 minutes ago</p>
        </div>
      </div>
      <span classname="font-semibold text-yellow-600">$1,250.00</span>
    </div>
    <div classname="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
      <div classname="flex items-center">
        <div classname="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-3">
          <span classname="text-xs font-semibold">AS</span>
        </div>
        <div>
          <p classname="text-sm font-medium">AuctionSarah</p>
          <p classname="text-xs text-gray-500">22 minutes ago</p>
        </div>
      </div>
      <span classname="font-semibold text-yellow-600">$1,200.00</span>
    </div>
    <div classname="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
      <div classname="flex items-center">
        <div classname="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-3">
          <span classname="text-xs font-semibold">CB</span>
        </div>
        <div>
          <p classname="text-sm font-medium">CollectorBob</p>
          <p classname="text-xs text-gray-500">1 hour ago</p>
        </div>
      </div>
      <span classname="font-semibold text-yellow-600">$1,150.00</span>
    </div>
    <div classname="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
      <div classname="flex items-center">
        <div classname="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-3">
          <span classname="text-xs font-semibold">JD</span>
        </div>
        <div>
          <p classname="text-sm font-medium">JohnDoe</p>
          <p classname="text-xs text-gray-500">2 hours ago</p>
        </div>
      </div>
      <span classname="font-semibold text-yellow-600">$1,000.00</span>
    </div>
  </div>
</div>


    </>
  )
}

export default BidHistory
