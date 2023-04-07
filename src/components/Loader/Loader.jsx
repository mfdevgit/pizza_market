import React from 'react'
import { BarLoader } from 'react-spinners'
import styles from './styles.module.scss'

export default function Loader() {
    const override = { width: '200px' }
    return (
        <span className={styles.loader}>
            <BarLoader cssOverride={override} />
        </span>
    )
}
