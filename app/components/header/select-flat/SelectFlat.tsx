import styles from './SelectFlat.module.scss';

const title = 'Выбрать квартиру';

const SelectFlat = () => (
  <div className={styles.box}>
    <button className={styles.select}>
      <div className={styles.title_box}>
        <div className={styles.title}>
          <p>{title}</p>
          <p>{title}</p>
        </div>
      </div>
      <span className={styles.arrow} />
    </button>
  </div>
);

export { SelectFlat };
