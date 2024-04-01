import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'
import '@testing-library/jest-dom'

describe('Footer component', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('should render Footer component', () => {
    expect(Footer).toBeTruthy()
  })

  it('should have a footer with testid (footer)', () => {
    const footer = screen.getByTestId('footer')

    expect(footer).toBeInTheDocument()
  })

  it('should have a link with href to (https://github.com/iarlen-reis)', () => {
    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('href', 'https://github.com/iarlen-reis')
  })

  it('should have a aria-label with value (Link para o github do desenvolvedor Iarlen Reis)', () => {
    const link = screen.getByRole('link')

    expect(link).toHaveAttribute(
      'aria-label',
      'Link para o github do desenvolvedor Iarlen Reis',
    )
  })

  it(
    'should have a text with value (' +
      new Date().getFullYear() +
      ' - Iarlen Reis)',
    () => {
      const text = screen.getByText(new Date().getFullYear() + ' - Iarlen Reis')

      expect(text).toBeInTheDocument()
    },
  )
})
