import React from 'react'
import styles from './styles.module.scss'

export default function Message({ msg }) {
    return <p className={styles.message}>{msg}</p>
}
