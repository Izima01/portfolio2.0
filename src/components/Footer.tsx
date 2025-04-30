import React from 'react';
import {
  Home,
  User,
  Code,
  Wrench,
  Rocket,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Skills', href: '#skills', icon: Wrench },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <footer className='py-5 bg-card border-t border-border'>
      <div className='container px-7 md:px-10 xl:max-w-6xl mb-14 md:mb-0'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <div>
            <p className='text-muted-foreground text-lg'>
              © {currentYear} Izima Obisike. All rights reserved.
            </p>
          </div>

          <div className='flex items-center gap-10'>
            <a
              href='https://github.com/Izima01'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              <Github size={24} />
            </a>
            <a
              href='mailto:kingsleyizima@gmail.com'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              <Mail size={24} />
            </a>
          </div>

          {/* <div> */}
          <nav className='hidden md:flex items-center gap-6'>
            {navLinks.map(({ href, name }) => (
              <a
                key={name}
                href={href}
                className='text-muted-foreground hover:text-primary transition-colors'
              >
                {name}
              </a>
            ))}
          </nav>
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
