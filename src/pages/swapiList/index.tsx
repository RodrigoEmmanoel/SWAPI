import styles from "./index.module.css";
import Filter from "./filter";
import List from "./list";
import { useState } from "react";

function SwapiList() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(false);

  return (
    <div className={styles.swapi}>
      <div className={styles.swapi__card}>
        <Filter
          onSearchChange={(e) => setSearch(e)}
          onFavoritesChange={(e) => setFavorites(e)}
        />
        <List listSearch={search} onlyFavorites={favorites} />
      </div>
    </div>
  );
}

export default SwapiList;
