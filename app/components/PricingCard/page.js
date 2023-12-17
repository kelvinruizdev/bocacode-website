

const PricingCard = ({
    data,
    info,
    selectedPlan,
    setSelectedPlan,
    buttonText,
    jobGuarantee,
    index,
  }) => {
    const { session, setSession } = useContext(SessionContext);
    const { recomended, scholarship, payment_time, slug } = data;
    const isSelected = selectedPlan === slug;
    return (
      <>
        {/* <Div
          cursor="pointer"
          display="block"
          width="100%"
          onClick={() => {
            setSelectedPlan(slug);
          }}
          height="fit-content"
          alignItems="flex-start"
          margin_xs="9px 0 0 0"
          margin_tablet="0"
        >
          {recomended && (
            <Div background={Colors.blue}>
              <Paragraph
                color={Colors.white}
                // fontWeight_tablet="700"
                fontSize="14px"
                fontWeight="500"
                lineHeight="17px"
                opacity="1"
              >
                {info.recomended}
              </Paragraph>
            </Div>
          )}
          <Div
            //border={`2px solid ${Colors.blue}`}
            //border={`2px solid ${isSelected ? Colors.blue : "black"}`}
            border={isSelected ? `1px solid ${Colors.blue}` : "1px solid black"}
            padding_md="17px 20px"
            padding_tablet="8px 5px"
            padding_xs="8px 20px"
            display="block"
          >
            <Div className="price-section" justifyContent="between" width="100%">
              <Div alignItems_xs="flex-start" width="60%" padding_xs="5px 0 0 0">
                <Div
                  border={`1px solid ${isSelected ? Colors.blue : "#A4A4A4"}`}
                  width="21px"
                  height="21px"
                  borderRadius="15px"
                  background={isSelected ? Colors.blue : Colors.white}
                  margin="0 10px 0 0"
                  padding="3px"
                  flexShrink="0"
                  flexShrink_tablet="0"
                >
                  {isSelected && (
                    <Icon
                      icon="check"
                      width="14px"
                      height="14px"
                      color={Colors.white}
                      fill={Colors.white}
                    />
                  )}
                </Div>
                <Div display="block">
                  <Paragraph
                    lineHeight="17px"
                    fontWeight_xs="700"
                    fontSize="14px"
                    color={Colors.black}
                    opacity="1"
                    textAlign="left"
                    margin="0 0 5px 0"
                  >
                    {scholarship}
                  </Paragraph>
                  <Paragraph
                    lineHeight="17px"
                    fontWeight="400"
                    fontSize="14px"
                    color={Colors.black}
                    opacity="1"
                    textAlign="left"
                  >
                    {payment_time}
                  </Paragraph>
                </Div>
              </Div>
              <Div className="price-container" display="block" width="40%">
                <H3
                  textAlign="end"
                  fontWeight="700"
                  fontSize="30px"
                  lineHeight="36px"
                  color={Colors.black}
                  opacity="1"
                >
                  {!jobGuarantee ? data.price : data.job_guarantee_price}
                </H3>
                {!jobGuarantee && (
                  <Paragraph
                    fontWeight="700"
                    fontSize="30px"
                    lineHeight="36px"
                    color={Colors.black}
                    opacity="1"
                    textAlign="right"
                  >
                    <s>{data.original_price}</s>
                  </Paragraph>
                )}
              </Div>
            </Div>
  
            {data.icons && data.icons.length > 0 && (
              <Div
                className="icons"
                background={Colors.verylightGray}
                padding="4px 7px"
                borderRadius="26px"
                width="fit-content"
                alignItems="center"
                margin="15px 0 0 0"
              >
                {data.icons.map((icon) => (
                  <Img
                    src={icon}
                    alt="4Geeks Academy Icon"
                    backgroundSize="contain"
                    height="17px"
                    minWidth="30px"
                    width="auto"
                    margin="0 5px"
                  />
                ))}
              </Div>
            )}
          </Div>
        </Div>
        {isSelected && (
          <Div
            className="expandable"
            display="block"
            display_tablet="none"
            margin="0 0 10px 0"
            background="#F9F9F9"
            border="1px solid #EBEBEB"
            padding="24px 15px"
            width="100%"
          >
            <H3 textAlign="center" margin="0 0 15px 0" fontSize="21px">
              {info.plan_details}
            </H3>
            {data.bullets &&
              data.bullets.map((bullet) => (
                <Div alignItems="center" margin="21px 0 0 0">
                  <Icon
                    icon="check"
                    width="17px"
                    height="17px"
                    style={{ marginRight: "10px" }}
                    color={Colors.blue}
                    fill={Colors.blue}
                  />
                  <Paragraph
                    lineHeight="19px"
                    fontWeight="500"
                    fontSize="14px"
                    color={Colors.black}
                    opacity="1"
                    textAlign="left"
                  >
                    {bullet}
                  </Paragraph>
                </Div>
              ))}
            <Link
              style={{
                marginTop: "21px",
                display: "block",
              }}
              to={`${info.apply_button.link}${
                selectedPlan ? `?utm_plan=${selectedPlan}` : ""
              }`}
            >
              <Button
                variant="full"
                width="100%"
                color={Colors.black}
                textColor={Colors.white}
                fontSize="12px"
                margin="auto"
                textAlign="center"
                display="block"
                onClick={() => {
                  if (selectedPlan) {
                    setSession({
                      ...session,
                      utm: { ...session.utm, utm_plan: selectedPlan },
                    });
                  }
                }}
              >
                {buttonText || info.apply_button.label}
              </Button>
            </Link>
          </Div>
        )} */}
      </>
    );
  };