import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CMC</span>
              </div>
              <span className="text-white font-bold">Community Medical</span>
            </div>
            <p className="text-sm mb-4">
              A Rural Health Clinic providing accessible, quality primary healthcare services to the underserved populations of West Volusia, Florida.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/providers" className="hover:text-blue-400 transition-colors">
                  Our Providers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Orange City Location */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Orange City Office</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>810 Commed Blvd.<br />Orange City, FL 32763</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>(386) 775-1792</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

          {/* DeLand Location */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">DeLand Office</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>1190 N. Stone St.<br />DeLand, FL 32720</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>(386) 738-1792</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Community Medical Center of West Volusia. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            {' | '}
            <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;