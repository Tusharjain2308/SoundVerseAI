"use client"

import { useState, useEffect } from "react"

export default function Tagging({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsComplete(true)
          clearInterval(interval)
          setTimeout(() => {
            if (onComplete) onComplete()
          }, 1000)
          return 100
        }
        return prev + 1
      })
    }, 50)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 flex flex-col items-center justify-center min-h-[400px]">
      {/* Main Loading Circle */}
      <div className="relative mb-8">
        {/* Background Circle */}
        <svg className="w-80 h-80 transform -rotate-90" viewBox="0 0 320 320">
          <circle cx="160" cy="160" r="140" stroke="rgba(75, 85, 99, 0.3)" strokeWidth="8" fill="none" />
          {/* Progress Circle */}
          <circle
            cx="160"
            cy="160"
            r="140"
            stroke="rgb(34, 197, 94)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 140}`}
            strokeDashoffset={`${2 * Math.PI * 140 * (1 - progress / 100)}`}
            className="transition-all duration-100 ease-out"
            style={{
              filter: "drop-shadow(0 0 8px rgba(34, 197, 94, 0.5))",
            }}
          />
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-normal text-white leading-[0.8] tracking-wide">
              WE'RE
              <br />
              BUILDING
              <br />
              YOUR
              <br />
              <span className="text-5xl font-bold">DNA</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Status Text */}
      <div className="text-center max-w-2xl">
        <p className="text-neutral-400 text-sm leading-relaxed">
          YOUR DNA WILL BE READY IN A FEW MINUTES. WE'LL INFORM YOU
          <br />
          ONCE IT'S READY. YOU CAN USE THE STUDIO MEANWHILE
        </p>
      </div>
    </div>
  )
}
