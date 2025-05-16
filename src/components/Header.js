// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="container mx-auto py-6 px-4 flex items-center justify-between">
      <div className="text-xl font-semibold text-white">Lundev</div>
      <nav className="hidden md:flex space-x-6 text-gray-300">
        <a href="#" className="hover:text-white">Home</a>
        <a href="#" className="hover:text-white">Blog</a>
        <a href="#" className="hover:text-white">Info</a>
      </nav>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer text-gray-300 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </header>
  );
}

export default Header;