import React from 'react'
import { render } from '@testing-library/react'
import Button from '.'

test('should render Button', () => {
  const { asFragment } = render(<Button />)

  expect(asFragment()).toMatchSnapshot()
})
