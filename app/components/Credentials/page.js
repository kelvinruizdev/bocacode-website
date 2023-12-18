
import { React, useEffect, useState } from 'react'
import '../../styles/credentials.css'

function getData() {

  const [data, setData] = useState({})

  useEffect(() => {
    fetch("/data/credentials.json")
      .then(response => response.json())
      .then(data => { setData(data) })
  }, [])
  return data;
}

const Credentials = (props) => {
  const data = getData();
  const { credentials } = data
  return (
    <>
      <div className='credentials-container row'>
        <div className='credentials row'>
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