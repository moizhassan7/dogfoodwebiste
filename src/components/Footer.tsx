
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-montys-green text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-8">
          <div className="text-center mb-8">
            <p className="mb-4">
              Call us on <a href="tel:01747859911" className="underline">01747 859911</a> or email us at <a href="mailto:info@montyslarder.co.uk" className="underline">info@montyslarder.co.uk</a>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                <li><Link to="/ordering" className="hover:underline">Ordering</Link></li>
                <li><Link to="/delivery" className="hover:underline">Delivery</Link></li>
                <li><Link to="/packaging" className="hover:underline">Packaging</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Why Feed Fresh</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/our-recipes" className="hover:underline">Our Recipes</Link></li>
                <li><Link to="/meal-planner" className="hover:underline">Meal Planner</Link></li>
                <li><Link to="/how-it-works" className="hover:underline">How It Works</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Feeding Guide</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
                <li><Link to="/refer-a-friend" className="hover:underline">Refer a Friend</Link></li>
                <li><Link to="/faqs" className="hover:underline">FAQs</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="hover:underline">Privacy Notice</Link></li>
                <li><Link to="/user-agreement" className="hover:underline">User Agreement</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright Footer */}
        <div className="py-4 text-center text-sm border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-2 md:mb-0">
              <Link to="/terms" className="hover:underline mx-2">Terms & Conditions</Link>
              <span className="mx-2">|</span>
              <Link to="/privacy" className="hover:underline mx-2">Privacy Notice</Link>
            </div>
            
            <div>
              <p>© 2025, Monty's Larder. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
