import Link from "next/link";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-blue-900">Cape Advanced Tours</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 flex items-center">
                  Tours
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <Link href="/tours/table-mountain" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Table Mountain Tours</Link>
                    <Link href="/tours/cape-point" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Cape Point Tours</Link>
                    <Link href="/tours/wine-route" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Wine Tours</Link>
                    <Link href="/tours/garden-route" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Garden Route</Link>
                  </div>
                </div>
              </div>
              <a href="#destinations" className="text-gray-700 hover:text-blue-600">Destinations</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
            <a href="tel:0839546069" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Explore Cape Town in Style
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional tours and transfers in the Western Cape. Available 24/7 for your convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
                Book Your Tour
              </a>
              <a href="https://wa.me/27839546069" className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From airport transfers to full-day tours, we make your Cape Town experience unforgettable
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Airport Transfers</h4>
              <p className="text-gray-600 mb-6">
                Reliable and comfortable transfers to and from Cape Town International Airport. 
                Professional service available 24/7.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Airport to City Centre</li>
                <li>• Airport to Hotels</li>
                <li>• Airport to Waterfront</li>
                <li>• Group transfers available</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Sightseeing Tours</h4>
              <p className="text-gray-600 mb-6">
                Discover the beauty of Cape Town and surroundings with our guided tours. 
                Customized experiences for individuals and groups.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Table Mountain tours</li>
                <li>• Cape Point excursions</li>
                <li>• Wine country visits</li>
                <li>• City centre tours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Gallery */}
      <section id="destinations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the breathtaking beauty of Cape Town and the Western Cape
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l3.057-3L8 0l4.057 3L15 3l3.057-3L18 0l4.057 3L22 3v18l-3.057 3L19 24l-4.057-3L15 21l-3.057 3L12 24l-4.057-3L8 21l-3.057 3L5 24z" />
                  </svg>
                  <h4 className="text-lg font-bold">Table Mountain</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  One of the New 7 Wonders of Nature. Experience panoramic views of Cape Town from the iconic flat-topped mountain.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Cable car rides</li>
                  <li>• Hiking trails</li>
                  <li>• 360° city views</li>
                  <li>• Photography spots</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h4 className="text-lg font-bold">Cape Point</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  The southwestern-most tip of Africa where the Atlantic and Indian Oceans meet. A must-visit destination.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Cape of Good Hope</li>
                  <li>• Lighthouse views</li>
                  <li>• Penguin colonies</li>
                  <li>• Scenic coastal drives</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <h4 className="text-lg font-bold">Wine Country</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  World-renowned wine regions of Stellenbosch, Franschhoek, and Paarl. Taste award-winning wines in stunning settings.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Wine tastings</li>
                  <li>• Cellar tours</li>
                  <li>• Gourmet dining</li>
                  <li>• Scenic vineyards</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m0 0h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2m8 0V7a1 1 0 00-1-1H9a1 1 0 00-1 1v2" />
                  </svg>
                  <h4 className="text-lg font-bold">V&A Waterfront</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Cape Town&apos;s premier shopping and entertainment destination with stunning harbor views and attractions.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Shopping centers</li>
                  <li>• Aquarium visits</li>
                  <li>• Harbor cruises</li>
                  <li>• Dining experiences</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <h4 className="text-lg font-bold">Camps Bay</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Pristine white sand beach backed by the Twelve Apostles mountains. Perfect for relaxation and sunset views.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Beach relaxation</li>
                  <li>• Sunset views</li>
                  <li>• Beachfront dining</li>
                  <li>• Mountain backdrop</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h4 className="text-lg font-bold">City Centre</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Historic heart of Cape Town with cultural attractions, museums, and vibrant markets showcasing local heritage.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Cultural sites</li>
                  <li>• Local markets</li>
                  <li>• Historical tours</li>
                  <li>• Art galleries</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                  <h4 className="text-lg font-bold">Garden Route</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Epic coastal route through indigenous forests, pristine beaches, and charming towns from Mossel Bay to Storms River.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Knysna Heads & Lagoon</li>
                  <li>• Plettenberg Bay beaches</li>
                  <li>• Tsitsikamma Forest</li>
                  <li>• Ostrich farms Oudtshoorn</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <h4 className="text-lg font-bold">Hermanus</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  World&apos;s best land-based whale watching destination. Southern Right whales visit from June to November.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Whale watching season</li>
                  <li>• Cliff path walks</li>
                  <li>• Wine farms nearby</li>
                  <li>• Ocean adventures</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <h4 className="text-lg font-bold">Kirstenbosch</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  World-renowned botanical garden showcasing South Africa&apos;s diverse flora against Table Mountain&apos;s backdrop.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Indigenous plant gardens</li>
                  <li>• Tree canopy walkway</li>
                  <li>• Summer concerts</li>
                  <li>• Mountain hiking trails</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <h4 className="text-lg font-bold">Bo-Kaap</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Historic Cape Malay quarter with colorful houses, rich cultural heritage, and traditional spice routes.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Colorful Victorian houses</li>
                  <li>• Cape Malay culture</li>
                  <li>• Spice route history</li>
                  <li>• Traditional cuisine</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v3M7 4H5a1 1 0 00-1 1v16a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1h-2M7 4h10M9 9h6m-6 4h6m-6 4h6" />
                  </svg>
                  <h4 className="text-lg font-bold">Robben Island</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  UNESCO World Heritage Site where Nelson Mandela was imprisoned. Symbol of triumph over adversity.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Mandela&apos;s prison cell</li>
                  <li>• Ex-prisoner guides</li>
                  <li>• Museum exhibitions</li>
                  <li>• Ferry boat tours</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-stone-500 to-gray-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <h4 className="text-lg font-bold">Cango Caves</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Spectacular limestone cave system in Oudtshoorn with ancient formations and underground chambers.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Limestone formations</li>
                  <li>• Underground chambers</li>
                  <li>• Adventure tours</li>
                  <li>• Fossil discoveries</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              And many more destinations across the Western Cape! Custom tours available.
            </p>
            <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Plan Your Western Cape Adventure
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Service Areas</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We operate throughout the Western Cape, covering all major tourist destinations
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Areas We Cover</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Cape Town City Centre</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">V&A Waterfront</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Camps Bay</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Table Mountain</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Cape Point</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Stellenbosch</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-pink-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Franschhoek</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-indigo-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Paarl</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-teal-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Hermanus</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-800 rounded-full mr-3"></div>
                    <span className="text-gray-700">Cape Town Airport</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h5 className="font-bold text-gray-900 mb-2">Coverage Area</h5>
                <p className="text-gray-600 text-sm mb-4">
                  We provide services within a 100km radius of Cape Town, covering all major tourist destinations in the Western Cape.
                </p>
                <div className="flex items-center text-sm text-blue-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Special destinations available on request
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0V7m0 2L9 7" />
                  </svg>
                  <h4 className="text-xl font-bold">Interactive Map</h4>
                  <p className="text-blue-100">Coming Soon</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Full interactive map with real-time locations and route planning will be available soon.
              </p>
              <a href="https://maps.google.com/maps?q=Cape+Advanced+Tours+61+Plein+St+Cape+Town" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from travelers who&apos;ve explored Cape Town with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Excellent service from Cape Advanced Tours! Our airport transfer was punctual and comfortable. The driver was friendly and gave us great tips about Cape Town.&rdquo;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-gray-500 text-sm">Tourist from Australia</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Amazing Table Mountain tour! The guide was knowledgeable and the views were breathtaking. Cape Advanced Tours made our Cape Town experience unforgettable.&rdquo;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">Michael Chen</p>
                <p className="text-gray-500 text-sm">Visitor from Singapore</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Perfect wine tour to Stellenbosch! Professional service, beautiful locations, and great wine. Highly recommend Cape Advanced Tours for anyone visiting Cape Town.&rdquo;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">Emma Thompson</p>
                <p className="text-gray-500 text-sm">Traveler from UK</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h3>
            <p className="text-xl text-gray-600">Ready to explore Cape Town? Contact us for bookings and enquiries</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-bold text-gray-900 text-base">Phone</p>
                    <a href="tel:0839546069" className="text-blue-600 hover:underline text-base font-medium">083 954 6069</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-bold text-gray-900 text-base">Email</p>
                    <a href="mailto:info@capeadvancedtours.com" className="text-blue-600 hover:underline text-base font-medium">info@capeadvancedtours.com</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-bold text-gray-900 text-base">Address</p>
                    <p className="text-gray-800 text-base">61 Plein St, Cape Town City Centre, Cape Town, 8000</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-bold text-gray-900 text-base">Hours</p>
                    <p className="text-gray-800 text-base">Open 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="https://wa.me/27839546069" className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
            
            {/* Booking Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Cape Advanced Tours</h3>
              <p className="text-gray-400 mb-4">Your trusted partner for Cape Town tours and transfers</p>
              <div className="space-y-2">
                <a href="tel:0839546069" className="text-gray-400 hover:text-white block">📞 083 954 6069</a>
                <a href="mailto:info@capeadvancedtours.com" className="text-gray-400 hover:text-white block">✉️ info@capeadvancedtours.com</a>
                <p className="text-gray-400">🕒 Available 24/7</p>
              </div>
            </div>
            
            {/* Popular Tours */}
            <div>
              <h4 className="text-lg font-bold mb-4">Popular Tours</h4>
              <div className="space-y-2">
                <Link href="/tours/table-mountain" className="text-gray-400 hover:text-white block">Table Mountain Tours</Link>
                <Link href="/tours/cape-point" className="text-gray-400 hover:text-white block">Cape Point Tours</Link>
                <Link href="/tours/wine-route" className="text-gray-400 hover:text-white block">Wine Tours</Link>
                <Link href="/tours/garden-route" className="text-gray-400 hover:text-white block">Garden Route</Link>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4">Our Services</h4>
              <div className="space-y-2">
                <p className="text-gray-400">Airport Transfers</p>
                <p className="text-gray-400">City Tours</p>
                <p className="text-gray-400">Day Excursions</p>
                <p className="text-gray-400">Multi-day Tours</p>
                <p className="text-gray-400">Private Tours</p>
                <p className="text-gray-400">Group Bookings</p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/#services" className="text-gray-400 hover:text-white block">Services</Link>
                <Link href="/#destinations" className="text-gray-400 hover:text-white block">Destinations</Link>
                <Link href="/#testimonials" className="text-gray-400 hover:text-white block">Reviews</Link>
                <Link href="/#contact" className="text-gray-400 hover:text-white block">Contact</Link>
                <Link href="/qr" className="text-gray-400 hover:text-white block">QR Info</Link>
                <a href="https://wa.me/27839546069" className="text-gray-400 hover:text-white block">WhatsApp</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2024 Cape Advanced Tours. Professional tours and transfers in the Western Cape.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
