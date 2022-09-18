import {formatMovieData} from '../utils/mediaHelpers.js'



export const getPopularMovies = async (req,res) => {
    try{
        const cache = await req.app.get('cache')
        const config = await cache.getItem(`${process.env.MOVIE_API}configuration?api_key=${process.env.MOVIE_KEY}`,{},80000)
        const item = await cache.getItem(`${process.env.MOVIE_API}movie/popular?api_key=${process.env.MOVIE_KEY}`,{},80000)
        const movies = formatMovieData(item.data.results,config.data)
        res.status(200).json(movies)
    }
    catch(error){
        res.status(404).json({message: error})
    }
}

export const getMovies = async (req,res) => {
    try{
        const cache = await req.app.get('cache')
        const config = await cache.getItem(`${process.env.MOVIE_API}configuration?api_key=${process.env.MOVIE_KEY}`,{},80000)
        const query = req.query.q
        const item = await cache.getItem(`${process.env.MOVIE_API}search/movie?api_key=${process.env.MOVIE_KEY}&query=${query}`)
        const movies = formatMovieData(item.data.results,config.data)
        res.status(200).json(movies)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}
