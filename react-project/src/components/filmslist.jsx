import { useEffect, useState } from 'react';


export default function FilmsList(props) {
    const [list, setList] = useState([]);
  
    const handleChange = (e) => {
      setList(e.target.value);
    }
    
    const getFilms = () => {
        fetch("https://studioghibliapi-d6fc8.web.app/films")
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((films) => {
            console.log(films)
            setList(films);
            console.log(list);
          })
          .catch((err) => console.error(err));
        console.log(list);
    }

    useEffect(() => {
        getFilms();
    }, []);

    return (
        <ul>
          {list.map((film) => (
            <li key={film.id}>
              <h2>{film.title}</h2>
              <p>{film.release_date}</p>
              <p>Critics: {film.rt_score}%</p>
              <img src={film.image} alt={film.title + " banner"} />
            </li>
          ))}
        </ul>
      );
}

