import Image from 'next/image';
import styles from './WelcomeSection.module.scss';

const WelcomeSection = () => (
  <section className={styles.section}>
    <div className={styles.img_box}>
      <Image
        className={styles.img}
        src={'/images/main.jpg'}
        alt="Фотография дома бизнес-класса"
        fill={true}
        priority={true}
      />
    </div>
    <div className={styles.info_box}>
      <p className={styles.info}>
        Дом бизнес-класса <br />
        для ценителей роскоши
      </p>
      <h1 className={styles.header}>Inchapin</h1>
    </div>
  </section>
);

export { WelcomeSection };
