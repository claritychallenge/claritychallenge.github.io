import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./TodoBanner.module.css";

export default function TodoBanner({ children }) {
  const { siteConfig } = useDocusaurusContext();

  if (!siteConfig.customFields?.showTodo) return null; // Ensure it exists

  return (
    <div className={styles.todoBanner}>
      <strong>TODO:</strong> {children}
    </div>
  );
}