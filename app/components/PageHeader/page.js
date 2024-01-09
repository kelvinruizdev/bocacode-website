
import Image from "next/image";
import '../../styles/pageheader.css'
import Link from "next/link";
import TwoColumns from '../TwoColumns/page'


const PageHeader = ({ children, backgroundImage, data }) => {

    const { heading, sub_heading, content, button_1, button_2 } = data;

    return (
        <>
            <div
                className="pageheader-container "
                style={{
                    backgroundImage: `url(${data?.background_image})`,
                }}
            >
                <div className="pageheader-container-layer">
                    <div className="flex column pageheader-content maxwidth-1366">
                        {
                            heading &&
                            <div className="w-50 w-100-tablet">
                                <h1
                                    className="fs-48 fw-800 lh-48 fs-tablet-30 lh-tablet-36 color-white-v2"
                                    //style={{ color: `${heading.color}`, fontSize: `${heading.font_size}`, fontWeight: `${heading.font_weight}`, lineHeight: `${heading.line_height}` }}
                                    dangerouslySetInnerHTML={{ __html: heading.text }}
                                />
                                <h1
                                    className="fs-48 fw-800 lh-48 fs-tablet-30 lh-tablet-36 color-yellow"
                                    //style={{ color: `${heading.color}`, fontSize: `${heading.font_size}`, fontWeight: `${heading.font_weight}`, lineHeight: `${heading.line_height}` }}
                                    dangerouslySetInnerHTML={{ __html: heading.extra_text }}
                                />
                            </div>
                        }
                        {
                            sub_heading &&
                            <h2
                                className=" w-50 w-100-tablet"
                                //style={{ color: `${sub_heading.color}`, fontSize: `${sub_heading.font_size}`, fontWeight: `${sub_heading.font_weight}`, lineHeight: `${sub_heading.line_height}` }}
                                dangerouslySetInnerHTML={{ __html: sub_heading.text }}
                            />
                        }
                        {
                            content &&
                            <p
                                className="fs-20 fw-400 lh-28 fs-tablet-16 w-50 w-100-tablet color-white-v2"
                                //style={{ color: `${content.color}`, fontSize: `${content.font_size}`, fontWeight: `${content.font_weight}`, lineHeight: `${content.line_height}` }}
                                dangerouslySetInnerHTML={{ __html: content.text }}
                            />
                        }
                        {
                            button_1 && (
                                <div
                                    className="buttons-container text-center flex w-50 w-100-tablet" 
                                >
                                    <Link href={button_1.button_link}>
                                        <div
                                            style={{
                                                background: `${button_1.button_color}`,
                                                color: `${button_1.button_textcolor}`
                                            }}
                                            className="pageheader-button_1 rounded-4"
                                        >{button_1.button_text}</div>
                                    </Link>
                                    {button_2 &&
                                        <Link href={button_2.button_link}>
                                            <div
                                                style={{
                                                    background: `${button_2.button_color}`
                                                }}
                                                className="pageheader-button_2 rounded-4"
                                            >{button_2.button_text}</div>
                                        </Link>}

                                </div>
                            )

                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageHeader;
