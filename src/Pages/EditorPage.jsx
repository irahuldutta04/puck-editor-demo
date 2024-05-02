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
      }) => {
        return (
          <Section padding={padding} maxWidth={maxWidth}>
            <div className="max-w-7xl aboutBengal  mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <h1 className="text-4xl font-bold text-center mb-6">{topText}</h1>
              <p className="text-lg text-zinc-700 mb-10">{bottomText}</p>
              <div className="flex md:flex-row justify-center gap-8">
                {priority === "default" && (
                  <>
                    <div className="text-center">
                      <img
                        src={governorImage}
                        alt="Governor"
                        className="mx-auto rounded-full mb-4"
                        width={150}
                        height={150}
                      />
                      <h2 className="text-xl font-semibold">
                        MEET THE GOVERNOR
                      </h2>
                      <p className="font-medium text-zinc-800">
                        {governorName}
                      </p>
                      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        KNOW MORE
                      </button>
                    </div>
                    <div className="text-center">
                      <img
                        src={chiefMinisterImage}
                        alt="Chief Minister"
                        className="mx-auto rounded-full mb-4"
                        width={150}
                        height={150}
                      />
                      <h2 className="text-xl font-semibold">
                        MEET THE CHIEF MINISTER
                      </h2>
                      <p className="font-medium text-zinc-800">
                        {chiefMinisterName}
                      </p>
                      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        KNOW MORE
                      </button>
                    </div>
                  </>
                )}
                {priority === "reverse" && (
                  <>
                    <div className="text-center">
                      <img
                        src={chiefMinisterImage}
                        alt="Chief Minister"
                        className="mx-auto rounded-full mb-4"
                        width={150}
                        height={150}
                      />
                      <h2 className="text-xl font-semibold">
                        MEET THE CHIEF MINISTER
                      </h2>
                      <p className="font-medium text-zinc-800">
                        {chiefMinisterName}
                      </p>
                      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        KNOW MORE
                      </button>
                    </div>
                    <div className="text-center">
                      <img
                        src={governorImage}
                        alt="Governor"
                        className="mx-auto rounded-full mb-4"
                        width={150}
                        height={150}
                      />
                      <h2 className="text-xl font-semibold">
                        MEET THE GOVERNOR
                      </h2>
                      <p className="font-medium text-zinc-800">
                        {governorName}
                      </p>
                      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        KNOW MORE
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
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
  zones: {},
};

const data = JSON.parse(localStorage.getItem('content')) ?? initialData;

// Save the data to your database
const save = (data) => {
  console.log(data, "data to save");
  localStorage.setItem('content',JSON.stringify(data))
};

export const EditorPage = () => {
  const { id: pageId } = useParams();
  console.log(pageId, "pageId to edit");

  const navigate = useNavigate();

  return (
    <>
      <Puck
        config={config}
        data={data}
        onPublish={save}
        overrides={{
          headerActions: ({ children }) => (
            <>
              <div>
                <button onClick={() => navigate("/preview")}>View page</button>
              </div>

              {children}
            </>
          ),
        }}
      />
    </>
  );
};
