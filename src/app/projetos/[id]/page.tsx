import { ChevronLeft, DotIcon, GithubIcon, RocketIcon } from 'lucide-react'
import ExternalLink from '@/components/ExternalLink'
import { api } from '@/utils/api'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { convertDate } from '@/utils/convertDate'

interface ParamProps {
  params: {
    id: string
  }
}

interface ProjectProps {
  id: string
  title: string
  type: string
  image: string
  deploy: string
  github: string
  started: string
  finished: string
  description: string
  technologies: string[]
}

export async function generateMetadata({ params }: ParamProps) {
  const response = await api.get<ProjectProps>(`/projects/${params.id}`)

  const project = response.data

  return {
    title: `${project.title} - Iarlen Reis`,
    description: project.description,
    keywords: project.technologies,
  }
}

export default async function ProjectDetailPage({ params }: ParamProps) {
  const response = await api.get<ProjectProps>(`/projects/${params.id}`)

  const project = response.data

  return (
    <div className="mx-auto flex w-full max-w-[600px] flex-col gap-5 pb-12">
      <div className="mt-4 flex items-center gap-3 md:gap-3.5">
        <Link
          href="/projetos"
          aria-label="Voltar para a página de projetos"
          className="w-fit rounded-full border border-white/40 p-1"
        >
          <ChevronLeft className="size-6" />
        </Link>
        <div className=" flex flex-col gap-1.5">
          <h1 className="text-2xl">{project.title}</h1>
          <p className="text-sm text-zinc-300">
            {convertDate(project.started)} - {convertDate(project.finished)}
          </p>
        </div>
      </div>
      <Image
        priority
        width={600}
        height={250}
        src={project.image}
        alt={`Imagem do projeto ${project.title}`}
        className="w-full max-w-[500px] rounded-md sm:max-w-[600px]"
      />
      <ul className="flex items-center gap-3">
        <ExternalLink
          icon={GithubIcon}
          href={project.github}
          aria-label="Link para o repositório no Github"
          className="hover:bg-black/50"
        />
        <ExternalLink
          icon={RocketIcon}
          href={project.deploy}
          aria-label="Link para o deploy da aplicação"
          className="hover:bg-green-500/60"
        />
      </ul>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl sm:text-2xl">Tecnologias</h2>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="flex items-center gap-1 text-sm text-zinc-300 sm:text-base"
            >
              <DotIcon className="size-6" />
              {technology}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl sm:text-2xl">Sobre o projeto</h2>
        <pre className="whitespace-pre-wrap text-zinc-300">
          {project.description}
        </pre>
      </div>
    </div>
  )
}
