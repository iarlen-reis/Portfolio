import { render, screen } from '@testing-library/react'
import Pagination from '@/components/Pagination'
import '@testing-library/jest-dom'

describe('Pagination component', () => {
  beforeEach(() => {
    render(<Pagination page="2" pages={3} filter="" hasNext hasPrevious />)
  })

  it('should render Pagination component', () => {
    expect(Pagination).toBeTruthy()
  })

  it('should have a link with aria-label (Ir para a página anterior)', () => {
    const previousLink = screen.getByLabelText('Ir para a página anterior')

    expect(previousLink).toHaveAttribute(
      'aria-label',
      'Ir para a página anterior',
    )
  })

  it('should have a href to (/projetos?page=1) on link with aria-label (Ir para a página anterior)', () => {
    const previousLink = screen.getByLabelText('Ir para a página anterior')

    expect(previousLink).toHaveAttribute('href', '/projetos?page=1')
  })

  it('should have a li with aria-label (Página atual)', () => {
    const currentPage = screen.getByLabelText('Página atual')

    expect(currentPage).toHaveAttribute('aria-label', 'Página atual')
  })

  it('should have a link with aria-label (Ir para a próxima página)', () => {
    const nextLink = screen.getByLabelText('Ir para a próxima página')

    expect(nextLink).toHaveAttribute('aria-label', 'Ir para a próxima página')
  })

  it('should have a href to (/projetos?page=3) on link with aria-label (Ir para a próxima página)', () => {
    const nextLink = screen.getByLabelText('Ir para a próxima página')

    expect(nextLink).toHaveAttribute('href', '/projetos?page=3')
  })
})
