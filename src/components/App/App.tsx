import { Resources } from "../../types";
import ActionsContainer from "../ActionsContainer/ActionsContainer";
import Header from "../Header/Header";
import ResourcesContainer from "../ResourcesContainer/ResourcesContainer";
import styles from "./App.module.css"


export default function App() {

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
    <article className= {styles.container}>
      <Header />
      <ResourcesContainer resources={resources} />
      <ActionsContainer />
      
    </article>
  );
}