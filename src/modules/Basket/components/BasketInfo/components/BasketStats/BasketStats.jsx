import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { formatData } from './helpers/formatData'
import styles from './styles.module.scss'

export default function BasketStats({ title, data }) {
    const formattedData = formatData(data)
    const [showTooltip, setShowTooltip] = useState(false)
    function handleMouseEnter() {
        setShowTooltip(true)
    }
    function handleMouseLeave() {
        setShowTooltip(false)
    }
    return (
        <div className={styles.basket_stats}>
            <strong>{title}</strong>
            {Array.isArray(formattedData) ? (
                <>
                    {/* при активном промокоде */}
                    <span className={styles.new} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        {formattedData[1]}
                    </span>
                    <span className={styles.old}>{formattedData[0]}</span>
                </>
            ) : (
                <span>{formattedData}</span>
            )}
            {showTooltip && ReactDOM.createPortal(<Tooltip />, document.querySelector(`.${styles.basket_stats}`))}
        </div>
    )
}

function Tooltip() {
    return <div className={styles.tooltip}>инфа о скидке</div>
}
