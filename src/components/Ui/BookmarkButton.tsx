import btnOn from "../../assets/images/bookmarkon-icon@2x.svg";
//import btnOff from '../../assets/images/bookmarkoff-icon@2x.svg';
import styles from "./BookmarkButton.module.scss";

type Props = {
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  title?: string;
  icon?: string;
};

export const BookmarkButton = ({ handleClick, title, icon }: Props) => {
  return (
    <div className={styles.btn} onClick={handleClick}>
      <img src={icon ? icon : btnOn} alt="Bookmark Icon" />
      <span>{title ? title : "View Bookmark"}</span>
    </div>
  );
};
