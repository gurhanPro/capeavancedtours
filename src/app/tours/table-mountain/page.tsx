import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Table Mountain Tours Cape Town | Cable Car & Hiking Tours | Cape Advanced Tours",
  description: "Experience Table Mountain with professional guided tours. Cable car rides, hiking trails, sunset tours. Book your Table Mountain adventure with Cape Advanced Tours. Available 24/7.",
  keywords: "Table Mountain tours, Cape Town cable car, Table Mountain hiking, sunset tours, Table Mountain guide, Cape Town attractions, Table Mountain bookings",
};

export default function TableMountainTour() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Table Mountain Tours
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience one of the New 7 Wonders of Nature with our professional Table Mountain tours. Cable car rides, hiking adventures, and breathtaking city views.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#book" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
                Book Table Mountain Tour
              </a>
              <a href="https://wa.me/27839546069?text=Hi, I'd like to book a Table Mountain tour" className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                WhatsApp Booking
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Table Mountain Tour Options</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully crafted Table Mountain experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cable Car Tour</h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">The classic Table Mountain experience with stunning 360° views of Cape Town.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ Return cable car tickets</li>
                  <li>✓ Professional guide</li>
                  <li>✓ City pickup included</li>
                  <li>✓ 4-5 hours duration</li>
                  <li>✓ Weather backup plan</li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-600 mb-4">Contact us for current pricing and availability</p>
                <a href="#book" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block">
                  Get Quote & Book
                </a>
              </div>
            </div>
            
            <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200">
              <div className="text-center mb-4">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sunset Cable Car</h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">Experience magical sunset views from the top of Table Mountain.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ Afternoon departure</li>
                  <li>✓ Sunset photography</li>
                  <li>✓ City lights views</li>
                  <li>✓ 5-6 hours duration</li>
                  <li>✓ Blankets provided</li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-600 mb-4">Contact us for current pricing and availability</p>
                <a href="#book" className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors font-semibold inline-block">
                  Get Quote & Book
                </a>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hiking Adventure</h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">Guided hiking tour via Platteklip Gorge or India Venster routes.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ Professional hiking guide</li>
                  <li>✓ Route selection</li>
                  <li>✓ Safety equipment</li>
                  <li>✓ 6-8 hours duration</li>
                  <li>✓ Fitness level: Moderate</li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-600 mb-4">Contact us for current pricing and availability</p>
                <a href="#book" className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold inline-block">
                  Get Quote & Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What to Expect</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Hotel Pickup</h3>
                    <p className="text-gray-600">We collect you from your accommodation in Cape Town or surrounding areas.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Table Mountain Base</h3>
                    <p className="text-gray-600">Arrive at the cable car station with priority access and weather briefing.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Summit Experience</h3>
                    <p className="text-gray-600">Guided exploration of the mountain top with photography opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Return Journey</h3>
                    <p className="text-gray-600">Safe return to your accommodation with memories to last a lifetime.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tour Highlights</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  360° panoramic views of Cape Town
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Professional photography assistance
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Local flora and fauna insights
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Weather contingency planning
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Small group personalized service
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Door-to-door transportation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Table Mountain Adventure</h2>
          <p className="text-xl mb-8">
            Don't miss out on Cape Town's most iconic experience. Book your Table Mountain tour today!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Available 24/7</h3>
              <p>Flexible booking and tour times</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Best Price Guarantee</h3>
              <p>Competitive rates with premium service</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Weather Guarantee</h3>
              <p>Alternative activities if cable car closed</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0839546069" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
              Call 083 954 6069
            </a>
            <a href="https://wa.me/27839546069?text=Hi, I'd like to book a Table Mountain tour. Please send me more details." className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
              WhatsApp Booking
            </a>
            <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Online Booking Form
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Cape Advanced Tours</h3>
            <p className="text-gray-400 mb-6">Your trusted partner for Table Mountain and Cape Town adventures</p>
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