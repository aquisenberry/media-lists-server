import {formatBoardGameData} from '../utils/mediaHelpers.js'



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

export const getBoardGames = async (req,res) => {
    try{
        const cache = await req.app.get('cache')
        const query = req.query.q
        const item = await cache.getItem(`${process.env.BOARD_GAME_API}search?client_id=${process.env.BOARD_GAME_CLIENT}&name=${query}`,{},80000)
        const games = formatBoardGameData(item.data.games)
        res.status(200).json(games)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}