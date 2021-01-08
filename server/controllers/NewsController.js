const axios = require("axios")
const API_KEY = process.env.NEWS_API_KEY
const BASE_URL = "http://newsapi.org/v2/"

class NewsController {
  static async findAll(req, res, next) {
    const keyword = req.query
    try {
      const response = await axios.get(`${BASE_URL}/everything`, {
        params: {
          q: keyword || "movie",
          apiKey: API_KEY,
        },
      })

      res.status(200).json(response.data)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = NewsController