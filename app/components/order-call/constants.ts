import { TForm } from './types';

export const FORM_INPUTS: TForm[] = [
  {
    name: 'name',
    label: 'Ваше имя',
    type: 'text',
  },
  {
    name: 'email',
    label: 'E-mail',
    type: 'email',
  },
  {
    name: 'phone',
    label: 'Телефон',
    type: 'tel',
  },
];

export const initialValues = {
  name: '',
  email: '',
  phone: '',
}
