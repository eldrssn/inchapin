import Image from 'next/image';
import styles from './Logo.module.scss';

const Logo = () => (
  <div className={styles.logo}>
    <Image
      src={'/svg/logo.svg'}
      alt="logo"
      fill={true}
      className={styles.svg}
      priority={true}
    />
  </div>
);

export { Logo };
