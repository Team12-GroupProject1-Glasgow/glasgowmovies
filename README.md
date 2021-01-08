# GlasgowMovies
A simple Movies, Series, and other related things web app


List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /loginGoogle`
- `GET /news`
- `GET /tmdb`
- `GET /review`


### POST /register

description: 
  register user

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "id":"integer",
  "email": "string"
}
```

- status: 400
- body:
  ​

```json
{
  "message": [
    "Please input email",
    "Please input email between 10 to 50 characters",
    "Please input password",
    "Please input password between 9 to 30 characters"
  ]
}
```

- status: 500
- body:
  ​

```json
{
  "message": "Internal server error"
}
```

### POST /login

description: 
  User sign-in

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
    "access_token": "jwt string",
}
```

- status: 400
- body:
  ​

```json
{
  "message": [
    "Wrong email or password"
  ]
}
```

- status: 500
- body:
  ​

```json
{
  "message": "Internal server error"
}
```

### POST /loginGoogle

description: 
  sign in as Ggoogle user

Request:

- data:

```json
{
  "idToken": "google token"
}
```

Response:

- status: 200
- body:
  ​

```json
{
  "access_token": "jwt string",
}
```

- status: 500
- body:
  ​

```json
{
  "message": "Internal server error"
}
```

### GET /news

description: 
  get latest US movie news

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
{
"status": "ok",
"totalResults": 30691,
"articles": [
{
"source": {
"id": null,
"name": "Lifehacker.com"
},
"author": "Aisha Jordan",
"title": "Search for Shows and Movies Based on Your Own Plot",
"description": "We’ve told you before about JustWatch, a service that allows you to search for a movie to discover where it is available for streaming or rental. But JustWatch also offers features to help you find a movie if you aren’t sure what you want to watch—including a…",
"url": "https://lifehacker.com/search-for-shows-and-movies-based-on-your-own-plot-1845912863",
"urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/eicp7paqwok97hi0wq3q.png",
"publishedAt": "2020-12-18T21:15:00Z",
"content": "Weve told you before about JustWatch, a service that allows you to search for a movie to discover where it is available for streaming or rental. But JustWatch also offers features to help you find a … [+2075 chars]"
},
{
"source": {
"id": "engadget",
"name": "Engadget"
},
"author": "Jon Fingas",
"title": "Sony says WarnerMedia's HBO Max gamble helped its movie business",
"description": "Directors aren’t thrilled about WarnerMedia’s decision to release every 2021 movie on HBO Max, and that’s proving to be good news for at least one rival. As The Verge reports, Sony Pictures chief Tony Vinciquerra told CNBC in an interview that his studio has …",
"url": "https://www.engadget.com/sony-says-warnermedia-hbo-max-gamble-helped-movies-162055998.html",
"urlToImage": "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-images%2F2019-08%2Fe7d7bfd0-c41e-11e9-b7ff-f5597b92d8b0&client=amp-blogside-v2&signature=e113283219e03c4b0a949a81d9cd6e2d69b8cd42",
"publishedAt": "2020-12-27T16:20:55Z",
"content": "Sony doesn’t have much choice in the matter. Unlike WarnerMedia or Disney, it doesn’t have a streaming service of its own to support. It has to either sell movies to third-party services like Apple T… [+1056 chars]"
}


```

- status: 401
- body:

```json
{
  "message": "Please Login First"
}
```
- status: 404
- body:

```json
{
  "message": "Error Not Found"
}
```

- status: 500
- body:
  ​

```json
{
  "message": "Internal Server Error"
}
```

### GET /tmdb

description: 
  get list of popular movie 

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
[
  {
    "id": 464052,
    "title": "Wonder Woman 1984",
    "rate": 7.3,
    "release": "2020-12-16",
    "poster": "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
  },
  {
    "id": 508442,
    "title": "Soul",
    "rate": 8.4,
    "release": "2020-12-25",
    "poster": "https://image.tmdb.org/t/p/w500/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg"
  },
  {
    "id": 755812,
    "title": "Miraculous World: New York, United HeroeZ",
    "rate": 8.6,
    "release": "2020-10-10",
    "poster": "https://image.tmdb.org/t/p/w500/kIHgjAkuzvKBnmdstpBOo4AfZah.jpg"
  }
  
]


```

- status: 401
- body:

```json
{
  "message": "Please Login First"
}
```
- status: 404
- body:

```json
{
  "message": "Error Not Found"
}
```

- status: 500
- body:
  ​

```json
{
  "message": "Internal Server Error"
}
```

### GET /review

description: 
  get latest movie review (filtered)

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
[
  {
    "display_title": "Pieces of a Woman",
    "headline": "‘Pieces of a Woman’ Review: A Raw, Ragged Study of a Loss",
    "summary_short": "Vanessa Kirby gives an intensely physical performance as a woman whose life and marriage are upended by the death of a child.",
    "link": "http://www.nytimes.com/2020/12/30/movies/pieces-of-a-woman-review.html",
    "multimedia": "https://static01.nyt.com/images/2020/12/31/arts/31piecesofawoman/31piecesofawoman-mediumThreeByTwo210.jpg"
  },
  {
    "display_title": "Soul",
    "headline": "‘Soul’ Review: Pixar’s New Feature Gets Musical, and Metaphysical",
    "summary_short": "This inventive tale stars Jamie Foxx as a jazz musician caught in a world that human souls pass through on their way into and out of life.",
    "link": "http://www.nytimes.com/2020/12/24/movies/soul-review-pixar.html",
    "multimedia": "https://static01.nyt.com/images/2020/12/25/arts/25Soul-Cover-a/25Soul-Cover-a-mediumThreeByTwo210-v3.jpg"
  },
  {
    "display_title": "Dear Comrades",
    "headline": "‘Dear Comrades!’ Review: When the Party Line Becomes a Tightrope",
    "summary_short": "With a bureaucrat as the central character, the film at times takes on a bleakly comic tone as it fills in the circumstances surrounding a massacre.",
    "link": "http://www.nytimes.com/2020/12/24/movies/dear-comrades-review.html",
    "multimedia": "https://static01.nyt.com/images/2020/12/25/arts/24dearcomrades/merlin_181385544_089f51f3-340a-4509-817f-22c0a2e5df33-mediumThreeByTwo210.jpg"
  }
]


```

- status: 401
- body:

```json
{
  "message": "Please Login First"
}
```
- status: 404
- body:

```json
{
  "message": "Error Not Found"
}
```

- status: 500
- body:
  ​

```json
{
  "message": "Internal Server Error"
}
```
