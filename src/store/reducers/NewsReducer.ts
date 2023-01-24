import { ACTIONS } from "../constants/action-types";
import { NewsType } from "../../types"
import { SORTBY } from "../../constants";

type NewReducerActionType = {
  type: string,
  payload: any
}

type NewsReducerState = {
  news: NewsType[],
  bookmarked: string[],
  sort: string
}

const initialState: NewsReducerState = {
  news: [],
  bookmarked: [],
  sort: SORTBY.NEWEST
}

export const NewsReducer = (state : NewsReducerState = initialState, { type, payload } : NewReducerActionType) => {
  switch (type) {
    case ACTIONS.SET_NEWS:
      return { ...state, news: payload };
    
    case ACTIONS.ADD_BOOKMARK:
      if (state.bookmarked.includes(payload))
        return state;
      return { ...state, bookmarked: [...state.bookmarked, payload] };
    
    case ACTIONS.REMOVE_BOOKMARK:
      const newBookmarked = state.bookmarked.filter(existingNewsId => existingNewsId !== payload);
      return { ...state, bookmarked: [...newBookmarked] };
    
    case ACTIONS.SET_SORT:
      return { ...state, sort: payload };
    
    default:
      return state;
  }
}