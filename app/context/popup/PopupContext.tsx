'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { TPopup } from './types';

const PopupContext = createContext<TPopup>({
  isPopupVisible: false,
  openPopup: () => {},
  closePopup: () => {},
});

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    if (isPopupVisible) {
      document.body.classList.add('lock-scroll');
    } else {
      document.body.classList.remove('lock-scroll');
    }
  }, [isPopupVisible]);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const openPopup = () => {
    setIsPopupVisible(true);
  };

  return (
    <PopupContext.Provider value={{ isPopupVisible, closePopup, openPopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  return context;
};
