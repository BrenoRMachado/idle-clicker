import ResourceDisplay from "../ResourceDisplay/ResourceDisplay";
import styles from "./ResourcesContainer.module.css";

export default function ResourcesContainer() {
  return (
    <section className={styles.container}>
      <div className={styles.group}>
        <ResourceDisplay name="Madeira" icon="🌳" amount={0} />
      </div>
    </section>
  );
}