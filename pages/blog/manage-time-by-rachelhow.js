import { MYBLOG } from "@layouts/Lay1data";
import Lay1 from "@layouts/Lay1";
import YoutubeEmbed from "@layouts/YoutubeEmbed";
import MetaTags from "@components/Metatags";

export default function ManageTimeByRachelHow(){
 return (
  <Lay1 {...MYBLOG}>
   <MetaTags 
    title="Note Manage Time by RachelHow"
    description="cataten informasi materi tentang manajemen waktu dari RachelHow"
   />

   <h1>📒Manage Time by RachelHow</h1>
   
   <h2>Define Your Goal 🎯</h2>
   <p>
    👉🏻 Jadi lakuin sesuatu itu perlu tujuan biar gk kemana biar gk capek juga nantinya
    <br/>👉🏻 Timbang pake todo list mending pakai list tujuan kamu trus dari situ di breakdown task mau ngapain aja biar tujuan tercapai
    <br/>👉🏻 tujuan itu penting, jangan sampe tujuan asal, kek cmn buat impress orang aja...
    <br/><br/>
    <i>" what are the thigs that would bring you fulfilment / a sense of purpose ? "</i>
   </p>

   <h2>Create More Time ⏳</h2>
   <p>
    👉🏻Eliminate to create more time and energy.
    <br/>
    <br/>
    <i> " the less time and energy you spend on thigs that don't bring you closer to your goals, the sooner you reach your goals "</i>
    <br/><br/>
    #1 Learn how to say no
    <br/>#2 Do more of what gives you energy
    <br/>#3 Cut down on things that drain you
    <br/>#4 Reduce interruptions
    <br/>#5 unsubscibe to emails that no longet add value
    <br/>#6 eliminate commute
    <br/>#7 googbye FOMO
   </p>

   <h2>Optimeze 🔥</h2>
   <p>
   #1 Deal with procrastination
   <br/>#2 Systemize your wordkflow
   <br/>#3 Never sacrifice sleep ever
   <br/>#4 Async in the future
   <br/>#5 Silence, work with silence, wake up in silence, prefer silence over music background, biar fokus
   <br/>#6 Just in time learning 
   <br/>#7 Done is better that perfect
   <br/><br/>
   <i>" perfection is the enemy of progress "</i>
   <br/>
   <br/>#8 Pareto principle (20% effort, 80% outcome)
   <br/>#9 Use Calender, to do list, meeting etc..
   <br/>#10 Store everyhing in one place
   <br/>#11 physical to-do list
   <br/>#12 Set deadline
   <br/>#13 Stay focused
   <br/>#14 Reduce context switcing
   <br/><br/>
   <i>" My goal is not to do it all, but to get myself where i can live comfortably while working less"</i> 
   </p>

   <h2>Sumber : YT RachelHow</h2>
   <p>
    hi guys, aku bikin note ini biar lebih paham & lebih inget, dibawah ini sumber informasinya 👇🏻
   </p>
   <br/>
   <YoutubeEmbed videoID={'vKqK2CiN8NU'}/>
  </Lay1>
 )
}