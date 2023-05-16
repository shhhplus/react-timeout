import { FC, useEffect, useRef } from 'react';

type TimeoutProps = {
  delay: number;
  onElapsed: () => any;
};

const Timeout: FC<TimeoutProps> = ({ delay, onElapsed }) => {
  const onElapsedRef = useRef(onElapsed);

  useEffect(() => {
    onElapsedRef.current = onElapsed;
  }, [onElapsed]);

  useEffect(() => {
    if (delay < 0) {
      return;
    }

    let id: NodeJS.Timeout | null = setTimeout(() => {
      id = null;
      onElapsedRef.current();
    }, delay);

    return () => {
      if (id !== null) {
        clearTimeout(id);
      }
    };
  }, [delay]);

  return null;
};

export default Timeout;
