import {formatVideoGameData} from '../utils/mediaHelpers.js'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


export const getPopularVideoGames = async (req,res) => {
    try{
        const cache = await req.app.get('cache')
        const item = await cache.getItem(`${process.env.GAME_API}?key=${process.env.GAME_KEY}`,{},80000)
        const games = formatVideoGameData(item.data.results)
        res.status(200).json(games)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

