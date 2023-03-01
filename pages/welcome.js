import MetaTags from "@components/Metatags";
import { useAuth } from "@library/AuthContext";
import styles from "@styles/Welcome.module.css";
import Lay1 from "@layouts/Lay1";
import { HOMEDATA } from "@layouts/Lay1data";

export default function Welcome(props){
 const { user } = useAuth();

 return (
  <Lay1 nocontent {...HOMEDATA}>
   <MetaTags
    title="🙂 Masuk ke Alifata.com"
    description="Daftar atau masuk ke akun kamu untuk dapat mengakses berbagai fitur dan banyak hal di alifata.com, Semoga bermanfaat 🙂"
   />

   <main className={styles['main']}> 
    { user ? <WelcomeCard /> : <SignInCard />}
   </main>
  </Lay1>
 );
}

// User belum signed in
function SignInCard(){
 const { googleAuth } = useAuth();

 return (
  <div className={styles['card']}>
   <div className={styles['card-content']}>
    <div className={styles['card-title']}>
     <h2>Masuk</h2>
     <div className={styles['underline-title']}></div>
    </div>

    <div>
      <legend className={styles['instruction']}>
        Masuk dengan beberapa metode ini 👇🏻
      </legend>
     
     <div className={styles['methods']}>
      <button onClick={googleAuth}>
        Google
      </button>
     </div>

    </div>
   </div>
  </div>
 )
}

// User udah signed in
function WelcomeCard(){
 return (
  <h1>Anda Telah Masuk</h1>
 )
}

