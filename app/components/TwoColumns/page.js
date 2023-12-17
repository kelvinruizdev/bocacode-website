import React from "react";
import Link from "next/link";

const Side = ({
    video,
    image,
    header,
    heading,
    sub_heading,
    content,
    button,
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
        // flexDirection_tablet="column"
        // flexDirection="column"
        // padding_tablet={padding_tablet || "10px 0px 0px 0px"}
      >
        <h1>{heading}</h1>
        {/* {header && (
          <div
            margin="0 0 30px 0"
            justifyContent="center"
            justifyContent_md="start"
          >
            {Array.isArray(header) &&
              header.map((item, index) => {
                return (
                  <RoundImage
                    key={index}
                    url={item.image}
                    bsize="contain"
                    height="20px"
                    width="130px"
                    position="left"
                  />
                );
              })}
          </div>
        )}
        {heading && (
          <H2
            type="h2"
            textAlign_tablet="left"
            lineHeight="38px"
            lineHeight_tablet="38px"
            fontSize={h_xs || "30px"}
            fs_xl={h_xl}
            fontSize_md={h_md || "30px"}
            fontSize_sm={h_sm}
            margin="30px 0 20px 0"
            style={heading.style ? JSON.parse(heading.style) : null}
          >
            {heading.text}
          </H2>
        )}
        {sub_heading && (
          <Paragraph
            textAlign_tablet="left"
            margin="0"
            fontSize={sh_xl || "18px"}
            fontSize_sm={sh_sm}
            fonSize_md={sh_md}
            fontSize_xs={sh_xs}
            fontHeight="30px"
            fontWeight={subHeadingStyles["font-weight"] || 700}
            opacity="1"
            style={sub_heading.style ? JSON.parse(sub_heading.style) : null}
          >
            {sub_heading.text}
          </Paragraph>
        )}
  
        {Array.isArray(bullets?.items) && (
          <div
            display="grid"
            gridAutoFlow="dense"
            gridTemplateColumns="repeat(auto-fill, minmax(40%, 100%))"
            gridAutoRows="auto" //"minmax(100px, auto);"
            margin={sub_heading ? "16px 0 16px 0" : "0 0 16px 0"}
            gridGap="24px"
          >
            {bullets.items?.map((bullet, index) => {
              return (
                <div
                  key={index}
                  gridColumn_tablet="1/1"
                  height="auto"
                  alignItems="center"
                  padding="16px 5px 0 0"
                  padding_tablet="16px 0 0 0"
                  display="grid"
                  gridTemplateColumns="100%"
                  //gridAutoRows="auto"
                  gridGap="0"
                  style={
                    bullets.item_style ? JSON.parse(bullets.item_style) : null
                  }
                >
                  <div
                    display="flex"
                    flexDirection="row"
                    alignSelf="left"
                    padding="0 8px 0 0"
                  >
                    <Icon
                      icon={bullet.icon || "check"}
                      width="13px"
                      display="inline"
                      color={Colors.blue}
                      fill={Colors.yellow}
                      style={{ strokeWidth: "2px" }}
                    />
                    {bullet.heading ? (
                      <H2
                        type="h3"
                        textAlign="left"
                        fontSize="15px"
                        fontWeight="900"
                        lineHeight="19px"
                        textTransform="uppercase"
                        padding="0 0 0 5px"
                      >
                        {bullet.heading}
                      </H2>
                    ) : (
                      <Paragraph
                        textAlign="left"
                        fontSize="18px"
                        fontWeight="400"
                        lineHeight="22px"
                        margin="0px 0px 0px 5px"
                      >
                        {bullet.text}
                      </Paragraph>
                    )}
                  </div>
                  {bullet.heading && (
                    <Paragraph
                      textAlign="left"
                      fontSize="15px"
                      fontWeight="400"
                      lineHeight="22px"
                      margin="12px 0 0 0"
                    >
                      {bullet.text}
                    </Paragraph>
                  )}
                </div>
              );
            })}
          </div>
        )}
  
        {content && /<\/?[a-z0-9]+>/g.test(content.text) ? (
          <Paragraph
            textAlign="left"
            textAlign_tablet="left"
            margin="10px 0"
            opacity="1"
            fontSize={c_xl || "16px"}
            fontSize_sm={c_sm}
            fonSize_md={c_md}
            fontSize_xs={c_xs}
            style={content.style ? JSON.parse(content.style) : null}
            dangerouslySetInnerHTML={{ __html: content.text }}
          />
        ) : (
          content &&
          content.text.split("\n").map((p, i) => (
            <Paragraph
              key={`${i}-${p}`}
              textAlign="left"
              textAlign_tablet="left"
              margin="10px 0"
              opacity="1"
              fontSize={c_xl || "16px"}
              fontSize_sm={c_sm}
              fonSize_md={c_md}
              fontSize_xs={c_xs}
              style={content.style ? JSON.parse(content.style) : null}
              fontHeight="30px"
            >
              {p}
            </Paragraph>
          ))
        )}
  
        {button && (
          <Button
            outline
            borderRadius="0"
            colorHoverText={button.hover_color || Colors.blue}
            background={Colors[button.background] || button.background}
            lineHeight="26px"
            textColor={Colors.black}
            textTransform="none"
            color={Colors[button.color] || button.color}
            fontSize="15px"
            textAlign="left"
            margin="2rem 0"
            padding_xxs="0 .5rem"
            padding_xs="0 .85rem"
            //padding_tablet="32px .85rem 0 .85rem"
            onClick={() => {
              if (button.path && button.path.indexOf("http") > -1)
                window.open(transferQuerystrings(button.path, utm));
              else navigate(button.path);
            }}
          >
            {button.text}
          </Button>
        )} */}
      </div>
    );
  };
  
  const TwoColumn = ({ left, right, proportions, session }) => {
  
    return (
      <div
        // flexDirection="column"
        // gap={left?.gap || right?.gap || "0px"}
        // gap_tablet={left?.gap_tablet || right?.gap_tablet || "20px"}
        // flexDirection_tablet="row"
        // m_sm="0px auto 100px auto"
        // margin="auto"
        // padding_xxs="40px 20px"
        // padding_md="40px 80px"
        // padding_lg="40px 0px"
        // padding_tablet="40px 40px"
        // width_tablet="100%"
        // maxWidth_md="1366px"
      >
        <div
        //   justifyContent={left?.video && "center"}
        //   flexDirection="column"
        //   size_tablet={left_size || 6}
        //   size="12"
        //   padding_xs="0"
        //   padding_md={right?.image?.shadow ? "0 20px 0 0 " : "0px"}
        //   // maxHeight="300px"
        //   textAlign="center"
        >
          <Side {...left} />
        </div>
        <div
        //   justifyContent={right?.video && "center"}
        //   flexDirection="column"
        //   size_tablet={right_size || 6}
        //   padding_xs="0"
        //   padding_md={left?.image?.shadow ? "0 0 0 20px" : "0px"}
        //   size="12"
        //   textAlign="center"
        >
          <Side session={session} {...right} />
        </div>
      </div>
    );
  };

  export default TwoColumn;