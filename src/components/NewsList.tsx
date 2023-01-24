import { NewsType } from "../types";
import styles from "./NewsList.module.scss";
import { SingleNews } from "./SingleNews";

type Props = {
  headerText?: string;
  news: NewsType[] | [];
  showContent?: boolean 
};

export const NewsList = ({ headerText, news, showContent }: Props) => {
  return (
    <div className={styles.listContainer}>
      {headerText && <div className={styles.header}>{headerText}</div>}
      <div className={styles.list}>
        {news.map((news: NewsType) => (
          <SingleNews key={news.id} news={news} image={true} showContent={showContent} />
        ))}
      </div>
    </div>
  );
};
