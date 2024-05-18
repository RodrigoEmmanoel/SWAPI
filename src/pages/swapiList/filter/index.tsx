import { useState } from "react";
import InputCheckbox from "../../../components/inputCheckbox";
import InputText from "../../../components/inputText";
import styles from "./index.module.css";
import { FilterProps } from "./types";

export default function Filter({
  onSearchChange,
  onFavoritesChange,
}: FilterProps) {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.filter}>
      <div className={styles.search}>
        <InputText id="input-search" onValueChange={(e) => setSearch(e)} />
        <button
          className={styles.filter_button}
          onClick={() => onSearchChange(search)}
        >
          Pesquisar
        </button>
      </div>
      <InputCheckbox
        id="input-favorites"
        label="Favoritos"
        onValueChange={(e) => onFavoritesChange(e)}
      />
    </div>
  );
}
