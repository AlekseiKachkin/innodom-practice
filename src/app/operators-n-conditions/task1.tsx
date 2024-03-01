'use client';
import { useState } from "react"
import IsEven from "./iseven/iseven";
import styles from './task1.module.css'
import FrontBack from "./front-back/front-back";
import Greetings from "./greetings/greetings";
import Klava from "./klava/klava";

export default function OperatorsContitions() {
  
  return (
  <div className={styles['task1-container']}>
    <IsEven/>
    <FrontBack/>
    <Greetings/>
    <Klava/>
  </div>
  )
}