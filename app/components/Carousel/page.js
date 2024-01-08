
import Image from "next/image";
import '../../styles/carousel.css'
import Card from "../Card/page";


const Carousel = ({ data }) => {
    return (
        <div className="maxwidth-1366 m-auto py-30 gap-32 justify-center flex carousel-container">

            {
                data?.map((card, index) => {
                    return (
                        <Card key={index} data={card} carousel />
                    )
                })
            }

        </div>
    );
};

export default Carousel;