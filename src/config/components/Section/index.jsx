import styles from "./styles.module.css";

const Section = ({
  children,
  className,
  padding = "0px",
  maxWidth = "1280px",
  style = {},
}) => {
  return (
    <div
      className={`${styles.Section}${className ? ` ${className}` : ""}`}
      style={{
        ...style,
        paddingTop: padding,
        paddingBottom: padding,
      }}
    >
      <div className={styles.inner} style={{ maxWidth }}>
        {children}
      </div>
    </div>
  );
};

export default Section;
