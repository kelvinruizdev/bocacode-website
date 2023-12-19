'use client';
import { React, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../page.module.css'
import TitleContainer from '../components/TitleContainer/page';
import Carousel from '../components/Carousel/page';
import Card from '../components/Card/page';


function getData() {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch("/data/candidates.json")
      .then(response => response.json())
      .then(data => { setData(data) })
  }, [])
  return data;
}

const Candidates = () => {
  const data = getData();

  console.log(data)

  return (
    <main className={styles.main}>

      <TitleContainer 
        data={data?.title_container} 
        classContainer="text-center py-30"
        classHeading="fs-30 fw-700 lh-36" 
        classParagraph="fs-20 fw-400 lh-28"
      />

      {data?.candidates && (
        <div className='row gap-45 wrap py-30 justify-center maxwidth-1280 margin-auto'>

          {data?.candidates?.map((card, index) => {
            return (
              <Card
                key={index}
                data={card}
                link_text={data?.link_text}
                profile
              />
            )
          })}

        </div>
      )}

    </main>
  );
};

export default Candidates;