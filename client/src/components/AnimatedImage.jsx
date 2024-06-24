import { useInView } from 'react-intersection-observer';
import LazyLoad from 'react-lazyload';
import propTypes from 'prop-types';

export default function AnimatedImage({ src, alt }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <LazyLoad height={200} offset={100}  threshold >
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={`rounded-md h-60 w-60 -z-10 ${inView ? 'animate-fadeIn' : ''}`}
      />
    </LazyLoad>
  );
}

AnimatedImage.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};

