import Section from "../components/Section";

export const ReliefFundConfig = {
  fields: {
    padding: { type: "text" },
    maxWidth: { type: "text" },
    topHeading: { type: "text" },
    middleText: { type: "text" },
    bottomText: { type: "text" },
  },
  defaultProps: {
    padding: "0px",
    maxWidth: "100%",
    topHeading: "RELIEF FUND",
    middleText:
      "The West Bengal Government appeals ALL to contribute in West Bengal State Emergency Relief Fund and assist the State Goveronment in prevention and control of situation arising out of unforeseen emergencies like COVID-19 (CORONA)",
    bottomText:
      "Contribution to this fund entities you to claim 100% deduction under section 80G of the income Tax Act.",
  },
  render: ({ padding, maxWidth, topHeading, middleText, bottomText }) => {
    return (
      <Section maxWidth={maxWidth} padding={padding}>
        <div className="reliefFund">
          <h1 className="relheading">{topHeading}</h1>
          <div className="paradiv">
            <p className="relpara">{middleText}</p>
            <p className="relpara">{bottomText}</p>
          </div>
          <div className="flex justify-center gap-8 mt-4 mb-4">
            <button className="relbtn1">KNOW MORE</button>
            <button className="relbtn2">DONATE</button>
          </div>
        </div>
      </Section>
    );
  },
};
