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
  isHero?: boolean; // Add a flag for the hero section
}

/**
 * A wrapper component that applies the alternating background pattern
 * and provides layout options.
 */
export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  index,
  title,
  image,
  imageAlt,
  children,
  ctaText,
  ctaAction,
  additionalContent,
  isHero = false // Default to false
}) => {
  const isBlueBackground = index % 2 === 0;
  const bgClass = isBlueBackground 
    ? 'bg-gradient-to-l from-blue-800 via-blue-700 to-blue-600 text-white' 
    : 'bg-white text-gray-800';
  const btnClass = isBlueBackground 
    ? 'btn-on-blue' 
    : 'btn-on-white';

  // Define layout classes based on whether it's the hero section for desktop
  const desktopLayoutClass = isHero 
    ? 'md:grid md:grid-cols-2 md:gap-16 md:items-center' 
    : 'flex flex-col items-center';
  const imageOrderClass = isHero ? 'md:order-1' : ''; // Image on the left for hero desktop
  const contentOrderClass = isHero ? 'md:order-2' : ''; // Content on the right for hero desktop
  const textAlignClass = isHero ? 'md:text-right' : 'text-center'; // Align text right for hero desktop

  return (
    <section 
      className={`scroll-section min-h-screen ${bgClass} overflow-hidden flex items-center py-16 md:py-24`}
    >
      {isBlueBackground && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
      )}
      
      <div className={`section-container relative z-10 ${desktopLayoutClass}`}>
        {/* Content Area (Text, Title, CTA) - Order adjusted for Hero */}
        <div className={`flex flex-col ${contentOrderClass} ${textAlignClass} w-full`}>
          {/* Title */}
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isBlueBackground ? 'text-white' : 'text-primary'} mb-8 reveal-animation ${isHero ? 'md:text-right' : 'text-center'}`}>
            {title}
          </h2>
          
          {/* Text Content */}
          <div className={`text-lg md:text-xl ${isBlueBackground ? 'text-blue-100' : 'text-gray-700'} mb-8 max-w-2xl ${isHero ? 'md:ml-auto' : 'mx-auto'} reveal-animation ${isHero ? 'md:text-right' : 'text-center'}`}>
            {children}
          </div>
          
          {/* CTA Button */}
          <div className={`reveal-animation ${isHero ? 'md:self-end' : 'self-center'}`}>
            <button 
              onClick={ctaAction}
              className={`${btnClass} text-xl md:text-2xl`}
            >
              {ctaText}
            </button>
          </div>

          {/* Additional Content (optional) - Placed within the content area */}
          {additionalContent && !isHero && (
            <div className="mt-12 w-full reveal-animation self-center">
              {additionalContent}
            </div>
          )}
        </div>

        {/* Image Area - Order adjusted for Hero */}
        <div className={`w-full ${isHero ? 'max-w-md' : 'max-w-3xl'} mx-auto mt-12 md:mt-0 reveal-animation ${imageOrderClass}`}>
          <img 
            src={image} 
            alt={imageAlt}
            className="w-full h-auto object-contain rounded-2xl shadow-xl max-h-[70vh]"
          />
        </div>

        {/* Additional Content for Hero (Stats) - Placed below image/text on mobile, full width below grid on desktop */}
        {additionalContent && isHero && (
          <div className="mt-12 w-full reveal-animation md:col-span-2">
            {additionalContent}
          </div>
        )}

      </div>
    </section>
  );
};

