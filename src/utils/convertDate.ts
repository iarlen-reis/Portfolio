import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function convertDate(date: string) {
  const dateString = new Date(date)
  return format(dateString, "dd 'de' MMM, yyyy", { locale: ptBR })
}
