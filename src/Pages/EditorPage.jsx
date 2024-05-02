import { useNavigate, useParams } from "react-router-dom";

import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import { useState } from "react";
import { config } from "../config/config";

export const EditorPage = () => {
  const { id: pageId } = useParams();
  console.log(pageId, "pageId to edit");

  const navigate = useNavigate();

  // Describe the initial data
  const initialData = {
    content: [],
    root: {},
    zones: {},
  };

  const [data] = useState(
    JSON.parse(localStorage.getItem("content")) ?? initialData
  );

  // Save the data to your database
  const save = (data) => {
    console.log(data, "data to save");
    localStorage.setItem("content", JSON.stringify(data));
  };

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
                <button
                  className="viewPage-btn"
                  onClick={() => navigate("/preview")}
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
