import React from 'react';
import styles from './css/navbar.module.css';
import logo from '../assets/logo.svg';
import {Icons} from "../utilities/Icons";

function Navbar(props)
{
    const {activeNavEl} = props;

    return (
        <div className={styles.navbar_container}>
            <div className={styles.navbar_content}>
                <div className={styles.logo}>
                    <img src={logo} alt="Paws logo" /> Paws
                </div>

                <div className={styles.main_menu}>
                    <ul>
                        <li>
                            <div style={{color: activeNavEl === "home" ? "#000" : null}} className={styles.navText}>Home</div>
                            <div style={{display: activeNavEl === "home" ? "flex" : null, color: activeNavEl === "home" ? "#000" : null}} className={styles.selected}>{Icons.selectedNavEl}</div>
                        </li>
                        <li>
                            <div style={{color: activeNavEl === "petSearch" ? "#000" : null}} className={styles.navText}>Pet search</div>
                            <div style={{display: activeNavEl === "petSearch" ? "flex" : null, color: activeNavEl === "petSearch" ? "#000" : null}} className={styles.selected}>{Icons.selectedNavEl}</div>
                        </li>
                        <li>
                            <div style={{color: activeNavEl === "adoption" ? "#000" : null}} className={styles.navText}>Adoption process</div>
                            <div style={{display: activeNavEl === "adoption" ? "flex" : null, color: activeNavEl === "adoption" ? "#000" : null}} className={styles.selected}>{Icons.selectedNavEl}</div>
                        </li>
                        <li>
                            <div style={{color: activeNavEl === "faq" ? "#000" : null}} className={styles.navText}>FAQ</div>
                            <div style={{display: activeNavEl === "faq" ? "flex" : null, color: activeNavEl === "faq" ? "#000" : null}} className={styles.selected}>{Icons.selectedNavEl}</div>
                        </li>
                        <li className={styles.search}>{Icons.searchIcon}</li>
                    </ul>
                </div>

                <div className={styles.auth_container}>
                    <a href="#">
                        <div style={{color: activeNavEl === "signup" ? "#000" : null}} className={styles.navText}>Sign up</div>
                        <div style={{display: activeNavEl === "signup" ? "flex" : null, color: activeNavEl === "signup" ? "#000" : null}} className={styles.selected}>{Icons.selectedNavEl}</div>
                    </a>
                    <a href="#">
                        <div style={{color: activeNavEl === "login" ? "#000" : null}} className={styles.navText}>Login</div>
                        <div style={{display: activeNavEl === "login" ? "flex" : null, color: activeNavEl === "login" ? "#000" : null}} className={styles.selected}>{Icons.selectedNavEl}</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;