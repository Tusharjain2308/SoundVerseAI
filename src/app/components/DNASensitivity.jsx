"use client";

import { useState } from "react";

export default function DNASensitivity({ onComplete, onSkip }) {
  const [sensitivity, setSensitivity] = useState(5);

  const handleSliderChange = (e) => {
    setSensitivity(parseInt(e.target.value));
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-4 sm:mt-8">
      <div className="bg-[#0B0B0B] rounded-xl px-6 py-8 border border-neutral-700">
        {/* Title & Description */}
        <h2 className="text-white text-[22px] font-light mb-2">
          Set the level of sensitivity for the DNA creation
        </h2>
        <p className="text-sm text-neutral-400 mb-8">
          Less sensitivity will result in less number of DNAs, higher
          sensitivity will result in many niche DNAs.
        </p>

        {/* Slider */}
        {/* Slider */}
        <div className="mb-10">
          {/* Slider container with reduced width and vertical spacing */}
          <div className="relative flex justify-center mt-6">
            <div className="w-[80%]">
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={sensitivity}
                onChange={handleSliderChange}
                className="w-full h-2 bg-neutral-600 rounded-full appearance-none slider-thumb"
                style={{
                  background: `linear-gradient(to right, #FFFFFF 0%, #FFFFFF ${
                    (sensitivity - 1) * 11.11
                  }%, #3F3F46 ${(sensitivity - 1) * 11.11}%, #3F3F46 100%)`,
                }}
              />
            </div>
          </div>

          <style jsx>{`
            .slider-thumb::-webkit-slider-thumb {
              appearance: none;
              width: 20px;
              height: 20px;
              border-radius: 9999px;
              background: white;
              cursor: pointer;
              border: 2px solid white;
            }
            .slider-thumb::-moz-range-thumb {
              width: 20px;
              height: 20px;
              border-radius: 9999px;
              background: white;
              cursor: pointer;
              border: 2px solid white;
            }
          `}</style>

          {/* Labels under slider */}
          <div className="flex justify-between mt-5 text-sm">
            <div className="text-left">
              <div className="text-white font-medium">Least Sensitive</div>
              <div className="text-neutral-500 text-xs">
                (Generic Genre DNAs)
              </div>
            </div>
            <div className="text-center text-neutral-400 font-medium">
              Recommended
            </div>
            <div className="text-right">
              <div className="text-white font-medium">Highly Sensitive</div>
              <div className="text-neutral-500 text-xs">(Niche Genre DNAs)</div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 pt-4">
          <button
            onClick={() => onComplete?.(sensitivity)}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200"
          >
            Set Sensitivity
          </button>
          <button
            onClick={onSkip}
            className="text-white px-8 py-3 rounded-full font-medium hover:text-neutral-300"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}
