'use client';

import React, { useState, useEffect } from 'react';
import { Home, User, Code, Wrench, Mail, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine which section is currently in view
      const sections = ['home', 'projects', 'skills', 'about', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll with offset for fixed header
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = 80; // Approximate height of navbar
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });

      // For mobile menu
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Skills', href: '#skills', icon: Wrench },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <header
        className={cn(
          'fixed w-full z-50 transition-all duration-300',
          isScrolled
            ? 'bg-background/95 backdrop-blur-sm shadow-md'
            : 'bg-transparent'
        )}
      >
        <div className='container xl:max-w-6xl px-10 py-4 flex justify-between items-center'>
          <a
            href='#home'
            className='text-2xl font-bold text-primary flex items-center gap-2 fun-heading'
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <Rocket className='text-primary' />
            <span>Portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href.substring(1))}
                className={cn(
                  'link-with-hover text-foreground hover:text-primary transition-colors',
                  activeSection === link.href.substring(1) &&
                    'text-primary font-semibold'
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <div className='md:hidden fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md shadow-primary/40 shadow-inner z-50'>
        <div className='grid grid-cols-5 w-full'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'flex flex-col items-center justify-center py-3 text-xs transition-colors',
                activeSection === link.href.substring(1)
                  ? 'text-primary'
                  : 'text-foreground'
              )}
              onClick={(e) => handleNavClick(e, link.href.substring(1))}
            >
              <link.icon size={20} className='mb-1' />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
