const axios = require("axios")
const API_KEY = process.env.NYTIMES_KEY
const BASE_URL = "https://api.nytimes.com/svc/movies/v2"

class ReviewController {
  static async findAll(req, res, next) {
    const { country, keyword } = req.query
    try {
      const response = await axios.get(`${BASE_URL}/reviews/picks.json?api-key=${API_KEY}`)
      let review = response.data.results.map(el => {
        return {
          display_title: el.display_title,
          headline: el.headline,
          summary_short: el.summary_short,
          link: el.link.url,
          multimedia: el.multimedia.src
        }
      })
      res.status(200).json(review)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ReviewController