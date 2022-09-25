import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

function HeroImage(props) {
  return (
    <div style={{ backgroundColor: "black" }} className="position-relative">
      <Image
        src="/assets/images/bottom-shadow.svg"
        alt="bottom-shadow"
        className="position-absolute w-100"
        style={{ bottom: "-100px", pointerEvents: "none" }}
      />
      <Image
        src={props.image}
        className="w-100"
        style={{
          objectFit: "cover",
          height: "748px",
          boxSizing: "border-box",
          pointerEvents: "none",
        }}
      />
      <MediaQuery minWidth={600}>
        <div
          className="position-absolute"
          style={{ top: "158px", color: "white", margin: "0 100px 0 100px" }}
        >
          <Image
            src={props.titleimage}
            style={{
              width: props.titlesize,
            }}
          />
          <p style={{ width: "500px" }} className="mt-3">
            {props.desc}
          </p>
          <Row style={{ width: "300px" }}>
            <Col sm={3} md={3} lg={3} xl={3}>
              <p
                style={{ fontWeight: "bold", color: "white" }}
                className="d-flex align-items-center h-100 justify-content-center"
              >
                {props.year}
              </p>
            </Col>
            <Col sm={9} md={9} lg={9} xl={9}>
              <div
                className="d-flex justify-content-center align-items-center h-100"
                style={{
                  backgroundColor: "none",
                  border: "1px solid white",
                  borderRadius: "10px",
                  width: "100px",
                  height: "100%",
                }}
              >
                {props.category}
              </div>
            </Col>
          </Row>
          <Link
            to={props.watch}
            className="btn text-white text-decoration-none p-2 fw-bold fs-4"
            style={{
              backgroundColor: "#E50914",
              width: "300px",
              marginTop: "20px",
            }}
          >
            WATCH NOW !
          </Link>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={600}>
        <div
          className="position-absolute"
          style={{ top: "158px", color: "white", margin: "0 20px 0 20px" }}
        >
          <Image
            src={props.titleimage}
            style={{
              width: "300px",
            }}
          />
          <p style={{ width: "300px" }} className="mt-3">
            {props.desc}
          </p>
          <Row style={{ width: "300px" }}>
            <Col sm={12} md={3} lg={3} xl={3}>
              <p
                style={{ fontWeight: "bold", color: "white" }}
                className="d-flex align-items-center h-100"
              >
                {props.year}
              </p>
            </Col>
            <Col sm={12} md={9} lg={9} xl={9}>
              <div
                className="d-flex justify-content-center align-items-center h-100"
                style={{
                  backgroundColor: "none",
                  border: "1px solid white",
                  borderRadius: "10px",
                  width: "100px",
                  height: "100%",
                }}
              >
                {props.category}
              </div>
            </Col>
          </Row>
          <Link
            to={props.watch}
            className="btn text-white text-decoration-none"
            style={{
              backgroundColor: "#E50914",
              width: "300px",
              marginTop: "20px",
            }}
          >
            WATCH NOW !
          </Link>
        </div>
      </MediaQuery>
    </div>
  );
}

export default HeroImage;
