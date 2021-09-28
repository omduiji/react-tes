import React, { createContext, useReducer } from 'react'

const initialState = []
export const usersContext = createContext(initialState)
const { Provider } = usersContext

const reducer = (state, { type, payload }) => {
    switch (type) {
      case 'updateUser':
        const existingIndex = state.findIndex(
          u => u.id === payload.id,
        )
        const users = [...state]

        if (existingIndex === -1) {
          users.push(payload)
        } else {
          users.splice(existingIndex, 1, payload)
        }
        return users
      case 'setUsers':
        return payload
      default:
        throw new Error()
    }
}

export const UsersProvider = ({ children }) => {
    const usersReducer = useReducer(reducer, [])

    return <Provider value={usersReducer}>{children}</Provider>;
};
