import { render, screen } from '@testing-library/react'
import ProjectCard from '@/components/ProjectCard'
import '@testing-library/jest-dom'

describe('ProjectCard component', () => {
  beforeEach(() => {
    render(
      <ProjectCard
        id="1"
        image="https://github.com/iarlen-reis.png"
        title="Projeto 1"
        deploy="https://github.com/iarlen-reis"
        started="2023-01-20"
        finished="2023-02-03"
        type="web"
      />,
    )
  })

  it('should render correctly', () => {
    const projectCard = screen.getByTestId('project-card')

    expect(projectCard).toBeInTheDocument()
  })

  it('should have a image with alt (Imagem do projeto Projeto 1)', () => {
    const projectImage = screen.getByRole('img')

    expect(projectImage).toHaveAttribute('alt', 'Imagem do projeto Projeto 1')
  })

  it('should have a text with value (Projeto 1) on data-testid (project-name)', () => {
    const projectName = screen.getByTestId('project-name')

    expect(projectName).toHaveTextContent('Projeto 1')
  })

  it('should have a link with href to (/projetos/1) on data-testid (project-name)', () => {
    const projectLink = screen.getByTestId('project-name')

    expect(projectLink).toHaveAttribute('href', '/projetos/1')
  })

  it('should have a aria-label with value (Link para ver detalhes do projeto Projeto 1) on data-testid (project-name)', () => {
    const projectLink = screen.getByTestId('project-name')

    expect(projectLink).toHaveAttribute(
      'aria-label',
      'Link para ver detalhes do projeto Projeto 1',
    )
  })

  it('should have a text with value (19 de jan, 2023 - 02 de fev, 2023) on data-testid (project-date)', () => {
    const projectDate = screen.getByTestId('project-date')

    expect(projectDate).toHaveTextContent('19 de jan, 2023 - 02 de fev, 2023')
  })

  it('should have a text with value (Aplicação web) on data-testid (project-type)', () => {
    const projectType = screen.getByTestId('project-type')

    expect(projectType).toHaveTextContent('Aplicação web')
  })

  it('should have a link with href to (/projetos/1) on data-testid (project-details)', () => {
    const projectDetails = screen.getByTestId('project-details')

    expect(projectDetails).toHaveAttribute('href', '/projetos/1')
  })

  it('should have a text with value (Detalhes) on data-testid (project-details)', () => {
    const projectDetails = screen.getByTestId('project-details')

    expect(projectDetails).toHaveTextContent('Detalhes')
  })

  it('should have a aria-label with value (Link para ver detalhes do projeto Projeto 1) on data-testid (project-details)', () => {
    const projectDetails = screen.getByTestId('project-details')

    expect(projectDetails).toHaveAttribute(
      'aria-label',
      'Link para ver detalhes do projeto Projeto 1',
    )
  })

  it('should have a link with href to (https://github.com/iarlen-reis) on data-testid (project-deploy)', () => {
    const projectDeploy = screen.getByTestId('project-deploy')

    expect(projectDeploy).toHaveAttribute(
      'href',
      'https://github.com/iarlen-reis',
    )
  })

  it('should have a text with value (Deploy) on data-testid (project-deploy)', () => {
    const projectDeploy = screen.getByTestId('project-deploy')

    expect(projectDeploy).toHaveTextContent('Deploy')
  })

  it('should have a aria-label with value (Link para deploy do projeto Projeto 1) on data-testid (project-deploy)', () => {
    const projectDeploy = screen.getByTestId('project-deploy')

    expect(projectDeploy).toHaveAttribute(
      'aria-label',
      'Link para deploy do projeto Projeto 1',
    )
  })
})
