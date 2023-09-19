import { VideoBox } from '../video-box';
import styles from './DescritionScreen.module.scss';

const DescriptionScreen = () => (
  <div className={styles.block}>
    <div className={styles.brick} />
    <p className={styles.about}>
      уютное и безопасное
      <br />
      пространство для счастливой,
      <br />
      <span className={styles.highlighted}>
        спокойной и размеренной
        <br /> жизни
      </span>
    </p>
    <p className={styles.description}>
      <span className={styles.highlighted}>
        Квартиры от 65 до 356 м&sup2; с чистовой отделкой,
      </span>
      <br />
      балконами, лоджиями и террасами В собственной
      <br /> ЗАКРЫТОЙ охраняемой территориИ.
    </p>

    <VideoBox />
  </div>
);

export { DescriptionScreen };
