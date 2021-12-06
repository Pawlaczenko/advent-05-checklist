import React from 'react'
import Episode from '../Episode';
import styles from './_EpisodesList.module.scss';

const EpisodesList = ({ header, episodes }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>{header}</h1>
            <ul className={styles.list}>
                {
                    episodes.map(episode => {
                        return <Episode key={episode.id} id={episode.id} title={episode.name} />
                    })
                }
            </ul>
        </div>
    )
}

export default EpisodesList
