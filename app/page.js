'use client';
import { React, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import PageHeader from './components/PageHeader/page'


function getData () {

  const [data, setData] = useState({})

  useEffect(() => {
      fetch("/data/home.json")
          .then(response => response.json())
          .then(data => { setData(data) })
  }, [])
  return data;
}
   
export default function Home() {

  const data = getData();
  return (
    <main className={styles.main}>
      <PageHeader backgroundImage="landing-image" data={data}/>

      <h1>ASASAS</h1>
      <h1>ASASAS</h1>

      <h1>ASASAS</h1>
      <h1>ASASAS</h1>
      <h1>ASASAS</h1>
      <h1>ASASAS</h1>
    </main>
  )
}
