/* eslint-disable */

import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import { Link, useParams } from "react-router-dom";
import CardList from "../components/CardList";
import NavbarComponent from "../components/NavbarComponent";

function ListFilmAdmin() {
  document.title = `List Film | Dumbflix`;
  const params = useParams();

  return (
    <>
      <NavbarComponent />
      <div className="bg-black text-white" style={{ height: "100vh" }}>
        <div className="p-5">
          <Row>
            <Col md={4}>
              <div className="d-flex">
                <h2>List Film</h2>
                <Dropdown className="ms-5">
                  <Dropdown.Toggle
                    id="dropdown-button-dark-example1"
                    variant="dark"
                    className="bg-black py-1 px-4  "
                    style={{
                      border: "1px solid white",
                      width: "160px",
                      // height: "34px",
                      fontSize: "18px",
                    }}
                  >
                    Category
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    variant="dark"
                    className="bg-black"
                    style={{ border: "1px solid white" }}
                  >
                    <Dropdown.Item href="/listfilm">All</Dropdown.Item>
                    <Dropdown.Item href="/listfilm/tv-series">
                      TV Series
                    </Dropdown.Item>
                    <Dropdown.Item href="/listfilm/movies">
                      Movies
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>
            <Col md={8} className="d-flex justify-content-end">
              <Link to="/addfilm">
                <button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    width: "200px",
                    height: "40px",
                    borderRadius: "5px",
                    marginLeft: "20px",
                  }}
                >
                  Add Film
                </button>
              </Link>
            </Col>
          </Row>
        </div>
        {!params["category"] ? (
          <>
            {/* <h5>Tv Series</h5> */}
            <CardList title="TV Series" category="tv-series" limit={12} />
            {/* <h5>Movies</h5> */}
            {/* <CardList title="Movies" category="movies" limit={12} /> */}
          </>
        ) : params["category"] == "tv-series" ? (
          <CardList title="TV Series" category="tv-series" limit={12} />
        ) : (
          <CardList title="Movies" category="movies" limit={12} />
        )}
      </div>
    </>
  );
}

export default ListFilmAdmin;
