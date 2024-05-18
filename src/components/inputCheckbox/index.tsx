import { useEffect, useState } from "react";
import styles from "./index.module.css";

interface InputCheckboxProps {
  id?: string;
  label: string;
  onValueChange: (value: boolean) => void;
}

export default function InputCheckbox({
  id,
  label,
  onValueChange,
}: InputCheckboxProps) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    onValueChange(checked);
  }, [checked]);

  return (
    <div className={styles.checkbox}>
      <label className={styles.container} htmlFor={id}>
        {label}
        <input id={id} type="checkbox" onChange={() => setChecked(!checked)} />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
}
