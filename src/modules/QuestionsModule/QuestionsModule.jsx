import React, { useRef } from 'react'
import data from './assets/data/data.json'
import styles from './styles.module.scss'

export default function QuestionsModule() {
    const questionRefs = useRef(Array(data.length).fill(null))
    const answerRefs = useRef(Array(data.length).fill(null))

    const handleToggleQuestion = index => {
        answerRefs.current[index].classList.toggle(styles.closed)
    }
    return (
        <div className={styles.questions}>
            {data.map((item, index) => (
                <div key={item.id}>
                    <h3 ref={questionRefs.current[index]} onClick={() => handleToggleQuestion(index)}>
                        {item.question}
                    </h3>
                    <div
                        ref={element => (answerRefs.current[index] = element)}
                        className={styles.closed}
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                </div>
            ))}
        </div>
    )
}
