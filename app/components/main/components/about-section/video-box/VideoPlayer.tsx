'use client';

import { useRef, useEffect } from 'react';
import styles from './VideoPlayer.module.scss';

const VideoPlayer = ({ closeVideo }: { closeVideo: () => void }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.addEventListener('loadedmetadata', () => {
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        }
      });

      const handleFullscreenChange = () => {
        if (!document.fullscreenElement) {
          closeVideo();
        }
      };

      document.addEventListener('fullscreenchange', handleFullscreenChange);

      return () => {
        document.removeEventListener(
          'fullscreenchange',
          handleFullscreenChange
        );
      };
    }
  }, []);

  return (
    <div className={styles.video_container}>
      <video
        ref={videoRef}
        className={styles.video}
        controls
        autoPlay
        playsInline
        onEnded={closeVideo}
      >
        <source
          src="https://api.5-ve.ru/upload/video/Mantera_promo_768.mp4"
          type="video/mp4"
        />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
};

export { VideoPlayer };
