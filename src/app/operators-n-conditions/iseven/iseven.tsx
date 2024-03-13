'use client';
import { useState } from "react"
import styles from './iseven.module.css'

export default function IsEven() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(' ');
  
  function checkNumber (num: string) {
    if (num.length === 0) {
      return;
    }
    switch (true) {
      case isNaN(+num): 
        setResult('Введено не число');
        break;
      case (+num % 1 != 0):
        setResult('Введено не целое чило');
        break;
      default: 
        +num[num.length-1] % 2 == 0 ? setResult('Число четное') : setResult('Число нечетное'); 
    }
  }
  return (
  <div className={styles['isEven-container']}>
    <p className={styles.p}>Task 1. Проверка введенного числа на четность (необходимо вводить целые чила).</p>
    <input value={number} onChange={(event) => setNumber(event.target.value)}/>
    <button onClick={() => checkNumber(number)}>Проверить</button>
    <p className={styles.p}>{result}</p>
  </div>
  )
}