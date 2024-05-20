import styles from "./index.module.css";
import Filter from "./filter";
import List from "./list";
import { useState } from "react";
import store from "../../stores/store";
import Pagination from "./pagination";

import ModalError from "../../components/modal/alertError";

function SwapiList() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(false);
  const { swapiList } = store.swapiResponse();
  const { page, setPage } = store.statePageSwapi();
  const { isModalOpen, closeModal } = store.openModalSwapiError();

  return (
    <div className={styles.swapi}>
      <div className="background"></div>
      <div className={styles.swapi__card}>
        <Filter
          onSearchChange={(e) => setSearch(e)}
          onFavoritesChange={(e) => setFavorites(e)}
        />

        <List
          listSearch={search}
          onlyFavorites={favorites}
          pageSelected={page}
        />

        {!favorites && swapiList.count !== 0 && (
          <Pagination
            totalItems={swapiList.count}
            pageSelected={(e) => {
              setPage(e);
            }}
          />
        )}
      </div>

      <ModalError
        isOpen={isModalOpen}
        onClose={() => closeModal()}
        title="Oops!"
        message="Ocorreu um erro. Por favor, tente novamente mais tarde."
      />
    </div>
  );
}

export default SwapiList;
