import React from 'react';

interface SectionWrapperProps {
  index: number;
  title: string;
  image: string;
  imageAlt: string;
  children: React.ReactNode;
  ctaText: string;
  ctaAction: () => void;
  additionalContent?: React.ReactNode;
}

/**
 * A wrapper component that applies the alternating background pattern
 * and enforces the consistent Title → Image → Text → Button layout
 */
export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  index,
  title,
  image,
  imageAlt,
  children,
  ctaText,
  ctaAction,
  additionalContent
}) => {
  // Determine if this section should have a blue background (odd index)
  // Hero section (index 0) is already blue, so we start alternating from index 1
  const isBlueBackground = index % 2 === 0;
  
  // Apply the appropriate background and text colors
  const bgClass = isBlueBackground 
    ? 'bg-gradient-to-l from-blue-800 via-blue-700 to-blue-600 text-white' 
    : 'bg-white text-gray-800';
  
  // Apply the appropriate button style based on background for contrast
  const btnClass = isBlueBackground 
    ? 'btn-on-blue' // White button on blue background
    : 'btn-on-white'; // Blue button on white background
  
  return (
    <section 
      className={`scroll-section min-h-screen ${bgClass} overflow-hidden flex items-center`}
    >
      {/* Background Pattern for blue sections */}
      {isBlueBackground && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
      )}
      
      <div className="section-container relative z-10 py-12 md:py-16 flex flex-col items-center">
        {/* Title */}
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isBlueBackground ? 'text-white' : 'text-primary'} mb-12 text-center reveal-animation`}>
          {title}
        </h2>
        
        {/* Image */}
        <div className="w-full max-w-3xl mx-auto mb-12 reveal-animation">
          <img 
            src={image} 
            alt={imageAlt}
            className="w-full h-auto object-cover rounded-2xl shadow-xl"
          />
        </div>
        
        {/* Text Content */}
        <div className={`text-xl ${isBlueBackground ? 'text-blue-100' : 'text-gray-700'} mb-12 text-center max-w-4xl mx-auto reveal-animation`}>
          {children}
        </div>
        
        {/* CTA Button */}
        <div className="reveal-animation">
          <button 
            onClick={ctaAction}
            className={`${btnClass} text-xl md:text-2xl`}
          >
            {ctaText}
          </button>
        </div>
        
        {/* Additional Content (optional) */}
        {additionalContent && (
          <div className="mt-12 w-full reveal-animation">
            {additionalContent}
          </div>
        )}
      </div>
    </section>
  );
};
