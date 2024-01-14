import { useState, useEffect } from 'react';
import { Container, Image, Spinner } from './styles';
import { RotatingLines } from 'react-loader-spinner';

interface ImageWithSpinnerProps {
  src: string;
  width: string;
  height: string;
}

export function ImageWithSpinner({ src, width, height }: ImageWithSpinnerProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    const handleError = () => {
      setIsLoading(false);
    };

    const image = document.createElement('img');
    image.src = src;
    image.addEventListener('load', handleLoad);
    image.addEventListener('error', handleError);

    return () => {
      image.removeEventListener('load', handleLoad);
      image.removeEventListener('error', handleError);
    };
  }, [src]);

  return (
    <Container width={width} height={height}>
      {isLoading ?
        <RotatingLines
          width="40"
          ariaLabel="loading"
        />
        :
        <Image src={src} width={width} height={height} />
      }
    </Container>
  );
};
