import { Tourism } from "../../PageComponents/Tourism";
import Section from "../components/Section";

export const TourismConfig = {
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
};
