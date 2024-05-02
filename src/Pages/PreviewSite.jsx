import { useNavigate } from "react-router-dom";
import { MainPage } from "./HomePage";

const PreviewSite = () => {
  const data = JSON.parse(localStorage.getItem("content"));

  const navigate = useNavigate();

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
