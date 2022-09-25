/* eslint-disable */
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
// import dataFilm from "../fakeData/datafilm.json";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useQuery } from "react-query";
import { API } from "../config/api";

function CardList() {
  // const [data, setData] = useState([]);

  // function filterFilmByCategory() {
  //   if (props.category === "tv-series") {
  //     setData(dataFilm.filter((item) => item.category === "tv-series"));
  //   } else if (props.category === "movies") {
  //     setData(dataFilm.filter((item) => item.category === "movies"));
  //   }
  // }

  // useEffect(() => {
  //   filterFilmByCategory();
  // }, []);

  const state = useContext(UserContext);
  console.log("state", state);
  let { data: films } = useQuery("filmsCache", async () => {
    const response = await API.get("/films");
    console.log("response", response);
    return response.data.data;
  });

  return (
    <Container fluid className="bg-black text-light pt-5 ps-5 pe-5">
      {/* <h5>{props.title}</h5> */}
      <h5>Movies</h5>
      <Row style={{ margin: " 29px 0px 0px 15px" }}>
        {films?.slice(0, 6).map((item, i) => {
          return (
            <Col key={i} xl={2} lg={3} md={4} sm={6} className="pt-3 pb-3">
              <img
                src={item.thumbnailfilm}
                style={{
                  width: "200px",
                  height: "300px",
                  marginBottom: "10px",
                }}
                alt="cover"
              />
              <Link to={`/detail/${item.id}`} className="text-decoration-none">
                <h5 className="text-white">{item.title}</h5>
              </Link>
              <h6
                className="text-muted"
                style={{
                  fontSize: "14px",
                }}
              >
                {item.year}
              </h6>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default CardList;
