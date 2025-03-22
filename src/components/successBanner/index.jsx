// components/SuccessBanner.jsx
'use client'
import React from 'react';
import DivAnimateX from '../utils/DivAnimateX';

const SuccessBanner = () => {
    return (
        <div className="w-full  px-10 mb-3 ">
            <div className="  mx-[.8vw] px-4">
                <div className="relative bg-gradient-to-r from-[#403685] to-[#010101] rounded-lg overflow-hidden shadow-lg">
                    <div className="flex flex-col md:flex-row items-center justify-between   px-8 ">
                        {/* Left content - Text and button */}
                        <DivAnimateX duration={0.8} position={-30} className="text-white md:w-2/3 z-10 mb-4 md:mb-0">
                            <h2 className="text-xl md:text-2xl font-semibold leading-snug tracking-wide mb-4 mt-4 text-white">
                                "78% of our learners achieve career success within 6 months
                                <br className="hidden md:block" /> of the program."
                            </h2>

                            <button className="bg-white text-orange-500 hover:bg-orange-50 transition-colors px-5 py-2 rounded-md font-medium tracking-wide">
                                Download Handbook
                            </button>
                        </DivAnimateX>

                        {/* Right content - Image */}
                        <DivAnimateX duration={0.8} position={30} className="md:w-1/3 flex justify-end z-10">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/2015/a4cc/aef5735c7ef3fef71f8fd47d7f6dd44e?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nAi7Q3rDTdOO9X7pXKfaHpC~6yYSNfa~Ew~o84DavX30CNT7kfcyyiHHiGzGopFELq7VyvnZDhffj160PNsNI0GxR~bpdIvHpzlD2nV-rLqTG33R34KmgOqFWwE2afZctdrn1PHW0pbvvzxM3UPbXooNRYW8MCYB0R7wmNY5RTZqRY9oTLFaXVGqhrAqZBaIXnXvgDatVR2cVKYRtSquQ7Fzoz-NUSXxhnO3KTUXUTj9fdi-Bu19uNDyycKOaQrU15EeZamwH-X6TdWja3kxFdwOA4ts60IE4yx3yeJ~BzCZYFgkKjMb-kEeXM35VqqJtlBhgjrS1y48Vu2JBM4yEA__"
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

export default SuccessBanner;
