import React, { FC } from "react";
import styles from "./mainContainer.module.css";
export const MainContainer: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles.container}>{children}</div>;
};
