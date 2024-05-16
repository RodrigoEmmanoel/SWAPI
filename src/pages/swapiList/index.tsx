import styles from "./index.module.css";
import axios from "axios";
import { useEffect } from "react";
import store from "../../stores/store";

function SwapiList() {
  const { swapiList, setSwapiList } = store.swapiResponse();

  useEffect(() => {
    if (swapiList.requested) return;
    axios
      .get("https://swapi.dev/api/people?page=1")
      .then((response) => {
        setSwapiList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      {swapiList.results.map((result) => (
        <h1>{result.name}</h1>
      ))}
    </>
  );
}

export default SwapiList;
