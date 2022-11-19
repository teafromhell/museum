import React from 'react'
import mockup_news from '../mockup_news'
import styles from '../styles/Feed.module.scss'
import News from '../types/data'

interface Post extends News { }

function NewsFeed() {
    return (
        <section className={styles.wrapper}>

            <div className={styles.grid}>
                {mockup_news.filter((item: Post) => item.id === 1)
                    .map((item: Post) => {
                        return (
                            <div className={`${styles.post} ${styles.first_post}`}
                                key={item.id}>
                                <img
                                    className={styles.post_img}
                                    src={item.img}
                                    alt={JSON.stringify(item.img)}
                                />
                                <p className={styles.post_title}>{item.title}</p>
                                <p className={styles.post_date}>{item.date}</p>
                            </div>
                        )
                    })}
                {mockup_news.slice(1).map((item: Post) => {
                    return (
                        <div className={styles.post}
                            key={item.id}>
                            <p className={styles.post_title}>{item.title}</p>
                            <p className={styles.post_date}>{item.date}</p>
                        </div>
                    )
                })}
            </div>
            <button className={styles.news_btn}>Все новости</button>
        </section>
    )
}

export default NewsFeed
