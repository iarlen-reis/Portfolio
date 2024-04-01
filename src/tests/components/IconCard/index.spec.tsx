import { render, screen } from '@testing-library/react'
import { TbBrandNextjs } from 'react-icons/tb'
import IconCard from '@/components/IconCard'
import '@testing-library/jest-dom'

describe('IconCard component', () => {
  beforeEach(() => {
    render(
      <IconCard
        title="NextJs"
        color="#FFFFFF"
        icon={TbBrandNextjs}
        aria-label="Framework NextJs"
      />,
    )
  })

  it('should render IconCard component', () => {
    expect(IconCard).toBeTruthy()
  })

  it('should have a li with testid (icon-card)', () => {
    const iconCard = screen.getByTestId('icon-card')

    expect(iconCard).toBeInTheDocument()
  })

  it('should have a title with value (NextJs) on data-testid (icon-card)', () => {
    const iconCard = screen.getByTestId('icon-card')

    expect(iconCard).toHaveAttribute('title', 'NextJs')
  })

  it('should have a aria-label with value (Framework NextJs) on data-testid (icon-card)', () => {
    const iconCard = screen.getByTestId('icon-card')

    expect(iconCard).toHaveAttribute('aria-label', 'Framework NextJs')
  })

  it('should have a icon with data-testid (icon-card-icon)', () => {
    const iconCardIcon = screen.getByTestId('icon-card-icon')

    expect(iconCardIcon).toBeInTheDocument()
  })
})
