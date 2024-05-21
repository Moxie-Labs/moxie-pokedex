import style from "./badge.module.css";

const Badge = ({ children }) => {
  return <span className={style.badge}>{children}</span>;
};

export default Badge;
