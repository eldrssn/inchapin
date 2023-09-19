'use client';

import { CSSTransition } from 'react-transition-group';

import { usePopup } from '@/app/context/popup/PopupContext';
import { useEscapeKey } from '@/app/hooks';

import { Form } from './Form';
import styles from './OrderCall.module.scss';
import './transition.scss';

const OrderCall = () => {
  const { isPopupVisible, closePopup } = usePopup();

  useEscapeKey(() => closePopup());

  return (
    <CSSTransition
      in={isPopupVisible}
      timeout={300}
      classNames="popup"
      unmountOnExit
    >
      <section className={styles.section}>
        <button
          className={styles.close_button}
          type="button"
          onClick={closePopup}
        />
        <div className={styles.box}>
          <h2 className={styles.header}>Заказать звонок</h2>
          <Form />
        </div>
      </section>
    </CSSTransition>
  );
};

export { OrderCall };
