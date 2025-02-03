import { FormikProps, useFormik } from 'formik'
import * as S from './styles'
import * as Yup from 'yup'
import { Button } from '../CartBar/styles'
import { ReactNode, useState } from 'react'
import { PurchaseResponse, usePurchaseMutation } from '../../services/api'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { ToCurrency } from '../../utils/FormatCurrency'

type formikProps = {
  name: string
  address: string
  city: string
  cep: string
  number: string
  complement: string
  cardName: string
  cardNumber: string
  cvv: string
  dueMonth: string
  dueYear: string
}
type CheckoutProps = {
  OnCancel: () => void
}
type stepProps = {
  formik: FormikProps<formikProps>
  nextStep?: () => void
  prevStep?: () => void
  getError: (fieldName: string, message?: string) => string | undefined
  cartTotalPrice?: number
  orderResponse?: PurchaseResponse
}

const CheckoutForm = ({ OnCancel }: CheckoutProps) => {
  const [purchase, { data: orderResponse }] = usePurchaseMutation()
  const { items: cartProducts } = useSelector(
    (state: RootReducer) => state.Cart
  )
  const cartTotalPrice = cartProducts.reduce(
    (acc, item) => (acc += item.preco),
    0
  )

  const [step, setStep] = useState(0)
  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isFilled = fieldName in formik.touched
    const isInvalid = fieldName in formik.errors

    if (isFilled && isInvalid) {
      return message
    }
  }
  const formik = useFormik<formikProps>({
    initialValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardName: '', //
      cardNumber: '', //
      cvv: '', //
      dueMonth: '',
      dueYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Mínimo 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'Mínimo 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'Mínimo 3 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(8, 'O campo precisa ter 8 caracteres')
        .max(8, 'O campo precisa ter 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'Mínimo 1 caracteres')
        .required('O campo é obrigatório'),
      cardName: Yup.string()
        .min(3, 'Mínimo 3 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(13, 'Mínimo 13 caracteres')
        .max(16, 'Maximo 16 caracteres')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .min(3, 'Mínimo 3 caracteres')
        .max(4, 'Maximo 4 caracteres')
        .required('O campo é obrigatório'),
      dueMonth: Yup.string()
        .min(1, 'Mínimo 1 caracter')
        .max(2, 'Maximo 2 caracteres')
        .required('O campo é obrigatório'),
      dueYear: Yup.string()
        .min(2, 'Mínimo 2 caracteres')
        .max(2, 'Maximo 2 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: cartProducts.map(({ id, preco }) => ({
          id,
          price: preco
        })),
        delivery: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            zipcode: values.cep,
            number: values.number,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.dueMonth),
              year: Number(values.dueYear)
            }
          }
        }
      }).finally(() => nextStep())
    }
  })
  const stepComponent: ReactNode[] = [
    <Entrega
      formik={formik}
      prevStep={OnCancel}
      nextStep={nextStep}
      getError={getErrorMessage}
    />,
    <Pagamento
      formik={formik}
      prevStep={prevStep}
      nextStep={nextStep}
      getError={getErrorMessage}
      cartTotalPrice={cartTotalPrice}
    />,
    <Detalhes orderResponse={orderResponse} />
  ]

  return <S.Form onSubmit={formik.handleSubmit}>{stepComponent[step]}</S.Form>
}
const Entrega = ({ formik, prevStep, nextStep, getError }: stepProps) => (
  <S.FormContainer>
    <S.FormTitle>Entrega</S.FormTitle>
    <S.Row>
      <S.InputGroup>
        <S.Label htmlFor="name">Quem irá receber</S.Label>
        <S.Input
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {<small>{getError('name', formik.errors.name)}</small>}
      </S.InputGroup>
    </S.Row>
    <S.Row>
      <S.InputGroup>
        <S.Label htmlFor="address">Endereço</S.Label>
        <S.Input
          id="address"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <small>{getError('address', formik.errors.address)}</small>
      </S.InputGroup>
    </S.Row>
    <S.Row>
      <S.InputGroup>
        <S.Label htmlFor="city">Cidade</S.Label>
        <S.Input
          id="city"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <small>{getError('city', formik.errors.city)}</small>
      </S.InputGroup>
    </S.Row>
    <S.Row>
      <S.InputGroup>
        <S.Label htmlFor="cep">CEP</S.Label>
        <S.Input
          id="cep"
          name="cep"
          value={formik.values.cep}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <small>{getError('cep', formik.errors.cep)}</small>
      </S.InputGroup>
      <S.InputGroup>
        <S.Label htmlFor="number">Número</S.Label>
        <S.Input
          id="number"
          name="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <small>{getError('number', formik.errors.number)}</small>
      </S.InputGroup>
    </S.Row>
    <S.Row>
      <S.InputGroup>
        <S.Label htmlFor="complement">Complemento (Opcional)</S.Label>
        <S.Input
          id="complement"
          name="complement"
          value={formik.values.complement}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <small>{getError('complement', formik.errors.complement)}</small>
      </S.InputGroup>
    </S.Row>
    <S.Row>
      <S.InputGroup>
        <Button type="button" onClick={nextStep}>
          Continuar com o pagamento
        </Button>
        <Button type="submit" onClick={prevStep}>
          Voltar para o carrinho
        </Button>
      </S.InputGroup>
    </S.Row>
  </S.FormContainer>
)
const Pagamento = ({
  formik,
  prevStep,
  getError,
  cartTotalPrice
}: stepProps) => (
  <S.FormContainer>
    <S.FormTitle>
      Pagamento - valor a pagar {ToCurrency(cartTotalPrice!)}
    </S.FormTitle>
    <S.Row>
      <S.InputGroup>
        <S.Label htmlFor="cardName">Nome no cartão</S.Label>
        <S.Input
          id="cardName"
          name="cardName"
          value={formik.values.cardName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <small>{getError('cardName', formik.errors.cardName)}</small>
      </S.InputGroup>
    </S.Row>
    <S.Row>
      <S.InputGroup>
        <S.Label htmlFor="cardNumber">Número no cartão</S.Label>
        <S.Input
          id="cardNumber"
          name="cardNumber"
          value={formik.values.cardNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <small>{getError('cardNumber', formik.errors.cardNumber)}</small>
      </S.InputGroup>
    </S.Row>
    <S.Row>
      <S.InputGroup>
        <S.Label htmlFor="cvv">CVV</S.Label>
        <S.Input
          id="cvv"
          name="cvv"
          value={formik.values.cvv}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <small>{getError('cvv', formik.errors.cvv)}</small>
      </S.InputGroup>
    </S.Row>
    <S.Row>
      <S.InputGroup>
        <S.Label htmlFor="dueMonth">Mês de vencimento</S.Label>
        <S.Input
          id="dueMonth"
          name="dueMonth"
          value={formik.values.dueMonth}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <small>{getError('dueMonth', formik.errors.dueMonth)}</small>
      </S.InputGroup>
      <S.InputGroup>
        <S.Label htmlFor="dueYear">Ano de vencimento</S.Label>
        <S.Input
          id="dueYear"
          name="dueYear"
          value={formik.values.dueYear}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <small>{getError('dueYear', formik.errors.dueYear)}</small>
      </S.InputGroup>
    </S.Row>
    <S.Row>
      <S.InputGroup>
        <Button type="submit">Continuar com o pagamento</Button>
        <Button type="button" onClick={prevStep}>
          Voltar para Endereço
        </Button>
      </S.InputGroup>
    </S.Row>
  </S.FormContainer>
)
const Detalhes = ({ orderResponse }: Partial<stepProps>) => (
  <S.FormContainer>
    <S.FormTitle>Pedido Realizado - {orderResponse?.orderId}</S.FormTitle>
    <p>
      Estamos felizes em informar que seu pedido já está em processo de
      preparação e, em breve, será entregue no endereço fornecido.
    </p>
    <p>
      Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
      realizar cobranças extras.
    </p>
    <p>
      Lembre-se da importância de higienizar as mãos após o recebimento do
      pedido, garantindo assim sua segurança e bem-estar durante a refeição.
    </p>
    <p>
      Esperamos que desfrute de uma deliciosa e agradável experiência
      gastronômica. Bom apetite!
    </p>
  </S.FormContainer>
)
export default CheckoutForm
