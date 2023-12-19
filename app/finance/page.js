'use client';
import React, {useEffect, useState}from "react";
import styles from '../page.module.css'
import TwoColumns from "../components/TwoColumns/page";


function getData() {

  const [data, setData] = useState({})

  useEffect(() => {
    fetch("/data/financing.json")
      .then(response => response.json())
      .then(data => { setData(data) })
  }, [])
  return data;
}

const Financing = () => {

  const data = getData();

  return (
    <main className={styles.main}>
      <h1>Finance</h1>
      <TwoColumns left={data?.two_columns?.left} right={data?.two_columns?.right} />
    </main>
  );
};

export default Financing;