import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import work10 from '../assets/work10.png';
import work12 from '../assets/work 12.png';
import work8 from '../assets/work8.webp';
import work1 from '../assets/work1.webp';
import work4 from '../assets/work4.webp';
import work6 from '../assets/work6.webp';
import work5 from '../assets/work5.webp';
import work9 from '../assets/work9.webp';
import work13 from '../assets/work 13.png';

import Image, { StaticImageData } from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  technologies: string[];
  github: string;
  demo: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 10,
      // category: 'frontend',
      image: work1,
      title: 'Shots By Itopa Photography Portfolio',
      technologies: ['Nextjs', 'TailwindCSS', 'Typescript'],
      description:
        'A fast, responsive photography portfolio built with Next.js and Tailwind CSS. Optimized for performance and mobile viewing, with dynamic image rendering and clean grid layout. Deployed on Vercel.',
      github: 'https://github.com/Izima01/moments-and-memories',
      demo: 'https://shotsbyitopa.vercel.app/',
    },
    {
      id: 1,
      image: work13,
      title: "Izima Obisike's Portfolio",
      technologies: ['React', 'Tailwind', 'Tailwind Animate', 'Emailjs'],
      description:
        'Portfolio website to showcase my projects and skills. Also for potential collaborations and job opportunities',
      github: '',
      demo: 'https://izima-obisike-20.vercel.app/',
    },
    {
      id: 2,
      // category: 'fullstack',
      image: work12,
      title: 'Travaye Web App',
      technologies: [
        'React',
        'Tailwind',
        'MongoDB',
        'Express',
        'NodeJS',
        'Notification API',
      ],
      description:
        'A web app to browse, save, book outing locations in your area based on different categories and budgets',
      github: '',
      demo: 'https://www.travaye.ng/',
    },
    {
      id: 3,
      // category: 'fullstack',
      image: work8,
      title: 'Talkative Chat App',
      technologies: [
        'React',
        'TailwindCSS',
        'TypeScript',
        'MongoDB',
        'Express JS',
        'Socket.io',
      ],
      description:
        'A full stack chat app where you can chat with friends. Real-time notifications and typing indicator',
      github: 'https://github.com/Izima01/talkative-chat/',
      demo: 'https://talkative-chat.vercel.app/',
    },
    {
      id: 4,
      // category: 'fullstack',
      image: work10,
      title: 'RenCostume Web App',
      technologies: ['React', 'Zustand', 'SupaBase'],
      description:
        'An e-commerce web app to rent and buy costumes for acting or parties.',
      github: 'https://github.com/Razeetech/RENCOSTUME',
      demo: 'https://www.rencostume.com/',
    },
    {
      id: 5,
      // category: 'fullstack',
      image: work9,
      title: 'E-Learning App',
      technologies: [
        'React',
        'TailwindCSS',
        'UseContext',
        'MongoDB',
        'Express JS',
        'Node JS',
      ],
      description:
        'A full stack E-Learning app where you can find E-books, VIdeos and full on courses to learn and upskill.',

      github: '',
      demo: 'https://mellow-longma-801e80.netlify.app/',
    },
    {
      id: 6,
      // category: 'frontend',
      image: work5,
      title: 'NFT E-Commerce App',
      technologies: [
        'React',
        'TailwindCSS',
        'Redux Toolkit',
        'Framer Motion',
        'Firebase',
      ],
      description:
        'An E-commerce app for NFTs In the marketplace, you can sort and filter the products and add to cart',
      github: 'https://www.github.com/Izima01/artsy-marketplace',
      demo: 'https://artsy-marketplace.netlify.app/',
    },
    {
      id: 7,
      // category: 'frontend',
      image: work4,
      title: 'Music Player App',
      technologies: [
        'React',
        'TailwindCSS',
        'Axios',
        'React Context',
        'Rest API',
      ],
      description:
        'A music player app developed with React. I consumed a custom API and used it to display the songs and albums. You can play, pause, shuffle. Also like songs and view the liked songs',
      github: 'https://www.github.com/Izima01/Musica',
      demo: 'https://izzycodes-musica.netlify.app/',
    },
    {
      id: 8,
      // category: 'frontend',
      image: work6,
      title: 'Trivia App',
      technologies: [
        'React',
        'Redux Toolkit',
        'React Swiper',
        'Open Trivia API',
      ],
      description:
        'A quiz app with different categories and difficulties of trivia questions. Countdown timer and scoring system',
      github: 'https://github.com/Izima01/portfolio1.0',
      demo: 'https://izzys-trivia-app.netlify.app',
    },
    {
      id: 9,
      // category: 'frontend',
      image: work1,
      title: 'Gaming Multi Step Form',
      technologies: ['React', 'TailwindCSS', 'React-Switch'],
      description:
        'A Frontend Mentor Challenge. A form for a gaming program with different steps and options for different time frames and add-ons',
      github: 'https://github.com/Izima01/multi-step-form',
      demo: 'https://fe-mentor-multi-step-form.netlify.app/',
    },
  ];

  // Create refs for animation
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section id='projects' className='py-10'>
      <div className='container xl:max-w-6xl px-10'>
        <h2 className='section-heading text-center mx-auto'>Projects</h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Here are some of my recent projects. Each demonstrates different
          skills and technologies.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 lg:gap-10'>
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className='project-card bg-card overflow-hidden border border-border h-fit'
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className='relative w-full h-48 lg:h-60 overflow-hidden group'>
                <Image
                  src={project.image}
                  alt={project.title}
                  // width={530}
                  // height={240}
                  className='object-cover h-full transition-transform duration-500 group-hover:scale-110'
                />
              </div>

              <CardContent className='pt-3 px-6 sm:px-3.5 lg:px-6'>
                <h3 className='text-xl font-bold mb-2 fun-heading flex items-center gap-2 pt-1'>
                  {project.title}
                </h3>
                <p className='text-muted-foreground mb-3'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='tech-badge flex items-center gap-1'
                    >
                      <Code size={12} />
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex gap-4'>
                  {project.github && (
                    <Button
                      variant='outline'
                      size='sm'
                      asChild
                      className='relative overflow-hidden group'
                    >
                      <a
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2'
                      >
                        <span className='absolute inset-0 w-0 bg-primary/10 transition-all duration-300 ease-out group-hover:w-full'></span>
                        <Github size={16} className='relative z-10' />
                        <span className='relative z-10'>Code</span>
                      </a>
                    </Button>
                  )}

                  <Button size='sm' asChild className='hover-pulse'>
                    <a
                      href={project.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2'
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
