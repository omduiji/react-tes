import React from 'react'
import { getDisplayName } from '../../utils'
import styles from './styles.module.scss'

const User = ({ user, setUser, active }) => (
    <li className={[styles.user, active && styles.active].filter(c => c).join(' ')}>
        <button type="button" onClick={e => setUser(user)}>
            <img src={user.photo} />
            <span>{getDisplayName(user)}</span>
        </button>
    </li>
)

export default User
