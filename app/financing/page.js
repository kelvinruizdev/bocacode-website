'use client';
import React, { useEffect, useState } from "react";
import styles from '../page.module.css'
import Link from "next/link";
import TwoColumns from "../components/TwoColumns/page";
import Credentials from "../components/Credentials/page";
import data from '../data/financing.json'


const Financing = () => {

  return (
    <main className={styles.main}>
      <TwoColumns left={data?.two_columns?.left} right={data?.two_columns?.right} />
      <Credentials />
      <TwoColumns left={data?.two_columns_1?.left} right={data?.two_columns_1?.right} />
      <TwoColumns left={data?.two_columns_2?.left} right={data?.two_columns_2?.right} />

      <div className="align-items-center column py-50 bg-zinc gap-45">
        <div className="column">
          <h1 className="text-center">{data?.info?.heading}</h1>
          <h1 className="text-center color-blueberry">{data?.info?.call_msg}</h1>
        </div>
        <Link href="/" className="">
          <div
            className="w-fit-content rounded-6 align-items-center p-12-48 fs-14 fw-500 flex"
            style={{
              background: `rgb(225, 29, 72)`,
              color: `rgb(250, 250, 250)`,
              fontSize: `16px`,
            }}

          >{"Schedule a Call"}</div>
        </Link>
      </div>

    </main>
  );
};

export default Financing;