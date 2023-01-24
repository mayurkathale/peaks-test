import { useEffect } from "react";
import { PageHeader } from "../components/PageHeader";
import { SingleNews } from "../components/SingleNews";
import { API_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { setNews } from "../store/actions/newsActions";
import { NewsType, StoreState } from "../types";
import styles from "./Home.module.scss";
import { NewsList } from "../components/NewsList";
import useFetch from "../hooks/useFetch";
import { LoadingSpinner } from "../components/Ui/LoadingSpinner";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const Home = () => {
  const sort: string = useSelector((state: StoreState) => state.news.sort);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const prepareParams = (): string => {
    return "&order-by=" + sort;
  };
  const { data, loading } = useFetch(API_URL + prepareParams());
  const { data: dataCategory, loading: loadingCategory } = useFetch(
    API_URL + prepareParams() + "&section=football"
  );
  const simpleGrid = width < 768;

  let headingNews: NewsType[] | [] = [],
    headingList: NewsType[] | [] = [];
  if (simpleGrid) {
    headingNews = [...data];
  } else {
    headingNews = [...data].splice(0, 5);
    headingList = [...data].splice(5, 3);
  }
  useEffect(() => {
    dispatch(setNews(data));
  }, [data, dispatch]);

  const content =
    loading && loadingCategory ? (
      <LoadingSpinner />
    ) : (
      <div>
        <div className={styles.list}>
          {headingNews.map((news: NewsType, index) => (
            <SingleNews
              key={news.id}
              news={news}
              image={simpleGrid || index < 3}
              showContent={simpleGrid || index < 1}
              heading={simpleGrid || index === 0}
            />
          ))}
        </div>
        <NewsList news={headingList} showContent={true} />
        <NewsList
          headerText="Football"
          news={[...dataCategory].splice(0, 3)}
          showContent={false}
        />
      </div>
    );

  return (
    <div className={styles.container}>
      <PageHeader />
      {content}
    </div>
  );
};
