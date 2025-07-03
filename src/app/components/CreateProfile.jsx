"use client";

import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";

export default function CreateProfile({ onComplete }) {
  const [formData, setFormData] = useState({
    creatorName: "",
    description: "",
    tags: [],
    dnaVisibility: "Public",
    price: "$9.99",
    license: "Distribution",
    tracks: "Visible",
    becomePartner: "Yes",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target?.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDone = () => {
    onComplete?.({ ...formData, profileImage });
  };

  const CustomSelect = ({ value, onChange, options, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full h-10 px-4 text-left bg-neutral-800 text-white border border-neutral-600 rounded-full flex items-center justify-between hover:border-neutral-500"
        >
          <span className="text-sm truncate">{value || placeholder}</span>
          <ChevronDown className="w-4 h-4 text-neutral-400" />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-[#0B0B0B] border border-neutral-600 rounded z-10 max-h-40 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 text-sm text-white hover:bg-neutral-700 text-left"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  const Row = ({ label, input, hint }) => (
    <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] items-start gap-2 sm:gap-4 w-full">
      <label className="text-white text-sm pt-2">{label}</label>
      <div className="flex flex-col gap-1">
        {input}
        {hint && <p className="text-xs text-neutral-500">{hint}</p>}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto mt-4 px-4 sm:px-6">
      <div className="bg-[#0B0B0B] border border-neutral-700 rounded-xl px-6 sm:px-8 py-6 w-full">
        <div className="flex flex-col sm:grid sm:grid-cols-[1fr_auto] items-start gap-10 sm:gap-24">
          {/* Left: Form Section */}
          <div className="space-y-4 w-full">
            <Row
              label="Creator Name"
              input={
                <CustomSelect
                  value={formData.creatorName}
                  onChange={(val) => handleInputChange("creatorName", val)}
                  options={[
                    "Skrillex",
                    "Coldplay",
                    "Deadmau5",
                    "Calvin Harris",
                    "David Guetta",
                  ]}
                  placeholder="Name such as Skrillex, Coldplay"
                />
              }
            />

            <Row
              label="Description"
              input={
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Upto 300 characters"
                  maxLength={300}
                  className="w-full h-10 px-4 py-2 text-sm bg-neutral-800 text-white border border-neutral-600 rounded-full placeholder-neutral-400 resize-none"
                />
              }
            />

            <Row
              label="Tags"
              input={
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex-1 min-w-[150px] h-10 px-4 flex items-center bg-neutral-800 border border-neutral-600 rounded-full text-neutral-400 text-sm">
                    Add tags...
                  </div>
                  <button className="w-10 h-10 bg-neutral-700 border border-neutral-600 rounded-full flex items-center justify-center hover:bg-neutral-600">
                    <Plus className="w-4 h-4 text-neutral-300" />
                  </button>
                </div>
              }
            />

            <Row
              label="DNA Visibility"
              input={
                <CustomSelect
                  value={formData.dnaVisibility}
                  onChange={(val) => handleInputChange("dnaVisibility", val)}
                  options={["Public (Default)", "Private", "Draft"]}
                />
              }
            />

            <Row
              label="Price"
              input={
                <CustomSelect
                  value={formData.price}
                  onChange={(val) => handleInputChange("price", val)}
                  options={[
                    "$9.99",
                    "Royalty Free",
                    "Sample",
                    "Distribution (Default)",
                    "Sync",
                    "Full Ownership",
                  ]}
                />
              }
            />

            <Row
              label="License"
              input={
                <CustomSelect
                  value={formData.license}
                  onChange={(val) => handleInputChange("license", val)}
                  options={["Distribution", "Visible (Default)", "Invisible"]}
                />
              }
            />

            <Row
              label="Tracks"
              input={
                <CustomSelect
                  value={formData.tracks}
                  onChange={(val) => handleInputChange("tracks", val)}
                  options={["Visible", "Invisible"]}
                />
              }
            />

            <Row
              label="Become Partner"
              input={
                <CustomSelect
                  value={formData.becomePartner}
                  onChange={(val) => handleInputChange("becomePartner", val)}
                  options={["Yes", "No"]}
                />
              }
            />
          </div>

          {/* Right: Profile Image Upload */}
          <div className="flex flex-col items-center sm:items-start gap-4 mt-6 sm:mt-[2px] w-full sm:w-auto">
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-neutral-600 bg-neutral-800 flex items-center justify-center overflow-hidden">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 bg-neutral-800 border border-neutral-600 rounded-full flex items-center justify-center">
                    <Plus className="w-5 h-5 text-neutral-400" />
                  </div>
                )}
              </div>
            </div>
            <button className="w-full sm:w-44 py-2 bg-neutral-800 border border-neutral-600 rounded-full text-white text-sm hover:bg-neutral-700 transition">
              Upload Picture
            </button>
          </div>
        </div>

        {/* Done Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={handleDone}
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-3 rounded-full font-medium transition-all duration-200"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
