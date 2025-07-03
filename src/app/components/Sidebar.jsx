"use client";

import { useState, useRef } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar.jsx";
import {
  IconHome,
  IconSearch,
  IconBooks,
  IconDna,
  IconPlus,
} from "@tabler/icons-react";
import { cn } from "../../../lib/utils.js";
import { motion } from "framer-motion";
import UploadAudio from "./UploadAudio.jsx";
import DNASensitivity from "./DNASensitivity.jsx";
import CreateProfile from "./CreateProfile.jsx";
import Tagging from "./Tagging.jsx";

export function DNABuilder() {
  const steps = [
    {
      label: "Step 1 : Upload Audio",
      title: "Upload Audio",
      content: <UploadAudio onUploadComplete={() => setHasStarted(true)} />,
    },
    {
      label: "Step 2 : DNA Sensitivity",
      title: "DNA Sensitivity",
      content: <DNASensitivity />,
    },
    {
      label: "Step 3 : Profile Creation",
      title: "Profile Creation",
      content: <CreateProfile />,
    },
    {
      label: "Step 4 : Tagging & Categorization",
      title: "Tagging & Categorization",
      content: <Tagging />,
    },
    { label: "Step 5 : Publish" },
  ];

  const [currentStep, SetcurrentStep] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const stepRefs = steps.map(() => useRef(null));

  const scrollToStep = (index) => {
    SetcurrentStep(index);
    stepRefs[index]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const links = [
    {
      label: "Add",
      href: "#",
      icon: <IconPlus className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Home",
      href: "#",
      icon: <IconHome className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Search",
      href: "#",
      icon: <IconSearch className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Library",
      href: "#",
      icon: <IconBooks className="h-5 w-5 shrink-0" />,
    },
    {
      label: "DNA",
      href: "#",
      icon: <IconDna className="h-5 w-5 shrink-0" />,
      isActive: true,
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row min-h-screen text-white bg-[#0E0E0F]">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <Logo />
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} isActive={link.isActive} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex flex-col relative border-b border-neutral-800 bg-[rgba(42,31,31,0.12)] z-30 min-h-[160px] sm:min-h-[200px]">
          {/* Elliptical gradient */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] h-[120px] sm:h-[150px] rounded-full bg-[rgba(102,171,255,1)] blur-3xl opacity-30 z-0" />

          {/* Title + Description */}
          <div className="relative z-10 px-4 sm:px-6 pt-6 sm:pt-8">
            {hasStarted ? (
              <>
                <h1 className="text-xl sm:text-3xl font-light leading-snug">
                  Build DNA by Uploading Audio Tracks
                </h1>
                <p className="text-neutral-400 text-sm sm:text-md mt-1">
                  You can upload your music, and build your DNA.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-xl sm:text-3xl font-light leading-snug">
                  BUILD <span className="font-bold">DNA</span>
                </h1>
                <p className="text-neutral-400 text-sm sm:text-md mt-1">
                  Build a DNA on Soundverse and earn passive income as your DNA
                  is used by other creators.{" "}
                  <a
                    href="#"
                    className="text-white underline hover:no-underline"
                  >
                    Learn more
                  </a>
                </p>
              </>
            )}
          </div>

          {/* Step Buttons */}
          <div className="relative z-10 flex flex-wrap items-center gap-2 px-4 sm:px-6 py-3 min-h-[60px]">
            {hasStarted
              ? steps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToStep(index)}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs sm:text-sm font-medium",
                      currentStep === index
                        ? "bg-green-600 text-white"
                        : "bg-neutral-800 text-neutral-400"
                    )}
                  >
                    {step.label}
                  </button>
                ))
              : Array(5)
                  .fill("x")
                  .map((_, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-transparent text-transparent border border-transparent"
                    >
                      Placeholder
                    </div>
                  ))}
          </div>

          {/* Avatar */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 flex items-center justify-center z-10">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 overflow-y-auto z-10">
          {hasStarted ? (
            <div className="max-w-5xl space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  ref={stepRefs[index]}
                  className="max-w-4xl mx-auto px-4 sm:px-0 flex flex-col"
                >
                  <h1 className="text-lg text-neutral-500">
                    Step <span>{index + 1}</span>
                  </h1>
                  <p className="text-2xl font-semibold pb-4 text-white">
                    {step.title}
                  </p>
                  {step.content}
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-5xl space-y-8">
              {/* Creator Identity */}
              <div className="bg-neutral-800/50 rounded-xl p-4 sm:p-8 mb-6 border border-neutral-700">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  Verify your creator identity → Unlock your DNA
                </h2>
                <p className="text-neutral-400 mb-6 text-sm sm:text-md">
                  Simply claim your profile, and we'll build your DNA
                  automatically. Are you a creator with music already on
                  Spotify, Youtube etc?
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                    Claim your profile
                  </button>
                  <button className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
                    This doesn't apply to me
                  </button>
                </div>
              </div>

              {/* Upload Info */}
              <div className="bg-neutral-800/50 rounded-xl p-4 sm:p-8 border border-neutral-700">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  Build DNA by Uploading Audio Tracks
                </h2>
                <p className="text-neutral-400 text-sm sm:text-md">
                  You can upload your music, and build your Sonic DNA. Please
                  note that by default all DNAs remain private.
                </p>
                <ul className="text-neutral-400 mb-8 mt-4 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-white">•</span>
                    <span>
                      <strong className="text-white">Build with AI:</strong> AI
                      will take care of captions, categorisations, tags.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white">•</span>
                    <span>
                      <strong className="text-white">Build Manually:</strong>{" "}
                      You’ll have to manually add captions, categorisations and
                      tags.
                    </span>
                  </li>
                </ul>
                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
                  onClick={() => setHasStarted(true)}
                >
                  Upload audio
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-white"
    >
      <motion.img
        src="/logo.png"
        alt="Logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-8 w-auto"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-white"
      >
        Soundverse
      </motion.span>
    </a>
  );
};
