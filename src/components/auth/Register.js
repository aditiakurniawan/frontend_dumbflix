import React, { useState, useContext } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { UserContext } from "../../context/useContext";
import { useMutation } from "react-query";
import { Alert } from "react-bootstrap";
import { API } from "../../config/api";

function Register() {
  const [showRegister, setShowRegister] = useState(false);
  const [isRegister, setIsRegister] = useState(true);

  const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const [dataRegister, setDataRegister] = useState({
    email: "",
    password: "",
    fullName: "",
    gender: "",
    phone: "",
    address: "",
  });

  const { email, password, fullName, gender, phone, address } = dataRegister;

  function handleChangeRegister(e) {
    setDataRegister({
      ...dataRegister,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmitRegister() {
    console.log(dataRegister);
  }

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(dataRegister);
      // Insert data user to database
      const response = await API.post("/register");
      console.log(response);

      // Notification
      if (response.data.status === "success...") {
        const alert = (
          <Alert variant="success" className="py-1">
            Success
          </Alert>
        );
        setMessage(alert);
        setDataRegister({
          email: "",
          password: "",
          fullname: "",
          gender: "",
          phone: "",
          address: "",
        });
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  return (
    <>
      <Modal show={showRegister} onHide={handleCloseRegister}>
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
            <b>Register</b>
          </h2>
          {message && message}
          <Form onSubmit={(e) => handleSubmit.mutate(e)}>
            <InputGroup className="mb-3 mt-3">
              <Form.Control
                placeholder="Email"
                style={{
                  backgroundColor: "#4C4C4C",
                  borderColor: "white",
                  color: "white",
                }}
                onChange={handleChangeRegister}
                name="email"
                value={email}
                onKeyDown={(e) => {
                  if (e.key == "Enter") handleSubmitRegister();
                }}
              />
            </InputGroup>
            <InputGroup className="mb-3 mt-3">
              <Form.Control
                placeholder="Password"
                style={{
                  backgroundColor: "#4C4C4C",
                  borderColor: "white",
                  color: "white",
                }}
                type="password"
                onChange={handleChangeRegister}
                onKeyDown={(e) => {
                  if (e.key == "Enter") handleSubmitRegister();
                }}
                name="password"
                value={password}
              />
            </InputGroup>
            <InputGroup className="mb-3 mt-3">
              <Form.Control
                placeholder="Full Name"
                style={{
                  backgroundColor: "#4C4C4C",
                  borderColor: "white",
                  color: "white",
                }}
                onChange={handleChangeRegister}
                onKeyDown={(e) => {
                  if (e.key == "Enter") handleSubmitRegister();
                }}
                name="fullName"
                value={fullName}
              />
            </InputGroup>
            <InputGroup className="mb-3 mt-3">
              <Form.Control
                placeholder="Gender"
                style={{
                  backgroundColor: "#4C4C4C",
                  borderColor: "white",
                  color: "white",
                }}
                onChange={handleChangeRegister}
                onKeyDown={(e) => {
                  if (e.key == "Enter") handleSubmitRegister();
                }}
                name="gender"
                value={gender}
              />
            </InputGroup>
            <InputGroup className="mb-3 mt-3">
              <Form.Control
                placeholder="Phone"
                style={{
                  backgroundColor: "#4C4C4C",
                  borderColor: "white",
                  color: "white",
                }}
                onChange={handleChangeRegister}
                onKeyDown={(e) => {
                  if (e.key == "Enter") handleSubmitRegister();
                }}
                name="phone"
                value={phone}
              />
            </InputGroup>
            <InputGroup className="mb-3 mt-3">
              <Form.Control
                placeholder="Address"
                style={{
                  backgroundColor: "#4C4C4C",
                  borderColor: "white",
                  color: "white",
                }}
                onChange={handleChangeRegister}
                onKeyDown={(e) => {
                  if (e.key == "Enter") handleSubmitRegister();
                }}
                name="address"
                value={address}
              />
            </InputGroup>
            <Button
              style={{
                backgroundColor: "white",
                color: "#E50914",
                borderRadius: "5px",
              }}
              type="submit"
              className="w-100 pt-2 pb-2 mt-3"
              onClick={handleSubmitRegister}
            >
              <b>Register</b>
            </Button>
            <div className="mt-3 w-100 d-flex justify-content-center">
              <p>
                Already have an account ?
                <b
                  style={{ cursor: "pointer" }}
                  className="ms-1"
                  onClick={() => {
                    console.log("oke");
                    handleCloseRegister();
                    // handleShowLogin();
                  }}
                >
                  Login Here
                </b>
              </p>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <div style={{ marginBottom: "50px" }}></div>
    </>
  );
}

export default Register;
