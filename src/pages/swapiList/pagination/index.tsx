import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { IPagination } from "./types";

export default function Pagination({ totalItems, pageSelected }: IPagination) {
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (page) pageSelected(page);

    if (totalItems) {
      setTotalPages(Math.ceil(totalItems / 10));
    }
  }, [page, totalItems]);

  return (
    <div className={styles.pagination}>
      <span className={styles.pagination__total}>Total: {totalItems}</span>

      <div className={styles.pagination__buttons}>
        {Array.from({ length: totalPages }, (_, index) => (
          <a
            key={index}
            className={`${styles.pagination__button} ${
              page === index + 1 ? styles.pagination__button__selected : ""
            }`}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
}
