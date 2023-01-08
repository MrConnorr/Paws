import React, {useEffect} from 'react';
import styles from './css/mainPage.module.css';
import {Icons} from "../utilities/Icons";
import PetsCards from "./PetsCards";
import AdoptionProcess from "./AdoptionProcess";
import PetsNearYou from "./PetsNearYou";

function MainPage(props)
{
    const {setActiveNavEl, token} = props;

    useEffect(() =>
    {
        setActiveNavEl("home");
    }, []);

    return (
        <div className={styles.mainPage_container}>
            <div className="container">
                <PetsCards />
                <AdoptionProcess />
            </div>
            <PetsNearYou token={token} />
        </div>
    );
}

export default MainPage;