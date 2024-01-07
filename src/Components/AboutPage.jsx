import React from "react";
import data from "../data";

export default function AboutPage() {
  return (
    <div className="aboutPageContainer" id="about">
      <p className="aboutTitle">About me</p>
      <div className="descriptionContainer">
        <p>{data.about.text}</p>
      </div>
    </div>
  );
}
