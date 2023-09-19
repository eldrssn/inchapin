'use client';

import { usePopup } from '@/app/context/popup/PopupContext';
import styles from './Phone.module.scss';

const Phone = () => {
  const { openPopup } = usePopup();

  return (
    <button className={styles.box} type="button" onClick={openPopup}>
      <a
        className={styles.phone}
        href="tel:+74955272121"
        onClick={(event) => event.stopPropagation()}
      >
        +7 495 527 21 21
      </a>
      <div className={styles.order_call}>Заказать звонок</div>

      <div className={styles.phone_mobile} />
    </button>
  );
};

export { Phone };
