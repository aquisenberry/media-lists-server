
export const formatMovieData = (data,config) => {
    return data.map((entry) => {
          return {
              _id: `${entry.id}`,
              type:'movie',
              title: entry.title,
              year: new Date(entry.release_date).getFullYear(),
              poster: `${config.images.base_url}${config.images.poster_sizes[2]}${entry.poster_path}`,
              creator: [
                "data unavailable"
              ]
          }
      })
  }
  export const formatTVData = (data,config) => {
    return data.map((entry) => {
          return {
              _id: `${entry.id}`,
              type: 'show',
              title: entry.name,
              year: new Date(entry.release_date).getFullYear(),
              poster: `${config.images.base_url}${config.images.poster_sizes[2]}${entry.poster_path}`,
              creator: [
                "data unavailable"
              ]
          }
      })
  }
  export const formatVideoGameData = (data) => {
    return data.map((entry) => {
          return {
              _id: `${entry.id}`,
              type: 'video-game',
              title: entry.name,
              year: new Date(entry.released).getFullYear(),
              poster: entry.background_image,
              creator:[
                "data unavailable"
              ]
          }
      })
  }
  export const formatBoardGameData = (data) => {
    return data.map((entry) => {
          return {
              _id: `${entry.id}`,
              type: 'board-game',
              title: entry.name,
              year: entry.year_published,
              poster: entry.image_url,
              creator: [
                    entry.primary_publisher?.name ? entry.primary_publisher.name : "data unavailable",
                    entry.primary_designer?.name ? entry.primary_designer?.name : "data unavailable"
                ]
          }
      })
  }
  export const formatBookData = (data) => {
    return data.filter((entry) => entry.cover_i).map((entry) => {
        return {
            _id: `${entry.cover_i}`,
            type: 'book',
            title: entry.title,
            year: entry.first_publish_year,
            poster: `https://covers.openlibrary.org/b/ID/${entry.cover_i}-M.jpg`,
            creator: entry.author
        }
      })
  }