import {formatBoardGameData} from '../utils/mediaHelpers.js'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


export const getPopularBoardGames = async (req,res) => {
    try{
        const cache = await req.app.get('cache')
        const item = await cache.getItem(`${process.env.BOARD_GAME_API}search?client_id=${process.env.BOARD_GAME_CLIENT}`,{},80000)
        const games = formatBoardGameData(item.data.games)
        res.status(200).json(games)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

