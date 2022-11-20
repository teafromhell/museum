import React from 'react'
import styles from '../styles/MainNews.module.scss'
import news from '../mockup_news'
import News from '../types/data'

interface MainPost extends News { }

function MainNews() {
    return (
        <div className={styles.wrapper}>
            <h4 className={styles.title}>Главные новости</h4>
            <div>
                {news.filter(item => item.id < 6)
                    .map((item: MainPost) => {
                        return (
                            <div className={styles.post}
                                key={item.id}>
                                <p className={styles.post_title}>{item.title}</p>

                                <img
                                    className={styles.post_img}
                                    src={item.img}
                                    alt={JSON.stringify(item.img)} />

                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default MainNews
