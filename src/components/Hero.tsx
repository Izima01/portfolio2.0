import React from 'react';
import { Heart, Brain, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypewriterText from './ui/TypewriterText';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id='home' className='relative min-h-[70vh] flex items-center border-b border-primary'>
      <div className='absolute inset-0 [background-image:linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,0,0,0.1)_1px,transparent_1px)] [background-size:48px_48px]' />
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(92,108,192,0.3),transparent)]' />
      
      <div className='container xl:max-w-6xl relative z-10'>
        <div className='delayed-fade-in'>
          <p className='text-primary text-xl mb-4 flex items-center gap-2'>
            <Heart size={20} className='text-primary animate-grow mr-2 ml-1' />
            <span>Hello, my name is</span>
          </p>
          <h1 className='text-4xl md:text-6xl font-bold mb-4 fun-heading'>
            Izima Obisike
          </h1>
          <TypewriterText />
          <p className='text-lg text-muted-foreground mt-1.5 mb-8 max-w-2xl mr-10'>
            I build exceptional digital experiences that maximize user and
            client satisfaction while retaining code readability
          </p>
        </div>

        <div className='flex flex-wrap gap-4 delayed-fade-in-800'>
          <Button asChild size='lg' className='gap-2 group'>
            <a href='#projects'>
              <Rocket className='group-hover:scale-125 transition-transform' />
              View My Work
            </a>
          </Button>
          <Button
            variant='outline'
            size='lg'
            asChild
            className='gap-2 group border-accent border-2'
          >
            <a href='#contact'>
              <Rocket className='group-hover:scale-125 transition-transform' />
              Get In Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
