import {formatBookData} from '../utils/mediaHelpers.js'

export const getPopularBooks = async (req,res) => {
    try{
        const cache = await req.app.get('cache')
        const item = await cache.getItem(`${process.env.BOOK_API}lists/full-overview.json?api-key=${process.env.BOOK_KEY}`,{},80000)
        let books = []
        item.data.results.lists.forEach((list) => books = books.concat(list.books))
        const formattedBooks = formatBookData(books)
        res.status(200).json(formattedBooks)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

