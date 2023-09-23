import { useEffect, useState } from "react";
import {
  getListOf,
  filterFilmsByDirector,
  getFilmStats,
} from "../helpers/film.helpers";
import { Link } from "react-router-dom";

export default function FilmsPage() {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");


  const getFilms = () => {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((films) => {
        console.log(films);
        setList(films);
        console.log(list);
      })
      .catch((err) => console.error(err));
    console.log(list);
  };

  useEffect(() => {
    getFilms();
  });

  const directors = getListOf(list, "director");

  const filmsByDirector = filterFilmsByDirector(list, searchDirector);

  const { avg_score, total, latest } = getFilmStats(filmsByDirector);

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <form>
        <div className="form-group">
          <label></label>
          <select
            value={searchDirector}
            onChange={(e) => setSearchDirector(e.target.value)}
          >
            <option value="">All</option>
            {directors.map((director, index) => (
              <option key={index} value={director}>
                {director}
              </option>
            ))}
          </select>
        </div>
      </form>
      <div>
        <div>
          <span># Of Films:</span>
          <span> {total}</span>
        </div>
        <div>
          <span>Average Rating:</span>
          <span> {avg_score.toFixed(2)}</span>
        </div>
        <div>
          <span>Latest Film:</span>
          <span> {latest}</span>
        </div>
      </div>
      <ul>
        {filmsByDirector.map((film) => (
          <li key={film.id}>
            <Link to={`film/${film.id}`}>
              <h2>{film.title}</h2>
            </Link>
            <p>{film.release_date}</p>
            <p>Critics: {film.rt_score}%</p>
            <img src={film.image} alt={film.title + " banner"} />
          </li>
        ))}
      </ul>
    </div>
  );
}