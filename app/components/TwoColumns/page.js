import React from "react";
import Link from "next/link";
import '../../styles/twocolumns.css'
import Image from "next/image";

const Side = ({
  video,
  image,
  header,
  heading,
  sub_heading,
  content,
  buttons,
  bullets,
  session,
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
      className="side-container column"
    >
      {
        heading &&
        <h1
          style={{ color: `${heading.color}`, fontSize: `${heading.font_size}`, fontWeight: `${heading.font_weight}`, lineHeight: `${heading.line_height}` }}
          dangerouslySetInnerHTML={{ __html: heading.text }}
        />
      }
      {
        sub_heading &&
        <h2
          style={{ color: `${sub_heading.color}`, fontSize: `${sub_heading.font_size}`, fontWeight: `${sub_heading.font_weight}`, lineHeight: `${sub_heading.line_height}` }}
          dangerouslySetInnerHTML={{ __html: sub_heading.text }}
        />
      }
      {
        content &&
        <p
          style={{ color: `${heading.color}`, fontSize: `${content.font_size}`, fontWeight: `${content.font_weight}`, lineHeight: `${content.line_height}` }}
          dangerouslySetInnerHTML={{ __html: content.text }}
        />
      }

      {Array.isArray(bullets?.items) && (
        <>
          {
            bullets.map((bullet, index) => {
              return (
                <></>
              )
            })
          }

        </>
      )}

      {
        buttons && (
          <div
            className="buttons"
          >{
              buttons.map((button, index) => {
                return (
                  <Link href={button.button_link}>
                    <div
                      style={{
                        background: `${button.button_color}`,
                        color: `${button.button_textcolor}`,
                        fontSize: `${button.button_fontsize}`,
                      }}

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
      className="two-columns-container row"
    >
      <div className="two-columns-side">
        <Side {...left} />
      </div>
      <div className="two-columns-side">
        <Side {...right} />
      </div>
    </div>
  );
};

export default TwoColumns;