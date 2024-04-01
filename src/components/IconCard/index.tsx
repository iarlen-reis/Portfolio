import React, { ComponentProps } from 'react'
import { IconType } from 'react-icons'

interface IconCardProps extends ComponentProps<'li'> {
  icon: IconType
  color: string
}
export default function IconCard({
  icon: Icon,
  color,
  ...rest
}: IconCardProps) {
  return (
    <li {...rest} className="w-fit" data-testid="icon-card">
      <Icon
        fontSize={45}
        color={color}
        data-testid="icon-card-icon"
        className="transition-all hover:scale-105"
      />
    </li>
  )
}
