import MetaTags from "@components/Metatags"
import Lay1 from "@layouts/Lay1"
import { MYBLOG } from "@layouts/Lay1data"

export default function Blog(){
 return (
  <Lay1 {...MYBLOG}>
   <MetaTags 
    title='📒 MY BLOG - Fikri Ali Fata 🏀'
    description='Selamat datang di blog aku guys, jadi ini beberapa tulisan atau catetan dari aku yang aku share disini. Ada banyak hal mulai dari kehidupan, karir, politik, tips-tips, dan sejenisnya. Tulisan nya juga aku kategoriin di samping biar mudah dipetakan. Semoga bermanfaat.'
   />
   <h1>📒 Selamat Datang di Blog ALIFATA</h1>
   <p>
    Jadi ini adalah tulisan-tulisan apapun dari aku yang aku share disini. Tulisan-nya random bisa tips-tips, materi, pelajaran, politik, pendapat, dan sejenisnya. Nanti tulisan ini aku kategoriin juga, temen-temen bisa milih di menu samping sesua kategori. Semoga bermanfaat 🙂.
   </p>
   <h2>Tujuan</h2>
   <p>
    Tujuan awal aku nulis blog ini biar informasi atau pengetahuan yang pernah aku kuasai atau miliki bisa ketata dengan rapih. Jadi aku bakalan lebih mudah buat ngingetnya. 
    Aku share disini biar aku lebih paham juga dan sekalian barang kali bisa bermanfaat buat temen-temen disini. yep, semoga bermanfaat 🙂
   </p>
  </Lay1>
 )
}