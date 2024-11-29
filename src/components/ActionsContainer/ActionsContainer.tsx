import { Actions, ResourceType } from "../../types";
import ActionButton from "../ActionButton/ActionButton";
import styles from "./ActionsContainer.module.css";

export default function ActionsContainer() {

  const actions: Actions = {
    chopWood: {
      name: "Cortar Madeira",
      icon: "🪓",
      trades: [{ resourceType: ResourceType.wood, amount: +1 }],
    },
    sellWood: {
      name: "Vender Madeira",
      icon: "💰",
      trades: [
        { resourceType: ResourceType.wood, amount: -1 },
        { resourceType: ResourceType.coin, amount: +1 },
      ],
    },
  };



  return (
    <section className={styles.container}>
      <div className={styles.group}>
        <ActionButton action={actions.chopWood} />
        <ActionButton action={actions.sellWood} />
      </div>
    </section>
  );
}