import React from 'react';
import styles from './css/petCards.module.css';
import {Icons} from "../utilities/Icons";

function PetsCards(props)
{
    return (
        <div className={styles.card_container}>
            <div className={styles.card}>
                <div className={styles.card_icon}>{Icons.dog}</div>
                <span>Dogs</span>
            </div>

            <div className={styles.card}>
                <div className={styles.card_icon}>{Icons.cat}</div>
                <span>Cats</span>
            </div>

            <div className={styles.card}>
                <div className={styles.card_icon}>{Icons.bird}</div>
                <span>Birds</span>
            </div>

            <div className={styles.card}>
                <div className={styles.card_icon}>{Icons.rabbit}</div>
                <span>Other Animals</span>
            </div>
        </div>
    );
}

export default PetsCards;