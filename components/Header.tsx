'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Home, Camera, Info, Tv, Download, Users, Calendar, Menu, X } from 'lucide-react';
import LocationSelector from './LocationSelector';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [show, setShow] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosing(false);
    }, 400);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        // Scrolling down
        setShow(false);
      } else {
        // Scrolling up or at the top
        setShow(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/galleria', label: 'Galleria', icon: Camera },
    { href: '/info', label: 'Info', icon: Info },
    { href: '/webcam', label: 'Webcam', icon: Tv },
    { href: '/download-app', label: 'Download App', icon: Download },
    { href: '/chi-siamo', label: 'Chi siamo', icon: Users },
    { href: '/eventi', label: 'Eventi', icon: Calendar },
  ];

  return (
    <>
      <header 
        className={cn(
          'bg-white/80 backdrop-blur-lg sticky z-30 transition-all duration-300',
          show ? 'top-0' : '-top-24', 
          scrolled ? 'shadow-md' : 'shadow-sm'
        )}
      >
        <div className="container-jentu">
          <div className="relative flex items-center justify-center h-16">
            <div className="absolute left-0">
              <button
                className="p-2 text-gray-700 hover:text-jentu-teal transition-colors rounded-lg hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2">
              <Link href="/" className="flex items-center group">
                <div className="relative w-32 h-14 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/logo.png"
                    alt="Jentu.it"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            <div className="absolute right-0">
              {pathname === '/' && <LocationSelector />}
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <>
          <div 
            className={cn(
              "fixed inset-0 bg-black/50 z-40 cursor-pointer",
              isClosing ? "animate-fade-out" : "animate-fade-in"
            )}
            onClick={handleCloseMenu}
          />
          <div className={cn(
            "fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-white z-50 shadow-2xl overflow-y-auto",
            isClosing ? "animate-slide-out-left" : "animate-slide-in-left"
          )}>
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="font-bold text-lg text-gray-800">Menu</span>
              <button
                className="p-2 text-gray-700 hover:text-jentu-teal transition-colors rounded-lg hover:bg-gray-100"
                onClick={handleCloseMenu}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="p-6">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center space-x-3 px-4 py-3 text-lg text-gray-700 hover:text-jentu-teal hover:bg-jentu-teal/5 rounded-lg transition-colors duration-200 font-medium"
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={handleCloseMenu}
                  >
                    <link.icon className="w-5 h-5" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
              <div className="flex items-center justify-center space-x-4 mt-8 pt-8 border-t border-gray-200">
                 <a
                  href="https://www.instagram.com/jentu.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-jentu-teal transition-colors duration-200 rounded-full hover:bg-jentu-teal/10"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/18x6GWmkaN/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-jentu-teal transition-colors duration-200 rounded-full hover:bg-jentu-teal/10"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
