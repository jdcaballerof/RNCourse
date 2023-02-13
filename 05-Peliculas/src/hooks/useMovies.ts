
import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { Movie, MovieDBResponse } from '../interfaces/movieDB';


interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = ( ) => {

    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<MoviesState>({
      nowPlaying: [],
      popular: [],
      topRated: [],
      upcoming: [],
    })

    // const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);
    // const [pelisPopulares, setpelisPopulares] = useState<Movie[]>([]);

    const getMovies = async () => {
      //^ Forma 1: hacer peticiones 1 x 1 seteando a su respectivo useState
      // const respNowPlaying = await movieDB.get<MovieDBResponse>('/now_playing');
      // const resPopular = await movieDB.get<MovieDBResponse>('/popular');
      // setPeliculasEnCine( respNowPlaying.data.results );
      // setpelisPopulares( resPopular.data.results );

      //^ Forma 2: hacer peticiones asignando la promesa a una cte y pasarlas en un array a promise.all
      // const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
      // const popularPromise    = movieDB.get<MovieDBResponse>('/popular');
      // const topRatedPromise   = movieDB.get<MovieDBResponse>('/top_rated');
      // const upcomingPromise   = movieDB.get<MovieDBResponse>('/upcoming');

      //^ Forma 3: Con promise.all pasando el array depeticiones 
      const peticiones = [
        movieDB.get<MovieDBResponse>('/now_playing'),
        movieDB.get<MovieDBResponse>('/popular'),
        movieDB.get<MovieDBResponse>('/top_rated'),
        movieDB.get<MovieDBResponse>('/upcoming'),
      ]

      //^ Forma 2: ... Continuación
      // const resp = await Promise.all([ nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise ])

      //^ Forma 3: ... Continuación
      const resp = await Promise.all( peticiones )
      setMoviesState({
        nowPlaying: resp[0].data.results,
        popular: resp[1].data.results,
        topRated: resp[2].data.results,
        upcoming: resp[3].data.results,
      })
      

      setTimeout(() => {
        setIsLoading(false);
      }, 750);
    }

    useEffect( () => {
      getMovies();

    }, [] )

  return {
    isLoading,
    ...moviesState
    // peliculasEnCine,
    // pelisPopulares,
  }
}
