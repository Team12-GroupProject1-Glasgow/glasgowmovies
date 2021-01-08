const axios = require("axios")
const API_KEY = process.env.NYTIMES_KEY
const BASE_URL = "https://api.nytimes.com/svc/movies/v2"

class ReviewController {
  static async findAll(req, res, next) {
    const { country, keyword } = req.query
    try {
      const response = await axios.get(`${BASE_URL}/reviews/picks.json?api-key=${API_KEY}`)
      res.status(200).json(response.data)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ReviewController