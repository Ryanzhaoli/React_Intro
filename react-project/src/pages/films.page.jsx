import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MainLayout, Loader } from "../components";
import {
  Form,
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import {
  filterFilmsByDirector,
  getFilmStats,
  getListOf,
} from "../helpers/film.helpers";

export function FilmsPage() {
  const [list, setList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchDirector, setSearchDirector] = useState("");

  useEffect(() => {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        setIsLoaded(true);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!isLoaded) {
    return (
      <MainLayout className="text-center">
        <Loader size={40} />
      </MainLayout>
    );
  }

  let directors = getListOf(list, "director");
  let filmsByDirector = filterFilmsByDirector(list, searchDirector);
  let { avg_score, latest, total } = getFilmStats(filmsByDirector);

  return (
    <MainLayout>
      <div className="">
        <h1>Studio Ghibli Films</h1>
        <Form>
          <Form.Group className="mb-3" controlId="searchDirector">
            <Form.Label>Filter by Director</Form.Label>
            <Form.Select
              value={searchDirector}
              onChange={(e) => setSearchDirector(e.target.value)}
            >
              <option value="">All</option>
              {directors.map((item, idx) => {
                return (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
        </Form>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <small># Of Films</small>
                  <Badge bg="dark">{total}</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <small>Average Rating</small>
                  <Badge bg="dark">{avg_score.toFixed(2)}</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <small>Latest Film</small>
                  <Badge bg="dark">{latest}</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />
        <ListGroup>
          {filmsByDirector.map((item) => {
            return (
              <ListGroupItem key={item.id}>
                <Link to={`${item.id}`}>{item.title}</Link>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    </MainLayout>
  );
}