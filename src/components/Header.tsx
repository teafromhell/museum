import React from 'react'
import styles from '../styles/Header.module.scss'


function Header() {
    return (
        <header className={styles.wrapper}>
            <h3 className={styles.logo}>Орловский Музей И.С.Тургенева</h3>

            <div className={styles.search}>
                <input type="text" placeholder='Поиск' />
            </div>
        </header>
    )
}

export default Header
