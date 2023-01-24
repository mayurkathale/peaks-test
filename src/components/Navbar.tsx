import logoImg from "../assets/images/Logo_White.png";
import { Search } from "./Search";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/">
          <img className={styles.logo} src={logoImg} alt="Peaks Logo" />
        </Link>
        <div className={styles.searchContainer}>
          <Search />
        </div>
      </div>
    </div>
  );
};
