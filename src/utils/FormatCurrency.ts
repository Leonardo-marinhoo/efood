export const ToCurrency = (value: number, prefix?: string) => {
  let formated = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

  if (prefix) {
    formated = prefix + formated
  }

  return formated
}
