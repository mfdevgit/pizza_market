import React from 'react'
import { BarLoader } from 'react-spinners'
import styles from './styles.module.scss'

export default function Loader() {
    return (
        <span className={styles.loader}>
            <BarLoader cssOverride={{ width: '200px' }} />
        </span>
    )
}
