import React from 'react'
import styles from './styles.module.scss'

const Input = ({ children, label, value, onChange = () => {} }) => {
    if (!label) throw Error('Label is required')

    const id = label.toLowerCase().replace(/ /g, '_')
    return (
        <fieldset className={styles.fieldSet}>
        {label && <label htmlFor={id} className={styles.label}>{label}</label>}
        <input
            type="text"
            className={styles.input}
            onChange={e => onChange(e.target.value)}
            value={value}
            id={id}
        />
        </fieldset>
    )
    }

export default Input
