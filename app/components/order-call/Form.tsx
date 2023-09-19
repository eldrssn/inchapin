import { useFormik } from 'formik';

import { Input } from '@/app/components/ui/Input';
import { usePopup } from '@/app/context/popup/PopupContext';
import { TFormValues } from './types';
import { FORM_INPUTS, initialValues } from './constants';
import { validate } from './utils';
import styles from './Form.module.scss';

const Form = () => {
  const { closePopup } = usePopup();
  const formik = useFormik<TFormValues>({
    initialValues,
    validate,
    onSubmit: (values) => {
      console.log(values);
      closePopup();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div className={styles.inputs}>
        {FORM_INPUTS.map((input) => (
          <Input key={input.name} formik={formik} input={input} />
        ))}
      </div>
      <p className={styles.politic}>
        Нажимая на кнопку «Отправить», вы ознакомлены
        <br /> и подтверждаете согласие с{' '}
        <a href="#" className={styles.link}>
          политикой обработки персональных данных
        </a>
      </p>
      <button className={styles.submit} type="submit">
        Отправить
      </button>
    </form>
  );
};

export { Form };
