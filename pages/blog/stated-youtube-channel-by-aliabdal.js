import MetaTags from "@components/Metatags";
import Lay1 from "@layouts/Lay1";
import { MYBLOG } from "@layouts/Lay1data";
import YoutubeEmbed from "@layouts/YoutubeEmbed";

export default function StatedYoutubeChannelByAliabdal(){
 return (
  <Lay1 {...MYBLOG}>
   <MetaTags
    title='Memulai YT Channel di 2023 by Ali Abdal'
    description='Catatan dari video Ali abdal'
   />
   <h1>📒 Started a Youtube Channel in 2023 by Ali abdaal</h1>
   <p>
    1️⃣Level 1 Get Going
    <br/>2️⃣Level 2 Get Good (enaught)
    <br/>3️⃣Level 3 Get Smart
    <br/>- understand the game
    <br/>- strateji 
    <br/>
    <br/>1. interest
    <br/>2. strengths
    <br/>3. unfair advantages
    <br/>4. target market
    <br/>
    <br/>
    <i>simple but i get the poin</i>
   </p>
   <h2>Sumber YT Ali Abdaal</h2>
   <YoutubeEmbed videoID={'T2M9hSswlIs'}/>
  </Lay1>
 )
}