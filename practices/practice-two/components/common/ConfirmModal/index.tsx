import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';

// Components
import { Button } from '@/components';
// Constants
import { CONFIRM_MESSAGE } from '@/constants';

interface ConfirmModalProps {
  onClose: () => void;
  onAccept: () => void;
}

const ConfirmModal = ({ onAccept, onClose }: ConfirmModalProps) => (
  <Modal
    isOpen
    classNames={{
      wrapper: 'p-5',
      closeButton: 'text-text-primary text-xl',
    }}
    placement="center"
    onClose={onClose}
  >
    <ModalContent>
      <ModalHeader />
      <ModalBody>
        <p className="text-text-primary">{CONFIRM_MESSAGE.DELETE_BLOG}</p>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" variant="light" onClick={onClose}>
          Close
        </Button>
        <Button color="primary" onClick={onAccept}>
          Accept
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default ConfirmModal;
