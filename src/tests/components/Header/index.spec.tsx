import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/components/header'
import '@testing-library/jest-dom'

describe('Header component', () => {
  beforeEach(() => {
    render(<Header />)
  })

  it('should render header component', () => {
    expect(Header).toBeTruthy()
  })

  it('should have a link with href to (/) on data-testid (logo)', () => {
    const logoLink = screen.getByTestId('logo')

    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('should have a aria-label with value (Link para a página inicial) on data-testid (logo)', () => {
    const logoLink = screen.getByTestId('logo')

    expect(logoLink).toHaveAttribute('aria-label', 'Link para a página inicial')
  })

  it('should have a logo image with alt (Imagem de um gato e um texto do lado direito escrito Iarlen Reis.)', () => {
    const logoImage = screen.getByRole('img')

    expect(logoImage).toHaveAttribute(
      'alt',
      'Imagem de um gato e um texto do lado direito escrito Iarlen Reis.',
    )
  })

  it('should have a link with href to (/sobre) on data-testid (about-link)', () => {
    const aboutLink = screen.getByTestId('about-link')

    expect(aboutLink).toHaveAttribute('href', '/sobre')
  })

  it('should have a aria-label with value (Link para a página sobre) on data-testid (about-link)', () => {
    const aboutLink = screen.getByTestId('about-link')

    expect(aboutLink).toHaveAttribute('aria-label', 'Link para a página sobre')
  })

  it('should have a link with href to (/projetos) on data-testid (projects-link)', () => {
    const projectsLink = screen.getByTestId('projects-link')

    expect(projectsLink).toHaveAttribute('href', '/projetos')
  })

  it('should have a aria-label with value (Link para a página projetos) on data-testid (projects-link)', () => {
    const projectsLink = screen.getByTestId('projects-link')

    expect(projectsLink).toHaveAttribute(
      'aria-label',
      'Link para a página projetos',
    )
  })

  it('should have a button with data-testid (menu-button)', () => {
    const menuButton = screen.getByTestId('menu-button')

    expect(menuButton).toBeInTheDocument()
  })

  it('should have a aria-label with value (Botão de abrir e fechar o menu) on data-testid (menu-button)', () => {
    const menuButton = screen.getByTestId('menu-button')

    expect(menuButton).toHaveAttribute(
      'aria-label',
      'Botão de abrir e fechar o menu',
    )
  })

  it('should have a button with data-testid (close-button) when menu button is clicked', () => {
    const menuButton = screen.getByTestId('menu-button')

    fireEvent.click(menuButton)

    const closeButton = screen.getByTestId('close-button')

    expect(closeButton).toBeInTheDocument()
  })
})
