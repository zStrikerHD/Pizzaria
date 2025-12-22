import { Overlay, ModalContainer, CloseButton, ModalContent } from './styles'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </Overlay>
  )
}

export default Modal
