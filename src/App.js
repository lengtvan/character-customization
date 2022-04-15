/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import Body from "./components/Body";
import Eyes from "./components/Eyes";
import Hair from "./components/Hair";
import Clothes from "./components/Clothes";
import Clothes2 from "./components/Clothes2";
import Clothes3 from "./components/Clothes3";
import Eyebrows from "./components/Eyebrows";
import Mouth from "./components/Mouth";
import Hat from "./components/Hat";

function App() {
  //body images
  const body1 = require("./character/body/1.png");
  const body2 = require("./character/body/2.png");
  const body3 = require("./character/body/3.png");
  const body4 = require("./character/body/4.png");
  const body5 = require("./character/body/5.png");

  //eye images
  const eyes1 = require("./character/eyes/1.png");
  const eyes2 = require("./character/eyes/2.png");
  const eyes3 = require("./character/eyes/3.png");
  const eyes4 = require("./character/eyes/4.png");
  const eyes5 = require("./character/eyes/5.png");

  //hair images
  const hair1 = require("./character/hair/1.png");
  const hair2 = require("./character/hair/2.png");
  const hair3 = require("./character/hair/3.png");
  const hair4 = require("./character/hair/4.png");
  const hair5 = require("./character/hair/5.png");
  // cloth layer 1 images
  const clothes1_1 = require("./character/clothes/layer_1/1.png");
  const clothes1_2 = require("./character/clothes/layer_1/2.png");
  const clothes1_3 = require("./character/clothes/layer_1/3.png");
  const clothes1_4 = require("./character/clothes/layer_1/4.png");
  const clothes1_5 = require("./character/clothes/layer_1/5.png");
  //cloth layer 2 images:
  const clothes2_1 = require("./character/clothes/layer_2/1.png");
  const clothes2_2 = require("./character/clothes/layer_2/2.png");
  const clothes2_3 = require("./character/clothes/layer_2/3.png");
  const clothes2_4 = require("./character/clothes/layer_2/4.png");
  const clothes2_5 = require("./character/clothes/layer_2/5.png");
  //cloth layer 3 images
  const clothes3_1 = require("./character/clothes/layer_3/1.png");
  const clothes3_2 = require("./character/clothes/layer_3/2.png");
  const clothes3_3 = require("./character/clothes/layer_3/3.png");
  const clothes3_4 = require("./character/clothes/layer_3/4.png");
  const clothes3_5 = require("./character/clothes/layer_3/5.png");
  //hats
  const hat1 = require("./character/accessories/hats/1.png");
  const hat2 = require("./character/accessories/hats/2.png");
  const hat3 = require("./character/accessories/hats/3.png");
  const hat4 = require("./character/accessories/hats/4.png");
  const hat5 = require("./character/accessories/hats/5.png");
  //eyebrows:
  const eyebrows1 = require("./character/eyebrows/1.png");
  const eyebrows2 = require("./character/eyebrows/2.png");
  const eyebrows3 = require("./character/eyebrows/3.png");
  const eyebrows4 = require("./character/eyebrows/4.png");
  const eyebrows5 = require("./character/eyebrows/5.png");

  //mouth images
  const mouth1 = require("./character/mouths/1.png");
  const mouth2 = require("./character/mouths/2.png");
  const mouth3 = require("./character/mouths/3.png");
  const mouth4 = require("./character/mouths/4.png");
  const mouth5 = require("./character/mouths/5.png");

  //avatar image source for first-render

  const facial_hair1 = require("./character/facial_hair/1.png");
  const accessories1 = require("./character/accessories/earrings/1.png");
  const nose = require("./character/noses/1.png");

  //set body

  const [body, setBody] = useState([
    { source: body1, class: "body" },
    { source: body2, class: "body" },
    { source: body3, class: "body" },
    { source: body4, class: "body" },
    { source: body5, class: "body" },
  ]);
  //set eyes:
  const [eyes, setEyes] = useState([
    { source: eyes1, class: "eyes" },
    { source: eyes2, class: "eyes" },
    { source: eyes3, class: "eyes" },
    { source: eyes4, class: "eyes" },
    { source: eyes5, class: "eyes" },
  ]);
  //set hair
  const [hair, setHair] = useState([
    { source: hair1, class: "hair" },
    { source: hair2, class: "hair" },
    { source: hair3, class: "hair" },
    { source: hair4, class: "hair" },
    { source: hair5, class: "hair" },
  ]);
  // set clothes
  const [clothes, setClothes] = useState([
    { source: clothes1_1, class: "clothes_layer1" },
    { source: clothes1_2, class: "clothes_layer1" },
    { source: clothes1_3, class: "clothes_layer1" },
    { source: clothes1_4, class: "clothes_layer1" },
    { source: clothes1_5, class: "clothes_layer1" },
  ]);
  //set clothes layer 2
  const [clothes2, setClothes2] = useState([
    { source: clothes2_1, class: "clothes_layer2" },
    { source: clothes2_2, class: "clothes_layer2" },
    { source: clothes2_3, class: "clothes_layer2" },
    { source: clothes2_4, class: "clothes_layer2" },
    { source: clothes2_5, class: "clothes_layer2" },
  ]);
  //set clothes layer 3
  const [clothes3, setClothes3] = useState([
    { source: clothes3_1, class: "clothes_layer3" },
    { source: clothes3_2, class: "clothes_layer3" },
    { source: clothes3_3, class: "clothes_layer3" },
    { source: clothes3_4, class: "clothes_layer3" },
    { source: clothes3_5, class: "clothes_layer3" },
  ]);
  //set hats
  const [hat, setHat] = useState([
    { source: hat1, class: "hat" },
    { source: hat2, class: "hat" },
    { source: hat3, class: "hat" },
    { source: hat4, class: "hat" },
    { source: hat5, class: "hat" },
  ]);

  //set mouths
  const [mouth, setMouth] = useState([
    { source: mouth1, class: "mouth" },
    { source: mouth2, class: "mouth" },
    { source: mouth3, class: "mouth" },
    { source: mouth4, class: "mouth" },
    { source: mouth5, class: "mouth" },
  ]);
  //set eyebrows
  const [eyebrows, setEyebrows] = useState([
    { source: eyebrows1, class: "eyebrows" },
    { source: eyebrows2, class: "eyebrows" },
    { source: eyebrows3, class: "eyebrows" },
    { source: eyebrows4, class: "eyebrows" },
    { source: eyebrows5, class: "eyebrows" },
  ]);
  //set avatar:
  const [avatar, setAvatar] = useState([
    { source: body1, class: "body" },
    { source: hair1, class: "hair" },
    { source: eyes1, class: "eyes" },
    { source: accessories1, class: "accessories" },
    { source: mouth1, class: "mouth" },
    { source: clothes1_1, class: "clothes_layer1" },
    { source: clothes2_1, class: "clothes_layer2" },
    { source: clothes3_1, class: "clothes_layer3" },
    { source: eyebrows1, class: "eyebrows" },
    { source: nose, class: "nose" },
    { source: hat1, class: "hat" },
  ]);

  //set avatar part:

  const resetAvatar = (change) => {
    setAvatar(
      avatar.map((entity) => {
        if (entity.class === change.avatarClass) {
          return { ...entity, source: change.avatarSource };
        }
        return { ...entity };
      })
    );
    console.log(avatar);
    console.log(body[Math.floor(Math.random() * body.length)]);
  };

  const randomizeAvatar = (e) => {
    e.preventDefault();
    setAvatar([
      body[Math.floor(Math.random() * body.length)],
      hair[Math.floor(Math.random() * hair.length)],
      eyes[Math.floor(Math.random() * eyes.length)],
      mouth[Math.floor(Math.random() * mouth.length)],
      clothes[Math.floor(Math.random() * clothes.length)],
      clothes2[Math.floor(Math.random() * clothes2.length)],
      clothes3[Math.floor(Math.random() * clothes3.length)],
      eyebrows[Math.floor(Math.random() * eyebrows.length)],
      hat[Math.floor(Math.random() * hat.length)],
      { source: nose, class: "nose" },
    ]);
    console.log(avatar);
  };
  return (
    <>
      <div className="title">Character Customization</div>
      <div className="divider"></div>
      <div className="container">
        <Avatar avatar={avatar} randomizeAvatar={randomizeAvatar} />
        <div className="list">
          <Body body={body} resetAvatar={resetAvatar} />
          <Eyes eyes={eyes} resetAvatar={resetAvatar} />
          <Hair hair={hair} resetAvatar={resetAvatar} />
          <Clothes clothes={clothes} resetAvatar={resetAvatar} />
          <Clothes2 clothes2={clothes2} resetAvatar={resetAvatar} />
          <Clothes3 clothes3={clothes3} resetAvatar={resetAvatar} />
          <Mouth mouth={mouth} resetAvatar={resetAvatar} />
          <Eyebrows eyebrows={eyebrows} resetAvatar={resetAvatar} />
          <Hat hat={hat} resetAvatar={resetAvatar} />
        </div>
      </div>
    </>
  );
}

export default App;
