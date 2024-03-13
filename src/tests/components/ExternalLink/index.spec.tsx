import { render, screen } from '@testing-library/react'
import ExternalLink from '@/components/ExternalLink'
import { GithubIcon } from 'lucide-react'
import '@testing-library/jest-dom'

describe('ExternalLink component', () => {
  beforeEach(() => {
    render(
      <ExternalLink
        icon={GithubIcon}
        href="https://github.com/iarlen-reis"
        aria-label="Link para o perfil do github do desenvolvedor Iarlen Reis"
      />,
    )
  })

  it('should render ExternalLink component', () => {
    expect(ExternalLink).toBeTruthy()
  })

  it('should have a link with href to href (https://github.com/iarlen-reis)', () => {
    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('href', 'https://github.com/iarlen-reis')
  })

  it('should have aria-label with value (Link para o perfil do github do desenvolvedor Iarlen Reis)', () => {
    const link = screen.getByRole('link')

    expect(link).toHaveAttribute(
      'aria-label',
      'Link para o perfil do github do desenvolvedor Iarlen Reis',
    )
  })

  it('should have target with value (_blank) on link', () => {
    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('target', '_blank')
  })

  it('should have a icon with data-testid (external-link-icon)', () => {
    const icon = screen.getByTestId('external-link-icon')

    expect(icon).toBeInTheDocument()
  })

  it('should have a className with value (lucide-github) on data-testid (external-link-icon)', () => {
    const icon = screen.getByTestId('external-link-icon')

    expect(icon).toHaveClass('lucide-github')
  })
})
