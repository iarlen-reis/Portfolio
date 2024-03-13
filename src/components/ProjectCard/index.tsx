import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  BadgeInfo,
  CalendarDays,
  LaptopMinimalIcon,
  Rocket,
} from 'lucide-react'

interface ProjectCardProps {
  id: string
  image: string
  name: string
  deploy: string
  startedIn: string
  finishedIn: string
  type: string
}

export default function ProjectCard({
  id,
  image,
  name,
  deploy,
  startedIn,
  finishedIn,
  type,
}: ProjectCardProps) {
  return (
    <li
      data-testid="project-card"
      className="mx-auto flex max-w-[400px] flex-col gap-2 rounded border border-white/40 pb-4 shadow-md"
    >
      <Image
        src={image}
        alt={`Imagem do projeto ${name}`}
        width={500}
        height={500}
      />
      <div className="flex flex-col gap-3 px-3">
        <Link
          href={`/projetos/${id}`}
          className="font-merienda text-xl"
          data-testid="project-name"
          aria-label={`Link para ver detalhes do projeto ${name}`}
        >
          {name}
        </Link>
        <div className="flex flex-col gap-1">
          <p
            className="flex items-center gap-2 text-sm"
            data-testid="project-date"
          >
            <CalendarDays className="size-4" />
            {startedIn} - {finishedIn}
          </p>
          <p
            className="flex items-center gap-2 text-sm"
            data-testid="project-type"
          >
            <LaptopMinimalIcon className="size-4" />
            {type}
          </p>
        </div>
        <div className="mt-2 flex items-center justify-center gap-4">
          <Link
            href={`/projetos/${id}`}
            data-testid="project-details"
            aria-label={`Link para ver detalhes do projeto ${name}`}
            className="flex w-fit items-center gap-1 rounded bg-blue-600 px-5 py-2 text-sm"
          >
            <BadgeInfo className="size-4" />
            Detalhes
          </Link>
          <Link
            href={deploy}
            target="_blank"
            rel="noreferrer"
            data-testid="project-deploy"
            aria-label={`Link para deploy do projeto ${name}`}
            className="flex w-fit items-center gap-2 rounded border border-white/30 bg-transparent px-5 py-2 text-sm transition-all duration-300 hover:bg-blue-600"
          >
            <Rocket className="size-4" />
            Deploy
          </Link>
        </div>
      </div>
    </li>
  )
}
