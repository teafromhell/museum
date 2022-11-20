import React from 'react'
import { BiEnvelope } from 'react-icons/bi'
import { BsGeoAlt, BsTelephoneInbound } from 'react-icons/bs'
import styles from '../styles/Footer.module.scss'

function Footer() {
    return (
        <footer className={styles.wrapper}>
            <ul className={styles.list}>
                <li><BsTelephoneInbound /><p>+7 (4862) 76-15-00</p></li>
                <li><BsGeoAlt /><p> Орел, ул. 7 Ноября, 20</p></li>
                <li><BiEnvelope /><p> buk_mt@orel-region.ru</p></li>
            </ul>
        </footer>
    )
}

export default Footer