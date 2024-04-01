import { LaptopMinimalIcon, SmartphoneIcon, Server } from 'lucide-react'
import InternalLink from '@/components/InternalLink'
import ProjectCard from '@/components/ProjectCard'
import Pagination from '@/components/Pagination'
import { api } from '@/utils/api'
import { Metadata } from 'next'
import React from 'react'

interface PaginationProps {
  total: number
  pages: number
  hasNext: boolean
  hasPrevious: boolean
}

interface ProjectProps {
  id: string
  name: string
  type: string
  image: string
  deploy: string
  started: string
  finished: string
}

interface ProjectWithPaginationProps {
  projects: ProjectProps[]
  pagination: PaginationProps
}

interface ParamProps {
  searchParams: {
    filter: string
    page: string
  }
}

export const metadata: Metadata = {
  title: 'Portfolio - Projetos',
  description:
    'Conheça meus projetos e descubra como cada um deles contribuiu para meu aprendizado.',
  keywords: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind',
    'VueJs',
    'Java',
    'Spring',
    'Spring Security',
    'Styled components',
    'Portfólio',
    'Desenvolvedor',
    'HTML',
    'CSS',
  ],
}

export default async function ProjectPage({ searchParams }: ParamProps) {
  const page = searchParams.page ?? 1
  const filter = searchParams.filter || ''

  const response = await api.get<ProjectWithPaginationProps>(
    `/projects?page=${page}&filter=${filter}`,
  )

  const data = response.data

  return (
    <section className="background mt-4 flex min-h-screen flex-col gap-10 pb-12">
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl">Meus projetos</h2>
          <p className="max-w-[500px] text-sm tracking-wider text-white/70">
            Conheça meus projetos e descubra como cada um deles contribuiu para
            meu aprendizado.
          </p>
        </div>
        <ul className="mt-4 flex items-center gap-5">
          <li>
            <InternalLink
              href="?filter=web"
              icon={LaptopMinimalIcon}
              active={searchParams.filter === 'web'}
              aria-label="Link exibir apenas projetos web"
              title="Exibir apenas projetos web"
            />
          </li>
          <li>
            <InternalLink
              href="?filter=mobile"
              icon={SmartphoneIcon}
              active={searchParams.filter === 'mobile'}
              aria-label="Link para exibir apenas projetos mobile"
              title="Exibir apenas projetos mobile"
            />
          </li>
          <li>
            <InternalLink
              icon={Server}
              href="?filter=backend"
              active={searchParams.filter === 'backend'}
              aria-label="Link para exibir apenas projetos back-end"
              title="Exibir apenas projetos back-end"
            />
          </li>
        </ul>
        <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {data.projects.map((project) => (
            <ProjectCard {...project} key={project.id} />
          ))}
        </ul>
      </div>
      <Pagination {...data.pagination} page={page} filter={filter} />
    </section>
  )
}
