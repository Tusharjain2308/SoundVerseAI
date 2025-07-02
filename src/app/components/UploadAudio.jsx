"use client"

import { useState, useRef } from "react"
import { cn } from "../../../lib/utils.js"

export default function UploadAudio({ onUploadComplete }) {
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState([])
  const fileInputRef = useRef(null)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = Array.from(e.dataTransfer.files)
    const audioFiles = files.filter(
      (file) =>
        file.type.startsWith("audio/") ||
        [".mp3", ".wav", ".aac", ".ogg", ".flac"].some((ext) =>
          file.name.toLowerCase().endsWith(ext)
        )
    )

    if (audioFiles.length > 0) {
      setUploadedFiles(audioFiles)
      onUploadComplete()
    }
  }

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      setUploadedFiles(files)
      onUploadComplete()
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 bg-[#0B0B0B]">
      <div
        className={cn(
          "relative border-2 rounded-xl p-8 text-center transition-all duration-200",
          isDragOver ? "border-purple-500 bg-purple-500/10" : "border-neutral-600 bg-[#0B0B0B]"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* Upload Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-neutral-700 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5L12 5H5a2 2 0 00-2 2z"
              />
            </svg>
          </div>
        </div>

        {/* Upload Text */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-white mb-2">Choose audio file(s) or folder(s) or drag it here</h3>
          <p className="text-sm text-neutral-400">Supported file formats: .mp3, .wav, .aac, .ogg, .flac</p>
        </div>

        {/* Upload Button */}
        <button
          onClick={handleUploadClick}
          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
        >
          Upload audio file(s)
        </button>

        {/* Disclaimer */}
        <p className="text-xs text-neutral-500 mt-8 max-w-md mx-auto">
          By uploading files, you agree that you have the ownership and authority to upload them.
        </p>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".mp3,.wav,.aac,.ogg,.flac,audio/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {/* Uploaded Files Display */}
      {uploadedFiles.length > 0 && (
        <div className="mt-6 p-4 bg-[#0B0B0B] rounded-lg border border-neutral-700">
          <h4 className="text-white font-medium mb-3">Uploaded Files:</h4>
          <div className="space-y-2">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-neutral-300">{file.name}</span>
                <span className="text-neutral-500">{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
