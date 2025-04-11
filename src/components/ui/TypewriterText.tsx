import { useTypewriter } from '@/hooks/useTypewriter';

export default function TypewriterText() {
  const text = useTypewriter([
    'Frontend Software Engineer',
    'Backend Software Engineer',
    'Fullstack Software Engineer',
    'React Native Developer',
    'Problem Solver',
  ]);

  return (
    <h2 className='text-3xl sm:text-4xl font-extrabold text-primary relative'>
      {text.split(' ').map((word, i) => (
        <span
          key={word}
          className={i % 2 == 1 ? 'text-muted-foreground' : 'text-primary'}
        >
          {word}{' '}
        </span>
      ))}
      {/* {text} */}
      <span className='ml-0.5 animate-blink'>|</span>
    </h2>
  );
}
