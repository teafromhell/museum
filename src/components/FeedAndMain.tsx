import React from 'react'
import MainNews from './MainNews'
import NewsFeed from './Feed'
import styles from '../styles/FeedAndMain.module.scss'

function FeedAndMain() {
    return (
        <section className={styles.wrapper}>
            <NewsFeed />
            <MainNews />
        </section>
    )
}

export default FeedAndMain
