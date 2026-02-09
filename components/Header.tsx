"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Jentu.it"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-jentu-teal transition">
              Home
            </Link>
            <Link href="/galleria" className="text-gray-700 hover:text-jentu-teal transition">
              Galleria
            </Link>
            <Link href="/info" className="text-gray-700 hover:text-jentu-teal transition">
              Info
            </Link>
            <Link href="/webcam" className="text-gray-700 hover:text-jentu-teal transition">
              Webcam
            </Link>
            <Link href="/download-app" className="text-gray-700 hover:text-jentu-teal transition">
              Download App
            </Link>
            <Link href="/chi-siamo" className="text-gray-700 hover:text-jentu-teal transition">
              Chi siamo
            </Link>
            <Link href="/eventi" className="text-gray-700 hover:text-jentu-teal transition">
              Eventi
            </Link>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 ml-4">
              <a
                href="https://www.instagram.com/jentu.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-jentu-teal transition"
              >
                📷
              </a>
              <a
                href="https://www.facebook.com/share/18x6GWmkaN/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-jentu-teal transition"
              >
                📘
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
            <Link href="/" className="text-gray-700 hover:text-jentu-teal transition">
              Home
            </Link>
            <Link href="/galleria" className="text-gray-700 hover:text-jentu-teal transition">
              Galleria
            </Link>
            <Link href="/info" className="text-gray-700 hover:text-jentu-teal transition">
              Info
            </Link>
            <Link href="/webcam" className="text-gray-700 hover:text-jentu-teal transition">
              Webcam
            </Link>
            <Link href="/download-app" className="text-gray-700 hover:text-jentu-teal transition">
              Download App
            </Link>
            <Link href="/chi-siamo" className="text-gray-700 hover:text-jentu-teal transition">
              Chi siamo
            </Link>
            <Link href="/eventi" className="text-gray-700 hover:text-jentu-teal transition">
              Eventi
            </Link>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/jentu.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-jentu-teal"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/share/18x6GWmkaN/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-jentu-teal"
              >
                Facebook
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
