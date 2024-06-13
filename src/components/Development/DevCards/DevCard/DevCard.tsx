import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./DevCard.css";

type DevCardProps = {
  alt?: boolean;
  color: string;
  altColor: string;
  header: string;
  description: string;
  technologies: string[];
  API: string[];
  link: string;
  github: string;
  images: string[];
};

export const DevCard = ({
  alt,
  color,
  altColor,
  header,
  description,
  technologies,
  API,
  link,
  github,
  images,
}: DevCardProps) => {
  const [preview, showPreview] = useState(false);

  return (
    <Container style={{ marginBottom: "70px" }}>
      <Row className="DevCard">
        <Col
          lg={{ span: 6, order: alt ? 2 : 1 }}
          xs={{ span: 12, order: 1 }}
          className="Title Flex"
          style={{ background: color }}
        >
          <h2
            className="F-Active"
            style={{ maxWidth: "300px", color: altColor }}
          >
            {header}
          </h2>
        </Col>
        <Col
          lg={{ span: 6, order: alt ? 1 : 2 }}
          xs={{ span: 12, order: 2 }}
          style={{ backgroundColor: altColor }}
          className="Square Flex Info"
        >
          <p className="F-Code Description">
            <strong>Description:</strong> {description}
          </p>
          <p className="F-Code Description">
            <strong>Technologies/Frameworks: </strong>
            {technologies.join(", ")}
          </p>
          <p className="F-Code Description">
            <strong>API's: </strong>
            {API.join(", ")}
          </p>
          <div className="Buttons">
            <a
              href={link}
              rel="noopener noreferrer"
              className="F-Active"
              target="_blank"
            >
              <FontAwesomeIcon className="Green" icon={faLink} size="lg" /> Live
              Build{" "}
            </a>
            <a
              href={github}
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
            style={{ color: color }}
          >
            Previews{" "}
          </h2>
          <div className=" d-flex ImagePreviews w-100 align-items-center">
            <Row>
              <Col md="4" sm="12">
                <img src={images[0]} alt="" />
              </Col>
              <Col md="4" sm="12">
                <img src={images[1]} alt="" />
              </Col>
              <Col md="4" sm="12">
                <img src={images[2]} alt="" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
