'use client';

import { useQuery } from '@tanstack/react-query';
import { Flex, IconButton } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

// Hooks
import { useToggleForm } from '@hooks/index';

// Constants
import { ROUTES } from '@constants/url';
import { ACTIONS } from '@constants/actions';

// Components
import Fallback from '@components/Fallback';
import Info from './components/Info';
import ModalCustom from '@components/Modal';
import FormUpdate from './components/FormUpdate';

// Service
import { getCardById } from '@services/card';

// Icons
import { BackIcon, PencilIcon } from '@assets/icons';

// Types
import { ICard } from '@interfaces/card';

const CardDetail = ({ params }: { params: { id: string } }): JSX.Element => {
  const { id } = params;
  const router = useRouter();
  const { isOpen: isOpenUpdateForm, toggle: toggleUpdateForm } = useToggleForm(
    ACTIONS.EDIT,
  );
  const { data, isLoading } = useQuery<ICard>({
    queryKey: [ROUTES.CARD, id],
    queryFn: async (): Promise<ICard> => await getCardById(id),
  });

  /**
   * Handle back to previous page
   * @returns
   */
  const handleGoBack = useCallback((): void => router.back(), [router]);

  if (!data || isLoading) return <Fallback />;

  const { skin, cardNumber, name, createdAt, updatedAt } = data;

  return (
    <>
      {/* Actions */}
      <Flex justifyContent="flex-end" gap={4}>
        <IconButton
          w={105}
          h={55}
          borderRadius="lg"
          aria-label="The button go back previous page"
          bg="secondary"
          icon={<BackIcon />}
          onClick={handleGoBack}
        />
        <IconButton
          w={105}
          h={55}
          borderRadius="lg"
          aria-label="The button edit"
          bg="secondary"
          icon={<PencilIcon />}
          onClick={toggleUpdateForm}
        />
      </Flex>

      {/* Info card*/}
      <Info
        skin={skin}
        cardNumber={cardNumber}
        name={name}
        createdAt={createdAt}
        updatedAt={updatedAt}
      />

      {isOpenUpdateForm && (
        <ModalCustom title="Update" isOpen onClose={toggleUpdateForm}>
          <FormUpdate data={data} onCloseForm={toggleUpdateForm} />
        </ModalCustom>
      )}
    </>
  );
};

export default CardDetail;
