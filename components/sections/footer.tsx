import { SOCIAL_LINKS } from "@/constants";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative w-full min-h-[250px]">
      {/* Background shadow image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/shadow.svg"
          alt="background effect"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* Main content */}
      <section className="relative z-10 max-w-screen-xl mx-auto px-4">
        <div>
          <div className="pb-[45px]">
            <div className="flex md:flex-col sm:flex-col">
              {/* Left side: Logo and tagline */}
              <div className="w-6/12 flex items-center justify-between gap-8 md:w-full sm:w-full sm:flex-col sm:text-center sm:gap-4">
                <Image
                  src="/assets/logo.svg"
                  alt="logo"
                  height={56}
                  width={207}
                />
                <p className="text-neutral-1">|</p>
                <div>
                  <p className="text-body-16 text-neutral-2">
                    Solutions that drive success and propel your business
                    forward
                  </p>
                </div>
              </div>

              {/* Right side: Navigation links */}
              <div className="w-6/12 flex items-center justify-end md:w-full md:mt-6 sm:mt-6 sm:w-full sm:justify-center">
                <ul className="flex gap-8 text-body-16 text-neutral-2">
                  <li>Integration</li>
                  <li>Pricing</li>
                  <li>Reviews</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider line */}
          <hr className="border-gray-500" />

          <div className="pt-[45px] mb-[65px]">
            <div className="flex items-center justify-between md:flex-col md:gap-6 sm:flex-col sm:gap-6">
              {/* Copyright notice with dynamic year */}
              <div className="text-body-16 text-neutral-2">
                <p>Copyright © {currentYear} FramerBite.</p>
                <p>All Rights Reserved</p>
              </div>

              {/* Social media icons */}
              <div className="flex items-center gap-6">
                {SOCIAL_LINKS.map(({ src, alt, height, width }, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={alt}
                    height={height}
                    width={width}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
