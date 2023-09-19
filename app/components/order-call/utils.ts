import { TFormValues } from './types';

export const validate = (values: TFormValues) => {
  const errors: Record<string, string> = {};

  if (!values.name) {
    errors.name = 'Обязательное поле';
  }

  if (!values.email) {
    errors.email = 'Обязательное поле';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Некорректный email';
  }

  if (!values.phone) {
    errors.phone = 'Обязательное поле';
  }
  return errors;
};
