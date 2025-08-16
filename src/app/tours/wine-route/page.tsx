import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cape Town Wine Tours | Stellenbosch Franschhoek Paarl | Cape Advanced Tours",
  description: "Explore Cape Winelands with our wine tours. Stellenbosch, Franschhoek, and Paarl wine tastings. Premium wine estates, cellar tours, gourmet experiences.",
  keywords: "Cape Town wine tours, Stellenbosch wine farms, Franschhoek wine tasting, Paarl wine estates, Cape Winelands tours, wine route Cape Town",
};

export default function WineRouteTour() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
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
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cape Winelands Tours
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover world-renowned wine estates in Stellenbosch, Franschhoek, and Paarl. Award-winning wines, gourmet cuisine, and breathtaking mountain scenery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#book" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
                Book Wine Tour
              </a>
              <a href="https://wa.me/27839546069?text=Hi, I'd like to book a wine tour" className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Regions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Wine Regions We Visit</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the most prestigious wine regions in the Cape Winelands
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 rounded-xl p-8 text-center">
              <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stellenbosch</h3>
              <p className="text-gray-600 mb-4">
                South Africa&apos;s wine capital with over 300 years of winemaking tradition. Home to prestigious estates and award-winning Cabernet Sauvignon.
              </p>
              <ul className="text-left text-gray-600 space-y-2 text-sm">
                <li>• Historic wine estates</li>
                <li>• University town charm</li>
                <li>• Oak-lined streets</li>
                <li>• Premium red wines</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Franschhoek</h3>
              <p className="text-gray-600 mb-4">
                The gourmet capital of South Africa, known for exceptional cuisine and world-class wine estates nestled in a stunning valley.
              </p>
              <ul className="text-left text-gray-600 space-y-2 text-sm">
                <li>• Fine dining restaurants</li>
                <li>• French Huguenot heritage</li>
                <li>• Scenic mountain valley</li>
                <li>• Cap Classique sparkling wine</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-xl p-8 text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Paarl</h3>
              <p className="text-gray-600 mb-4">
                Home to South Africa&apos;s largest wine cooperative and historic estates. Famous for innovative winemaking and stunning granite mountains.
              </p>
              <ul className="text-left text-gray-600 space-y-2 text-sm">
                <li>• Historic wine cellars</li>
                <li>• Afrikaans language monument</li>
                <li>• Diverse wine varieties</li>
                <li>• Family-owned estates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Wine Tour Packages</h2>
            <p className="text-xl text-gray-600">Choose your perfect wine tasting experience</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Classic Wine Tour</h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">Perfect introduction to Cape Winelands with visits to 3-4 premier wine estates.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ 3-4 wine estate visits</li>
                  <li>✓ Wine tastings & education</li>
                  <li>✓ Cellar tours</li>
                  <li>✓ Gourmet lunch included</li>
                  <li>✓ 8-9 hours duration</li>
                  <li>✓ Hotel pickup/drop-off</li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-600 mb-4">Contact us for current pricing and availability</p>
                <a href="#book" className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold inline-block">
                  Get Quote & Book
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-orange-200">
              <div className="text-center mb-4">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Wine & Dine</h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">Luxury wine experience with fine dining at award-winning restaurants.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ 4-5 premium estates</li>
                  <li>✓ Private tastings</li>
                  <li>✓ Wine & food pairings</li>
                  <li>✓ Fine dining lunch</li>
                  <li>✓ Wine purchase assistance</li>
                  <li>✓ 9-10 hours duration</li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-600 mb-4">Contact us for current pricing and availability</p>
                <a href="#book" className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors font-semibold inline-block">
                  Get Quote & Book
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Private Wine Safari</h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">Exclusive private tour with customized itinerary and personal sommelier guide.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ Private vehicle & guide</li>
                  <li>✓ Customized itinerary</li>
                  <li>✓ Exclusive estate access</li>
                  <li>✓ Winemaker meetings</li>
                  <li>✓ Luxury accommodations option</li>
                  <li>✓ Multi-day packages available</li>
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

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What to Expect</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Wine Tastings</h3>
                    <p className="text-gray-600">Professional tastings at 3-5 estates with expert sommelier guidance and wine education.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a3 3 0 116 0v2H8V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Cellar Tours</h3>
                    <p className="text-gray-600">Behind-the-scenes tours of historic wine cellars and modern production facilities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Gourmet Dining</h3>
                    <p className="text-gray-600">Wine-paired lunches at award-winning restaurants featuring local Cape cuisine.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Scenic Beauty</h3>
                    <p className="text-gray-600">Breathtaking mountain views, rolling vineyards, and historic Cape Dutch architecture.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Wine Types You&apos;ll Taste</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="bg-red-100 rounded-lg p-4 mb-2">
                    <span className="text-red-600 font-bold">Red Wines</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Cabernet Sauvignon</li>
                    <li>Pinotage</li>
                    <li>Shiraz</li>
                    <li>Merlot</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-yellow-100 rounded-lg p-4 mb-2">
                    <span className="text-yellow-600 font-bold">White Wines</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Sauvignon Blanc</li>
                    <li>Chardonnay</li>
                    <li>Chenin Blanc</li>
                    <li>Riesling</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-pink-100 rounded-lg p-4 mb-2">
                    <span className="text-pink-600 font-bold">Sparkling</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Cap Classique</li>
                    <li>Méthode Champenoise</li>
                    <li>Blanc de Blancs</li>
                    <li>Rosé Sparkling</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 rounded-lg p-4 mb-2">
                    <span className="text-orange-600 font-bold">Dessert</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Noble Late Harvest</li>
                    <li>Port-style wines</li>
                    <li>Muscat varieties</li>
                    <li>Ice wines</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Wine Adventure</h2>
          <p className="text-xl mb-8">
            Discover world-class wines in breathtaking settings with our expert wine tour guides.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Expert Wine Guides</h3>
              <p>Certified sommeliers and wine educators</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Premium Estates</h3>
              <p>Access to exclusive and award-winning wineries</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Gourmet Experience</h3>
              <p>Wine-paired dining at top restaurants</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0839546069" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
              Call 083 954 6069
            </a>
            <a href="https://wa.me/27839546069?text=Hi, I'd like to book a wine tour. Please send me more details." className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
              WhatsApp Booking
            </a>
            <Link href="/#contact" className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
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
            <p className="text-gray-400 mb-6">Your gateway to the Cape Winelands&apos; finest experiences</p>
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