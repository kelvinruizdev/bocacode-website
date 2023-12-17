'use client';
import { React, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import PageHeader from './components/PageHeader/page'
import TitleContainer from './components/TitleContainer/page';
import Carousel from './components/Carousel/page';
import PricingCard from './components/PricingCard/page';


function getData() {

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

  console.log(data)
  return (
    <main className={styles.main}>
      <PageHeader backgroundImage="landing-image" data={data.header} />
      {/* <TitleContainer data={data?.title_container[0]}/> */}

      <Carousel data={data?.carousel} />

      {/* <TitleContainer data={data?.title_container[1]}/> */}

      {(data?.pricing_info_variable && data?.pricing_info_static) && (
        <div style={{gap: "16px 0"}}>

          {data?.pricing_info_variable?.map((card, index) => {
            return (
              <PricingCard
                key={index}
                data_variable={card}
                data_static={data?.pricing_info_static}
              />
            )
          })}

        </div>
      )}


    </main>
  )
}
