import { WelcomeSection } from './components/welcome-section';
import { AboutSection } from './components/about-section';
import styles from './Main.module.scss';

const Main = () => (
  <main className={styles.main}>
    <WelcomeSection />
    <AboutSection />
  </main>
);

export { Main };
