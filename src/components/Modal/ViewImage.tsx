import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  const handleCloseModal = (): void => {
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered>
      <ModalOverlay />
      <ModalContent w="900px" h="632px" bg="pGray.800" borderRadius="0 0 6px 6px">
        <ModalBody p={0} maxW="900px" maxH="600px" >
          <Image w="100%" h="100%" src={imgUrl} objectFit="cover"/>
        </ModalBody>
        <ModalFooter p={0} h={8}>
          <Link href={imgUrl} isExternal w="100%" ml={2} fontSize="sm" fontWeight="normal" lineHeight="4" color="pGray.50">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
