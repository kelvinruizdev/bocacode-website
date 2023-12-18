'use client';
import { React, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import PageHeader from './components/PageHeader/page'
import TitleContainer from './components/TitleContainer/page';
import Carousel from './components/Carousel/page';
import PricingCard from './components/PricingCard/page';
import Credentials from './components/Credentials/page'
import Paths from './components/Paths/page';
import TwoColumns from './components/TwoColumns/page';


function getData() {

  const [data, setData] = useState({})

  useEffect(() => {
    fetch("/data/home.json")
      .then(response => response.json())
      .then(data => { setData(data) })
  }, [])
  return data;
}

const title_container = [
  {
      "heading": "Invest",
      "paragraph": "We believe that training is the best way to get ahead in life and in our careers. The best training helps accelerate your learning and lets you advance fast."
  },
  {
      "heading": "Find Your Career Path",
      "paragraph": "Choose the right training for your career. If you're not sure, schedule a call with an Admissions Advisor <a style='href:/contact;'> here </a>to find out which classes are right for you."
  },
  {
      "heading": "Not sure where to start",
      "paragraph": "If you're not sure which class is best for you, our <a style='href:/contact;'> admissions team </a> is ready to help."
  }
]

export default function Home() {

  const data = getData();

  console.log(title_container[0])



  return (
    <main className={styles.main}>
      <PageHeader backgroundImage="landing-image" data={data.header} />

      <TitleContainer data={title_container[0]}/>

      <Carousel data={data?.carousel} />

      <TitleContainer data={title_container[1]}/>

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
      <Credentials />

      <TitleContainer data={title_container[2]}/>

      <Paths />

      <TwoColumns left={data?.two_columns?.left} right={data?.two_columns?.right} />

    </main>
  )
}
