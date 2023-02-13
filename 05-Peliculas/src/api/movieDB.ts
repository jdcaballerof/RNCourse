import axios from "axios"


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '8f5e354287a46ae3558cc7f4d381eed5',
        language: 'es'
    }
})

export const movieDBGeneral = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '8f5e354287a46ae3558cc7f4d381eed5',
        language: 'es'
    }
})

export default movieDB