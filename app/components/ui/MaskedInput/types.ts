import { ChangeEvent } from 'react';

export type TMaskedInput = {
  onFocus: () => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  value: string;
  name: string;
  className: string;
};
