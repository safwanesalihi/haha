import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/8c72fa9f-b89f-4f24-b01b-26af98158e11.png" 
            alt="BMD Logo"
            className="h-12 md:h-16"
          />
          {/* Optional: Add site name or navigation links here */}
        </div>
        {/* Optional: Add CTA button or other header elements */}
      </div>
    </header>
  );
};

export { Header };
