import { LucideIcon } from 'lucide-react'
import React from 'react'
import clsx from 'clsx'

interface ExternalLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  icon: LucideIcon
}

export default function ExternalLink({
  icon: Icon,
  ...props
}: ExternalLinkProps) {
  return (
    <li>
      <a
        {...props}
        target="_blank"
        rel="noreferrer"
        href={props.href}
        className={clsx(
          'flex w-fit items-center justify-center rounded-xl border border-white/40 p-3 transition-all',
          props.className,
        )}
      >
        <Icon className="size-5" data-testid="external-link-icon" />
      </a>
    </li>
  )
}
