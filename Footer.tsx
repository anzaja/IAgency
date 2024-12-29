import React from 'react';
import { Github, Twitter, Linkedin, Bot } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-8">
            <Bot className="w-8 h-8" />
            <span className="text-xl font-bold">AIAutomation</span>
          </div>
          
          <nav className="mb-8">
            <ul className="flex gap-8">
              <li><a href="#" className="text-black hover:underline">About Us</a></li>
              <li><a href="#" className="text-black hover:underline">Contact</a></li>
              <li><a href="#" className="text-black hover:underline">Terms of Service</a></li>
            </ul>
          </nav>
          
          <div className="flex gap-6 mb-8">
            <a href="#" className="text-black hover:text-gray-600 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} AIAutomation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}