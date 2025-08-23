import React from 'react';
import { Facebook, Mail, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/whiteLogo.png" 
                alt="SEU Dawah Circle Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">SEU Dawah Circle</h3>
                <p className="text-sm text-gray-300">এসইইউ দা'ওয়াহ সার্কেল</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A student-led dawah platform at Southeast University, Dhaka, dedicated to spreading Islamic knowledge and building a community of faith.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-amber-400" />
                <span className="text-sm">seudawahcircle@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe size={16} className="text-amber-400" />
                <span className="text-sm">www.seudc.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-amber-400 mt-1" />
                <span className="text-sm">DAWAH CIRCLE, 251/A Tejgaon I/A, Dhaka-1208</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://fb.com/seudawahcircle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
              >
                <Facebook size={16} />
                <span className="text-sm">Facebook</span>
              </a>
            </div>
            <div className="mt-6">
              {/* <h5 className="font-medium mb-2">Quick Links</h5>
              <div className="space-y-1">
                <p className="text-sm text-gray-300">Join our community</p>
                <p className="text-sm text-gray-300" >Upcoming events</p>
                <p className="text-sm text-gray-300">Islamic resources</p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 SEU Dawah Circle. All rights reserved. | Built with ❤️ for the Ummah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;