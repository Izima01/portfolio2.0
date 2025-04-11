import React, { useEffect, useRef, useState } from 'react';
import { CodeSquare, Brain, Server } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
// import '@/app/g';

interface Skill {
  name: string;
  level: number; // 1-100
  category: string;
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'Next.js', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 87, category: 'frontend' },
    { name: 'Tailwind CSS', level: 92, category: 'frontend' },
    // { name: 'CSS/SASS', level: 88, category: 'frontend' },
    { name: 'Redux', level: 82, category: 'frontend' },

    // Backend
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Express', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 83, category: 'backend' },
    { name: 'Firebase', level: 82, category: 'backend' },
    { name: 'REST APIs', level: 89, category: 'backend' },

    // Other
    { name: 'Git/GitHub', level: 92, category: 'tools' },
    { name: 'Jest', level: 80, category: 'tools' },
    { name: 'Figma', level: 85, category: 'tools' },
    { name: 'VS Code', level: 94, category: 'tools' },
  ];

  useEffect(() => {
    // Use IntersectionObserver to detect when section is in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after it becomes visible to improve performance
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold: 0.2, rootMargin: '100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const categorizedSkills = {
    frontend: skills.filter((skill) => skill.category === 'frontend'),
    backend: skills.filter((skill) => skill.category === 'backend'),
    tools: skills.filter((skill) => skill.category === 'tools'),
    // space: skills.filter(skill => skill.category === "space")
  };

  const categoryConfig = {
    frontend: {
      title: 'Frontend Development',
      icon: <CodeSquare size={24} className='text-primary' />,
      color: 'from-red-500 to-amber-500',
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
  };

  return (
    <section
      id='skills'
      ref={sectionRef}
      className='py-20 relative overflow-hidden'
    >
      {/* Background with subtle space theme */}
      <div className='absolute inset-0 bg-background opacity-90 z-0'>
        <div className='absolute w-full h-full bg-[radial-gradient(ellipse_100%_90%_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background' />
        <div className='stars absolute inset-0' />
      </div>

      <div className='container px-0 relative z-10 max-w-5xl mx-auto'>
        <h2 className='section-heading text-center mx-auto'>Tech Odyssey</h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Exploring the digital cosmos with code as my rocket fuel.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 mx-auto'>
          {Object.entries(categorizedSkills).map(
            ([category, skillList], categoryIndex) => (
              <div
                key={category}
                className={`backdrop-blur-md rounded-lg p-6 border border-primary shadow-lg bg-secondary/1 transform transition-all duration-700 hover:bg-secondary/30 hover:backdrop-blur-lg`}
              >
                <div className='flex items-center gap-3 mb-4'>
                  {categoryConfig[category as keyof typeof categoryConfig].icon}
                  <h3 className='text-xl font-bold'>
                    {
                      categoryConfig[category as keyof typeof categoryConfig]
                        .title
                    }
                  </h3>
                </div>

                <div className='space-y-4'>
                  {skillList.map((skill, index) => {
                    // Only render items when the section becomes visible or when they're close to being in view
                    // This reduces initial paint work
                    if (!isVisible && categoryIndex > 1) return null;

                    return (
                      <div
                        key={skill.name}
                        className='transform transition-all duration-500'
                        style={{
                          transitionDelay: `${
                            categoryIndex * 150 + index * 50
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
                          style={{
                            transition: `transform 1s ease-out ${
                              categoryIndex * 150 + index * 50 + 300
                            }ms`,
                          }}
                          indicatorClassName={`bg-gradient-to-r ${
                            categoryConfig[
                              category as keyof typeof categoryConfig
                            ].color
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Optimized stars background with better performance */}
      <style>
        {`
          .stars {
            background: transparent url('/stars-background.jpg') repeat top center;
            z-index: -1;
            background-size: 1000px 1000px;
            will-change: background-position;
          }

          @media (prefers-reduced-motion: no-preference) {
            .stars {
              animation: move-stars 200s linear infinite;
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
        `}
      </style>
    </section>
  );
};

export default Skills;
