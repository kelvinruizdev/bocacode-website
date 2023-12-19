
import Image from "next/image";
import Link from "next/link";
import '../../styles/card.css'


const Card = ({ data, carousel, link_text, profile }) => {
    const { video, image, profileImage, title, content, link } = data;
    return (
        <>
            <div className={profile ? "card-profile-body box-shadow-v1 rounded-16 column relative"
                    : "card-container"}
            >
                {(image || video) &&
                    <div
                        className=""
                        style={{
                            boxShadow: `${carousel && "box-shadow: 0px 10px 25px -12px rgba(0,0,0,0.67)"}`,
                        }}
                    >
                        <Image
                            src={image}
                            className=""
                            width={profile ? 284 : 384}
                            height={profile ? 112 : 224}
                            style={{
                                borderRadius: `${profile ? "16px 16px 0 0" : "12px"}`,
                                width: "100%"
                            }}
                        />
                    </div>
                }
                {profileImage && (
                    <div
                        className="absolute centerer"
                    >
                        <Image
                            src={profileImage}
                            className="border-royalblue round"
                            width={108}
                            height={108}

                        />
                    </div>
                )}
                {(title || content) &&
                    <div className={profile ? "card-profile-content height-100 justify-beetwen column align-items-center text-center" : 
                        "card-content column"}
                    >
                        <div className="column"> 
                            {title &&
                                <h3 className="fs-20 fw-500 lh-28">{title}</h3>
                            }
                            {content &&
                                <div><p className="fs-12 fw-400">{content}</p></div>
                            }
                        </div>
                        <div className="">
                            {link &&
                            <Link href={link} className="">
                                <h4 className="fs-16 fw-600 color-royalblue py-8">{link_text}</h4>
                            </Link>}
                        </div>
                    </div>
                }

            </div>
        </>
    );
};
export default Card;