import { useParams, useNavigate } from "react-router-dom";

import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";

// Create Puck component config
const config = {
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
  },
};

// Describe the initial data
const initialData = {
  content: [],
  root: {},
};

// Save the data to your database
const save = (data) => {};

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
                <button
                  onClick={() => navigate("/page")}
                >
                  View page
                </button>
              </div>

              {children}
            </>
          ),
        }}
      />
    </>
  );
};
