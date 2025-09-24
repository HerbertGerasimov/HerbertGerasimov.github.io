import React from 'react';

interface ImageData {
  src: string;
  alt: string;
}

interface VideoData {
  src: string;
  title: string;
}

interface ParagraphData {
  text: string;
  subheading?: string;
}

interface CaseStudySectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  titleSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  titleWeight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  subtitleSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  subtitleWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
  columns?: 1 | 2 | 3;
  paragraphColumns?: 1 | 2 | 3;
  imageColumns?: 1 | 2 | 3;
  paragraphs?: (string | ParagraphData)[];
  images?: ImageData[];
  videos?: VideoData[];
  className?: string;
  contentClassName?: string;
  textAlignment?: 'left' | 'justify';
  titleFont?: 'dmserif' | 'urbanist' | 'body' | 'display';
  bodyFont?: 'body' | 'urbanist' | 'dmserif';
  showDivider?: boolean;
  background?: 'default' | 'glass' | 'white';
  titleColor?: string;
  subtitleColor?: string;
  paragraphColor?: string;
  children?: React.ReactNode;
}

const CaseStudySection: React.FC<CaseStudySectionProps> = ({
  id,
  title,
  subtitle,
  titleSize = '3xl',
  titleWeight = 'bold',
  subtitleSize = 'xl',
  subtitleWeight = 'medium',
  columns = 1,
  paragraphColumns = 1,
  imageColumns = 1,
  paragraphs = [],
  images = [],
  videos = [],
  className = '',
  contentClassName = '',
  textAlignment = 'left',
  titleFont = 'dmserif',
  bodyFont = 'body',
  showDivider = false,
  background = 'default',
  titleColor = '',
  subtitleColor = '',
  paragraphColor = '',
  children
}) => {
  // Title size classes
  const titleSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl md:text-3xl',
    '3xl': 'text-3xl md:text-4xl lg:text-5xl',
    '4xl': 'text-4xl md:text-5xl lg:text-6xl'
  };

  // Title weight classes
  const titleWeightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold'
  };

  // Subtitle size classes
  const subtitleSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl md:text-2xl',
    '2xl': 'text-2xl md:text-3xl'
  };

  // Subtitle weight classes
  const subtitleWeightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  // Column classes
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
  };

  // Paragraph column classes
  const paragraphColumnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'
  };

  // Image column classes
  const imageColumnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4'
  };

  // Font classes
  const titleFontClasses = {
    dmserif: 'font-dmserif',
    urbanist: 'font-urbanist',
    body: 'font-body',
    display: 'font-display'
  };

  const bodyFontClasses = {
    body: 'font-body',
    urbanist: 'font-urbanist',
    dmserif: 'font-dmserif'
  };

  // Text alignment classes
  const textAlignmentClasses = {
    left: 'text-left',
    justify: 'text-justify'
  };

  // Background classes
  const backgroundClasses = {
    default: '',
    glass: 'glass-card',
    white: 'bg-white rounded-2xl shadow-sm'
  };

  // Process paragraphs to handle both string and ParagraphData types
  const processedParagraphs = paragraphs.map((paragraph, index) => {
    if (typeof paragraph === 'string') {
      return { text: paragraph, subheading: undefined, id: `p-${index}` };
    }
    return { ...paragraph, id: `p-${index}` };
  });

  // Function to render HTML content safely
  const renderHtmlContent = (html: string) => {
    return { __html: html };
  };

  return (
    <section 
      id={id}
      className={`w-full py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 ${backgroundClasses[background]} ${className}`}
    >
      {showDivider && <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>}
      
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        {(title || subtitle) && (
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            {title && (
              <h1 className={`${titleSizeClasses[titleSize]} ${titleWeightClasses[titleWeight]} ${titleFontClasses[titleFont]} ${titleColor} mb-6 leading-tight`}>
                {title}
              </h1>
            )}
            {subtitle && (
              <h2 className={`${subtitleSizeClasses[subtitleSize]} ${subtitleWeightClasses[subtitleWeight]} ${bodyFontClasses[bodyFont]} ${subtitleColor} leading-relaxed max-w-3xl mx-auto`}>
                {subtitle}
              </h2>
            )}
          </div>
        )}

        {/* Children content (for custom content like table of contents) */}
        {children && (
          <div className="mb-12 sm:mb-16 lg:mb-20">
            {children}
          </div>
        )}

        {/* Main Content Area */}
        <div className={`grid ${columnClasses[columns]} ${contentClassName} gap-12`}>
          
          {/* Paragraphs Section - Always first */}
          {processedParagraphs.length > 0 && (
            <div className="w-full">
              <div className={`grid ${paragraphColumnClasses[paragraphColumns]} gap-8`}>
                {processedParagraphs.map((paragraph, index) => (
                  <div key={paragraph.id} className={`prose prose-lg max-w-none ${textAlignmentClasses[textAlignment]}`}>
                    {paragraph.subheading && (
                      <h3 className={`text-xl sm:text-2xl font-semibold ${paragraphColor} mb-4 ${bodyFontClasses[bodyFont]} leading-tight`}>
                        {paragraph.subheading}
                      </h3>
                    )}
                    <div
                      className={`${paragraphColor} leading-relaxed text-lg sm:text-xl ${bodyFontClasses[bodyFont]}`}
                      dangerouslySetInnerHTML={renderHtmlContent(paragraph.text)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Images & Videos Section - Always after paragraphs */}
          {(images.length > 0 || videos.length > 0) && (
            <div className="w-full">
              <div className={`grid ${imageColumnClasses[imageColumns]} gap-6`}>
                {images.map((image, index) => (
                  <div key={`i-${index}`} className="w-full group">
                    <div className="overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-xl">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    {image.alt && (
                      <p className="text-sm text-gray-500 mt-3 text-center font-body">
                        {image.alt}
                      </p>
                    )}
                  </div>
                ))}

                {videos.map((video, index) => (
                  <div key={`v-${index}`} className="w-full group">
                    <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl">
                      <iframe
                        src={video.src}
                        title={video.title}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    {video.title && (
                      <p className="text-sm text-gray-500 mt-3 text-center font-body">
                        {video.title}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Empty state */}
        {processedParagraphs.length === 0 && images.length === 0 && videos.length === 0 && !title && !subtitle && !children && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg font-body">No content provided</p>
          </div>
        )}
      </div>
      
      {showDivider && <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-16"></div>}
    </section>
  );
};

export default CaseStudySection;
