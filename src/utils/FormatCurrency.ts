export const ToCurrency = (value: number) => {
  let currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

  return currency
}
