//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

const yourName = "Lara Condelipes";
const currentYear = 2023;

ReactDOM.render(
  <div>
    <p>Created by {yourName}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
