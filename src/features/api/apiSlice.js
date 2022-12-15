// Import the RTK Query methods from the React-specific entry point
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_KEY, BASE_URL} from "../../apiConfig";

// Define our single API slice object
export const apiSlice = createApi({
    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: 'api',
    // All of our requests will have URLs starting with '/fakeApi'
    baseQuery: fetchBaseQuery({baseUrl: `https://${BASE_URL}`}),
    // The "endpoints" represent operations and requests for this server
    endpoints: builder => ({
        // The `getPosts` endpoint is a "query" operation that returns data
        getMovieIdsByGenre: builder.query({
            // The URL for the request is '/fakeApi/posts'
            query: ({limit, genre}) => ({
                    url: `/title/v2/get-popular-movies-by-genre?limit=${limit}&genre=${genre}`,
                    headers: {
                        'X-RapidAPI-Key': API_KEY,
                        'X-RapidAPI-Host': BASE_URL
                    }
                }
            )


        })
    })
})

// Export the auto-generated hook for the `getMovieIdsByGenre` query endpoint
export const {useGetMovieIdsByGenreQuery} = apiSlice