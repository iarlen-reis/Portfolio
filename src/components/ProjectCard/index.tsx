import { convertType } from '@/utils/convertType'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BadgeInfo, CalendarDays, Rocket } from 'lucide-react'
import { convertDate } from '@/utils/convertDate'
import { selectIcon } from '@/utils/selectIcon'

interface ProjectCardProps {
  id: string
  image: string
  title: string
  deploy: string
  started: string
  finished: string
  type: string
}

export default function ProjectCard({
  id,
  image,
  title,
  deploy,
  started,
  finished,
  type,
}: ProjectCardProps) {
  const Icon = selectIcon(type)
  return (
    <li
      data-testid="project-card"
      className="mx-auto flex w-full max-w-[400px] flex-col gap-2 rounded border border-white/40 pb-4 shadow-md"
    >
      <div className="h-[200px] w-full overflow-hidden">
        <Image
          src={image}
          alt={`Imagem do projeto ${title}`}
          width={398}
          height={200}
          priority
          className="h-full w-full overflow-hidden object-cover transition-all hover:scale-110"
        />
      </div>
      <div className="mt-2 flex flex-col gap-3 px-3">
        <Link
          href={`/projetos/${id}`}
          className="w-fit font-merienda text-xl transition-opacity hover:opacity-80 md:text-2xl"
          data-testid="project-name"
          aria-label={`Link para ver detalhes do projeto ${title}`}
        >
          {title}
        </Link>
        <div className="flex flex-col gap-2">
          <p
            className="flex items-center gap-2 text-sm"
            data-testid="project-date"
          >
            <CalendarDays className="size-4" />
            {convertDate(started)} - {convertDate(finished)}
          </p>
          <p
            className="flex items-center gap-2 text-sm"
            data-testid="project-type"
          >
            <Icon className="size-4" />
            {convertType(type)}
          </p>
        </div>
        <div className="mt-2 flex items-center justify-center gap-4">
          <Link
            href={`/projetos/${id}`}
            data-testid="project-details"
            aria-label={`Link para ver detalhes do projeto ${title}`}
            className="flex items-center gap-1 rounded bg-blue-600 px-5 py-2 text-sm transition-opacity hover:opacity-80"
          >
            <BadgeInfo className="size-4" />
            Detalhes
          </Link>
          <Link
            href={deploy}
            target="_blank"
            rel="noreferrer"
            data-testid="project-deploy"
            aria-label={`Link para deploy do projeto ${title}`}
            className="flex w-[116px] items-center gap-2 rounded border border-white/30 bg-transparent px-5 py-2 text-sm transition-all duration-300 hover:bg-blue-600"
          >
            <Rocket className="size-4" />
            Deploy
          </Link>
        </div>
      </div>
    </li>
  )
}
