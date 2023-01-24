import { useSelector } from "react-redux";
import { StoreState } from "../types";

export const useCollectParams = (includeBookmark: boolean) : string => {
  const storeState = useSelector((state: StoreState) => state.news);
  let url = `&order-by=${storeState.sort}`;
  if (includeBookmark && storeState.bookmarked.length) {
    url += `&ids=${storeState.bookmarked.join()}`
  }
  return url;
}