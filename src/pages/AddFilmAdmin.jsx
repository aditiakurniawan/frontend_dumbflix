/* eslint-disable */
import NavbarComponent from "../components/NavbarComponent";
import { Button, Row, Col, Form, Dropdown } from "react-bootstrap";
import { IoMdAttach } from "react-icons/io";
// import { BsCaretDown, BsPlus } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { Navigate, useNavigate } from "react-router";
import { API } from "../config/api";

function AddFilmAdmin() {
  document.title = "Add Film | Dumbflix";

  // const [categoryCounter, setCategoryCounter] = useState([]);
  const [categoryId, setCategoryId] = useState([]);
  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    title: "",
    thumbnailfilm: "",
    year: "",
    // category: "",
    description: "",
    link: "",
    category_id: "",
  });

  function handlePlusFilm(e) {
    e.preventDefault();
    console.log("add plus");
  }

  const getFilm = async () => {
    try {
      const response = await API.get("/categories");
      setFilmCounter(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeCategoryId = (e) => {
    const id = e.target.value;
    const select = e.target.select;

    if (select) {
      setCategoryId([...categoryId.parseInt(id)]);
    } else {
      let newCategoryId = categoryId.filter((categoryIdItem) => {
        return categoryIdItem != id;
      });
      setCategoryId(newCategoryId);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        Headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.token}`,
        },
      };

      const formData = new FormData();
      formData.set("title", form?.title);
      formData.set(
        "thumbnailFilm",
        form.thumbnailfilm[0],
        form.thumbnailfilm[0].name
      );
      formData.set("year", form?.year);
      formData.set("category_id", form?.category_id);
      formData.set("description", form?.description);
      formData.set("Link", form?.link);

      console.log(form);

      const response = await API.post("/film", formData, config);
      console.log(response);
      Navigate("/listfilm");
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    getFilm();
  }, []);

  return (
    <>
      <NavbarComponent />
      <div
        className="bg-black text-white py-5"
        style={{ padding: "0px 170px" }}
      >
        <h5 className="fw-bold mb-5 ">Add Film</h5>
        <Form
          className="secondary text-white"
          onSubmit={(e) => handleSubmit.mutate(e)}
        >
          <Row className="mb-4">
            <Col md={12} lg={8} xl={9}>
              <Form.Control
                onChange={handleChange}
                type="text"
                placeholder="Title"
                name="title"
                style={{
                  background: "rgba(210, 210, 210, 0.25)",
                  height: "50px",
                  color: "white",
                }}
              />
            </Col>

            <Col md={12} lg={4} xl={3}>
              <label
                htmlFor="attach"
                style={{
                  background: "rgba(210, 210, 210, 0.25)",
                  // width: "350px",
                  // height: "50px",
                  padding: "8px 40px 8px 40px",
                  color: "#6C757D",
                  borderRadius: "6px",
                  border: "1px solid white",
                  fontSize: "14px",
                  fontWeight: "lighter",
                }}
              >
                Attach Thumbnail
                <IoMdAttach
                  style={{
                    color: "#E50914",
                    // marginLeft: "70px",
                    fontSize: "30px",
                    marginLeft: "8px",
                  }}
                />
              </label>
              <input
                onChange={handleChange}
                type="file"
                name="thumbnailfilm"
                id="attach"
                hidden
              />
            </Col>
          </Row>

          <Form.Group className="mb-4" controlId="formGridAddress1">
            <Form.Control
              style={{
                background: "rgba(210, 210, 210, 0.25)",
                height: "50px",
                color: "white",
              }}
              type="number"
              placeholder="Year"
              name="year"
              onChange={handleChange}
            />
          </Form.Group>

          <select
            className="py-1  w-100 mb-4"
            style={{
              border: "1px solid white",
              background: "rgba(210, 210, 210, 0.25)",
              color: "rgba(210, 210, 210, 0.25)",
              height: "50px",
              color: "white",
              borderRadius: "6px",
            }}
            name="category_id"
            onChange={handleChange}
          >
            <option value="" selected hidden>
              Category
            </option>
            <option value="1" className="bg-dark">
              Movies
            </option>
            <option value="2" className="bg-dark">
              Tv Series
            </option>
          </select>

          <Form.Control
            as="textarea"
            onChange={handleChange}
            rows={3}
            placeholder="Description"
            name="description"
            style={{
              background: "rgba(210, 210, 210, 0.25)",
              marginBottom: "66px",
              resize: "none",
              height: "177px",
              color: "white",
            }}
          />

          {/* Film */}

          {/* <Row className="mb-4">
            <Col md={12} lg={8} xl={9}>
              <Form.Control
                onChange={handleChange}
                type="text"
                placeholder="Title"
                style={{
                  background: "rgba(210, 210, 210, 0.25)",
                  height: "50px",
                  color: "white",
                }}
              />
            </Col>
            <Col md={12} lg={4} xl={3}>
              <label
                htmlFor="attach"
                style={{
                  background: "rgba(210, 210, 210, 0.25)",
                  padding: "8px 40px 8px 40px",
                  color: "#6C757D",
                  borderRadius: "6px",
                  border: "1px solid white",
                  fontSize: "14px",
                  fontWeight: "lighter",
                }}
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
              <input
                onChange={handleChange}
                type="file"
                name="attach"
                id="attach"
                hidden
              />
            </Col>
          </Row> */}

          <Form.Group className="mb-4" controlId="formGridAddress1">
            <Form.Control
              style={{
                background: "rgba(210, 210, 210, 0.25)",
                height: "50px",
                color: "white",
              }}
              type="url"
              placeholder="Link Film"
              name="link"
              onChange={handleChange}
            />
          </Form.Group>
          {/* <Form.Group className="mb-5" controlId="formGridAddress1">
            <div>
              <button
                style={{
                  background: "rgba(210, 210, 210, 0.25)",
                  width: "100%",
                  height: "50px",
                  borderRadius: "6px",
                  border: "1px solid white",
                  color: "white",
                }}
                onClick={handlePlusFilm}
              >
                <BsPlus
                  style={{
                    color: "#E50914",
                    fontSize: "30px",
                    fontWeight: "bolder",
                  }}
                />
              </button>
            </div>
          </Form.Group> */}
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
            >
              Save
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default AddFilmAdmin;
