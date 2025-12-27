import React from 'react'

const Section2Page = () => {
  return (
    <div className='w-full mt-10 p-10'>
      <footer className="bg-gray-100 text-gray-700 mt-10">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold mb-2">MyShop</h2>
            <p className="text-sm">
              Simple online store for daily needs.
              Quality products at best prices.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-medium mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">Shop</li>
              <li className="hover:underline cursor-pointer">About</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-medium mb-2">Help</h3>
            <ul className="space-y-1 text-sm">
              <li className="hover:underline cursor-pointer">FAQ</li>
              <li className="hover:underline cursor-pointer">Returns</li>
              <li className="hover:underline cursor-pointer">Shipping</li>
              <li className="hover:underline cursor-pointer">Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium mb-2">Contact</h3>
            <p className="text-sm">Email: support@myshop.com</p>
            <p className="text-sm">Phone: +91 98765 43210</p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t text-center text-sm py-4">
          © {new Date().getFullYear()} MyShop. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Section2Page