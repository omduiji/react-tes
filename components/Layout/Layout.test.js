import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Layout from '.'

test('should render Layout', () => {
  const { queryByText, asFragment } = render(<Layout><p>test content</p></Layout>)

  expect(queryByText('test content')).toBeInTheDocument()

  expect(asFragment()).toMatchSnapshot()
})
