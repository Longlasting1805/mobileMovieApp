export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,

    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}


export const fetchrMovies = async ({ query }: { query: string }) => {
    const endpoint = '/discover/movie?sort_by=popularity.desc'

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    })

    if(!response.ok) {
        // @ts-ignore
        throw new Error('Failed to fetch movies', response.statusText)
    }

    const data = await response.json()

    return data.results
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2Y2MjlhZmE1NGVkYjUzZThjZjJkODhlNGE5ZWE5YSIsIm5iZiI6MTc2NDkyNjU2Mi4zNDA5OTk4LCJzdWIiOiI2OTMyYTQ2MmViMGI1MDRjMTg0NzY0OWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tBuR2yAb1d_DMbfCqQPg4UQDPTXzns76HRdPxtnAtPA'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));