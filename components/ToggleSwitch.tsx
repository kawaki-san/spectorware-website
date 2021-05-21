import { Dispatch, SetStateAction } from "react";
import styles from "../styles/ToggleSwitch.module.css";
interface Prop {
  checked: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
  option_labels: string[];
  id: string;
}

function ToggleSwitch(props: Prop) {
  return (
    <div>
      <label className={styles["switch"]}>
        <input
          type="checkbox"
          id={props.id}
          checked={props.checked}
          onChange={(e) => props.onChange(e.target.checked)}
        />
        <div className={styles.slider + " " + styles.round}>
          <span className={styles["on"]}>{props.option_labels[0]}</span>
          <span className={styles["off"]}>{props.option_labels[1]}</span>
        </div>
      </label>
    </div>
  );
}

ToggleSwitch.defaultProps = {
  option_labels: ["Yes", "No"],
};

export default ToggleSwitch;
