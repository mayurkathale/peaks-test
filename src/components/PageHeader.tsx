import { BookmarkButton } from "./Ui/BookmarkButton";
import { SortDropDown } from "./Ui/SortDropDown";
import styles from "./PageHeader.module.scss";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";

type Props = {
  title?: string;
  hideBtn?: boolean;
};

export const PageHeader = ({ title, hideBtn }: Props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <div className={styles.pageHeading}>
          {title ? title : "Top Stories"}
        </div>
        <div className={styles.headerRight}>
          {!hideBtn && (
            <BookmarkButton
              handleClick={() =>
                navigate(generatePath(ROUTES.bookmark, { type: "bookmark" }))
              }
            />
          )}
          <SortDropDown />
        </div>
      </div>
    </div>
  );
};
