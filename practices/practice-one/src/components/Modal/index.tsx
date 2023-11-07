import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { ReactNode, memo } from 'react';

export type TModalProps = {
  children?: ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

const Component = (props: TModalProps): JSX.Element => {
  const { children, title, ...rest } = props;

  return (
    <Modal {...rest} isCentered size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          fontSize={{
            base: 'xl',
            lg: '5xl',
          }}
        >
          {title}
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

const ModalCustom = memo(Component);

export default ModalCustom;
