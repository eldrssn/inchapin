import type { Metadata } from 'next';

import { Header } from './components/header';
import { OrderCall } from './components/order-call';
import { PopupProvider } from './context/popup/PopupContext';
import { ScrollBarLayout } from './layouts/ScrollBarLayout';
import './styles/globals.scss';

export const metadata: Metadata = {
  title: 'Inchapin',
  description: 'Дом бизнес класса',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <PopupProvider>
          <Header />
          <ScrollBarLayout>{children}</ScrollBarLayout>
          <OrderCall />
        </PopupProvider>
      </body>
    </html>
  );
}
