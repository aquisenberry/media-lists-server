
export const formatMediaData = (data,config) => {
    return data.map((entry) => {
          return {
              title: entry.title,
              year: new Date(entry.release_date).getFullYear(),
              poster: `${config.images.base_url}${config.images.poster_sizes[2]}${entry.poster_path}`
          }
      })
  }