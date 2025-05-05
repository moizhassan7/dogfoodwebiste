
import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header>
      {/* Promotion Bar */}
      <div className="bg-montys-green text-white text-center p-2 text-sm">
        <span className="mr-2">GET 20% OFF YOUR FIRST ORDER</span>
        <span className="font-bold mr-2">USE CODE WELCOME20</span>
        <button className="bg-montys-coral text-white text-xs px-3 py-1 rounded-md ml-2">
          CREATE YOUR BOX
        </button>
        <button className="border border-white text-white text-xs px-3 py-1 rounded-md ml-2">
          ONE OFF ORDER
        </button>
      </div>
      
      {/* Main Header */}
      <div className="bg-montys-green p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="block">
            <img alt="Monty's Larder" className="h-16" src="https://cdn-icons-png.flaticon.com/512/91/91534.png" />
          </Link>
          
          {/* Contact Info - Desktop */}
          <div className="hidden md:block text-white text-sm">
            <p>01747 859911</p>
            <p className="font-normal my-0 px-0 text-base text-center">Mon - Fri 9am - 5:30pm / Sat-Sun: 10am</p>
          </div>
          
          {/* User & Cart - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white">
              <User size={20} />
            </button>
            <Link to="/checkout" className="text-white flex items-center">
              <ShoppingCart size={20} />
              <span className="bg-montys-coral rounded-full w-5 h-5 flex items-center justify-center text-xs text-white ml-1">
                {totalItems}
              </span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="bg-montys-green-dark">
        <div className="container mx-auto">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex justify-center space-x-8 p-4 text-white font-medium">
            <li><Link to="/shop" className="hover:text-montys-coral transition-colors">SHOP</Link></li>
            <li><Link to="/feeding-guide" className="hover:text-montys-coral transition-colors">FEEDING GUIDE</Link></li>
            <li><Link to="/our-food-for-dogs" className="hover:text-montys-coral transition-colors">OUR FOOD FOR DOGS</Link></li>
            <li><Link to="/how-it-works" className="hover:text-montys-coral transition-colors">HOW IT WORKS</Link></li>
            <li><Link to="/why-feed-fresh" className="hover:text-montys-coral transition-colors">WHY FEED FRESH</Link></li>
            <li><Link to="/about" className="hover:text-montys-coral transition-colors">ABOUT</Link></li>
          </ul>
          
          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col text-white p-4">
              <li className="py-2"><Link to="/shop" className="block" onClick={toggleMenu}>SHOP</Link></li>
              <li className="py-2"><Link to="/feeding-guide" className="block" onClick={toggleMenu}>FEEDING GUIDE</Link></li>
              <li className="py-2"><Link to="/our-food-for-dogs" className="block" onClick={toggleMenu}>OUR FOOD FOR DOGS</Link></li>
              <li className="py-2"><Link to="/how-it-works" className="block" onClick={toggleMenu}>HOW IT WORKS</Link></li>
              <li className="py-2"><Link to="/why-feed-fresh" className="block" onClick={toggleMenu}>WHY FEED FRESH</Link></li>
              <li className="py-2"><Link to="/about" className="block" onClick={toggleMenu}>ABOUT</Link></li>
              <li className="py-2"><Link to="/checkout" className="block" onClick={toggleMenu}>CHECKOUT</Link></li>
              
              {/* Mobile Contact & User */}
              <li className="py-2 mt-2 border-t border-montys-green">
                <p className="text-sm pt-2">01747 859911</p>
                <p className="text-sm">Mon - Fri 9am - 5:30pm / Sat-Sun: 10am</p>
              </li>
              <li className="py-2 flex items-center space-x-4 mt-2">
                <button className="text-white flex items-center">
                  <User size={20} />
                  <span className="ml-2">Account</span>
                </button>
                <Link to="/checkout" className="text-white flex items-center">
                  <ShoppingCart size={20} />
                  <span className="ml-2">Cart ({totalItems})</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
