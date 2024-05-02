import { Render } from "@measured/puck";
import { useNavigate } from "react-router-dom";
import { config } from "../config/config";
import { useEffect, useState } from "react";
import "../index.css";

export function MainPage({ data }) {
  return <Render config={config} data={data} />;
}

export function HomePage() {
  const navigate = useNavigate();

  const initialData = {
    content: [],
    root: {},
  };

  const [data, setData] = useState(initialData);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("content"))) {
      setData(JSON.parse(localStorage.getItem("content")));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage]);

  return (
    <div>
      <div
        style={{
          background: "lightgrey",
          padding: "2%",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <div>
          Are you Admin ?{" "}
          <span>
            <button
              className="back-to-edit-btn"
              onClick={() => navigate("/editor")}
            >
              Edit Page
            </button>
          </span>
        </div>
      </div>
      <MainPage data={data} />
    </div>
  );
}
