import React from 'react';
import styles from './css/PetCard.module.css';
import {Icons} from "./Icons";
import {SVGComponents} from "./SVGComponents";

function PetCard(props)
{
    const {id, name, gender, age, breed, image} = props;

    return (
        <div className={styles.pet_card}>
            <img src={image} />
            <div className={styles.pet_info}>
                <div className={styles.pet_title}>
                    <b>{name}</b>
                    <div className={styles.gender_info}>
                        <div style={{color: gender === "Male" ? "var(--primary)" : "var(--secondary)"}}>{Icons.genderHeart}</div> {gender}
                    </div>
                </div>

                {SVGComponents.petCardUnderline}

                <div className={styles.pet_description}>
                    {age} {SVGComponents.petCardDot} {breed}
                </div>

                <div className={styles.pet_details_btn}>
                    {Icons.arrowButton}
                </div>

            </div>
        </div>
    );
}

export default PetCard;