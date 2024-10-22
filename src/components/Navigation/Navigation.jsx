import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import Container from "../Container/Container";

export const Navigation = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <nav>
            <ul className={styles.nav}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};
