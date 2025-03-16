// components/SuccessBanner.jsx
'use client'
import React from 'react';
import DivAnimateX from '../utils/DivAnimateX';

const TouchBanner = () => {
    return (
        <div className="w-full my-[50px]  px-10 ">
            <div className="container mx-auto px-4">
                <div className="relative bg-gradient-to-r from-[#403685] to-[#010101] rounded-lg overflow-hidden shadow-lg">
                    <div className="flex flex-col md:flex-row items-center justify-between   px-8 ">
                        {/* Left content - Text and button */}
                        <DivAnimateX duration={0.8} position={-30} className="text-white md:w-2/3 z-10 mb-4 md:mb-0">
                            <h2 className="text-xl md:text-2xl font-semibold leading-snug tracking-wide mb-4 mt-4 text-white">
                                Get In Touch

                            </h2>

                            <button className="bg-white text-orange-500 hover:bg-orange-50 transition-colors px-5 py-2 rounded-md font-medium tracking-wide">
                                Click to connect
                            </button>
                        </DivAnimateX>

                        {/* Right content - Image */}
                        <DivAnimateX duration={0.8} position={30} className="md:w-1/3 flex justify-end z-10">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/37b7/4e61/3e4acb3aae22def46f0f628b89af3f72?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LcDzoSEkfAVuzNRH4FQK5~A7gUxpJaj00LlpHGJbnbmZgp0HXavJ~0y4vZcrSkgvbbCOGBohAKe~ZmsvLnXXPDZOl0ky1XmWOyxCdgTNrFhtQyMQ7Ey0R3NcBiCIeYcN4lXhoAK6Aj02UGyR8rGTo2obrbHRs7oAG3bCGF0BRyMe5VdIUvMAhrUhm-hSbYc0JCmIV3bnOSfem~O94wkpQm7QlYLWa2zvo~~b7zAMDggfdzYKirEELE5vnLpH4AGck0YSG7qdFLltzz8C0OQy~1IpC34g0HA70Uv~KB9snU15WWiQSkuALgZSATniLE0feoeMlN-4jty1hbFd5eBldA__"
                                alt="Student with laptop raising hand"
                                className="h-[120px] object-cover"
                            />
                        </DivAnimateX>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouchBanner;
