import React from 'react'

function FOOTER() {
  return (
    <>
     {/* Footer Section */}
<footer className="bg-gray-900 text-white pt-12 pb-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* About Column */}
      <div className="space-y-4">
        <div className="flex items-center">
          <i className="fas fa-gavel text-yellow-500 text-2xl mr-2" />
          <span className="text-xl font-bold">BidMaster</span>
        </div>
        <p className="text-gray-400">
          The premier online auction platform connecting buyers and sellers worldwide since 2010.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-yellow-500 transition">
            <i className="fab fa-facebook-f text-lg" />
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-500 transition">
            <i className="fab fa-twitter text-lg" />
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-500 transition">
            <i className="fab fa-instagram text-lg" />
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-500 transition">
            <i className="fab fa-linkedin-in text-lg" />
          </a>
        </div>
      </div>
      {/* Quick Links Column */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition">Home</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition">Live Auctions</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition">Featured Items</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition">Upcoming Auctions</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition">Sell With Us</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition">Bidding Guide</a></li>
        </ul>
      </div>
      {/* Categories Column */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Categories</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition">Art &amp; Collectibles</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition">Jewelry &amp; Watches</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition">Electronics</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition">Vehicles</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition">Real Estate</a></li>
          <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition">Antiques</a></li>
        </ul>
      </div>
      {/* Contact Column */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Contact Us</h3>
        <ul className="space-y-3 text-gray-400">
          <li className="flex items-start">
            <i className="fas fa-map-marker-alt mt-1 mr-3 text-yellow-500" />
            <span>123 Auction Street, Bidville, AV 12345</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-phone-alt mr-3 text-yellow-500" />
            <span>+1 (555) 123-4567</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-envelope mr-3 text-yellow-500" />
            <span>support@bidmaster.com</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-clock mr-3 text-yellow-500" />
            <span>Mon-Fri: 9AM - 6PM</span>
          </li>
        </ul>
      </div>
    </div>
    {/* Newsletter Section */}
    <div className="mt-12 pt-8 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Subscribe to Newsletter</h3>
          <p className="text-gray-400">Get updates on upcoming auctions and exclusive deals</p>
        </div>
        <form className="flex w-full md:w-auto">
          <input type="email" placeholder="Your email address" className="px-4 py-2 w-full md:w-64 rounded-l focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900" required />
          <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-r transition duration-300">
            Subscribe
          </button>
        </form>
      </div>
    </div>
    {/* Bottom Footer */}
    <div className="mt-8 pt-6 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          © 2023 BidMaster Auction House. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition">FAQ</a>
          <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition">Sitemap</a>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default FOOTER
