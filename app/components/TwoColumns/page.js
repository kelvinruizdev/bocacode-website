import React from "react";
import Link from "next/link";
import '../../styles/twocolumns.css'

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
      <></>
    );
  }

  return (
    <div
      className="side-container column"
    >
      {
        heading &&
        <h1
          dangerouslySetInnerHTML={{__html: heading}}
        />
      }
      {
        sub_heading &&
        <h2 dangerouslySetInnerHTML={{__html: sub_heading}}/>
      }
      {
        content &&
        <p
          dangerouslySetInnerHTML={{__html: content}}
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
                    style={{ background: `${button.button_color}`,
                  color: `${button.button_textcolor}`}}

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