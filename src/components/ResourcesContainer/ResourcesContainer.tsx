import { Resources } from "../../types";
import ResourceDisplay from "../ResourceDisplay/ResourceDisplay";
import styles from "./ResourcesContainer.module.css";

export default function ResourcesContainer() {

  const resources: Resources = {
    wood: {
      name: "Madeira",
      icon: "🌳",
      amount: 0,
    },
    coin: {
      name: "Moeda",
      icon: "🪙",
      amount: 0,
    },
  };

  return (
    <section className={styles.container}>
      <div className={styles.group}>
        <ResourceDisplay resource={resources.wood} />
        <ResourceDisplay resource={resources.coin} />
      </div>
    </section>
  );
}