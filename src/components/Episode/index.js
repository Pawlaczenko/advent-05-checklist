import React from 'react'
import styles from './_Episode.module.scss';

const Episode = ({ id, title }) => {
    const name = `${id} || ${title}`;
    const divID = `episode-${id}`;
    return (
        <li className={styles.listElement}>
            <label htmlFor={divID} className={styles.label}>
                <input className={styles.input} type="checkbox" name="episode" value={id} id={divID} />
                <div className={styles.customCheckbox}></div>
                <p className={styles.title}>{name}</p>
            </label>
        </li>
    )
}

export default Episode
