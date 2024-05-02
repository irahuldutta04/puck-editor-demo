import { useNavigate } from "react-router-dom";
import { MainPage } from "./HomePage";
import { useEffect, useState } from "react";

const PreviewSite = () => {
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
      <button className="back-to-edit-btn" onClick={() => navigate("/editor")}>
        Back to Edit
      </button>
      <MainPage data={data} />
    </div>
  );
};

export default PreviewSite;
