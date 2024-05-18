import styles from "./index.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import store from "../../../stores/store";
import {
  formatGenderToPtBr,
  formatHeight,
  getInitials,
} from "../../../../utils/filters";
import { Result, IPropsList } from "./types";

import SvgEmptyState from "../../../components/svgImages/svgEmptyState";
import SvgStar from "../../../components/svgImages/svgStar";

export default function List({ listSearch, onlyFavorites }: IPropsList) {
  const [loading, setLoading] = useState<boolean>(true);
  const { swapiList, setSwapiList } = store.swapiResponse();
  const { favorites, addFavorite, removeFavorite } = store.listFavorites();

  const toggleFavorite = (result: Result) => {
    if (result.favorite) {
      removeFavorite(result);
    } else {
      const newResult = { ...result, favorite: true };
      addFavorite(newResult);
    }

    setSwapiList({
      ...swapiList,
      results: swapiList.results.map((r) => {
        if (r.name === result.name) {
          return { ...r, favorite: !r.favorite };
        }
        return r;
      }),
    });
  };

  function getSwapiList(params?: string) {
    setLoading(true);

    let url = "https://swapi.dev/api/people";

    if (params) {
      url = "https://swapi.dev/api/people" + params;
    }

    axios
      .get(url)
      .then((response) => {
        const results = response.data.results.map((result: Result) => {
          return { ...result, favorite: false };
        });

        results.forEach((result: Result) => {
          const favorite = favorites.find((f) => f.name === result.name);
          if (favorite) {
            result.favorite = true;
          }
        });

        setSwapiList({
          requested: true,
          count: response.data.count,
          next: response.data.next,
          previous: response.data.previous,
          results,
        });

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    getSwapiList(listSearch ? `?search=${listSearch}` : "");
  }, [listSearch]);

  useEffect(() => {
    if (swapiList.requested) return;
    getSwapiList();
  }, []);

  return (
    <div className={styles.swapi__list}>
      <table className={styles.swapi__list_table}>
        <thead className={styles.swapi__list_thead}>
          <tr className={styles.swapi__list_thead_tr}>
            <th className={styles.swapi__list_thead_th}>NOME</th>
            <th className={styles.swapi__list_thead_th}>ALTURA</th>
            <th className={styles.swapi__list_thead_th_favorite}>
              <div>
                <SvgStar />
              </div>
            </th>
          </tr>
          <tr className={styles.swapi__list_thead_tr_space} />
        </thead>
        {!loading && swapiList.results.length !== 0 && (
          <tbody className={styles.swapi__list_tbody}>
            {!onlyFavorites
              ? swapiList.results.map((result) => (
                  <tr key={result.name} className={styles.swapi__list_tbody_tr}>
                    <td className={styles.swapi__list_tbody_td}>
                      <div className={styles.swapi__list_tbody_td_user}>
                        <div className={styles.swapi__list_tbody_td_photo}>
                          {getInitials(result.name)}
                        </div>
                        <div className={styles.swapi__list_tbody_td_info}>
                          <span className={styles.swapi__list_tbody_td_text}>
                            {result.name}
                          </span>
                          <span
                            className={styles.swapi__list_tbody_td_info_gender}
                          >
                            {formatGenderToPtBr(result.gender)}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className={styles.swapi__list_tbody_td}>
                      <span className={styles.swapi__list_tbody_td_text}>
                        {formatHeight(result.height)}
                      </span>
                    </td>
                    <td className={styles.swapi__list_tbody_td_favorite}>
                      <div>
                        <button onClick={() => toggleFavorite(result)}>
                          <SvgStar filled={result.favorite} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              : favorites
                  .filter((f) =>
                    f.name.toLowerCase().includes(listSearch.toLowerCase()),
                  )
                  .map((result) => (
                    <tr
                      key={result.name}
                      className={styles.swapi__list_tbody_tr}
                    >
                      <td className={styles.swapi__list_tbody_td}>
                        <div className={styles.swapi__list_tbody_td_user}>
                          <div className={styles.swapi__list_tbody_td_photo}>
                            {getInitials(result.name)}
                          </div>
                          <div className={styles.swapi__list_tbody_td_info}>
                            <span className={styles.swapi__list_tbody_td_text}>
                              {result.name}
                            </span>
                            <span
                              className={
                                styles.swapi__list_tbody_td_info_gender
                              }
                            >
                              {formatGenderToPtBr(result.gender)}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className={styles.swapi__list_tbody_td}>
                        <span className={styles.swapi__list_tbody_td_text}>
                          {formatHeight(result.height)}
                        </span>
                      </td>
                      <td className={styles.swapi__list_tbody_td_favorite}>
                        <div>
                          <button onClick={() => toggleFavorite(result)}>
                            <SvgStar filled={result.favorite} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
          </tbody>
        )}
      </table>

      {loading && (
        <div className={styles.swapi__list_loading}>
          <span />
        </div>
      )}

      {!loading && swapiList.results.length === 0 && (
        <div className={styles.swapi__list_empty}>
          <SvgEmptyState />
          <span>Nenhum usuário encontrado</span>
        </div>
      )}
    </div>
  );
}
