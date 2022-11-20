import React from 'react'
import styles from '../../styles/LayoutFeedMain.module.scss'
import MainNews from '../MainNews'
import Feed from '../Feed'

function FeedAndMain() {
    return (
        <div className={styles.wrapper}>
            <Feed />
            <MainNews />
        </div>
    )
}

export default FeedAndMain
