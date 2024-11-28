import styles from "./ResourceDisplay.module.css";

interface ResourceDisplayProps {
    name: string;
    icon: string;
    amount: number;
  }

export default function ResourceDisplay({
    name,
    icon,
    amount,
  }: ResourceDisplayProps) {
  return (
    <div className={styles.box}>
      <h1 className={styles.name}>{name}</h1>
      <span className={styles.icon}>{icon}</span>
      <p className={styles.amount}>{amount}</p>
    </div>
  );
}