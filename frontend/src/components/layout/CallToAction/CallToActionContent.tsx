import React from 'react'

function CallToActionContent() {
    return (
        <div className="relative z-10 flex flex-col items-center justify-center space-y-6  ">
            <p className="max-w-xl text-5xl font-medium text-[var(--primary)]">
                Ready to Bring Your Vision to Life?
            </p>
            <p className="max-w-xl text-lg font-medium text-gray-300 ">
                Let&apos;s collaborate on your next project and create something extraordinary together.
            </p>
            <a
                href=""
                className="inline-flex items-center gap-2 bg-[#D76B30] text-white px-5 py-2 rounded-lg font-medium shadow-md hover:bg-[#b55220] active:bg-[#8a3d17] transition justify-center"
                aria-label="Download CV"
            >
                Get in Touch
            </a>
        </div>
    )
}

export default CallToActionContent