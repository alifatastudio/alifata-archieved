import MetaTags from "@components/Metatags";
import { HOME_LAYOUT_DATA } from "@layouts/Home";
import Lay1 from "@layouts/Lay1";
import { useAuth } from "@library/AuthContext";
import styles from "@styles/Logout.module.css";
import { useEffect, useState } from "react";

export default function JanganLupaMampirLagi(){
 const { user, logout } = useAuth();
 const [delay, setDelay] = useState(true);

 useEffect(() => {
  const timer = setInterval(() => {
   logout();
   setDelay(false);
  }, 5000)

  return () => clearInterval(timer)
 }, [])

 return (
  <Lay1 {...HOME_LAYOUT_DATA}>
   <MetaTags
    title="🥲 See u guys ✋🏻"
    description="Sampai juga lagi guys, jangan lupa mampir lagi yaa di alifata.com, semoga bermanfaat. Jika ada kekurangan, saran, atau kritikan bisa juga disampaikan melalui media Fikri Ali Fata yang tersedia di website kami."
   />

   {delay && 
    <>
     <div className={styles['loader']}>
      <div className={styles['lds-ring']}><div></div><div></div><div></div><div></div></div>
     </div>
     <h1 className={styles['title']}>Otw logout 🥲...</h1>
    </>
   }
   {!delay && 
    <>
     <h1>Berhasil Logout ✅</h1>
     <h2>Jangan lupa mampir lagi guys 🥺</h2>
     <br/><br/>
     <h3><i>" senang udah bisa jadi bagian dari hidup kamu, walau sementara, thx u</i>🙂 "</h3>
    </> 
   }
  </Lay1>
 );
}