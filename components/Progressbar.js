import styles from '@styles/components/progressbar.module.css';

export default function ProgressBar({progress}){
 return (
  <div className={styles['meter']}>
   <span style={{width: `${progress}%`}}></span>
  </div>
 );
}