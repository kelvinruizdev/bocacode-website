
import { React, useEffect, useState } from 'react'
import Image from 'next/image'
import '../../styles/path.css'

function getData() {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch("/data/paths.json")
            .then(response => response.json())
            .then(data => { setData(data) })
    }, [])
    return data;
}

const Paths = (props) => {
    const data = getData();
    const { title, paths } = data;
    return (
        <>
            <div className='paths-container column'>

                <h2 className='path-title'>{title}</h2>
                {
                    Array.isArray(paths) && (
                        paths?.map((path, index) => {
                            return (<>
                                <div className='path row'>
                                    <span>{`${index + 1}`}</span>
                                    <div className='path-left column'>

                                        <h2>{path?.heading_left}</h2>
                                        <p dangerouslySetInnerHTML={{ __html: path?.paragraph_left }} />
                                    </div>
                                    <div className='path-right column'>
                                        <h2>{path?.heading_right}</h2>
                                        <ul>
                                            {
                                                path?.careers.map((career, index) => {
                                                    return (
                                                        <li>{career}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src={path.image}
                                        className="path-image"
                                    />
                                </div>
                            </>)
                        })
                    )
                }
            </div>
        </>
    );
};

export default Paths