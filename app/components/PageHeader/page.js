
import Image from "next/image";
import '../../styles/pageheader.css'
import TwoColumns from '../TwoColumns/page'


const PageHeader = ({ children, backgroundImage, data }) => {
    console.log(data)
    return (
        <>
            <div
                className={`pageheader-container`}
                style={{
                    backgroundImage: `url(${data?.background_image})`,
                    
                }}
            >
                <TwoColumns
                    left={{
                        heading: data?.heading,
                        sub_heading: data?.sub_heading,
                        bullets: data?.bullets,
                        content: data?.content,
                        buttons: data?.buttons,
                    }}
                    right={{ image: data?.image }}
                />
            </div>
        </>
    );
};

export default PageHeader;
