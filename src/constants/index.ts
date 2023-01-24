export const API_URL = "https://content.guardianapis.com/search?api-key=39c967e0-04d9-41da-bdca-4f5d38f80789&show-fields=thumbnail,headline,lastModified,body,trailText,byline";

export const API_FAKE = "https://mayur.free.beeceptor.com/my/api/news";

export const ROUTES = {
  home: '/',
  news: '/news/:id',
  bookmark: '/newslist/:type',
  search: '/search/:term'
}

export const SORTBY = {
  NEWEST: "newest",
  OLDEST: "oldest",
  POPULAR: "relevance"
}