'use client';
import { useState } from "react";
import styles from './klava.module.css'

const questions =  new Map([
  ['как тебя зовут?', 'Клава'],
  ['как у тебя дела?', 'Хорошо, а у тебя?'],
  ['сколько тебе лет?', 'Много-много'],
])
const unknownAnswer = 'Я еще не знаю таких слов';

export default function Klava () {
  const [value, setValue] = useState('');
  const [dialog, setDialog] = useState('');
  function sendMessage (msg: string) { 
    let answer = questions.get(msg);
    if (answer) {
      setDialog(answer)
    } else {
      setDialog(unknownAnswer)
    }
  }
  return (
    <div className={styles['klava-container']}>
      <p className={styles.p}>Task 4. Dialog system Klava</p>
      <label className={styles['label']}>
        Привет, я диалоговая система Клара. Можешь задать мне вопрос
        <input type="text" onChange={(event) => setValue(event.target.value)} value={value}/>
      </label>
      
      <button onClick={() => sendMessage(value.toLowerCase())}>Отпрвить</button>
      <p className={styles.p}>Ответ: {dialog}</p>
    </div>
  )
}