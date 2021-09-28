import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import User from '.'

const setUser = jest.fn()

const testUser = {
    id: 42,
    photo: 'test.jpg',
    first_name: 'Jane',
    last_name: 'Doe',
}

test('should render User', () => {
  const { queryByText, asFragment } = render(<User user={testUser} setUser={setUser} />)

  expect(queryByText('JaneDoe')).toBeInTheDocument()

  expect(asFragment()).toMatchSnapshot()
})

test('should render active User', () => {
    const { queryByText, asFragment } = render(<User user={testUser} setUser={setUser} active />)

    expect(queryByText('JaneDoe')).toBeInTheDocument()

    expect(asFragment()).toMatchSnapshot()
})

test('should call setUser', () => {
    const { queryByText } = render(<User user={testUser} setUser={setUser} active />)

    fireEvent.click(queryByText('JaneDoe'))

    expect(setUser).toHaveBeenCalled()
})
