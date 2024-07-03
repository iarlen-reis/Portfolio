import {
  LucideIcon,
  LaptopMinimalIcon,
  SmartphoneIcon,
  Server,
} from 'lucide-react'

export function selectIcon(type: string): LucideIcon {
  switch (type) {
    case 'web':
      return LaptopMinimalIcon
    case 'mobile':
      return SmartphoneIcon
    case 'back-end':
      return Server
    default:
      return LaptopMinimalIcon
  }
}
