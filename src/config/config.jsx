import { AboutBengal } from "../PageComponents/AboutBengal";
import { NewAboutBengal } from "../PageComponents/NewAboutBengal";
import { Tourism } from "../PageComponents/Tourism";
import Section from "./components/Section";

export const config = {
  components: {
    // heading block
    HeadingBlock: {
      fields: {
        children: {
          type: "text",
        },
      },
      render: ({ children }) => {
        return <h1>{children}</h1>;
      },
    },
    // paragraph block
    ParagraphBlock: {
      fields: {
        children: {
          type: "text",
        },
      },
      render: ({ children }) => {
        return <p>{children}</p>;
      },
    },
    // text block
    Text: {
      fields: {
        text: { type: "textarea" },
        size: {
          type: "select",
          options: [
            { label: "S", value: "s" },
            { label: "M", value: "m" },
          ],
        },
        align: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        color: {
          type: "radio",
          options: [
            { label: "Default", value: "default" },
            { label: "Muted", value: "muted" },
            { label: "Red", value: "red" },
          ],
        },
        padding: { type: "text" },
        maxWidth: { type: "text" },
      },
      defaultProps: {
        align: "left",
        text: "Text",
        padding: "24px",
        size: "m",
        color: "default",
      },
      render: ({ align, color, text, size, padding, maxWidth }) => {
        return (
          <Section padding={padding} maxWidth={maxWidth}>
            <span
              style={{
                color:
                  color === "default"
                    ? "inherit"
                    : color === "muted"
                    ? "#666"
                    : "red",
                display: "flex",
                textAlign: align,
                width: "100%",
                fontSize: size === "m" ? "20px" : "16px",
                fontWeight: 300,
                maxWidth,
                marginLeft: "auto",
                marginRight: "auto",
                justifyContent:
                  align === "center"
                    ? "center"
                    : align === "right"
                    ? "flex-end"
                    : "flex-start",
              }}
            >
              {text}
            </span>
          </Section>
        );
      },
    },
    // image block
    Image: {
      fields: {
        src: { type: "text" },
        alt: { type: "text" },
        width: { type: "text" },
        height: { type: "text" },
        padding: { type: "text" },
        maxWidth: { type: "text" },
      },
      defaultProps: {
        src: "https://placehold.co/150x150",
        alt: "Image",
        width: "150px",
        height: "150px",
        padding: "24px",
        maxWidth: "100%",
      },
      render: ({ src, alt, width, height, padding, maxWidth }) => {
        return (
          <Section padding={padding} maxWidth={maxWidth}>
            <img src={src} alt={alt} width={width} height={height} />
          </Section>
        );
      },
    },
    // about bengal block
    AboutBengal: {
      fields: {
        template: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "New", value: "new" },
          ],
        },
        padding: { type: "text" },
        maxWidth: { type: "text" },
        topText: { type: "text" },
        bottomText: { type: "text" },
        governorImage: { type: "text" },
        governorName: { type: "text" },
        chiefMinisterImage: { type: "text" },
        chiefMinisterName: { type: "text" },
        priority: {
          type: "radio",
          options: [
            { label: "Default", value: "default" },
            { label: "Reverse", value: "reverse" },
          ],
        },
      },
      defaultProps: {
        padding: "24px",
        maxWidth: "100%",
        topText: "ABOUT BENGAL",
        bottomText:
          "Located in Eastern India, the fourth most populous state in the country is widely considered the Melting pot of Cultures. Bordered by five different states, its capital Kolkata is often termed as the cultural capital of India. West Bengal offers a unique flavour to the richness of India with its synthesis of various languages, religions, customs, traditions, cuisines and lifestyle. Bound by the grandeur of the Himalayan ranges in the north and sweetened by the sea in the south, Bengal has everything a state needs to flourish.",
        governorImage:
          "https://upload.wikimedia.org/wikipedia/commons/5/5c/C._V._Ananda_Bose.jpg",
        governorName: "Dr. C.V. Ananda Bose",
        chiefMinisterImage:
          "https://upload.wikimedia.org/wikipedia/commons/4/4d/Official_portrait_of_Mamata_Banerjee.jpg",
        chiefMinisterName: "Smt. Mamata Banerjee",
        priority: "default",
        template: "default",
      },
      render: ({
        padding,
        maxWidth,
        topText,
        bottomText,
        governorImage,
        governorName,
        chiefMinisterImage,
        chiefMinisterName,
        priority,
        template,
      }) => {
        return (
          <Section padding={padding} maxWidth={maxWidth}>
            {template === "default" ? (
              <AboutBengal
                {...{
                  topText,
                  bottomText,
                  governorImage,
                  governorName,
                  chiefMinisterImage,
                  chiefMinisterName,
                  priority,
                }}
              />
            ) : (
              <NewAboutBengal
                {...{
                  topText,
                  bottomText,
                  governorImage,
                  governorName,
                  chiefMinisterImage,
                  chiefMinisterName,
                  priority,
                }}
              />
            )}
          </Section>
        );
      },
    },
    Toursim: {
      fields: {
        padding: { type: "text" },
        maxWidth: { type: "text" },
        topText: { type: "text" },
        HeaderPosition: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        Background_Image: { type: "text" },
        items: {
          type: "array",
          getItemSummary: (item, i) => item.title || `Feature #${i}`,
          defaultItemProps: {
            title: "Title",
            link: "link",
          },
          arrayFields: {
            title: { type: "text" },
            link: { type: "text" },
          },
        },
      },
      defaultProps: {
        topText: "Tourism",
        padding: "0px",
        maxWidth: "1280px",
        HeaderPosition: "center",
        Background_Image:
          "https://img.asmedia.epimg.net/resizer/v2/MGLDLRBRJVHNFJXBK5V3ATY2OM.jpg?auth=3369b1f9a28936f517b34c9806707a3e81f904e9079dd5140a075afd2f654ad3&width=644&height=362&smart=true",
        items: [
          {
            title: "Mountain",
            link: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            title: "Forest",
            link: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            title: "Sea",
            link: "https://images.unsplash.com/photo-1541617219835-3689726fa8e7?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
      },
      render: ({
        topText,
        padding,
        maxWidth,
        HeaderPosition,
        Background_Image,
        items,
      }) => {
        return (
          <Section padding={padding} maxWidth={maxWidth}>
            <Tourism
              {...{
                topText,
                HeaderPosition,
                Background_Image,
                items,
              }}
            />
          </Section>
        );
      },
    },
    // Relief Fund block
    ReliefFund:{
      fields: {
        padding: { type: "text" },
        maxWidth: { type: "text" },
        topHeading: {type: 'text'},
        middleText: {type: 'text'},
        bottomText: {type: 'text'},
        },
        defaultProps:{
          // padding: '24px',
          maxWidth: '100%',
          topHeading: 'RELIEF FUND',
          middleText: 'The West Bengal Government appeals ALL to contribute in West Bengal State Emergency Relief Fund and assist the State Goveronment in prevention and control of situation arising out of unforeseen emergencies like COVID-19 (CORONA)',
          bottomText: 'Contribution to this fund entities you to claim 100% deduction under section 80G of the income Tax Act.',
        },
        render:({maxWidth,topHeading,middleText,bottomText})=>{
           return (
            <Section maxWidth={maxWidth}>
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
      },
    },
  };

