import React, { ComponentProps } from 'react'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import clsx from 'clsx'

interface InternalLinkProps extends ComponentProps<typeof Link> {
  icon: LucideIcon
  active: boolean
}

export default function InternalLink({
  active,
  icon: Icon,
  ...props
}: InternalLinkProps) {
  return (
    <Link {...props}>
      <Icon
        data-testid="internal-link-icon"
        className={clsx('size-5 transition-all hover:text-white', {
          'text-white': active,
          'text-white/60': !active,
        })}
      />
    </Link>
  )
}
