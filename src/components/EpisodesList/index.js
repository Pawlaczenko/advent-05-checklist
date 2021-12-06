import React, { useState, useEffect } from 'react'
import Episode from '../Episode';
import styles from './_EpisodesList.module.scss';

const EpisodesList = ({ header, episodes }) => {
    const [shiftFlag, setShiftFlag] = useState(false);
    const [checkedBoxes, setCheckedBoxes] = useState([]);

    useEffect(() => {

        const setFlag = (key, value) => {
            if (key === "Shift") setShiftFlag(value);
        }

        document.addEventListener("keydown", (e) => { setFlag(e.key, true) });
        document.addEventListener("keyup", (e) => { setFlag(e.key, false) });
    });

    useEffect(() => {
        document.title = `Episodes checked: ${checkedBoxes.length}`;
    }, [checkedBoxes]);

    const checkBetween = (list, id) => {
        let firstAbove = (list.length > 0) ? Math.max(...list.filter(el => el < id)) : 0;
        for (let i = firstAbove + 1; i < id; i++) {
            list.push(i);
        }
        return list;
    }

    const handleCheck = (value, id) => {
        let copy = [...checkedBoxes];
        if (value) {
            if (shiftFlag) copy = checkBetween(copy, id);
            copy.push(id);
        } else {
            copy = copy.filter(el => el !== id);
        }
        setCheckedBoxes(copy);
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>{header}</h1>
            <ul className={styles.list}>
                {
                    episodes.map(episode => {
                        let isChecked = checkedBoxes.some(el => el === episode.id);
                        return <Episode handleCheck={handleCheck} key={episode.id} id={episode.id} title={episode.name} isChecked={isChecked} />
                    })
                }
            </ul>
        </div>
    )
}

export default EpisodesList
