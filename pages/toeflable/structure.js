import MetaTags from "@components/Metatags";
import Lay1 from "@layouts/Lay1";
import { TOEFLABLE } from "@layouts/Lay1data";
import styles from '@styles/Layout1.module.css'

export default function Structure(){
 return (
  <Lay1 {...TOEFLABLE}>
   <MetaTags
    title="Pendahuluan Structure - TOEFLABLE Belajar TOEFL Gratis"
    description=""
   />
   <h1>📒 Pendahuluan</h1>
   <p>
    Test yang kedua itu ada <i className="txt dark-pink">structure & writter expression</i>, 
    Jadi nanti di tes kemampuan kita menganalisa bahasa inggris yang benar strukturnya.
    Bentuk soalnya pilihan ganda.
   </p>

   <h2>Persamaan & Perbedaan Ujian Metode Kertas & Komputer</h2>
   <p>Persamaan 👇🏻</p>
   <ul>
    <li>Tipe pertanyaan</li>
    <li>Tingkat skil bahasa</li>
   </ul>
   <br/>
   <p>Perbedaan 👇🏻</p>
   <ul>
    <li>Jumlah pertanyaan</li>
    <li>Banyak pertanyaan</li>
    <li>Urutan pertanyaan</li>
    <li>Strategi</li>
    <li>Penilaian</li>
   </ul>

   <h2 className={`${styles['title']} ${styles['dark-pink']}`}>📃 Ujian Metode Paper/Kertas</h2>
   <ul>
    <li>Pakai kertas</li>
    <li>Jumlah soal 40</li>
    <li>Waktu mengerjakan sebanyak 25 menit ⌛</li>
    <li>Tipe soal 👇🏻
      <ul>
       <li><span className="txt dark-pink">Structure</span>:
        <ul>
         <li>pertanyaan 1-15</li>
         <li>melengkapi kata yang hilang, disuruh milih yang paling tepat struktur-nya</li>
        </ul>
       </li>
       <li><span className="txt blue">Written Expression</span>
        <ul>
         <li>pertanyaan 16-40</li>
         <li>ada kalimat, ada kata-kata yang di <u>underline</u>, nanti kita suruh milih salah satunya yang salah atau tidak tepat</li>
        </ul>
       </li>
      </ul>
    </li>
   </ul>

   <p>
    <br/>
    Klo ujian metode paper (paper based test) itu urutannya, urut dari yang paling mudah ke yang paling susah.
    Jadi yang <span className="txt dark-pink">Structure</span> nomer 1-15, 1-15 itu dari tingkatan yang mudah sampe yang susah urut.
    Yang <span className="txt blue">Written Expression</span> juga sama, soal nomer 16-40 itu urut dari yang paling mudah ke yang susah tingkat-nya.
    <br/>
    <br/>
    🎯<span style={{fontWeight: "bold"}}>STRATEGI MENGERJAKAN</span>
    <br/>1️⃣ Kerjakan soal 1 - 15 urut aja. 🤔 lewati yang enggak bisa, soal nomer 11-15 itu kan yang sulit lewati dulu aja gpp, 
      next ke soal 16-36 dulu.
    <br/>2️⃣ Kerjakan soal 16 -40 urut aja. 🤔 Sama lewati yang enggak bisa, soal yang sulit kek 37-40 klo sulit dilewati.
    <br/>3️⃣ Kalau kamu masih punya waktu kerjakan yang belum/terlewat.
    <br/>4️⃣ Kalau waktu-nya mepet udah mo habis nih, misal tinggal 3 menit, ngarang aja 😄, soalnya gk ada pengurangan nilai klo paper based test.  
   </p>

  
   <h2 className={`${styles['title']} ${styles['dark-pink']}`}>💻 Ujian Metode Komputer</h2>
   <ul>
    <li>Pakai komputer</li>
    <li>Jumlah soal antara 20-25</li>
    <li>Waktu mengerjakan antara 15-20 menit</li>
    <li>Tipe soal
     <ul>
      <li><span className="txt dark-pink">Structure</span>
       <ul>
        <li>sama kek yang paper. ada kalimat, trus kita suruh milih yang tepat kata buat menengkapi kalimatnya.</li>
       </ul>
      </li>
      <li><span className="txt blue">Written Expression</span>
       <ul>
         <li>sama kek yang paper. ada kalimat, trus ada kata-kata yang di <u>underline</u>, kita suruh milih kata underline yang salah atau kurang tepat.</li>
        </ul>
      </li>
     </ul>
    </li>
   </ul>
   <p>
    <br/>
    klo yang tes pakai komputer (computer based test) itu pertanyaanya gak urut kek yang paper, 
    jadi nanti bisa di mix, antara <span className="txt dark-pink">structure</span> & <span className="txt blue">writter expression</span>.
    Di awal dikasih soal yang <i>middle</i> tingkatnya nanti bisa ke yang sulit atau yang lebih gampang sesuai dengan jawaban kita. 
    Nilai tes di pilihan ganda ini itu 1/2 nya buat nilai <i>Structure Section</i>, 1/2 nya lagi nanti dinilai dari <i>Writing Section</i>.
    <br/>
    <br/>
    🎯<span style={{fontWeight: "bold"}}>STRATEGI MENGERJAKAN</span>
    <br/>1️⃣ Biasain pakai komputer atau laptop. biar biasa aja, barangkali klo gk biasa di depan layar matanya capek atau gmn.
    <br/>2️⃣ Dipikir dulu klo mau jawab, jawab usahain udah mantep. Soalnya barangkali gk bisa atau ada waktu lagi buat balik ke salah satu soal yang kita udah kerjain trus mau kita cek lagi.
    <br/>3️⃣ Jangan buang waktu klo ragu jawab, next selanjutnya aja, kerjain yang gampang-gampang dulu.
    <br/>4️⃣ Jangan salah klik. Klo bisa emang udah pengalaman pakai tampilan yang buat tes nya biar udah biasa.
    <br/>5️⃣ Waktu atau timer nya di pantau biar bisa dimaksimalin.
    <br/>6️⃣ Jangan asal pilih jawaban, klo misal waktunya udah mepet dan ragu. Soalnya klo computer based test itu ada pengurangan nilai poin klo jawab salah.
   </p>

  </Lay1>
 )
}