import React from 'react';
import { Button } from '@/components/ui/button';
import {
  FileText,
  Code,
  BookOpen,
  Microscope,
  Dna,
} from '@/components/ui/icons';
import Image from 'next/image';
import { useIntersection } from '@/hooks/use-intersection';

const About = () => {
  const [sectionRef, isVisible] = useIntersection<HTMLElement>({
    threshold: 0.35,
    rootMargin: '-50px 0px',
  });

  const badges = [
    { icon: Code, text: 'Software Developer' },
    { icon: BookOpen, text: 'Lifelong Learner' },
    { icon: Microscope, text: 'Science Enthusiast' },
    { icon: Dna, text: 'Astronomy Buff' },
  ];

  return (
    <section id='about' ref={sectionRef} className='py-20'>
      <div className='container mx-auto'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='section-heading'>About Me</h2>

          <div className='grid md:grid-cols-3 gap-16 items-start'>
            <div className='md:col-span-2 space-y-4'>
              <p className='fadeIn' data-visible={isVisible}>
                Hello! I'm Izima Obisike, a passionate software developer.
                <br /> I bring a unique perspective to development.
              </p>

              <div
                className='p-4 border border-primary/20 rounded-lg bg-primary/5 my-6'
                data-visible={isVisible}
                style={{ transitionDelay: '200ms' }}
              >
                <p className='text-foreground italic'>
                  "I approach development like diagnosis—breaking down complex
                  problems, identifying the root cause, and applying the best
                  solution. Whether I'm debugging an app or optimizing a user
                  experience, I make sure it is focused, methodical, and always
                  aiming for the best outcome."
                </p>
              </div>

              <p
                className='fadeIn'
                data-visible={isVisible}
                style={{ transitionDelay: '400ms' }}
              >
                When I'm not coding or studying medicine, you can find me
                exploring topics in space and biology, catching up on Marvel
                movies, or revisiting classics like Harry Potter and Pacific
                Rim.
              </p>
            </div>

            <div className='md:col-span-1'>
              <div className='rounded-lg overflow-hidden border border-primary/30 shadow-lg shadow-primary/50 hover-pulse w-fit ms-auto'>
                <Image
                  src='/profile.webp'
                  alt='Izima Obisike'
                  width={320}
                  height={600}
                  priority
                />
              </div>
            </div>

            <div className='col-span-3'>
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6'>
                {badges.map((item, index) => (
                  <div
                    key={item.text}
                    className='flex items-center gap-4 bg-secondary/40 px-4 py-1.5 rounded-full transform transition-all duration-500'
                    style={{
                      transform: `translateX(${isVisible ? 0 : '100px'})`,
                      opacity: isVisible ? 1 : 0,
                      transitionDelay: `${index * 150}ms`,
                    }}
                  >
                    <item.icon size={16} className='text-primary' />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className='flex justify-center w-full'>
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
