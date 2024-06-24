"use client";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

const AutoPlayVideo = ({ src }) => {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  if (videoRef.current) {
    if (inView) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <div ref={ref}>
      <video ref={videoRef} src={src} controls muted width="100%" />
    </div>
  );
};

export default AutoPlayVideo;
