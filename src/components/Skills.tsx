import React, { useEffect, useRef, useState, useMemo } from 'react';
import { CodeSquare, Brain, Server } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Memoize skills data to prevent recreation on re-renders
  const skills = useMemo(
    () => [
      { name: 'React', level: 90, category: 'frontend' },
      { name: 'Next.js', level: 85, category: 'frontend' },
      { name: 'JavaScript', level: 95, category: 'frontend' },
      { name: 'TypeScript', level: 87, category: 'frontend' },
      { name: 'Tailwind CSS', level: 92, category: 'frontend' },
      { name: 'Redux', level: 82, category: 'frontend' },
      { name: 'Node.js', level: 85, category: 'backend' },
      { name: 'Express', level: 80, category: 'backend' },
      { name: 'MongoDB', level: 83, category: 'backend' },
      { name: 'Firebase', level: 82, category: 'backend' },
      { name: 'REST APIs', level: 89, category: 'backend' },
      { name: 'Git/GitHub', level: 92, category: 'tools' },
      { name: 'Jest', level: 80, category: 'tools' },
      { name: 'Figma', level: 85, category: 'tools' },
      { name: 'VS Code', level: 94, category: 'tools' },
    ],
    []
  );

  // Memoize category configuration
  const categoryConfig = useMemo(
    () => ({
      frontend: {
        title: 'Frontend Development',
        icon: <CodeSquare size={24} className='text-primary' />,
        color: 'from-blue-500 to-cyan-500',
      },
      backend: {
        title: 'Backend Development',
        icon: <Server size={24} className='text-primary' />,
        color: 'from-violet-500 to-purple-600',
      },
      tools: {
        title: 'Development Tools',
        icon: <Brain size={24} className='text-primary' />,
        color: 'from-emerald-500 to-teal-500',
      },
    }),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Group skills by category for better performance
  const skillsByCategory = useMemo(() => {
    return skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {} as Record<string, Skill[]>);
  }, [skills]);

  return (
    <section
      id='skills'
      ref={sectionRef}
      className='py-20 relative overflow-hidden'
    >
      <div className='absolute inset-0 bg-background opacity-90 z-0'>
        <div className='absolute w-full h-full bg-[radial-gradient(ellipse_100%_90%_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background' />
        <div className='stars absolute inset-0' />
      </div>

      <div className='container px-10 xl:max-w-6xl relative z-10 max-w-5xl mx-auto'>
        <h2 className='section-heading text-center mx-auto'>Tech Odyssey</h2>
        <div className='grid gap-8 md:grid-cols-3'>
          {Object.entries(skillsByCategory).map(
            ([category, categorySkills], categoryIndex) => (
              <div
                key={category}
                className='space-y-6 bg-background/20 p-6 rounded-lg border border-primary hover-pulse'
              >
                <div className='flex items-center gap-3'>
                  {categoryConfig[category as keyof typeof categoryConfig].icon}
                  <h3 className='text-xl font-semibold'>
                    {
                      categoryConfig[category as keyof typeof categoryConfig]
                        .title
                    }
                  </h3>
                </div>

                <div className='space-y-4'>
                  {categorySkills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`transform transition-all duration-500 ${
                        isVisible
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-4 opacity-0'
                      }`}
                      style={{
                        transitionDelay: `${
                          categoryIndex * 100 + index * 50
                        }ms`,
                      }}
                    >
                      <div className='flex justify-between items-center mb-1'>
                        <span className='text-sm font-medium'>
                          {skill.name}
                        </span>
                      </div>
                      <Progress
                        value={skill.level}
                        className='h-1.5 bg-secondary/30'
                        indicatorClassName={`bg-gradient-to-r ${
                          categoryConfig[
                            category as keyof typeof categoryConfig
                          ].color
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <style jsx>{`
        .stars {
          background: transparent url('/stars-background.jpg') repeat top center;
          z-index: -1;
          background-size: 1000px 1000px;
          will-change: transform;
          transform: translateZ(0);
        }

        @media (prefers-reduced-motion: no-preference) {
          .stars {
            animation: move-stars 200s linear infinite;
            backface-visibility: hidden;
          }
        }

        @keyframes move-stars {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 10000px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
