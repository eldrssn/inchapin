import { ImageScreen } from './image-screen';
import { DescriptionScreen } from './decription-screen';
import styles from './AboutSection.module.scss';

const AboutSection = () => (
  <section className={styles.section}>
    <ImageScreen />
    <DescriptionScreen />
  </section>
);

export { AboutSection };
