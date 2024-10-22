import PropTypes from "prop-types";
import style from "./Section.module.css";

export const Section = ({ children }) => {
  return <section className={style.section}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
