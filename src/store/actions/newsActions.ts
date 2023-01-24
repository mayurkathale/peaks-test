import { ACTIONS } from "../constants/action-types";
import { NewsType } from "../../types";
export const setNews = (news: NewsType[]) => {
  return {
    type: ACTIONS.SET_NEWS,
    payload: news,
  };
};

export const addBookmark = (newsId: string) => {
  return {
    type: ACTIONS.ADD_BOOKMARK,
    payload: newsId,
  };
};

export const removeBookmark = (newsId: string) => {
  return {
    type: ACTIONS.REMOVE_BOOKMARK,
    payload: newsId,
  };
};

export const setSort = (sort: string) => {
  return {
    type: ACTIONS.SET_SORT,
    payload: sort,
  };
};
