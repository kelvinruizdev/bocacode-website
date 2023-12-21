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
    fetch("/data/alumni.json")
      .then(response => response.json())
      .then(data => { setData(data) })
  }, [])
  return data;
}

const Alumni = () => {

  const data = getData();
  return (
    <main className={styles.main}>

      <TitleContainer
        data={data?.title_container}
        classContainer="text-center py-30"
        classHeading="fs-36 fw-700 lh-40 p-16"
        classParagraph="fs-16 fw-400 lh-24"
      />

      <Carousel data={data?.carousel} />

      <TitleContainer
        data={data?.title_container_1}
        classContainer="text-center py-30"
        classHeading="fs-30 fw-700 lh-36 "
        classParagraph="fs-20 fw-400 lh-28"
      />

      {data?.alumni && (
        <div className='row gap-80 wrap py-30 justify-center maxwidth-1280 m-auto'>

          {data?.alumni?.map((card, index) => {
            return (
              <Card
                key={index}
                data={card}
                link_text={data?.link_text}
                alumni
              />
            )
          })}

        </div>
      )}

    </main>
  );
};

export default Alumni;