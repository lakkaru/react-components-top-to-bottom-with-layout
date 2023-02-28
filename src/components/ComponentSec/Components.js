import React from "react";

export default function Components({ leftImage, compo, rightImage }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={leftImage} height={"15px"} />
      <p style={{ padding: "10px" }}>{compo}</p>
      <div style={{ textAlign: "right", width: "100%" }}>
        <img src={rightImage} height={"10px"} />
      </div>
    </div>
  );
}
