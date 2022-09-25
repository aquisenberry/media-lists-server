import {formatTVData} from '../utils/mediaHelpers.js'



export const getPopularShows = async (req,res) => {
    try{
        const cache = await req.app.get('cache')
        const config = await cache.getItem(`${process.env.SHOW_API}configuration?api_key=${process.env.SHOW_KEY}`,{},80000)
        const item = await cache.getItem(`${process.env.SHOW_API}tv/popular?api_key=${process.env.SHOW_KEY}`,{},80000)
        const movies = formatTVData(item.data.results,config.data)
        res.status(200).json(movies)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getShows = async (req,res) => {
    try{
        const cache = await req.app.get('cache')
        const config = await cache.getItem(`${process.env.SHOW_API}configuration?api_key=${process.env.SHOW_KEY}`,{},80000)
        const query = req.query.q
        const item = await cache.getItem(`${process.env.SHOW_API}search/tv?api_key=${process.env.SHOW_KEY}&query=${query}`)
        const shows = formatTVData(item.data.results,config.data)
        res.status(200).json(shows)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getShowDetails = async (req,res) => {
    try{
        const cache = await req.app.get('cache')
        const config = await cache.getItem(`${process.env.SHOW_API}configuration?api_key=${process.env.SHOW_KEY}`,{},80000)
        const showId = req.query.id
        const item = await cache.getItem(`${process.env.SHOW_API}/tv/${showId}?api_key=${process.env.SHOW_KEY}`)
        res.status(200).json(item)
    }
    catch(error){
        CredentialsContainer.status(404).json({message: error.message})
    }
}
