'use client';

import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import About from '@/components/About';

// Dynamically import components that are below the fold
const Skills = dynamic(() => import('@/components/Skills'), {
  ssr: false,
  loading: () => <div className='h-screen' />,
});

const Projects = dynamic(() => import('@/components/Projects'), {
  ssr: false,
  loading: () => <div className='h-screen' />,
});

const Contact = dynamic(() => import('@/components/Contact'), {
  ssr: false,
  loading: () => <div className='h-screen' />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
