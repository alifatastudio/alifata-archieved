import styles from '@styles/components/ToeflExercise.module.css'
import { useState } from 'react'

export default function ToeflExercise({exerciseData}){
 const [answered, setAnswered] = useState(false)
 const [isTheAnswerCorrect, setIsTheAnswerCorrect] = useState(null)
 const [optionSelected, setOptionSelected] = useState(null)
 const [textAnswer, setTextAnswer] = useState('')

 const { 
  questionType, 
  question, 
  options,
  correctOptionId,
  correctAnswer,
  material,
  explanation,  
 } = exerciseData;

 const handleOptionOnClick = (optionId) => {
  if(optionId == correctOptionId) {
   setIsTheAnswerCorrect(true)
  } else {
   setIsTheAnswerCorrect(false)
  }
  setOptionSelected(optionId)
  setAnswered(true)
 }

 const handleAnswerOnChange = (event) => {
  setTextAnswer(event.target.value)
 }

 const handleAnswerOnSubmit = () => {
  if(textAnswer == '') return alert('tulis jawaban kamu dulu, baru kirim 😒')
  const txt = textAnswer.toLowerCase()

  if(txt == correctAnswer) {
   setIsTheAnswerCorrect(true)
  } else {
   setIsTheAnswerCorrect(false)
  }
  setAnswered(true)
 }

 return (
  <div className={styles['toefl-exercise']}>
   <div className={styles['question']}>
    <span>Latihan soal #{material}</span>
    <p>{question}</p>

    {questionType == 'options' && options?.map(option => (
     <button key={option.id}
      disabled={answered ? true : false}
      onClick={() => handleOptionOnClick(option.id)}
      className={
       answered ?
        option.id == correctOptionId ? 
         styles['correctOptionId']:
         styles['wrongOptionId']
        : ''
       }
      >
      {option.display}
     </button>
    ))}

    {questionType == 'blankText' && (
     <>
      <input 
       name='answer'
       value={textAnswer}
       onChange={handleAnswerOnChange} 
       placeholder='tulis jawaban kamu...'/>
      <button 
       disabled={answered ? true: false}
       onClick={handleAnswerOnSubmit}>Ok Kirim ✈️</button>
     </>
    )}
   </div>

   <div className={styles['explanation']}>
    {!answered && <p className={styles['choose-your-answer']}>
     Pilih Jawaban kamu 
     <br/><span>👀</span>
     <br/><span>👈🏻</span>
     </p>
    }

    {isTheAnswerCorrect == null ?
      null :
      isTheAnswerCorrect ?
       <p>Mantap, jawaban kamu benar 👍🏻</p>:
       <p>Ups, jawaban kamu salah 😥, gpp belajar lagi usaha lagi 💪🏻</p>
    }

    {answered && 
     <p>
      <br/>
      Jawaban kamu 👉🏻 {questionType == 'options' ?
       options[optionSelected]?.display:
       textAnswer
      }
     </p>
    }

    {answered && 
     <p> 
      <br/>
      📒 PENJELASAN
      <br/>
      {explanation}
     </p>
    }
   </div>
  </div>
 )
}

