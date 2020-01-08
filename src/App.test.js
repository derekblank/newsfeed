import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders page', () => {
  const { getByText } = render(<App />)
  const headline = getByText(/World News/i)
  expect(headline).toBeInTheDocument()
})
