import { Action } from "../../types";
import styles from "./ActionButton.module.css";


interface ActionButtonProps {
 action: Action;
}

export default function ActionButton({ action }: ActionButtonProps) {
  
    const performTrade = () => {
        console.log(`Realizando a ação: ${action.name}`);
      };
  
    return (
    <div className={styles.box}>
      <p className={styles.name}>{action.name}</p>
      <button className={styles.button} onClick={performTrade}>
        <span className={styles.icon}>{action.icon}</span>
      </button>
    </div>
  );
}