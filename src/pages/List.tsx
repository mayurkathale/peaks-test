import { useSelector } from "react-redux";
import { StoreState, NewsType } from "../types";
import styles from "./List.module.scss";
import { PageHeader } from "../components/PageHeader";
import { NewsList } from "../components/NewsList";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { API_URL } from "../constants";
import { useCollectParams } from "../hooks/useCollectParams";
import { LoadingSpinner } from "../components/Ui/LoadingSpinner";

export const List = () => {
  const news: NewsType[] = useSelector((state: StoreState) => state.news.news);
  const bookmarked: string[] = useSelector(
    (state: StoreState) => state.news.bookmarked
  );
  const { term, type } = useParams();
  let params = useCollectParams(term ? false : true);
  params = term ? params + "&q=" + term : params;
  params = type ? params + "&ids=" + bookmarked.join() : params;

  const { data, error, loading } = useFetch(API_URL + params);
  const content = loading ?
    <LoadingSpinner /> : data.length ? <NewsList news={data} /> : <div><h1>No records founds</h1></div>;
  return (
    <div className={styles.container}>
      {term && <PageHeader title="Search Results" />}
      {!term && <PageHeader title="All Bookmark" hideBtn={true} />}
      {content}
    </div>
  );
};
