import React from "react";
import styles from "./styles.module.css";
interface RubixProps {
  // Add any props you need for your Rubix component
}

const Rubix: React.FC<RubixProps> = (
  {
    /* Destructure props here */
  }
) => {
  // Add your component logic and JSX here

  return (
    <div className={`${styles["container"]}`}>
      <div className={`o ${styles["side"]} ${styles["side-1"]}`}>1</div>
      <div className={`${styles["side"]} ${styles["side-2"]}`}>2</div>
      <div className={`o ${styles["side"]} ${styles["side-3"]}`}>3</div>
      <div className={`${styles["side"]} ${styles["side-4"]}`}>4</div>
      <div className={`${styles["side"]} ${styles["side-5"]}`}>5</div>
      <div className={`${styles["side"]} ${styles["side-6"]}`}>6</div>
    </div>
  );
};

export default Rubix;
