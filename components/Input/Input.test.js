import React from 'react'
import { render } from '@testing-library/react'
import Input from '.'

test('should render Input', () => {
  const { asFragment } = render(<Input label="test label" />)

  expect(asFragment()).toMatchSnapshot()
})
