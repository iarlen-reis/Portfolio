export const convertType = (type: string) => {
  switch (type) {
    case 'web':
      return 'Aplicação web'
    case 'mobile':
      return 'Aplicação mobile'
    case 'back-end':
      return 'Aplicação back-end'
    default:
      return type
  }
}
