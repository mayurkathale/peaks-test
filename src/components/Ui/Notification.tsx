import React, { useEffect } from "react";
import styles from "./Notification.module.scss";

type Props = {
  message: string;
  type?: string;
  handleClear: () => void;
};
export const Notification = React.memo(
  ({ message, type, handleClear }: Props) => {
    useEffect(() => {
      setTimeout(() => {
        if (message && message !== "") handleClear();
      }, 2000);
    });

    if (!message || message === "") return null;

    return (
      <div
        className={type && type === "success" ? styles.success : styles.error}
      >
        {message}
      </div>
    );
  }
);
