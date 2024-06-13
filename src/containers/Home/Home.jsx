import React, { useState, useEffect } from "react";
import "./Home.css";
import Image1 from "../../assets/Home/Home Image.jpg";
import Image2 from "../../assets/Home/Home Image 2.jpg";
import Image3 from "../../assets/Home/Home Image 3.jpg";
import Image4 from "../../assets/Home/Home Image 4.jpg";
import Image5 from "../../assets/Home/Home Image 5.jpg";
import Website from "../../assets/Home/website.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelUpAlt } from "@fortawesome/free-solid-svg-icons";
import LeftBrain from "../../assets/Home/brainLeft.svg";
import LeftBrainOVerlay from "../../assets/Home/brainLeftOverLay.png";
import LeftText1 from "../../assets/Home/brainLeftText1.png";
import LeftText2 from "../../assets/Home/brainLeftText2.png";
import RightText1 from "../../assets/Home/brainRightText1.png";
import RightText2 from "../../assets/Home/brainRightText2.png";
import RightBrainOVerlay from "../../assets/Home/brainRightOverLay.png";
import RightBrain from "../../assets/Home/brainRight.svg";
import { Waypoint } from "react-waypoint";

const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [photoView, setPhotoView] = useState(false);
  const [devView, setDevView] = useState(false);
  const content = [
    <span className="Cyan">{"<"}</span>,
    <span className="Red">a</span>,
    <span className="Cyan">{">"}</span>,
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "m",
    "e",
    "n",
    "t",
    <span className="Cyan">{"<"}</span>,
    <span className="Cyan">{"/"}</span>,
    <span className="Red">a</span>,
    <span className="Cyan">{">"}</span>,
  ];
  const [devContent, setDevContent] = useState([]);
  const startTyping = () => {
    if (devContent.length < 1) {
      content.forEach((el, i) => {
        setTimeout(() => {
          setDevContent(content.slice(0, i + 1));
        }, 110 * i + Math.floor(Math.random() * 90));
      });
    }
  };

  return (
    <div className="Home pt-3">
      <h1
        className="F-Lora PaleGreen mx-auto"
        style={{
          fontSize: "30px",
          borderTop: "1px solid #CCC",
          paddingTop: "30px",
          textShadow: "1px 1px #eee",
        }}
      >
        Welcome to the Mind of Sam Creasey
      </h1>
      <p
        className="F-Code mx-auto"
        style={{
          fontSize: "14px",
          marginBottom: "30px",
          marginTop: "20px",
          color: "#888",
          width: "80%",
        }}
      >
        {" "}
        For his web development projects select the left side of his brain. To
        view his photography gallery select the right side.{" "}
      </p>
      <h2
        className="mx-auto pt-2 my-0 px-3 F-Code text-left"
        style={{
          fontSize: "25px",
          width: "80%",
          textShadow: "1px 1px #ccc",
          borderBottom: "1px solid #CCC",
        }}
      ></h2>
      <div className="Flex">
        <Waypoint
          onEnter={() => {
            setDevView(true);
            startTyping();
          }}
          topOffset={"200px"}
          onLeave={() => setDevView(false)}
        >
          <div
            className={"HomeDev"}
            onClick={() => props.history.push("/development")}
          >
            <h2 className="F-Code" style={{ color: "white" }}>
              {devContent.map((x, i) => (
                <React.Fragment key={i}>{x}</React.Fragment>
              ))}{" "}
              <span className="Typer"></span>
            </h2>
            <div className="LaptopScreen">
              <div className="InnerScreen">
                <img alt="" src={Website} />
              </div>
            </div>
          </div>
        </Waypoint>
        <div className="HomeBreak">
          <div className="Brain d-flex justify-content-center mb-5">
            <div
              className={devView ? "LeftBrain Active" : "LeftBrain"}
              onClick={() => props.history.push("/development")}
            >
              <img alt="" src={LeftBrainOVerlay} className="BrainOverlay" />
              <img alt="" src={LeftText1} className="Text Text1" />
              <img alt="" src={LeftText2} className="Text Text2" />
              <FontAwesomeIcon
                icon={faLevelUpAlt}
                className="Arrow PaleGreen"
              />
              <LeftBrain />
            </div>

            <div
              className={photoView ? "RightBrain Active" : "RightBrain"}
              onClick={() => props.history.push("/photography")}
            >
              <RightBrain />
              <img alt="" src={RightBrainOVerlay} className="BrainOverlay" />
              <img alt="" src={RightText1} className="Text Text1" />
              <img alt="" src={RightText2} className="Text Text2" />
              <FontAwesomeIcon icon={faLevelUpAlt} className="Arrow Cyan" />
            </div>
          </div>
        </div>
        <Waypoint
          onEnter={() => setPhotoView(true)}
          onLeave={() => setPhotoView(false)}
          topOffset={"650px"}
          bottomOffset={"500px"}
        >
          <div
            className={photoView ? "Active HomePhoto" : "HomePhoto"}
            onClick={() => props.history.push("/photography")}
          >
            <img alt="" src={Image1} />
            <img alt="" src={Image2} />
            <img alt="" src={Image3} />
            <img alt="" src={Image4} />
            <img alt="" src={Image5} />
          </div>
        </Waypoint>
      </div>
    </div>
  );
};

export default Home;
