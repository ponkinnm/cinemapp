// Import the RTK Query methods from the React-specific entry point
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_KEY, BASE_URL} from "../../apiConfig";
import {gameSliceAction} from "../game/gameSlice";

const headers = {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': BASE_URL
}
// Define our single API slice object
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: `https://${BASE_URL}`}),
    // The "endpoints" represent operations and requests for this server
    endpoints: builder => ({
        // The `getPosts` endpoint is a "query" operation that returns data
        getMovieIdsByGenre: builder.query({
            // The URL for the request is '/fakeApi/posts'
            query: ({limit, genre}) => ({
                    url: `/title/v2/get-popular-movies-by-genre?limit=${limit}&genre=${genre}`,
                    headers
                }
            ),
            async onQueryStarted({limit, genre}, {dispatch, queryFulfilled}) {
                try {
                    const { data } = await queryFulfilled
                    // onSuccess side effect
                    dispatch(gameSliceAction.replaceListOfMovieIds(data))
                } catch (err) {
                    // onError side-effect
                    console.error(err)
                }
            }
        }),
        getMovie: builder.query({
            query: (movieId) => ({
                url: `/title/get-quotes?tconst=${movieId}`,
                headers
            })
        })
    })
})

// Export the auto-generated hook for the `getMovieIdsByGenre` query endpoint
export const {useGetMovieIdsByGenreQuery, useGetMovieQuery} = apiSlice