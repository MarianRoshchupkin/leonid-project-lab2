import React from 'react';
import styles from './content.module.css';
import {useSelector} from "react-redux";
import {IInitialState} from "../../store/reducer";
import {Card} from "../Card";
import LamborghiniImage from '../../assets/images/lamborghini.jpeg';
import {LoadButton} from "../LoadButton";

export function Content() {
  const amountOfCards = useSelector<IInitialState, number>(state => state.amount.amount);

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        {Array.from(Array(amountOfCards).keys()).map(() =>
          <Card
            image={LamborghiniImage}
            title="Lamborghini Huracán"
            desc="The Lamborghini Huracán is a sports car."
            link="https://auto.ru/cars/lamborghini/huracan/used/"
          />
        )}
      </div>
      <LoadButton />
    </div>
  );
}
