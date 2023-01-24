import { BookmarkButton } from "../components/Ui/BookmarkButton";
import styles from "./NewsDetail.module.scss";
import { StoreState, NewsType } from "../types";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "../store/actions/newsActions";
import btnOn from "../assets/images/bookmarkon-icon@2x.svg";
import btnOff from "../assets/images/bookmarkoff-icon@2x.svg";
import useFetch from "../hooks/useFetch";
import { API_URL } from "../constants";
import { LoadingSpinner } from "../components/Ui/LoadingSpinner";
import Moment from "react-moment";
import { Notification } from "../components/Ui/Notification";
import React, { useState } from "react";

export const NewsDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<string>("success");
  const bookmarkedNews = useSelector(
    (state: StoreState) => state.news.bookmarked
  );

  const { data, loading } = useFetch(API_URL + "&ids=" + id);
  const singleNews: NewsType | null = data.length ? data[0] : null;
  const getButtonTitle = (id: string): string => {
    if (bookmarkedNews.includes(id)) {
      return "Remove Bookmark";
    }
    return "Add Bookmark";
  };

  const getButtonIcon = (id: string): string => {
    if (bookmarkedNews.includes(id)) {
      return btnOff;
    }
    return btnOn;
  };

  const handleClear = React.useCallback(() => setMessage(""), []);

  if (!id) return null;

  const handleOnClickBookmark = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!bookmarkedNews.includes(id)) {
      dispatch(addBookmark(id));
      setMessage("Saved to Bookmarks");
      setType("success");
    } else {
      dispatch(removeBookmark(id));
      setMessage("Removed from Bookmarks");
      setType("error");
    }
  };

  const content = loading ? (
    <LoadingSpinner />
  ) : !loading && !singleNews ? (
    <div>Invalid Id</div>
  ) : (
    <div className={styles.contentGrid}>
      <div>
        <div className={styles.date}>
          {
            <Moment format="ddd DD MMM YYYY HH.MM">
              {singleNews?.fields.lastModified}
            </Moment>
          }{" "}
          BST
        </div>
        <div className={styles.headline}>{singleNews?.fields.headline}</div>
        <div className={styles.subheadline}>{singleNews?.fields.trailText}</div>
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: singleNews?.fields.body || "" }}
      ></div>
      {singleNews?.fields.thumbnail && (
        <div className={styles.image}>
          <img src={singleNews?.fields.thumbnail} alt="content" />
          <div className={styles.imgText}>{singleNews?.fields.byline}</div>
        </div>
      )}
    </div>
  );

  return (
    <div className={styles.notificationBox}>
      <Notification message={message} type={type} handleClear={handleClear} />
      <div className={styles.container}>
        <BookmarkButton
          handleClick={handleOnClickBookmark}
          title={getButtonTitle(id)}
          icon={getButtonIcon(id)}
        />
        {content}
      </div>
    </div>
  );
};
