import {
  Sidebar,
  Header,
  DivContainer,
  FlexRow,
  Label,
  Input,
  AddButton
} from './styles'
import { close as closeCheckout } from '../../store/reduces/checkout'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { CartContainer, Overlay } from '../Cart/styles'
import { open } from '../../store/reduces/cart'
import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../services/api'
import { useState, useEffect } from 'react'
import { clear } from '../../store/reduces/cart'

const Checkout = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.checkout)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const dispatch = useDispatch()
  const [showPayment, setShowPayment] = useState(false)

  const form = useFormik({
    initialValues: {
      fullName: '',
      endereco: '',
      city: '',
      CEP: '',
      number: '',
      complemento: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .max(100, 'O nome não pode ter mais de 100 caracteres')
        .required('O campo é obrigatório'),
      endereco: Yup.string()
        .max(200, 'O endereço não pode ter mais de 200 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'A cidade precisa ter pelo menos 3 caracteres')
        .max(100, 'A cidade não pode ter mais de 100 caracteres')
        .required('O campo é obrigatório'),
      CEP: Yup.string()
        .min(9, 'O CEP precisa ter 9 caracteres')
        .max(9, 'O CEP precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .max(10, 'O número não pode ter mais de 10 caracteres')
        .required('O campo é obrigatório'),
      complemento: Yup.string()
        .max(100, 'O complemento não pode ter mais de 100 caracteres')
        .optional(),
      cardName: Yup.string().when((values, schema) =>
        showPayment
          ? schema
              .max(100, 'O nome não pode ter mais de 100 caracteres')
              .required('O campo é obrigatório')
          : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        showPayment
          ? schema
              .min(19, 'O número do cartão precisa ter 16 dígitos')
              .max(19, 'O número do cartão precisa ter 16 dígitos')
              .required('O campo é obrigatório')
          : schema
      ),
      cvv: Yup.string().when((values, schema) =>
        showPayment
          ? schema
              .min(3, 'O CVV precisa ter 3 dígitos')
              .max(3, 'O CVV precisa ter 3 dígitos')
              .required('O campo é obrigatório')
          : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        showPayment
          ? schema
              .min(2, 'O mês precisa ter 2 dígitos')
              .max(2, 'O mês precisa ter 2 dígitos')
              .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido (01-12)')
              .required('O campo é obrigatório')
          : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        showPayment
          ? schema
              .min(2, 'O ano precisa ter 2 dígitos')
              .max(2, 'O ano precisa ter 2 dígitos')
              .required('O campo é obrigatório')
          : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.endereco,
            city: values.city,
            zipCode: values.CEP.replace(/\D/g, ''),
            number: Number(values.number),
            complement: values.complemento || ''
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber.replace(/\s/g, ''),
            code: Number(values.cvv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const handleClose = () => {
    dispatch(closeCheckout())
    setShowPayment(false)
  }

  const openCart = () => {
    dispatch(open())
    dispatch(closeCheckout())
    setShowPayment(false)
  }

  const continueToPayment = () => {
    form.setTouched({
      fullName: true,
      endereco: true,
      city: true,
      CEP: true,
      number: true
    })

    const hasDeliveryErrors = [
      'fullName',
      'endereco',
      'city',
      'CEP',
      'number'
    ].some((field) => {
      const value = form.values[field as keyof typeof form.values]
      return !value || value.toString().trim() === ''
    })

    if (!hasDeliveryErrors) {
      setShowPayment(true)
    }
  }

  const getTotalValue = () => {
    return items.reduce((acc, item) => acc + item.preco, 0)
  }

  // Função para formatar CEP
  const formatCEP = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 5) {
      return numbers
    }
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`
  }

  // Função para formatar número do cartão
  const formatCardNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    const groups = numbers.match(/.{1,4}/g)
    return groups ? groups.join(' ').substr(0, 19) : numbers
  }

  // Função para permitir apenas números
  const onlyNumbers = (value: string) => {
    return value.replace(/\D/g, '')
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={handleClose} />
      <Sidebar>
        {isSuccess && data ? (
          <>
            <Header>Pedido realizado - {data.orderId}</Header>
            <DivContainer>
              <p style={{ marginBottom: '16px', lineHeight: '22px' }}>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p style={{ marginBottom: '16px', lineHeight: '22px' }}>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p style={{ marginBottom: '16px', lineHeight: '22px' }}>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p style={{ marginBottom: '16px', lineHeight: '22px' }}>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </DivContainer>
            <AddButton onClick={handleClose}>Concluir</AddButton>
          </>
        ) : (
          <form onSubmit={form.handleSubmit}>
            {!showPayment ? (
              <>
                <Header>Entrega</Header>
                <DivContainer>
                  <Label htmlFor="fullName">Quem irá receber</Label>
                  <Input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={form.values.fullName}
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    className={checkInputHasError('fullName') ? 'error' : ''}
                    maxLength={100}
                  />
                  {checkInputHasError('fullName') && (
                    <small style={{ color: '#fff', fontSize: '12px' }}>
                      {form.errors.fullName}
                    </small>
                  )}
                </DivContainer>
                <DivContainer>
                  <Label htmlFor="endereco">Endereço</Label>
                  <Input
                    type="text"
                    id="endereco"
                    name="endereco"
                    value={form.values.endereco}
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    className={checkInputHasError('endereco') ? 'error' : ''}
                    maxLength={200}
                  />
                  {checkInputHasError('endereco') && (
                    <small style={{ color: '#fff', fontSize: '12px' }}>
                      {form.errors.endereco}
                    </small>
                  )}
                </DivContainer>
                <DivContainer>
                  <Label htmlFor="city">Cidade</Label>
                  <Input
                    type="text"
                    id="city"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('city') ? 'error' : ''}
                    maxLength={100}
                  />
                  {checkInputHasError('city') && (
                    <small style={{ color: '#fff', fontSize: '12px' }}>
                      {form.errors.city}
                    </small>
                  )}
                </DivContainer>
                <FlexRow>
                  <DivContainer>
                    <Label htmlFor="CEP">CEP</Label>
                    <Input
                      type="text"
                      id="CEP"
                      name="CEP"
                      value={form.values.CEP}
                      onChange={(e) => {
                        const formatted = formatCEP(e.target.value)
                        form.setFieldValue('CEP', formatted)
                      }}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('CEP') ? 'error' : ''}
                      maxLength={9}
                      placeholder="00000-000"
                    />
                    {checkInputHasError('CEP') && (
                      <small style={{ color: '#fff', fontSize: '12px' }}>
                        {form.errors.CEP}
                      </small>
                    )}
                  </DivContainer>
                  <DivContainer>
                    <Label htmlFor="number">Número</Label>
                    <Input
                      type="text"
                      id="number"
                      name="number"
                      value={form.values.number}
                      onBlur={form.handleBlur}
                      onChange={(e) => {
                        const numbers = onlyNumbers(e.target.value)
                        form.setFieldValue('number', numbers)
                      }}
                      className={checkInputHasError('number') ? 'error' : ''}
                      maxLength={10}
                    />
                    {checkInputHasError('number') && (
                      <small style={{ color: '#fff', fontSize: '12px' }}>
                        {form.errors.number}
                      </small>
                    )}
                  </DivContainer>
                </FlexRow>
                <DivContainer>
                  <Label htmlFor="complemento">Complemento (opcional)</Label>
                  <Input
                    type="text"
                    id="complemento"
                    name="complemento"
                    value={form.values.complemento}
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    maxLength={100}
                  />
                </DivContainer>
                <AddButton type="button" onClick={continueToPayment}>
                  Continuar com o pagamento
                </AddButton>
                <AddButton type="button" onClick={openCart}>
                  Voltar para o carrinho
                </AddButton>
              </>
            ) : (
              <>
                <Header>
                  Pagamento - Valor a pagar R$ {getTotalValue().toFixed(2)}
                </Header>
                <DivContainer>
                  <Label htmlFor="cardName">Nome no cartão</Label>
                  <Input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={form.values.cardName}
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    className={checkInputHasError('cardName') ? 'error' : ''}
                    maxLength={100}
                  />
                  {checkInputHasError('cardName') && (
                    <small style={{ color: '#fff', fontSize: '12px' }}>
                      {form.errors.cardName}
                    </small>
                  )}
                </DivContainer>
                <FlexRow>
                  <DivContainer>
                    <Label htmlFor="cardNumber">Número do cartão</Label>
                    <Input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onBlur={form.handleBlur}
                      onChange={(e) => {
                        const formatted = formatCardNumber(e.target.value)
                        form.setFieldValue('cardNumber', formatted)
                      }}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      maxLength={19}
                      placeholder="0000 0000 0000 0000"
                    />
                    {checkInputHasError('cardNumber') && (
                      <small style={{ color: '#fff', fontSize: '12px' }}>
                        {form.errors.cardNumber}
                      </small>
                    )}
                  </DivContainer>
                  <DivContainer>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={form.values.cvv}
                      onBlur={form.handleBlur}
                      onChange={(e) => {
                        const numbers = onlyNumbers(e.target.value)
                        form.setFieldValue('cvv', numbers)
                      }}
                      className={checkInputHasError('cvv') ? 'error' : ''}
                      maxLength={3}
                      placeholder="000"
                    />
                    {checkInputHasError('cvv') && (
                      <small style={{ color: '#fff', fontSize: '12px' }}>
                        {form.errors.cvv}
                      </small>
                    )}
                  </DivContainer>
                </FlexRow>
                <FlexRow>
                  <DivContainer>
                    <Label htmlFor="expiresMonth">Mês de vencimento</Label>
                    <Input
                      type="text"
                      id="expiresMonth"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onBlur={form.handleBlur}
                      onChange={(e) => {
                        const numbers = onlyNumbers(e.target.value)
                        form.setFieldValue('expiresMonth', numbers)
                      }}
                      className={
                        checkInputHasError('expiresMonth') ? 'error' : ''
                      }
                      maxLength={2}
                      placeholder="MM"
                    />
                    {checkInputHasError('expiresMonth') && (
                      <small style={{ color: '#fff', fontSize: '12px' }}>
                        {form.errors.expiresMonth}
                      </small>
                    )}
                  </DivContainer>
                  <DivContainer>
                    <Label htmlFor="expiresYear">Ano de vencimento</Label>
                    <Input
                      type="text"
                      id="expiresYear"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onBlur={form.handleBlur}
                      onChange={(e) => {
                        const numbers = onlyNumbers(e.target.value)
                        form.setFieldValue('expiresYear', numbers)
                      }}
                      className={
                        checkInputHasError('expiresYear') ? 'error' : ''
                      }
                      maxLength={2}
                      placeholder="AA"
                    />
                    {checkInputHasError('expiresYear') && (
                      <small style={{ color: '#fff', fontSize: '12px' }}>
                        {form.errors.expiresYear}
                      </small>
                    )}
                  </DivContainer>
                </FlexRow>
                <AddButton type="submit" disabled={isLoading}>
                  {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
                </AddButton>
                <AddButton type="button" onClick={() => setShowPayment(false)}>
                  Voltar para a edição de endereço
                </AddButton>
              </>
            )}
          </form>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Checkout
