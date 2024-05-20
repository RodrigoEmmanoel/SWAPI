import styles from "./index.module.css";
import SvgSearch from "../svgImages/svgSearch";
import SvgClose from "../svgImages/svgClose";
import { useEffect, useState } from "react";

interface InputTextProps {
  onValueChange: (value: string) => void;
  id?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function InputText({
  onValueChange,
  id,
  onKeyDown,
}: InputTextProps) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    onValueChange(search);
  }, [search, onValueChange]);

  return (
    <div className={styles.text}>
      <SvgSearch />
      <label className={styles.text_label} htmlFor={id}>
        Pesquisar pelo nome
      </label>
      <input
        onKeyDown={onKeyDown}
        id={id}
        className={styles.text_input}
        type="text"
        placeholder="Pesquisar pelo nome"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Pesquisar pelo nome"
      />
      {search && (
        <button className={styles.text_clear} onClick={() => setSearch("")}>
          <SvgClose />
        </button>
      )}
    </div>
  );
}
