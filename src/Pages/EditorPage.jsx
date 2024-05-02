import { useParams, useNavigate } from "react-router-dom";

import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import Section from "../config/components/Section";

// Create Puck component config
const config = {
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
                  color === "default" ? "inherit" : color === "muted" ? "#666" : "red",
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
  },
};

// Describe the initial data
const initialData = {
  content: [],
  root: {},
};

// Save the data to your database
const save = (data) => {
  console.log(data, "data to save");
};

export const EditorPage = () => {
  const { id: pageId } = useParams();
  console.log(pageId, "pageId to edit");

  const navigate = useNavigate();

  return (
    <>
      <Puck
        config={config}
        data={initialData}
        onPublish={save}
        overrides={{
          headerActions: ({ children }) => (
            <>
              <div>
                <button onClick={() => navigate("/page")}>View page</button>
              </div>

              {children}
            </>
          ),
        }}
      />
    </>
  );
};
