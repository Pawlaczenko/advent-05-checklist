import React from 'react'
import styles from './_Episode.module.scss';

const Episode = ({ id, title, handleCheck, isChecked }) => {
    const name = `${id} || ${title}`;
    const divID = `episode-${id}`;
    return (
        <li className={styles.listElement}>
            <label htmlFor={divID} className={styles.label}>
                <input onChange={e => { handleCheck(e.target.checked, id) }} className={styles.input} type="checkbox" name="episode" value={id} id={divID} checked={isChecked} />
                <div className={styles.customCheckbox}></div>
                <p className={styles.title}>{name}</p>
            </label>
        </li>
    )
}

export default Episode
