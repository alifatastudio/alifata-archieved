import MetaTags from "@components/Metatags";
import ToeflExercise from "@components/ToeflExercise";
import Lay1 from "@layouts/Lay1";
import { TOEFLAPP } from "@layouts/Lay1data";
import { ToeflExerciseData } from "@library/ToeflExerciseData";

export default function Exercise(){
 return (
  <Lay1 {...TOEFLAPP}>
   <MetaTags
    title="Latihan Soal TOEFL"
    description="Lahitan soal-soal untuk persiapan test TOEFL"
   />

   <h1>📒 Latihan Soal</h1>
   <ToeflExercise exerciseData={ToeflExerciseData[1]}/>
  </Lay1>
 );
}