import styles from '@styles/components/EmbedPDF.module.css';

export default function EmbedPDF({pdfURL}){
 return (
  <div className={styles['embed-pdf']}>
   <object data={pdfURL} />
  </div>
 )
}