import React, { useState } from "react";
import "./DevCard.css";
import { Container, Row, Col } from "react-bootstrap";

import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DevCard = (props) => {
  const [preview, showPreview] = useState(false);
  return (
    <Container style={{ marginBottom: "70px" }}>
      <Row className="DevCard">
        <Col
          lg={{ span: 6, order: props.alt ? 2 : 1 }}
          xs={{ span: 12, order: 1 }}
          className="Title Flex"
          style={{ background: props.color }}
        >
          <h2
            className="F-Active"
            style={{ maxWidth: "300px", color: props.altColor }}
          >
            {props.header}
          </h2>
        </Col>
        <Col
          lg={{ span: 6, order: props.alt ? 1 : 2 }}
          xs={{ span: 12, order: 2 }}
          style={{ backgroundColor: props.altColor }}
          className="Square Flex Info"
        >
          <p className="F-Code Description">
            <strong>Description:</strong> {props.description}
          </p>
          <p className="F-Code Description">
            <strong>Technologies/Frameworks: </strong>
            {props.technologies.join(", ")}
          </p>
          <p className="F-Code Description">
            <strong>API's: </strong>
            {props.API.join(", ")}
          </p>
          <div className="Buttons">
            <a
              href={props.link}
              rel="noopener noreferrer"
              className="F-Active"
              target="_blank"
            >
              <FontAwesomeIcon className="Green" icon={faLink} size="lg" /> Live
              Build{" "}
            </a>
            <a
              href={props.github}
              rel="noopener noreferrer"
              className="F-Active"
              target="_blank"
            >
              <FontAwesomeIcon
                className="Green"
                icon={faGithubSquare}
                size="lg"
              />{" "}
              Github Repo
            </a>
          </div>
        </Col>
        <Col
          lg={{ span: 12, order: 3 }}
          xs={{ span: 12, order: 3 }}
          className="Preview"
        >
          <h2
            className="F-Active"
            onClick={() => {
              showPreview(!preview);
            }}
            style={{ color: props.color }}
          >
            Previews{" "}
          </h2>
          <div className=" d-flex ImagePreviews w-100 align-items-center">
            <Row>
              <Col md="4" sm="12">
                <img src={props.images[0]} alt="" />
              </Col>
              <Col md="4" sm="12">
                <img src={props.images[1]} alt="" />
              </Col>
              <Col md="4" sm="12">
                <img src={props.images[2]} alt="" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DevCard;
