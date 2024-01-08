import React from "react";
import Link from "next/link";
import '../../styles/twocolumns.css'
import '../../styles/path.css'
import Image from "next/image";
import Icon from "../Icon/pages";

const Side = ({
  video,
  image,
  header,
  heading,
  sub_heading,
  content,
  buttons,
  bullets,
  steps,
  complement,
  boxes
}) => {

  if (image) {
    return (
      <div>
        <Image
          width={1000}
          height={1000}
          src={image}
          style={{
            width: "100%",
            height: "100%"
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="side-container gap-32 column"
    >
      {
        heading &&
        <h1
          className="twocolumns-heading fs-30 fw-700 lh-36"
          //style={{ color: `${heading.color}`, fontSize: `${heading.font_size}`, fontWeight: `${heading.font_weight}`, lineHeight: `${heading.line_height}` }}
          dangerouslySetInnerHTML={{ __html: heading.text }}
        />
      }
      {
        sub_heading &&
        <h2
          className="twocolumns-subheading"
          //style={{ color: `${sub_heading.color}`, fontSize: `${sub_heading.font_size}`, fontWeight: `${sub_heading.font_weight}`, lineHeight: `${sub_heading.line_height}` }}
          dangerouslySetInnerHTML={{ __html: sub_heading.text }}
        />
      }
      {
        content &&
        <p
          className="twocolumns-content fs-16 lh-24 fw-400"
          //style={{ color: `${content.color}`, fontSize: `${content.font_size}`, fontWeight: `${content.font_weight}`, lineHeight: `${content.line_height}` }}
          dangerouslySetInnerHTML={{ __html: content.text }}
        />
      }
      {
        complement &&
        <div className="text-center">
          <p
            style={{ color: `${complement.color}`, fontSize: `${complement.font_size}`, fontWeight: `${complement.font_weight}`, lineHeight: `${content.line_height}` }}
            dangerouslySetInnerHTML={{ __html: complement.text }}
          />
        </div>
      }
      {Array.isArray(bullets) && (
        <div className="column py-30 gap-45">
          {
            bullets?.map((bullet, index) => {
              const { icon, heading, content } = bullet;
              return (
                <div className="row ">
                  <div>
                    <div style={{ background: `${icon.background}` }}
                      className=" rounded-6 size-48 align-items-center flex justify-center">
                      <Icon icon={icon.name} width="24" />
                    </div></div>

                  <div className="w-90 column px-16 rounded-4 ">
                    {
                      heading &&
                      <h1
                        style={{ color: `${heading.color}`, fontSize: `${heading.font_size}`, fontWeight: `${heading.font_weight}`, lineHeight: `${heading.line_height}` }}
                        className=""
                        dangerouslySetInnerHTML={{ __html: heading.text }}
                      />
                    }
                    {
                      content &&
                      <p
                        className="py-8"
                        style={{ color: `${content.color}`, fontSize: `${content.font_size}`, fontWeight: `${content.font_weight}`, lineHeight: `${content.line_height}` }}
                        dangerouslySetInnerHTML={{ __html: content.text }}
                      />
                    }
                  </div>
                </div>
              )
            })
          }

        </div>
      )}
      {Array.isArray(steps) && (
        <>
          {
            steps.map((step, index) => {
              const { heading, content } = step;
              return (
                <div className="row">
                  <div>
                    <span
                      className='span fs-24 fw-700 lh-36 justify-center align-center'
                    >{`${index + 1}`}</span>
                  </div>
                  <div style={{ background: `${step.background}` }} className="w-90 column px-16 rounded-4">
                    {
                      heading &&
                      <h1
                        style={{ color: `${heading.color}`, fontSize: `${heading.font_size}`, fontWeight: `${heading.font_weight}`, lineHeight: `${heading.line_height}` }}
                        className="py-16"
                        dangerouslySetInnerHTML={{ __html: heading.text }}
                      />
                    }
                    {
                      content &&
                      <p
                        className="py-8"
                        style={{ color: `${content.color}`, fontSize: `${content.font_size}`, fontWeight: `${content.font_weight}`, lineHeight: `${content.line_height}` }}
                        dangerouslySetInnerHTML={{ __html: content.text }}
                      />
                    }
                  </div>
                </div>
              )
            })
          }

        </>
      )}
      {
        Array.isArray(boxes) &&
        <div className="row wrap gap-8">
          {boxes.map(
            box => {
              return (
                <div className="rounded-12 box p-16 gap-4 column">
                  <h4 className="color-black">{box.heading}</h4>
                  <p className="color-grisnoble">{box.paragraph}</p>
                </div>)
            }
          )}
        </div>
      }
      {
        buttons && (
          <div
            className="button-container flex"
          >{
              buttons.map((button, index) => {
                return (
                  <Link href={button.button_link}>
                    <div
                      // style={{
                      //   background: `${button.button_color}`,
                      //   color: `${button.button_textcolor}`,
                      //   fontSize: `${button.button_fontsize}`,
                      // }}
                      className="button-twocolumn"
                    >{button.button_text}</div>
                  </Link>
                )
              })}
          </div>
        )
      }
    </div>
  );
};

const TwoColumns = ({ left, right, proportions }) => {
  return (
    <div
      className="align-items-center flex gap-45 maxwidth-1366 m-auto twocolumns-container"
    >
      <div className="flex justify-start side-container" >
        <Side {...left} />
      </div>
      <div className="flex justify-end side-container">
        <Side {...right} />
      </div>
    </div>
  );
};

export default TwoColumns;