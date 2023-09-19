import { useState, FC } from 'react';
import InputMask from 'react-input-mask';

import { TMaskedInput } from './types';

const mask = '+7 (999) 999-99-99';

const MaskedInput: FC<TMaskedInput> = ({
  onFocus,
  onBlur,
  onChange,
  value,
  className,
}) => {
  const [showMask, setShowMask] = useState(false);

  const handleFocus = () => {
    setShowMask(true);
    onFocus();
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setShowMask(false);
    onBlur(event);
  };

  return (
    <InputMask
      className={className}
      mask={showMask ? mask : ''}
      maskChar="_"
      onFocus={handleFocus}
      onBlur={handleInputBlur}
      onChange={onChange}
      value={value}
    />
  );
};

export { MaskedInput };
