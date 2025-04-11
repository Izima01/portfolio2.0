import React from 'react';
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Microscope,
  Heart,
  Brain,
  Rocket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypewriterText from './ui/TypewriterText';

const Hero = () => {
  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center pt-16'
    >
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0'></div>

      <div className='container mx-auto relative z-10'>
        <div className='max-w-5xl mx-auto'>
          <div className='delayed-fade-in'>
            <p className='text-primary mb-4 flex items-center gap-2'>
              <Heart
                size={18}
                className='text-primary animate-grow mr-2 ml-1'
              />
              <span>Hello, my name is</span>
            </p>
            <h1 className='text-4xl md:text-6xl font-bold mb-4 fun-heading'>
              Izima Obisike
            </h1>
            <TypewriterText />
            {/* <h2 className='text-2xl md:text-4xl font-bold text-primary mb-6'>
              Fullstack <span className='text-muted-foreground'>Software</span>{' '}
              Developer
            </h2> */}
            <p className='text-lg text-muted-foreground mb-8 max-w-2xl'>
              I build exceptional digital experiences that maximize user and
              client satisfaction while retaining code readability
            </p>
          </div>

          <div className='flex flex-wrap gap-4 delayed-fade-in-800'>
            <Button asChild size='lg' className='gap-2 group'>
              <a href='#projects'>
                <Rocket className='group-hover:translate-x-1 transition-transform' />
                View My Work
              </a>
            </Button>
            <Button
              variant='outline'
              size='lg'
              asChild
              className='gap-2 relative'
            >
              <a href='#contact'>Get In Touch</a>
            </Button>
          </div>

          <div className='mt-12 flex items-center gap-6 delayed-fade-in-1200'>
            <a
              href='https://github.com/Izima01'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors hover-rotate'
            >
              <Github size={24} />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors hover-rotate'
            >
              <Linkedin size={24} />
            </a>
            <a
              href='mailto:kingsleyizima@gmail.com'
              className='text-muted-foreground hover:text-primary transition-colors hover-rotate'
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <a
            href='#projects'
            className='text-muted-foreground hover:text-primary transition-colors'
          >
            <ArrowDown size={24} />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
