
import Image from "next/image";
import '../../styles/card.css'


const Card = ({ data, carousel }) => {
    const { video, image, title, content } = data;
    return (
        <>
            <div className="card-container column">
                {(image || video) &&
                <div 
                    className="card-image"
                    style={{
                        boxShadow: `${carousel && "box-shadow: 0px 10px 25px -12px rgba(0,0,0,0.67)"}`,
                    }}
                >
                    <Image
                        src={image}
                        className=""
                        width={384}
                        height={224}
                        style={{
                            borderRadius: `${carousel && "12px"}`,
                            width: "100%"
                        }}
                    />
                </div>
                }
                {(title || content) &&
                    <div className="card-content column">
                        {title &&
                            <h3>{title}</h3>
                        }
                        {content &&
                            <p>{content}</p>
                        }
                    </div>
                }
            </div>
        </>
    );
};
export default Card;