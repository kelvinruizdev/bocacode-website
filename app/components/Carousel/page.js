
import Image from "next/image";
import '../../styles/carousel.css'
import Card from "../Card/page";


const Carousel = ({ data }) => {
    return (
        <div className="maxwidth-1366 m-auto py-30 container">
            <div className=" gap-45 row">
                {
                    data?.map((card, index) => {
                        return(
                            <Card key={index} data={card} carousel/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Carousel;