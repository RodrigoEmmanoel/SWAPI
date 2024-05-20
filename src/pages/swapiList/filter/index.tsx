import InputCheckbox from "../../../components/inputCheckbox";
import InputText from "../../../components/inputText";
import styles from "./index.module.css";
import store from "../../../stores/store";
import { useState } from "react";
import { FilterProps } from "./types";

export default function Filter({
  onSearchChange,
  onFavoritesChange,
}: FilterProps) {
  const [search, setSearch] = useState("");
  const { setPage } = store.statePageSwapi();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearchChange(search);
    }
  };

  const handleSearchChange = (search: string) => {
    onSearchChange(search);
    setPage(1);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.search}>
        <InputText
          id="input-search"
          onValueChange={(e) => setSearch(e)}
          onKeyDown={handleKeyDown}
        />
        <button
          className={styles.filter_button}
          onClick={() => handleSearchChange(search)}
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
