import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { Cast, CreditsResp, MovieDetalles } from '../interfaces/movieDB';



interface MovieDetails {
    isLoading: boolean;
    detallesMovie?: MovieDetalles;
    cast: Cast[];  
}

export const useMovieDetails = ( movieId: number ) => {

    const [detallesMovie, setDetallesMovie] = useState<MovieDetails>({
        isLoading: true,
        cast: [],
        detallesMovie: undefined,
    });

    const getMoviesDetails = async() => {
        //! No es recomendable usar un array ya que no detecta como deberia las interfaces
        // const promesas =  [ 
        //     movieDB.get<MovieDetalles>(`/${movieId}`),
        //     movieDB.get<CreditsResp>(`/${movieId}/credits`)     // Trae el cast de la pelicula
        //  ];

        const prom1 = movieDB.get<MovieDetalles>(`/${movieId}`)
        const prom2 = movieDB.get<CreditsResp>(`/${movieId}/credits`)

        const [ detalles, cast ] = await Promise.all( [prom1, prom2] )

        setDetallesMovie({
            isLoading: false,
            cast: cast.data.cast,
            detallesMovie: detalles.data
        })

    }

    useEffect(() => {
        getMoviesDetails();
      
    }, [])
    


  return {
    ...detallesMovie
  }
}
