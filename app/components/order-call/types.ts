export type TFormValues = {
  name: string;
  email: string;
  phone: string;
};

export type TForm = {
  name: keyof TFormValues;
  label: string;
  type: string;
};
