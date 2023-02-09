import styles from "@styles/Footer.module.css";

export default function Footer(){
  const y = new Date().getFullYear();

 return (
  <section className={styles['footer']}>
    <i>© Fikri Ali Fata {y}</i>
  </section>
 )
}