import styles from "./index.module.css";
import SvgSearch from "../svgImages/svgSearch";
import SvgClose from "../svgImages/svgClose";
import { useEffect, useState } from "react";
import { InputTextProps } from "./type";

export default function InputText({
  label,
  placeholder,
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
        {label}
      </label>
      <input
        onKeyDown={onKeyDown}
        id={id}
        className={styles.text_input}
        type="text"
        placeholder={placeholder}
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
