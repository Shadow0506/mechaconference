import { useState, useEffect } from 'react';

const useImageWithRetry = (src, maxRetries, retryInterval) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    if (errorCount > 0 && errorCount <= maxRetries) {
      const retryTimer = setTimeout(() => {
        setCurrentSrc(`${src}?retry=${errorCount}`); // Cache busting
      }, retryInterval);

      return () => clearTimeout(retryTimer);
    }
  }, [errorCount, maxRetries, retryInterval, src]);

  const handleError = () => {
    if (errorCount < maxRetries) {
      setErrorCount(prevCount => prevCount + 1);
    }
  };

  return { currentSrc, handleError, errorCount };
};

export default useImageWithRetry;
