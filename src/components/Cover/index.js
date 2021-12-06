import React from 'react'
import styles from './_Cover.module.scss';

const Cover = ({ img }) => {
    return (
        <div className={styles.cover}>
            <img className={styles.image} src={img} alt="Podcast cover" />
        </div>
    )
}

export default Cover
