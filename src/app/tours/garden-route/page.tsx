import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garden Route Tours from Cape Town | Knysna Plettenberg Bay | Cape Advanced Tours",
  description: "Explore the famous Garden Route with our multi-day tours. Knysna, Plettenberg Bay, Tsitsikamma Forest, Oudtshoorn. Professional guides, accommodation included.",
  keywords: "Garden Route tours, Knysna tours, Plettenberg Bay, Tsitsikamma Forest, Oudtshoorn ostrich farms, Garden Route from Cape Town, multi-day tours",
};

export default function GardenRouteTour() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <h1 className="text-xl font-bold text-blue-900">Cape Advanced Tours</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <a href="tel:0839546069" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Garden Route Tours
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Journey along South Africa&apos;s most scenic coastal route. From ancient forests to pristine beaches, experience the Garden Route&apos;s natural wonders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#book" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
                Book Garden Route Tour
              </a>
              <a href="https://wa.me/27839546069?text=Hi, I'd like information about Garden Route tours" className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Garden Route Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our expertly crafted Garden Route experiences
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3-Day Garden Route</h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">Perfect introduction to the Garden Route&apos;s highlights.</p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>✓ Mossel Bay & George</li>
                  <li>✓ Knysna Heads & Lagoon</li>
                  <li>✓ Plettenberg Bay beaches</li>
                  <li>✓ 2 nights accommodation</li>
                  <li>✓ All meals included</li>
                  <li>✓ Professional guide</li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-600 mb-4">Contact us for current pricing and availability</p>
                <a href="#book" className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors font-semibold inline-block">
                  Get Quote & Book
                </a>
              </div>
            </div>
            
            <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200">
              <div className="text-center mb-4">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5-Day Classic Route</h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">The complete Garden Route experience with all major highlights.</p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>✓ Oudtshoorn ostrich farms</li>
                  <li>✓ Cango Caves exploration</li>
                  <li>✓ Knysna forest walks</li>
                  <li>✓ Tsitsikamma adventures</li>
                  <li>✓ 4 nights accommodation</li>
                  <li>✓ Adventure activities</li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-600 mb-4">Contact us for current pricing and availability</p>
                <a href="#book" className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors font-semibold inline-block">
                  Get Quote & Book
                </a>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">7-Day Ultimate</h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">Luxury Garden Route with premium accommodations and exclusive experiences.</p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>✓ Luxury accommodations</li>
                  <li>✓ Wine farm visits</li>
                  <li>✓ Whale watching (in season)</li>
                  <li>✓ Fine dining experiences</li>
                  <li>✓ 6 nights premium lodging</li>
                  <li>✓ Private vehicle & guide</li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-600 mb-4">Contact us for current pricing and availability</p>
                <a href="#book" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block">
                  Get Quote & Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Garden Route Highlights</h2>
            <p className="text-xl text-gray-600">Discover the natural wonders along South Africa&apos;s premier coastal route</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Knysna Lagoon</h3>
              <p className="text-gray-600">Famous for its dramatic sandstone cliffs and pristine lagoon waters</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tsitsikamma</h3>
              <p className="text-gray-600">Ancient forests, canopy tours, and the highest bungee jump in the world</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plettenberg Bay</h3>
              <p className="text-gray-600">Pristine beaches, whale watching, and luxury coastal accommodations</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Oudtshoorn</h3>
              <p className="text-gray-600">Ostrich capital of the world and gateway to the spectacular Cango Caves</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What&apos;s Included</h2>
            <p className="text-xl text-gray-600">Everything you need for an unforgettable Garden Route experience</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-lg p-6 mb-4">
                <svg className="w-12 h-12 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a3 3 0 116 0v2H8V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Accommodation</h3>
              <p className="text-gray-600 text-sm">Quality hotels and guesthouses throughout the route</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-6 mb-4">
                <svg className="w-12 h-12 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Transportation</h3>
              <p className="text-gray-600 text-sm">Comfortable vehicle with professional driver-guide</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-lg p-6 mb-4">
                <svg className="w-12 h-12 text-orange-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Activities</h3>
              <p className="text-gray-600 text-sm">Entrance fees to major attractions and experiences</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-lg p-6 mb-4">
                <svg className="w-12 h-12 text-purple-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Guide</h3>
              <p className="text-gray-600 text-sm">Knowledgeable local guide with regional expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Garden Route Adventure</h2>
          <p className="text-xl mb-8">
            Experience South Africa&apos;s most scenic route with our expert guides and premium service.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Small Groups</h3>
              <p>Maximum 8 people for personalized experience</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">All Inclusive</h3>
              <p>Accommodation, meals, and activities included</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Local Expertise</h3>
              <p>Guides with intimate knowledge of the region</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0839546069" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
              Call 083 954 6069
            </a>
            <a href="https://wa.me/27839546069?text=Hi, I'd like to book a Garden Route tour. Please send me more details and availability." className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
              WhatsApp Booking
            </a>
            <Link href="/#contact" className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Online Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Cape Advanced Tours</h3>
            <p className="text-gray-400 mb-6">Your gateway to the Garden Route&apos;s natural wonders</p>
            <div className="flex justify-center space-x-6">
              <a href="tel:0839546069" className="text-gray-400 hover:text-white">083 954 6069</a>
              <a href="mailto:info@capeadvancedtours.com" className="text-gray-400 hover:text-white">info@capeadvancedtours.com</a>
              <Link href="/qr" className="text-gray-400 hover:text-white">QR Info</Link>
            </div>
            <p className="text-gray-500 text-sm mt-6">© 2024 Cape Advanced Tours. Available 24/7.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}