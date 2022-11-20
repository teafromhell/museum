import React from 'react'
import Carousel from './Carousel'
import styles from '../../styles/CarouselWrapper.module.scss'

function CarouselWrapper() {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Популярное</h3>
            <Carousel />
        </div>
    )
}

export default CarouselWrapper
