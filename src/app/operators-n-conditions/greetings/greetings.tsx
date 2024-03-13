'use client';
import { useState } from "react";
import styles from './greetings.module.css'

export default function Greetings () {
  const [value, setValue] = useState('');
  const [result, setResult] = useState(' ');
  function checkLanguage (lang: string) { 
    switch (lang.toLowerCase()){
      case 'russian': 
        setResult('Привет');
        break;
      case 'english':
        setResult('Hello');
        break;
      case 'italian':
        setResult('Ciao');
        break;
      case 'spanish':
        setResult('Hola');
        break;
      case 'french':
        setResult('Salut');
        break;
      default:
        setResult('Sorry, I don’t know this language');
    }
  }
  return (
    <div className={styles['greetings-container']}>
      <p className={styles.p}>Task 3. Greetings</p>
      <label className={styles['label']}>
        Please, input your native language
        <input type="text" onChange={(event) => setValue(event.target.value)} value={value}/>
      </label>
      
      <button onClick={() => checkLanguage(value)}>Greetings</button>
      <p className={styles.p}>{result}</p>
    </div>
  )
}