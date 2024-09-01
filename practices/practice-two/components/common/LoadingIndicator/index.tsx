'use client';

import { Modal, ModalContent, Spinner } from '@nextui-org/react';

export const LoadingIndicator = () => (
  <Modal
    isOpen
    classNames={{
      closeButton: 'hidden',
      base: 'bg-transparent border-unset shadow-none flex items-center justify-center',
    }}
  >
    <ModalContent>
      <Spinner color="white" size="lg" />
    </ModalContent>
  </Modal>
);
