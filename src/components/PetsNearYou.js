import React, {useEffect, useState} from 'react';
import styles from './css/petsNearYou.module.css';
import PetCard from "../utilities/PetCard";
import {SVGComponents} from "../utilities/SVGComponents";
import {Icons} from "../utilities/Icons";

function PetsNearYou(props)
{
    const {token} = props;
    const [pets, setPets] = useState([]);
    const [countOfPets, setCountOfPets] = useState("");

    console.log(token);

    useEffect(() =>
    {
        if(token !== "")
        {
            fetch("https://api.petfinder.com/v2/animals?location=H3L",
                {
                    headers:
                        {
                            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJHeEx6cXVMUjVvQldOU2JqbjhuZkdzRzByRXllSnhVc3lsVlhOaGhZck51YTl2VGdqNyIsImp0aSI6Ijc0NWM0ZjQ0ZWQ0ZGVjNGZiYWFiMjdhMmY0NDU5YWU2NTVjZTVkODY1ODBkM2QzNmM3MzU3NzVmNmFjMjMxMGI3MTQ5ZGY3NDFhOWEzY2U0IiwiaWF0IjoxNjcyMjQ2MDAwLCJuYmYiOjE2NzIyNDYwMDAsImV4cCI6MTY3MjI0OTYwMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.qORs8Vr89bAxuir67VToXzBwD4QDctFA7_tKUr9O5Jq5um9rCssLizcStp3t0wof-SSLjJUeI7bTzmfOxMTh1wSLH6y5jmDYV8giPHLgAqg-FhNlyxhpm5vo6zKDRRUS-DmDkh9xZ2OOQmdB8pZ4Ak8kJbFcoTKA_XIwLbDa0LCOEAs9O-yC98XqoS80iTAf8hSYb82cawUwLHwR59_yKsvEpYKTDUTQcDF6gVWpoyBr12CkNm1ksoIL04YDGsH2FNABuvpPBHbvuYdiWpTIf3WEi8ZmSorP1GA81U5IcZN933bCZbqjmO_KZYgZu8u3z7VBKhZKK0073K3H6cEFfQ"
                        }
                })
                .then(req => req.json())
                .then(data =>
                    {
                        setPets(data.animals);
                        setCountOfPets(data.pagination.total_count);
                    })
                .catch(err => console.error(err));
        }
    }, [token]);

    return (
        <div className={styles.petsNearYou_container}>
            <div className={styles.petsNearYou_content + " container"}>
                <h1>Pets near you</h1>

                <div className={styles.pets_cards}>
                    {pets.slice(0, 3).map(pet =>
                        <PetCard key={pet.id} id={pet.id} name={pet.name} age={pet.age} breed={pet.breeds.primary} gender={pet.gender} image={pet.primary_photo_cropped !== null ? pet.primary_photo_cropped.large : ""} />
                    )}

                    <div className={styles.more_pets_card}>
                        <div className={styles.more_pets_top}>
                            <div className={styles.left_arm}>
                                {SVGComponents.petCardLeftArm}
                            </div>
                            <div className={styles.right_arm}>
                                {SVGComponents.petCardRightArm}
                            </div>
                        </div>

                        <div className={styles.more_pets_center}>
                            {SVGComponents.petCardPalm}
                        </div>

                        <div className={styles.more_pets_bottom}>
                            <b>{countOfPets} more pets are waiting for you</b>

                            <div className={styles.more_pets_btn}>
                                {Icons.arrowButton}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default PetsNearYou;