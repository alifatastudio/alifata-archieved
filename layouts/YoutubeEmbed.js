import styles from '@styles/components/YoutubeEmbed.module.css';

export default function YoutubeEmbed({videoID}){
 return (
  <div className={styles['youtube-embed']}>
    <iframe
     src={`https://www.youtube-nocookie.com/embed/${videoID}`}
     title="YouTube video player" 
     frameBorder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     allowFullScreen></iframe>
  </div>
 )
}