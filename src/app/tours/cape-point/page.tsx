import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cape Point Tours | Cape of Good Hope | Penguin Tours | Cape Advanced Tours",
  description: "Explore Cape Point and Cape of Good Hope with penguin colony visits. Full-day tours from Cape Town. Professional guides, scenic Chapman's Peak drive included.",
  keywords: "Cape Point tours, Cape of Good Hope, penguin tours, Chapman's Peak, Boulders Beach penguins, Cape Point lighthouse, Cape Town day tours",
};

export default function CapePointTour() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
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
      <section className="relative bg-gradient-to-r from-orange-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cape Point Tours
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Journey to the southwestern tip of Africa where two oceans meet. Experience Cape Point, the Cape of Good Hope, and adorable penguin colonies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#book" className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors">
                Book Cape Point Tour
              </a>
              <a href="https://wa.me/27839546069?text=Hi, I'd like to book a Cape Point tour" className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cape Point Tour Options</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your perfect Cape Point adventure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Half-Day Express</h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">Perfect for limited time travelers wanting to see Cape Point highlights.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ Cape Point lighthouse</li>
                  <li>✓ Cape of Good Hope sign</li>
                  <li>✓ Scenic coastal drive</li>
                  <li>✓ 4-5 hours duration</li>
                  <li>✓ Hotel pickup/drop-off</li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-600 mb-4">Contact us for current pricing and availability</p>
                <a href="#book" className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors font-semibold inline-block">
                  Get Quote & Book
                </a>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
              <div className="text-center mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full-Day Peninsula</h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">Complete Cape Peninsula experience including penguin colony visit.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ Chapman's Peak Drive</li>
                  <li>✓ Hout Bay seal island cruise</li>
                  <li>✓ Cape Point & lighthouse</li>
                  <li>✓ Boulders Beach penguins</li>
                  <li>✓ Simon's Town naval base</li>
                  <li>✓ 8-9 hours duration</li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-600 mb-4">Contact us for current pricing and availability</p>
                <a href="#book" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block">
                  Get Quote & Book
                </a>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sunset Peninsula</h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">Magical afternoon tour ending with spectacular Cape Point sunset.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ Afternoon departure</li>
                  <li>✓ Cape Point sunset viewing</li>
                  <li>✓ Golden hour photography</li>
                  <li>✓ Wine tasting included</li>
                  <li>✓ 6-7 hours duration</li>
                  <li>✓ Dinner recommendations</li>
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

      {/* Tour Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tour Highlights</h2>
            <p className="text-xl text-gray-600">Discover the wonders of the Cape Peninsula</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v3M7 4H5a1 1 0 00-1 1v16a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1h-2M7 4h10M9 9h6m-6 4h6m-6 4h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cape Point Lighthouse</h3>
              <p className="text-gray-600 text-sm">Historic lighthouse at the southwestern tip of Africa with panoramic ocean views</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Penguin Colony</h3>
              <p className="text-gray-600 text-sm">Visit the famous African penguin colony at Boulders Beach, Simon's Town</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0V7m0 2L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chapman's Peak</h3>
              <p className="text-gray-600 text-sm">One of the world's most scenic coastal drives with breathtaking clifftop views</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Two Oceans Meet</h3>
              <p className="text-gray-600 text-sm">Witness where the Atlantic and Indian Oceans converge at the Cape of Good Hope</p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Full-Day Tour Itinerary</h2>
            <p className="text-xl text-gray-600">A typical day on our most popular Cape Point tour</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-24 flex-shrink-0 text-center">
                  <div className="bg-blue-600 text-white rounded-lg px-3 py-2 font-bold">8:00 AM</div>
                </div>
                <div className="ml-6">
                  <h3 className="font-bold text-gray-900 mb-2">Hotel Pickup & Departure</h3>
                  <p className="text-gray-600">Begin your adventure with pickup from your Cape Town accommodation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-24 flex-shrink-0 text-center">
                  <div className="bg-blue-600 text-white rounded-lg px-3 py-2 font-bold">9:00 AM</div>
                </div>
                <div className="ml-6">
                  <h3 className="font-bold text-gray-900 mb-2">Hout Bay & Seal Island</h3>
                  <p className="text-gray-600">Visit the picturesque fishing village and optional boat trip to see seals</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-24 flex-shrink-0 text-center">
                  <div className="bg-blue-600 text-white rounded-lg px-3 py-2 font-bold">10:30 AM</div>
                </div>
                <div className="ml-6">
                  <h3 className="font-bold text-gray-900 mb-2">Chapman's Peak Drive</h3>
                  <p className="text-gray-600">Experience one of the world's most spectacular coastal drives</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-24 flex-shrink-0 text-center">
                  <div className="bg-blue-600 text-white rounded-lg px-3 py-2 font-bold">12:00 PM</div>
                </div>
                <div className="ml-6">
                  <h3 className="font-bold text-gray-900 mb-2">Cape Point & Lighthouse</h3>
                  <p className="text-gray-600">Explore the nature reserve, lighthouse, and enjoy panoramic views</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-24 flex-shrink-0 text-center">
                  <div className="bg-blue-600 text-white rounded-lg px-3 py-2 font-bold">2:00 PM</div>
                </div>
                <div className="ml-6">
                  <h3 className="font-bold text-gray-900 mb-2">Cape of Good Hope</h3>
                  <p className="text-gray-600">Visit the famous signpost and southernmost point accessible by car</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-24 flex-shrink-0 text-center">
                  <div className="bg-blue-600 text-white rounded-lg px-3 py-2 font-bold">3:30 PM</div>
                </div>
                <div className="ml-6">
                  <h3 className="font-bold text-gray-900 mb-2">Boulders Beach Penguins</h3>
                  <p className="text-gray-600">Meet the endangered African penguin colony in their natural habitat</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-24 flex-shrink-0 text-center">
                  <div className="bg-blue-600 text-white rounded-lg px-3 py-2 font-bold">5:00 PM</div>
                </div>
                <div className="ml-6">
                  <h3 className="font-bold text-gray-900 mb-2">Return Journey</h3>
                  <p className="text-gray-600">Scenic drive back to Cape Town with stunning sunset views</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Cape Point Adventure</h2>
          <p className="text-xl mb-8">
            Experience the magic of Cape Point where two oceans meet and penguins play on pristine beaches.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Wildlife Encounters</h3>
              <p>Penguins, seals, and diverse birdlife</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Scenic Beauty</h3>
              <p>Dramatic cliffs and ocean vistas</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Professional Guides</h3>
              <p>Expert knowledge of local history and nature</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0839546069" className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors">
              Call 083 954 6069
            </a>
            <a href="https://wa.me/27839546069?text=Hi, I'd like to book a Cape Point tour. Please send me more details." className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
              WhatsApp Booking
            </a>
            <Link href="/#contact" className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
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
            <p className="text-gray-400 mb-6">Your gateway to Cape Point's natural wonders</p>
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