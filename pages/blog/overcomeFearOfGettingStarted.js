import MetaTags from "@components/Metatags";
import Lay1 from "@layouts/Lay1";
import { MYBLOG } from "@layouts/Lay1data";
import YoutubeEmbed from "@layouts/YoutubeEmbed";

export default function overcomeFearOfGettingStarted(){
 return (
  <Lay1 {...MYBLOG}>
   <MetaTags
    title="How to Overcome the Fear of Getting Started by Ali Abdal"
    description="notes from youtube"
   />
   <h1>📒 How to Overcome the Fear of Getting Started</h1>
   <h2>Social Anxiety</h2>
   <div>
    #️⃣Social anxiety is normal.
    <br/>#️⃣The Spotlight effect.
   </div>

   <h2>Self Perception</h2>
   <div>
    lower the bar : coba tutunin ekspektasi dulu
   </div>

   <img 
    style={{
     maxWidth: "350px",
     width: "100%",
     borderRadius: '5px',
     margin: '8px',
     boxShadow: '1px 2px 8px rgba(0, 0, 0, 0.65)'
    }}
    src="https://firebasestorage.googleapis.com/v0/b/alifataspace.appspot.com/o/U5Qd7dZhkjZzyIFMBM1prr7vZV13%2Flower%20the%20bar.png?alt=media&token=63dde01c-1a0e-4f38-b98f-a1b52d66f3cd"
   />
   <img 
    style={{
     maxWidth: "350px",
     width: "100%",
     margin: '8px',
     borderRadius: '5px',
     boxShadow: '1px 2px 8px rgba(0, 0, 0, 0.65)'
    }}
    src="https://firebasestorage.googleapis.com/v0/b/alifataspace.appspot.com/o/U5Qd7dZhkjZzyIFMBM1prr7vZV13%2Fstep.png?alt=media&token=c8c9aef6-dee8-4668-88c3-ae8bb28475c4"
   />
   
   <h2>Sumber</h2>
   <YoutubeEmbed videoID={'WrlkSH87u3I'}/>
  </Lay1>
 )
}