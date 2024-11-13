import React from 'react';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">University Student Affairs</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {['Services', 'Resources', 'Events', 'Support', 'Contact'].map((item) => (
                <div key={item} className="relative group">
                  <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 flex items-center">
                    {item}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Services', 'Resources', 'Events', 'Support', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}