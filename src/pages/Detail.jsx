/* eslint-disable */
import { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { IoMdAttach } from "react-icons/io";
import { useParams } from "react-router-dom";
import CardDetail from "../components/CardDetail";
import DetailTrailer from "../components/DetailTrailer";
import NavbarComponent from "../components/NavbarComponent";

function Detail() {
  const params = useParams();
  const [showEpisode, setShowEpisode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [dataEpisode, setDataEpisode] = useState({
    title: "",
    link: "",
  });
  const [isVideoPlaying, setIsVideoPlaying] = useState("unplay");

  const handleCloseEpisode = () => setShowEpisode(false);
  const handleShowEpisode = () => setShowEpisode(true);

  function handleChangeEpisode(e) {
    setDataEpisode({
      ...dataEpisode,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmitEpisode() {
    console.log("test");
  }

  useEffect(() => {
    if (localStorage.getItem("dataLogin")) {
      let data = JSON.parse(localStorage.getItem("dataLogin"));
      data.role == "admin" ? setIsAdmin(true) : setIsAdmin(false);
    }
  }, []);

  return (
    <>
      <div className="bg-black">
        <NavbarComponent />
        <DetailTrailer
          id={params.id}
          isVideoPlaying={isVideoPlaying}
          setIsVideoPlaying={setIsVideoPlaying}
        />
        <div
          className="
          d-grid
          gap-2
          d-md-flex
          justify-content-md-end "
          style={{ margin: " 0 125px", borderRadius: "5px" }}
        >
          {isAdmin && (
            <Button
              variant="danger"
              className="mt-3"
              style={{ background: "#E50914", width: "200px", height: "40px" }}
              onClick={handleShowEpisode}
            >
              Add Episode
            </Button>
          )}
        </div>
        <CardDetail
          id={params.id}
          isVideoPlaying={isVideoPlaying}
          setIsVideoPlaying={setIsVideoPlaying}
        />
      </div>
      <Modal show={showEpisode} onHide={handleCloseEpisode}>
        <Modal.Body
          style={{
            backgroundColor: "#1F1F1F",
            color: "white",
            padding: "30px",
            border: "2px solid black",
          }}
          className="rounded"
        >
          <h2>
            <b>Add Episode</b>
          </h2>
          <Row className="mb-4 mt-4">
            <Col sm={6}>
              <Form.Control
                type="text"
                placeholder="Title"
                style={{
                  background: "rgba(210, 210, 210, 0.25)",
                  height: "50px",
                }}
              />
            </Col>
            <Col sm={6}>
              <label
                htmlFor="attach"
                style={{
                  background: "rgba(210, 210, 210, 0.25)",
                  padding: "8px 10px 8px 30px",
                  color: "#6C757D",
                  borderRadius: "6px",
                  border: "1px solid white",
                  fontSize: "14px",
                  fontWeight: "lighter",
                }}
                className="w-100"
              >
                Attach Thumbnail
                <IoMdAttach
                  style={{
                    color: "#E50914",
                    fontSize: "30px",
                    marginLeft: "8px",
                  }}
                />
              </label>
              <input type="file" name="attach" id="attach" hidden />
            </Col>
          </Row>

          <Form className="mt-4">
            <Form.Group className="mb-4" controlId="formGridAddress1">
              <Form.Control
                style={{
                  background: "rgba(210, 210, 210, 0.25)",
                  height: "50px",
                }}
                type="url"
                name="link"
                onChange={handleChangeEpisode}
                placeholder="Link Film"
              />
            </Form.Group>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Button
                type="submit"
                style={{
                  width: "200px",
                  height: "40px",
                  background: "#E50914",
                  border: "1px solid black",
                  fontWeight: "bold",
                }}
                onClick={handleSubmitEpisode}
              >
                Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Detail;
