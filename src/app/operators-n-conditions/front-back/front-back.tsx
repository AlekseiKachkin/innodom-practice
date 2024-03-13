'use client';
import { useState } from "react";
import styles from './front-back.module.css'

export default function FrontBack () {
  const [value, setValue] = useState('');
  const [result, setResult] = useState(' ');
  function checkLanguage (lang: string) { 
    switch (lang.toLowerCase()){
      case 'js': 
        setResult('Поздравляю. Ты Frontend-developer!');
        break;
      case 'python':
      case 'java':
      case 'c++':
        setResult('Поздравляю. Ты Backend-developer!');
        break;
      default:
        setResult('Это язык из параллельной вселенной?');
    }
  }
  return (
    <div className={styles['frontBack-container']}>
      <p className={styles.p}>Task 2. Проверка направления</p>
      <label className={styles['label']}>
        Введи язык програмирования, который ты изучаешь
        <input type="text" onChange={(event) => setValue(event.target.value)} value={value}/>
      </label>
      
      <button onClick={() => checkLanguage(value)}>Проверка</button>
      <p className={styles.p}>{result}</p>
    </div>
  )
}