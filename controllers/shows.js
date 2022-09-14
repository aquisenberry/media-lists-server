import {formatTVData} from '../utils/mediaHelpers.js'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


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

