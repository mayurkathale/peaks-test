export type NewsType = {
  id: string,
  type: string,
  sectionId: string,
  sectionName: string,
  webPublicationDate: string,
  webTitle: string,
  webUrl: string,
  apiUrl: string,
  isHosted: boolean,
  pillarId: string,
  pillarName: string,
  fields: NewsFields
}

export type NewsFields = {
  headline: string,
  trailText: string,
  body: string,
  lastModified: string
  thumbnail?: string,
  byline: string
}

export type TResponse = {
  status: string,
  userTier: string,
  total: number,
  startIndex: number,
  pageSize: number,
  currentPage: number,
  pages: number,
  orderBy: string,
  results : NewsType[]
}

export type StoreState = {
  news: NewsReducerState
}

export type NewsReducerState = {
  news: NewsType[],
  bookmarked: string[],
  sort: string,
}