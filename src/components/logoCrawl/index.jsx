'use client'
import React from "react";
import DivAnimateX from "../utils/DivAnimateX";

const LogoCrawler = () => {
    // Fixed array with a mix of your specific logos and random ones
    const logos = [
        { id: 'logo-1', alt: 'Logo 1' },
        { id: 'logo-2', alt: 'Logo 2' },
        { id: 'logo-3', alt: 'Logo 3' },
        { id: 'logo-4', alt: 'Logo 4' },
        { id: 'logo-5', alt: 'Logo 5' },
        { id: 'logo-6', alt: 'Logo 6' },
        { id: 'logo-7', alt: 'Logo 7' },
        { id: 'logo-8', alt: 'Logo 8' },
        { id: '8igt', alt: '8IGT Logo' },
        { id: 'reload', alt: 'RELOAD Logo' },
        { id: 'diamond', alt: 'DIAMOND Logo' },
        { id: 'smart-edutor', alt: 'smart edutor Logo' }
    ];

    return (
        <div className="w-full overflow-hidden border-t border-b border-gray-200">
            <div className="py-4 flex items-center">
                <div className="text-gray-600 mr-8 whitespace-nowrap">In collaboration with-</div>

                <div className="flex items-center space-x-12 logo-scroll">
                    {logos.map((logo, index) => (
                        <DivAnimateX
                            key={logo.id}
                            className="h-12 w-24 flex-shrink-0"
                            duration={0.8}
                            position={60}
                            visible={false}
                            repeat={true}
                        >
                            <img
                                src={`/api/placeholder/96/48`}
                                alt={logo.alt}
                                className="h-full w-full object-contain"
                            />
                        </DivAnimateX>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .logo-scroll {
          animation: scroll 30s linear infinite;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
        </div>
    );
};

export default LogoCrawler;