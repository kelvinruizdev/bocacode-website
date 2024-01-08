
import { React, useEffect, useState } from 'react'
import '../../styles/credentials.css'
import data from '../../data/credentials.json'

const Credentials = (props) => {
  const { credentials } = data
  return (
    <>
      <div className='credentials-container row'>
        <div className='credentials flex'>
          {
            Array.isArray(credentials) && (
              credentials?.map((credential, index) => {
                return(
                <div className='column'>
                  <h1>{credential?.heading}</h1>
                  <p>{credential?.sub_heading}</p>
                </div>)
              })
            )
          }
        </div>
      </div>
    </>
  );
};

export default Credentials;