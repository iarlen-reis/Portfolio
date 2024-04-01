import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface PaginationProps {
  page: string
  pages: number
  filter: string
  hasNext: boolean
  hasPrevious: boolean
}

export default function Pagination({
  page,
  pages,
  filter,
  hasNext,
  hasPrevious,
}: PaginationProps) {
  return (
    <ul className="flex items-center justify-end gap-2">
      {pages && (
        <>
          {hasPrevious && (
            <li className="rounded-xl border border-white/60 p-1 transition-all hover:opacity-80">
              <Link
                aria-label="Ir para a página anterior"
                href={`/projetos?page=${Number(page) - 1}${filter && `&filter=${filter}`}`}
              >
                <ChevronLeft className="size-6" />
              </Link>
            </li>
          )}
          {pages > 1 && (
            <li
              aria-label="Página atual"
              className="rounded-md border border-white/60 p-1 px-2 font-merienda text-sm"
            >
              1
            </li>
          )}
          {hasNext && (
            <li className="rounded-xl border border-white/60 p-1 transition-all hover:opacity-80">
              <Link
                aria-label="Ir para a próxima página"
                href={`/projetos?page=${Number(page) + 1}${filter && `&filter=${filter}`}`}
              >
                <ChevronRight className="size-6" />
              </Link>
            </li>
          )}
        </>
      )}
    </ul>
  )
}
