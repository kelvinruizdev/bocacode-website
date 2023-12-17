
import Image from "next/image";
import '../../styles/carousel.css'
import Card from "../Card/page";


const Carousel = ({ data }) => {
    return (
        <>
            <div className="carousel-container row">
                {
                    data?.map((card, index) => {
                        return(
                            <Card key={index} data={card} carousel/>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Carousel;