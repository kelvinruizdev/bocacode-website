const UpcomingDates = ({
    id,
    style,
    lang,
    location,
    locations,
    message,
    actionMessage,
  }) => {
    return (
      <div
        // id={id}
        // style={style}
        // margin_tablet="0 auto 48px auto"
        // maxWidth="1366px"
        // containerColumns_tablet="14fr"
        // gridColumn_tablet="1 / 15"
        // padding_xxs="0 20px"
        // padding_md="40px 80px"
        // padding_lg="40px 0px"
        // padding_tablet="40px 40px"
      >
        {/* <div flexDirection="column">
          <H2 textAlign="center">{content?.title}</H2>
          <div
            padding="30px 0"
            gap="15px"
            style={{ borderBottom: "1px solid black" }}
            justifyContent_tablet="between"
            flexDirection="column"
            flexDirection_tablet="row"
            alignItems_tablet="center"
          >
            <H3 textAlign="left" width="188px">
              {content?.title}
            </H3>
            {!location && (
              <div
                width_tablet="220px"
                width_md="320px"
                width_xs="320px"
                width_xxs="280px"
              >
                <SelectRaw
                  options={data?.cohorts?.catalog}
                  placeholder={
                    lang == "us"
                      ? academy
                        ? "Campus: " + academy.label
                        : "Select one academy"
                      : academy
                      ? "Campus: " + academy.label
                      : "Escoge una academia"
                  }
                  onChange={(opt) => {
                    setAcademy(opt);
                    setData({
                      ...data,
                      [filterType.value]: {
                        ...data[filterType.value],
                        filtered:
                          opt.label !== "All Locations"
                            ? data[filterType.value].all.filter(
                                (elm) => elm.academy.slug === opt.value
                              )
                            : data[filterType.value].all,
                      },
                    });
                  }}
                />
              </div>
            )}
          </div>
          {Array.isArray(data.cohorts.filtered) &&
          data.cohorts.filtered.length > 0 ? (
            data.cohorts.filtered.map((m, i) => {
              return (
                i < 4 && (
                  <div
                    key={i}
                    flexDirection="column"
                    flexDirection_tablet="row"
                    style={{ borderBottom: "1px solid black" }}
                    padding="30px 0"
                    justifyContent="between"
                  >
                    <div
                      flexDirection_tablet="column"
                      width_tablet="15%"
                      alignItems="center"
                      alignItems_tablet="start"
                      margin="0 0 10px 0"
                    >
                      <H4
                        textAlign="left"
                        textTransform="uppercase"
                        width="fit-content"
                        margin="0 10px 0 0"
                        fontWeight="700"
                        lineHeight="22px"
                      >
                        {dayjs(m.kickoff_date)
                          .locale(`${lang === "us" ? "en" : "es"}`)
                          .format("MMMM")}
                      </H4>
                      <Paragraph textAlign="left" fontWeight="700">
                        {`
                                  ${
                                    lang === "us"
                                      ? dayjs(m.kickoff_date)
                                          .locale("en")
                                          .format("MM/DD")
                                      : dayjs(m.kickoff_date)
                                          .locale("es")
                                          .format("DD/MM")
                                  } 
                                  ${lang === "us" ? " to " : " al "} 
                                  ${
                                    lang === "us"
                                      ? dayjs(m.ending_date)
                                          .locale("en")
                                          .format("MM/DD")
                                      : dayjs(m.ending_date)
                                          .locale("es")
                                          .format("DD/MM")
                                  }
                                  `}
                      </Paragraph>
                    </div>
                    <div
                      flexDirection="column"
                      width_tablet="calc(35% - 15%)"
                      margin="0 0 20px 0"
                    >
                      <H4 textAlign="left" textTransform="uppercase">
                        {content.info.program_label}
                      </H4>
  
                      <Link to={info[lang][m.syllabus_version.slug] || ""}>
                        <Paragraph textAlign="left" color={Colors.blue}>
                          {m.syllabus_version.name}
                        </Paragraph>
                      </Link>
                    </div>
                    <div
                      flexDirection="column"
                      display="none"
                      display_tablet="flex"
                      minWidth="120px"
                    >
                      <H4 textAlign="left" textTransform="uppercase">
                        {content.info.location_label}
                      </H4>
                      <div>
                        <Link to={locationUrls[lang][m.academy.slug] || ""}>
                          <Paragraph textAlign="left" color={Colors.blue}>
                            {m.academy.city.name}
                          </Paragraph>
                        </Link>
  
                        {m.academy.slug != "online" && (
                          <Paragraph textAlign="left" margin="0 0 0 3px">
                            {locationText[lang]}{" "}
                            <Link
                              color={Colors.blue}
                              to={locationUrls[lang]["online"] || ""}
                            >{`Online`}</Link>
                          </Paragraph>
                        )}
                      </div>
                    </div>
  
                    <div
                      flexDirection="column"
                      display="none"
                      display_tablet="flex"
                    >
                      <H4 textAlign="left" textTransform="uppercase">
                        {content.info.duration_label}
                      </H4>
                      <Paragraph textAlign="left">
                        {m.syllabus_version.name === modality["full_time"]
                          ? content.info.duration_full_time
                          : m.syllabus_version.name === modality["part_time"]
                          ? content.info.duration_part_time
                          : content.info.duration_weeks}
                      </Paragraph>
                    </div>
  
                    <div
                      display="flex"
                      display_tablet="none"
                      justifyContent="between"
                      margin="0 0 20px 0"
                    >
                      <div flexDirection="column" width="50%">
                        <H4 textAlign="left" textTransform="uppercase">
                          {content.info.location_label}
                        </H4>
                        <div>
                          <Link to={locationUrls[lang][m.academy.slug] || ""}>
                            <Paragraph textAlign="left" color={Colors.blue}>
                              {m.academy.city.name}
                            </Paragraph>
                          </Link>
                          {m.academy.slug != "online" && (
                            <Link to={locationUrls[lang]["online"] || ""}>
                              <Paragraph
                                textAlign="left"
                                margin="0 0 0 3px"
                                color={Colors.blue}
                              >{`${locationText[lang]} Online`}</Paragraph>
                            </Link>
                          )}
                        </div>
                      </div>
                      <div flexDirection="column" width="50%">
                        <H4 textAlign="left" textTransform="uppercase">
                          {content.info.duration_label}
                        </H4>
                        <Paragraph textAlign="left">
                          {m.syllabus_version.name === modality["full_time"]
                            ? content.info.duration_full_time
                            : m.syllabus_version.name === modality["part_time"]
                            ? content.info.duration_part_time
                            : content.info.duration_weeks}
                        </Paragraph>
                      </div>
                    </div>
                    <div flexDirection="column">
                      <Link to={content.info.button_link}>
                        <Button
                          variant="full"
                          width="fit-content"
                          color={Colors.black}
                          margin="10px 0"
                          textColor="white"
                        >
                          {buttonText || content.info.button_text}
                        </Button>
                      </Link>
                    </div>
                  </div>
                )
              );
            })
          ) : (
            <>
              <div
                display={showForm ? "none" : "flex"}
                padding="70px 0"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                padding_tablet="90px 0"
              >
                <Icon icon="agenda" />
                {message && <Paragraph margin="25px 0 0 0">{message}</Paragraph>}
                {actionMessage && (
                  <Paragraph
                    color={Colors.blue}
                    onClick={() => setShowForm(true)}
                    width="auto"
                    cursor="pointer"
                    margin="10px 0 0 0"
                    fontWeight="700"
                  >
                    {actionMessage}
                  </Paragraph>
                )}
              </div>
              <div
                padding="70px 10%"
                padding_tablet="90px 32%"
                display={showForm ? "flex" : "none"}
                flexDirection="column"
              >
                {formStatus.status === "thank-you" ? (
                  <div alignItems="center" flexDirection="column">
                    <Icon icon="success" width="80px" height="80px" />{" "}
                    <H4
                      fontSize="15px"
                      lineHeight="22px"
                      margin="25px 0 10px 10px"
                      align="center"
                    >
                      {emailFormContent.successfulText}
                    </H4>
                  </div>
                ) : (
                  <>
                    <H4
                      margin="0 0 25px 0"
                      textAlign="left"
                      display="block"
                      display_tablet="block"
                    >
                      {emailFormContent.heading}
                    </H4>
                    <div justifyContent="center" width="100%">
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (formStatus.status === "error") {
                            setFormStatus({ status: "idle", msg: "Resquest" });
                          }
                          if (!formIsValid(formData)) {
                            setFormStatus({
                              status: "error",
                              msg: "There are some errors in your form",
                            });
                          } else {
                            setFormStatus({
                              status: "loading",
                              msg: "Loading...",
                            });
                            newsletterSignup(formData, session)
                              .then((data) => {
                                if (
                                  data.error !== false &&
                                  data.error !== undefined
                                ) {
                                  setFormStatus({
                                    status: "error",
                                    msg: "Fix errors",
                                  });
                                } else {
                                  setFormStatus({
                                    status: "thank-you",
                                    msg: "Thank you",
                                  });
                                }
                              })
                              .catch((error) => {
                                console.log("error", error);
                                setFormStatus({
                                  status: "error",
                                  msg: error.message || error,
                                });
                              });
                          }
                        }}
                      >
                        <Input
                          type="email"
                          className="form-control"
                          width="100%"
                          placeholder="E-mail *"
                          borderRadius="3px"
                          bgColor={Colors.white}
                          margin="0"
                          onChange={(value, valid) => {
                            setVal({ ...formData, email: { value, valid } });
                            if (formStatus.status === "error") {
                              setFormStatus({ status: "idle", msg: "Resquest" });
                            }
                          }}
                          value={formData.email.value}
                          errorMsg="Please specify a valid email"
                          required
                        />
                        {/* <button type="submit">{formStatus.status === "loading" ? "Loading..." : "text"}</button> */}
                        <Button
                          height="40px"
                          background={Colors.blue}
                          // margin="0 0 0 10px"
                          type="submit"
                          fontWeight="700"
                          justifyContent="center"
                          margin="35px 0 0 0"
                          width="100%"
                          fontSize="14px"
                          variant="full"
                          borderRadius="3px"
                          color={
                            formStatus.status === "loading"
                              ? Colors.darkGray
                              : Colors.blue
                          }
                          textColor={Colors.white}
                          disabled={
                            formStatus.status === "loading" ? true : false
                          }
                        >
                          {formStatus.status === "loading"
                            ? "Loading..."
                            : emailFormContent.buttonText}
                        </Button>
                      </Form>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
          {Array.isArray(data.cohorts.filtered) &&
            data.cohorts.filtered.length > 0 && (
              <Link to={content.footer.button_link}>
                <Paragraph margin="20px 0" color={Colors.blue}>
                  {content.footer.button_text}
                </Paragraph>
              </Link>
            )} */}
        </div>
      </div>
    );
  };
  
  export default UpcomingDates;
  