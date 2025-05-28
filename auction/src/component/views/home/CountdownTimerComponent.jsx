import React from 'react'

function CountdownTimerComponent() {
  return (
    <>
     <div className="bg-gray-800 text-white p-4 rounded-lg">
  <h3 className="text-lg font-semibold mb-3 text-center">Auction Ends In</h3>
  <div className="flex justify-center space-x-3">
    <div className="text-center">
      <div className="bg-gray-700 rounded-lg p-2 w-16">
        <span className="text-2xl font-bold">03</span>
      </div>
      <span className="text-xs mt-1 block">Days</span>
    </div>
    <div className="text-center">
      <div className="bg-gray-700 rounded-lg p-2 w-16">
        <span className="text-2xl font-bold">12</span>
      </div>
      <span className="text-xs mt-1 block">Hours</span>
    </div>
    <div className="text-center">
      <div className="bg-gray-700 rounded-lg p-2 w-16">
        <span className="text-2xl font-bold">45</span>
      </div>
      <span className="text-xs mt-1 block">Minutes</span>
    </div>
    <div className="text-center">
      <div className="bg-gray-700 rounded-lg p-2 w-16">
        <span className="text-2xl font-bold">30</span>
      </div>
      <span className="text-xs mt-1 block">Seconds</span>
    </div>
  </div>
  <div className="mt-4 pt-3 border-t border-gray-700">
    <div className="flex justify-between text-sm">
      <span>Starting Bid: <span className="font-semibold">$500</span></span>
      <span>Highest Bid: <span className="font-semibold text-yellow-400">$1,250</span></span>
    </div>
  </div>
</div>

    </>
  )
}

export default CountdownTimerComponent
