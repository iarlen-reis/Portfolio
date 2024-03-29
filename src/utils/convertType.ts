export const convertType = (type: string) => {
  switch (type) {
    case 'web':
      return 'Aplicação Web'
    case 'mobile':
      return 'Aplicação Mobile'
    case 'backend':
      return 'Aplicação Back-end'
    default:
      return type
  }
}
