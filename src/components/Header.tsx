import React from 'react'
import styles from '../styles/Header.module.scss'
import { BiEnvelope } from 'react-icons/bi'
import { BsGeoAlt, BsTelephoneInbound } from 'react-icons/bs'

function Header() {
    return (
        <header className={styles.wrapper}>
            <h3 className={styles.logo}>Орловский Музей И.С.Тургенева</h3>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li><BsTelephoneInbound /><p>+7 (4862) 76-15-00</p></li>
                    <li><BsGeoAlt /><p> Орел, ул. 7 Ноября, 20</p></li>
                    <li><BiEnvelope /><p> buk_mt@orel-region.ru</p></li>
                </ul>
            </nav>
            <div className={styles.search}>
                <input type="text" placeholder='Поиск' />
            </div>
        </header>
    )
}

export default Header
