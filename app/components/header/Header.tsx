import { Menu } from './menu';
import { SelectFlat } from './select-flat';
import { Phone } from './phone';
import { Logo } from './logo';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.container}>
    <Menu />
    <SelectFlat />
    <Logo />
    <Phone />
  </header>
);

export { Header };
