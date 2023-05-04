import React from "react";
import styles from "./dropdown.module.scss";

interface IProps {
  items: {
    label: string;
    value: string;
  }[];
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const DropDown: React.FC<IProps> = (props) => {
  const { items, value, setValue } = props;

  return (
    <select
      className={styles.selectWrapper}
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
    >
      {items?.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
