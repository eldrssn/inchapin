import { FormikProps } from 'formik';
import { TForm, TFormValues } from '@/app/components/order-call/types';

export type TInput = {
  input: TForm;
  formik: FormikProps<TFormValues>;
};
