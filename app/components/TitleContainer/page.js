
import Image from "next/image";
import '../../styles/titlecontainer.css'
import TwoColumns from '../TwoColumns/page'


const TitleContainer = ({ data }) => {
    return (
        <>
            <div className="title-container column">
                {data?.heading && <h1>{data?.heading}</h1>}
                {data?.paragraph && <p
                    dangerouslySetInnerHTML={{ __html: data?.paragraph}}
                />}
            </div>
        </>
    );
};

export default TitleContainer;