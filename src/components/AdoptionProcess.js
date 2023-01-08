import React from 'react';
import styles from './css/adoptionProcess.module.css'
import {SVGComponents} from "../utilities/SVGComponents";

function AdoptionProcess()
{
    return (
        <div className={styles.adoptionProcess_container}>
            <div className={styles.adoptionProcess_steps}>
                <div className={styles.adoptionProcess_step}>
                    {SVGComponents.adoptionProcessStep1}
                    <span>Find your pet</span>
                </div>
                <div className={styles.adoptionProcess_step}>
                    {SVGComponents.adoptionProcessStep2}
                    <span>Apply for adoption</span>
                </div>
                <div className={styles.adoptionProcess_step}>
                    {SVGComponents.adoptionProcessStep3}
                    <span>Schedule a meeting</span>
                </div>
                <div className={styles.adoptionProcess_step}>
                    {SVGComponents.adoptionProcessStep4}
                    <span>Complete the adoption</span>
                </div>
                <div className={styles.adoptionProcess_step}>
                    {SVGComponents.adoptionProcessStep5}
                    <span>Take your best friend home</span>
                </div>
            </div>
        </div>
    );
}

export default AdoptionProcess;