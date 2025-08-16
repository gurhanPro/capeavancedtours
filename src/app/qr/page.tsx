import Link from "next/link";

export default function QRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Cape Advanced Tours</h1>
          <p className="text-gray-600">Your Cape Town adventure starts here</p>
        </div>

        {/* Quick Info Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="text-center mb-6">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Professional Tours & Transfers</h2>
            <p className="text-gray-600 text-sm">Available 24/7 in Cape Town</p>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <a href="tel:0839546069" className="flex items-center justify-center w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: 083 954 6069
            </a>
            
            <a href="https://wa.me/27839546069" className="flex items-center justify-center w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Our Services</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span>Airport Transfers</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
              <span>Table Mountain Tours</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
              <span>Cape Point Excursions</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
              <span>Wine Country Visits</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
              <span>City Centre Tours</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
              <span>Custom Tours</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Details</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start">
              <svg className="w-4 h-4 text-gray-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-600">61 Plein St, Cape Town City Centre, Cape Town, 8000</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@capeadvancedtours.com" className="text-blue-600">info@capeadvancedtours.com</a>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-600">Open 24 hours</span>
            </div>
          </div>
        </div>

        {/* Book Now Button */}
        <Link href="/#contact" className="block w-full bg-orange-500 text-white text-center py-4 px-6 rounded-xl hover:bg-orange-600 transition-colors font-semibold text-lg">
          Book Your Tour Now
        </Link>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Cape Advanced Tours - Your trusted partner for Cape Town adventures</p>
          <Link href="/" className="text-blue-600 hover:underline mt-2 inline-block">
            Visit Full Website
          </Link>
        </div>
      </div>
    </div>
  );
}