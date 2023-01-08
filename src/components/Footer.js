import React from 'react';
import styles from './css/Footer.module.css';
import logo from "../assets/logo.svg";
import footerRightGraphics from '../assets/footerRightGraphics.svg';
import {Icons} from "../utilities/Icons";
import Button from "../utilities/Button";

function Footer(props)
{
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_content_container}>

                <div className={styles.footer_left_graphics}>{Icons.footerLeftGraphics}</div>

                <div className={styles.footer_centre_graphics}>{Icons.footerCentreGraphics}</div>

                <div className={styles.footer_content}>
                    <div className={styles.logo}>
                        <img src={logo} alt="Paws logo" /> Paws
                    </div>

                    <div className={styles.footer_info_container}>
                        <div className={styles.info_object}>
                            <span>About us</span>
                            <div className={styles.info}>
                                <a>Team</a>
                                <a>Partnership</a>
                                <a>Terms of Service</a>
                                <a>Mobile App</a>
                                <a>Press</a>
                            </div>
                        </div>

                        <div className={styles.info_object}>
                            <span>Pet Adoption</span>
                            <div className={styles.info}>
                                <a>Dog Adoption</a>
                                <a>Cat Adoption</a>
                                <a>Bird Adoption</a>
                                <a>Other Pets Adoption</a>
                                <a>Adoption Process</a>
                                <a>FAQs</a>
                            </div>
                        </div>

                        <div className={styles.info_object}>
                            <span>Social Media</span>
                            <div className={`${styles.info} ${styles.social_media}`}>
                                <a>{Icons.fb}Facebook</a>
                                <a>{Icons.twitter}Twitter</a>
                                <a>{Icons.instagram}Instagram</a>
                                <a>{Icons.linkedin}Linkedin</a>
                            </div>
                        </div>

                        <div className={styles.info_object}>
                            <span>Have a question?</span>
                            <form className={`${styles.info} ${styles.form}`}>
                                <label>
                                    Email
                                    <input type="email" required={true} />
                                </label>
                                <label>
                                    Message
                                    <textarea required={true} />
                                </label>
                                <Button icon="rightArrow">Send</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer_right_graphics}><img src={footerRightGraphics} /></div>
        </div>
    );
}

export default Footer;