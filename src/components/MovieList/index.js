import React from "react";
import MovieCard from "../MovieCard";


const MovieList = ({ title, list }) => {
  return (
    <div className="movie-list-page">
      <h2>{title}</h2>
      <div className="movie-list-container">
        {list.map((m) => (
          <MovieCard
            key={m.id}
            name={m.original_title}
            date={m.release_date}
            imgUrl={m.poster_path}
            id={m.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
