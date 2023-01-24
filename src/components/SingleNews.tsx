import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";
import { NewsType } from "../types";
import styles from "./SingleNews.module.scss";
import { htmlToString } from "../utils";
import placeholderImg from "../assets/images/placeholder.png";

type Props = {
  news: NewsType;
  image?: boolean;
  showContent?: boolean;
  heading?: boolean;
};

export const SingleNews = ({ news, image, showContent, heading }: Props) => {
  const navigate = useNavigate();
  const bgimageStyle =
    image && news.fields.thumbnail
      ? {
          backgroundImage: `url('${news.fields.thumbnail}')`,
          paddingTop: "56.75%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "auto"
        }
      : {};
  const contentStyle: React.CSSProperties = image
    ? { background: "rgba(9, 53, 123, 0.9)" }
    : { background: "rgba(9, 53, 123)" };

  const styleHeading = !showContent
    ? styles.heading
    : heading
    ? styles.bigheading
    : styles.headingrows;

  return (
    <article
      className={styles.newsCard}
      style={bgimageStyle}
      onClick={() =>
        navigate(generatePath(ROUTES.news, { id: encodeURIComponent(news.id) }))
      }
    >
      {image && !news.fields.thumbnail && (
        <div className={styles.placeholder}>
          <img src={placeholderImg} alt={htmlToString(news.fields.headline)} />
        </div>
      )}
      <div className={styles.content} style={contentStyle}>
        <div className={styleHeading}>{htmlToString(news.fields.headline)}</div>
        {showContent && (
          <div className={styles.body}>
            {htmlToString(news.fields.trailText)}
          </div>
        )}
      </div>
    </article>
  );
};
