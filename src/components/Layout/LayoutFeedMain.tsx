import React from 'react'
import styles from '../../styles/LayoutFeedMain.module.scss'
import MainNews from '../MainNews'
import Feed from '../Feed'

function FeedAndMain() {
    return (
        <main className={styles.wrapper}>
            <Feed />
            <MainNews />
        </main>
    )
}

export default FeedAndMain
