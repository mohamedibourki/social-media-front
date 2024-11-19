import { Search, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
          className="w-full h-full object-cover mix-blend-overlay opacity-40"
          alt="University campus"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-20">
        <div className="flex flex-col justify-center h-full text-white max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Your Success Starts Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Access resources, support services, and opportunities to enhance your university experience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search for services, resources, or support..."
                className="w-full px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/95 backdrop-blur-sm"
              />
              <Search className="absolute right-4 top-4 h-6 w-6 text-gray-400" />
            </div>
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold flex items-center justify-center group transition-all">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="flex gap-8 text-sm">
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-green-400 mr-2" />
              24/7 Support Available
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-yellow-400 mr-2" />
              100+ Resources
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-purple-400 mr-2" />
              Expert Guidance
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}