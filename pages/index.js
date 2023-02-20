import MetaTags from '@components/Metatags';
import styles from '@styles/Home.module.css';
import Lay1 from '@layouts/Lay1';
import { HOMEDATA } from '@layouts/Lay1data';


export default function Home(){
  return (
    <Lay1 nocontent {...HOMEDATA}>
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