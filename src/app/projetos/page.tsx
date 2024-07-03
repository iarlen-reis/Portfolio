import {
  LaptopMinimalIcon,
  SmartphoneIcon,
  Server,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import InternalLink from '@/components/InternalLink'
import ProjectCard from '@/components/ProjectCard'
import { api } from '@/utils/api'
import { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'

interface ProjectProps {
  id: string
  title: string
  type: string
  image: string
  deploy: string
  started: string
  finished: string
}

interface PaginationProps {
  pages: number
  next: boolean
  prev: boolean
}

interface PaginationMetaProps {
  current_page: number
  from: number
  last_page: number
  total: number
}

export interface ProjectPaginationProps {
  links: PaginationProps
  meta: PaginationMetaProps
  data: ProjectProps[]
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
    'PHP',
    'Laravel',
    'Livewire',
  ],
}

export default async function ProjectPage({ searchParams }: ParamProps) {
  const page = searchParams.page ?? 1
  const filter = searchParams.filter || ''

  const response = await api.get<ProjectPaginationProps>(
    `/projects?page=${page}&filter=${filter}`,
  )

  const data = response.data

  return (
    <section className="mt-4 flex min-h-screen flex-col pb-12 text-white">
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
              href="?filter=back-end"
              active={searchParams.filter === 'back-end'}
              aria-label="Link para exibir apenas projetos back-end"
              title="Exibir apenas projetos back-end"
            />
          </li>
        </ul>
      </div>
      <div className="mt-6">
        {filter && (
          <p className="animate-pulse text-lg text-white/70">
            Filtrando por: {filter}
          </p>
        )}
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {data.data &&
          data.data.map((project) => (
            <ProjectCard {...project} key={project.id} />
          ))}
      </ul>
      <ul className="flex items-center justify-end gap-2">
        {data.links.prev && (
          <li className="rounded-xl border border-white/60 p-1 transition-all hover:opacity-80">
            <Link
              aria-label="Ir para a página anterior"
              href={`/projetos?page=${Number(page) - 1}${filter && `&filter=${filter}`}`}
            >
              <ChevronLeft className="size-6" />
            </Link>
          </li>
        )}

        {data.meta.last_page > 1 && (
          <li
            aria-label="Página atual"
            className="rounded-md border border-white/60 p-1 px-2 font-merienda text-sm"
          >
            1
          </li>
        )}

        {data.links.next && (
          <li className="rounded-xl border border-white/60 p-1 transition-all hover:opacity-80">
            <Link
              aria-label="Ir para a próxima página"
              href={`/projetos?page=${Number(page) + 1}${filter && `&filter=${filter}`}`}
            >
              <ChevronRight className="size-6" />
            </Link>
          </li>
        )}
      </ul>
    </section>
  )
}
