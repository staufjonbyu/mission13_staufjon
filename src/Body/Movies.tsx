import React, { useState, useEffect } from 'react';
import { Movie } from '../Types/Movie';
import './MyStyle.css';

// const MVS = data.MovieData.map((movie) => {
//   if (!movie.hasOwnProperty('Edited')) {
//     return { ...movie, Edited: 'No' };
//   } else {
//     return movie;
//   }
// });

function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div>
        <br></br>
        <h3 className='custom'>Here's the Movie Collection</h3>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
              <th>LentTo</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((m) => (
              <tr key={m.movieId}>
                <td>{m.category}</td>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
