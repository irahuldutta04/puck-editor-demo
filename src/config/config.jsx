import { AboutBengal } from "../PageComponents/AboutBengal";
import { NewAboutBengal } from "../PageComponents/NewAboutBengal";
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
  },
};
