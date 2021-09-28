import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import UserCard from '.'

const testUser = {
    id: 42,
    photo: 'test.jpg',
    first_name: 'Jane',
    last_name: 'Doe',
}

test('should render UserCard', () => {
  const { queryByText, asFragment } = render(<UserCard user={testUser} />)

  expect(queryByText('JaneDoe')).toBeInTheDocument()

  expect(asFragment()).toMatchSnapshot()
})

test.skip('should activate edit mode', () => {
    const { queryByText, asFragment, getByRole } = render(<UserCard user={testUser} />)

    fireEvent.click(queryByText('Edit'))

    expect(queryByText('Edit')).not.toBeInTheDocument()
    expect(queryByText('Save')).toBeInTheDocument()

    expect(asFragment()).toMatchSnapshot()
})
