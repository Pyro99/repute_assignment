import { useEffect, useState } from "react";
import Card from "./Card"

const CardContainer = () => {
  const[movies,setMovies] = useState(null);
  useEffect(() => {
    getMovies();
  },[]);

  const getMovies = async() => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=81f382d33088c6d52099a62eab51d967`);
    const response = await data.json();
    setMovies(response.results);
    console.log(response.results);
  }
  return (
    <div>
      {/* {
        movies &&  movies.map(movie => (
          <Card key = {movie.id} data={movie}/>
        ))
      } */}
      {movies && <Card data={movies[0]}/>}
    </div>
  )
}

export default CardContainer