import { render, screen } from '@testing-library/react'
import InternalLink from '@/components/InternalLink'
import { Smartphone } from 'lucide-react'
import '@testing-library/jest-dom'

describe('InternalLink component', () => {
  beforeEach(() => {
    render(
      <InternalLink
        active
        href="?type=mobile"
        icon={Smartphone}
        aria-label="Link para a página inicial"
      />,
    )
  })

  it('should render InternalLink component', () => {
    expect(InternalLink).toBeTruthy()
  })

  it('should have a link with href to (?type=mobile)', () => {
    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('href', '?type=mobile')
  })

  it('should have a aria-label with value (Link para a página inicial) on link', () => {
    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('aria-label', 'Link para a página inicial')
  })

  it('should have a Smartphone icon with data-testid (internal-link-icon)', () => {
    const icon = screen.getByTestId('internal-link-icon')

    expect(icon).toHaveAttribute('data-testid', 'internal-link-icon')
  })

  it('should have a class (lucide-smartphone) on data-testid (internal-link-icon)', () => {
    const icon = screen.getByTestId('internal-link-icon')

    expect(icon).toHaveClass('lucide-smartphone')
  })

  it('should have a class (text-white) on data-testid (internal-link-icon)', () => {
    const icon = screen.getByTestId('internal-link-icon')

    expect(icon).toHaveClass('text-white')
  })
})

describe('InternalLink component with no active', () => {
  beforeEach(() => {
    render(
      <InternalLink
        active={false}
        icon={Smartphone}
        href="?type=mobile"
        aria-label="Exibir apenas projetos mobile"
      />,
    )
  })

  it('should render InternalLink component', () => {
    expect(InternalLink).toBeTruthy()
  })

  it('should have a link with href to (?type=mobile)', () => {
    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('href', '?type=mobile')
  })

  it('should have a aria-label with value (Exibir apenas projetos mobile) on link', () => {
    const link = screen.getByRole('link')

    expect(link).toHaveAttribute('aria-label', 'Exibir apenas projetos mobile')
  })

  it('should have a Smartphone icon with data-testid (internal-link-icon)', () => {
    const icon = screen.getByTestId('internal-link-icon')

    expect(icon).toHaveAttribute('data-testid', 'internal-link-icon')
  })

  it('should have a class (lucide-smartphone) on data-testid (internal-link-icon)', () => {
    const icon = screen.getByTestId('internal-link-icon')

    expect(icon).toHaveClass('lucide-smartphone')
  })

  it('should not have a class (text-white) on data-testid (internal-link-icon)', () => {
    const icon = screen.getByTestId('internal-link-icon')

    expect(icon).not.toHaveClass('text-white')
  })

  it('should have a class (text-white/60) on data-testid (internal-link-icon)', () => {
    const icon = screen.getByTestId('internal-link-icon')

    expect(icon).toHaveClass('text-white/60')
  })
})
