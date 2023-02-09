import MetaTags from '@components/Metatags';
import styles from '@styles/Home.module.css';
import Lay1 from '@layouts/Lay1';
import { HOME_LAYOUT_DATA } from "@layouts/Home";

export default function Home(){
  return (
    <Lay1 nocontent {...HOME_LAYOUT_DATA}>
      <MetaTags 
        title='Fikri Ali Fata 🏀'
        description='Kenalin aku Fikri, ini website aku 🙂 Semoga bermanfaat.'
        keyword='Fikri Ali Fata, Personal Web'
      />

      <section className={styles.wrapper}>
        <div className={styles.top}>be right back</div>
        <div className={styles.bottom} aria-hidden="true">be right back</div>
      </section>
      <section className={styles.footer}>
        <div><i>fikri ali fata</i></div>
      </section>
    </Lay1>
  );
}