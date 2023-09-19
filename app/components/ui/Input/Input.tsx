'use client';

import { useState, FC } from 'react';
import clsx from 'clsx';

import { MaskedInput } from '../MaskedInput';
import { TInput } from './types';
import styles from './Input.module.scss';

const Input: FC<TInput> = ({ input, formik }) => {
  const { label, name, type } = input;

  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    formik.handleBlur(event);
    if (!formik.values[name]) {
      setIsFocused(false);
    }
  };

  return (
    <div
      className={clsx(styles.input_box, {
        [styles.input_focused]: isFocused,
      })}
    >
      <div className={styles.label_box}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      </div>
      {type == 'tel' ? (
        <MaskedInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={formik.handleChange}
          value={formik.values[name]}
          className={styles.input}
        />
      ) : (
        <input
          className={styles.input}
          type={type}
          name={name}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={formik.handleChange}
          value={formik.values[name]}
        />
      )}
    </div>
  );
};

export { Input };
