import { useState } from "react";

export const Tourism = ({ topText, HeaderPosition, items }) => {
  const [backgroundImage, setbackgroundImage] = useState(items[0]?.link);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          width: "100%",
          height: "50vh",
          padding: "10px",
          fontFamily: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`,
        }}
      >
        <h2 style={{ textAlign: `${HeaderPosition}`, color: "white" }}>
          {topText}
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "100px",
            padding: "50px",
          }}
        >
          <div>
            <ul>
              {items.map((item, i) => (
                <>
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      color: "white",
                      padding: "10px",
                      fontSize: "20px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onClick={() => setbackgroundImage(item?.link)}
                  >
                    {item?.title}
                  </li>
                  <hr />
                </>
              ))}
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "100px",
              padding: "10%",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "100px",
              padding: "10%",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
