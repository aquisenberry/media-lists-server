import fetch from "node-fetch";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


export const getMovies = async (req,res) => {
    try{
        const title = 'spiderman'
        const response = await fetch(`${process.env.MOVIE_API}${process.env.MOVIE_KEY}&s=${title}`)
        const movies = await response.json()
        console.log(`returning ${movies.totalResults} movies`)
        res.status(200).json(movies)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

