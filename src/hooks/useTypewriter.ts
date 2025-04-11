import { useEffect, useState } from 'react';

export function useTypewriter(words: string[], speed = 90, pause = 1500) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];
    const timeout = setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );

        if (!isDeleting && text === currentWord) {
          setTimeout(() => setIsDeleting(true), pause);
        } else if (isDeleting && text === '') {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return text;
}
