import React, { useEffect, useRef, useState } from 'react'
import Loader from '../../components/Loader/Loader'
import data from './assets/data/data.json'
import styles from './styles.module.scss'

export default function QuestionsModule() {
    const [isLoading, setIsLoading] = useState(true)
    const questionRefs = useRef(Array(data.length).fill(null))
    const answerRefs = useRef(Array(data.length).fill(null))
    const handleToggleQuestion = index => {
        answerRefs.current[index].classList.toggle(styles.closed)
        questionRefs.current[index].classList.toggle(styles.open)
    }
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 800)
    }, [])

    return isLoading ? (
        <Loader />
    ) : (
        <div className={styles.questions}>
            {data.map((item, index) => (
                <div key={item.id}>
                    <div
                        ref={element => (questionRefs.current[index] = element)}
                        className={styles.header}
                        onClick={() => handleToggleQuestion(index)}
                    >
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
                            <path d='m36.16,5.46H13.84C4,5.46,1,8.46,1,18.3v13.39c0,9.84,3,12.84,12.84,12.84h22.32c9.84,0,12.84-3,12.84-12.84v-13.39c0-9.84-3-12.84-12.84-12.84Zm-6.14,22.22c0,5.4-2.52,7.92-7.92,7.92h-5.35c-5.4,0-7.92-2.52-7.92-7.92v-5.35c0-5.4,2.52-7.92,7.92-7.92h5.35c5.4,0,7.92,2.52,7.92,7.92v5.35Z' />
                        </svg>
                        <h3>{item.question}</h3>
                    </div>
                    <div
                        ref={element => (answerRefs.current[index] = element)}
                        className={`${styles.content} ${styles.closed}`}
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                </div>
            ))}
        </div>
    )
}
