import { AboutBengalConfig } from "./blocks/AboutBengalConfig";
import { ReliefFundConfig } from "./blocks/ReliefFundConfig";
import { TourismConfig } from "./blocks/TourismConfig";
import Section from "./components/Section";

export const config = {
  components: {
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
    AboutBengal: AboutBengalConfig,
    Tourism: TourismConfig,
    ReliefFund: ReliefFundConfig,
  },
};
