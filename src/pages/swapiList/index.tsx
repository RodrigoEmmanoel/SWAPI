import styles from "./index.module.css";
import Filter from "./filter";
import List from "./list";

function SwapiList() {
  return (
    <div className={styles.swapi}>
      <div className={styles.swapi__card}>
        <Filter />
        <List />
      </div>
    </div>
  );
}

export default SwapiList;
