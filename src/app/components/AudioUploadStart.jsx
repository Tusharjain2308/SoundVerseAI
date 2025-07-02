import React, { useState } from "react";

const AudioUploadStart = () => {
    const [hasStarted, setHasStarted] = useState(false);
  return (
    <div className="max-w-5xl">
      {/* Title Section */}

      {/* Verify Creator Identity Section */}
      <div className="bg-neutral-800/50 rounded-xl p-8 mb-6 border border-neutral-700">
        <h2 className="text-2xl font-semibold mb-2">
          Verify your creator identity → Unlock your DNA
        </h2>
        <p className="text-neutral-400 mb-6 text-md">
          Simply claim your profile, and we'll build your DNA automatically. Are
          you a creator with music already on Spotify, Youtube etc?
        </p>
        <div className="flex gap-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
            Claim your profile
          </button>
          <button className="bg-neutral-700 hover:bg-neutral-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
            This doesn't apply to me
          </button>
        </div>
      </div>

      {/* Upload Audio Section */}
      <div className="bg-neutral-800/50 rounded-xl p-8 border border-neutral-700">
        <h2 className="text-2xl font-semibold mb-2">
          Build DNA by Uploading Audio Tracks
        </h2>
        <p className="text-neutral-400 mb-0 text-md">
          You can upload your music, and build your Sonic DNA. Please note that
          by default all DNAs remain private.
        </p>
        <ul className="text-neutral-400 mb-8 space-y-2">
          <li className="flex items-start gap-2 mb-0">
            <span className="text-white">•</span>
            <span>
              <strong className="text-white">Build with AI:</strong> With this,
              AI will take care of captions, categorisations, tags.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-white">•</span>
            <span>
              <strong className="text-white">Build Manually:</strong> You'll
              have to manually add captions, categorisations and tags.
            </span>
          </li>
        </ul>
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
          onClick={() => setHasStarted(true)}
        >
          Upload audio
        </button>
      </div>
    </div>
  );
};

export default AudioUploadStart;
