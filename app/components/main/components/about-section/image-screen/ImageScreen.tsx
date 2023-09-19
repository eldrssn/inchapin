import Image from 'next/image';
import styles from './ImageScreen.module.scss';

const ImageScreen = () => (
  <div className={styles.block}>
    <p className={styles.title}>О проекте</p>
    <div className={styles.photo_box}>
      <Image
        src={'/images/winter_house.jpg'}
        fill={true}
        alt="Зимний дом"
        className={styles.photo}
      />
    </div>
  </div>
);

export { ImageScreen };
