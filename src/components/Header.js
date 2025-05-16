import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <h1 className="text-xl md:text-3xl font-bold text-primary tracking-tight">
          Modern Showcase
        </h1>
        {/* Optional: Navigation or other header elements */}
        {/* <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-textSecondary hover:text-primary transition-colors">Home</a></li>
            <li><a href="#" className="text-textSecondary hover:text-primary transition-colors">About</a></li>
            <li><a href="#" className="text-textSecondary hover:text-primary transition-colors">Services</a></li>
            <li><a href="#" className="text-textSecondary hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
}

export default Header;