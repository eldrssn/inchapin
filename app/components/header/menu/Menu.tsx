import styles from './Menu.module.scss';

const Menu = () => (
  <div className={styles.menu}>
    <span className={styles.burger} />
    <p className={styles.text}>Меню</p>
  </div>
);

export { Menu };
