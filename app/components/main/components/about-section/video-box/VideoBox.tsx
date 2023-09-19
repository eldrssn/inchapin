'use client';
import { useState } from 'react';
import Image from 'next/image';

import { VideoPlayer } from './VideoPlayer';
import styles from './VideoBox.module.scss';

const VideoBox = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <p className={styles.title}>ВИДЕО о ПРОЕКТЕ</p>
          <p className={styles.time}>1:25 минут</p>
        </div>

        <hr className={styles.hr} />

        <div className={styles.video} onClick={openVideo}>
          <Image
            src="/images/img_video.jpg"
            alt="Видео"
            fill={true}
            className={styles.video_img}
          />
          <div className={styles.video_button}>
            <div className={styles.icon_border}>
              <span className={styles.icon_play} />
              <p className={styles.icon_title}>Play</p>
            </div>
          </div>
        </div>
      </div>
      {isVideoOpen ? <VideoPlayer closeVideo={closeVideo} /> : <></>}
    </>
  );
};

export { VideoBox };
