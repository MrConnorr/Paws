import React from 'react';
import styles from './css/Button.module.css';
import {Icons} from "./Icons";

function Button(props)
{
    const {background, icon, iconLeft, size} = props;

    const btnStyle = background !== undefined ? background : "primary-background";
    const btnSize = size !== undefined ? size : "small";

    return (
        <a className={`${styles.button} ${styles[btnStyle]} ${styles[btnSize]}`}>
            <div className={styles.buttonIcon} style={{order: iconLeft ? 1 : 2}}>{Icons[icon]}</div>
            <div style={{order: iconLeft ? 2 : 1}}>{props.children}</div>
        </a>
    );
}

export default Button;