const axios = require("axios")
const TMDB_KEY = process.env.TMDB_API_KEY

class TmdbController {
  static getFilm(req, res, next) {
    let popularMovie = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&language=en-US&page=1`
    axios.get(popularMovie)
    .then(response => {
      let movies = response.data.results.map(el => {
        return {
          id: el.id,
          title: el.title,
          rate: el.vote_average,
          release: el.release_date,
          poster: `https://image.tmdb.org/t/p/w500/${el.poster_path}`
        }
      })
      res.status(200).json(movies)
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = TmdbController