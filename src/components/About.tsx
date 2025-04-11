import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Code, BookOpen, Microscope, Dna } from 'lucide-react';
import Image from 'next/image';
// import resume from '../assets/Izima Obisike resume.pdf';

const About = () => {
  return (
    <section id='about' className='py-20'>
      <div className='container mx-auto'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='section-heading'>About Me</h2>

          <div className='grid md:grid-cols-2 gap-8 items-start'>
            <div className='md:col-span-1 space-y-4'>
              <p className='text-muted-foreground'>
                Hello! I'm Izima Obisike, a passionate software developer.
                <br /> I bring a unique perspective to development.
              </p>

              <div className='p-4 border border-primary/20 rounded-lg bg-primary/5 my-6 mr-4'>
                <p className='text-foreground italic'>
                  "I approach development like diagnosis—breaking down complex
                  problems, identifying the root cause, and applying the best
                  solution. Whether I'm debugging an app or optimizing a user
                  experience, I make sure it is focused, methodical, and always
                  aiming for the best outcome."
                </p>
              </div>

              <p className='text-muted-foreground'>
                When I'm not coding or studying medicine, you can find me
                exploring topics in space and biology, catching up on Marvel
                movies, or revisiting classics like Harry Potter and Pacific
                Rim.
              </p>
            </div>

            <div className='md:col-span-1'>
              <div className='rounded-lg overflow-hidden border border-primary/30 shadow-lg shadow-primary/50 hover-pulse w-fit ms-auto'>
                <Image
                  src='/profile.jpg'
                  alt='Izima Obisike'
                  // className='mx-8'
                  width={320}
                  height={600}
                />
              </div>
            </div>

            <div className='col-span-2 flex flex-wrap gap-5'>
              <div className='pt-4 flex flex-wrap gap-3'>
                <div className='flex items-center gap-2 bg-secondary/40 px-3 py-1 rounded-full'>
                  <Code size={16} className='text-primary' />
                  <span>Software Developer</span>
                </div>
                <div className='flex items-center gap-2 bg-secondary/40 px-3 py-1 rounded-full'>
                  <BookOpen size={16} className='text-primary' />
                  <span>Lifelong Learner</span>
                </div>
                <div className='flex items-center gap-2 bg-secondary/40 px-3 py-1 rounded-full'>
                  <Microscope size={16} className='text-primary' />
                  <span>Science Enthusiast</span>
                </div>
                <div className='flex items-center gap-2 bg-secondary/40 px-3 py-1 rounded-full'>
                  <Dna size={16} className='text-primary' />
                  <span>Astronomy Buff</span>
                </div>
              </div>

              <div className='pt-6 ml-auto'>
                <Button asChild className='hover-pulse'>
                  <a
                    href={'/Izima Obisike resume.pdf'}
                    download=''
                    className='flex items-center gap-2'
                  >
                    <FileText size={16} />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
