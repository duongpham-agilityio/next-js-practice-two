'use client';

import Image from 'next/image';
import { MouseEvent, memo, useCallback } from 'react';
import { Center, IconButton, Td, Text, Tr } from '@chakra-ui/react';

// Constants
import { ROUTES } from '@constants/url';

// Icons
import { CloseIcon, CopyIcon, LinkIcon, UnlinkIcon } from '@assets/icons';

// Mocks
import { skinCards } from '@mocks/card';

// Types
import { ICard } from '@interfaces/card';

export type RowProps = {
  skin: number;
  id: string;
  number: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  role: ICard['role'];
  status: ICard['status'];
  onCopy: (cardNumber: string) => void;
  onActive: (id: string) => void;
  onInActive: (id: string) => void;
  onClose: (id: string) => void;
  onNavigate: (path: string) => void;
};

const Row = (props: RowProps): JSX.Element => {
  const {
    id,
    skin,
    number,
    name,
    role,
    status,
    createdAt,
    updatedAt,
    onNavigate,
    onCopy,
    onActive,
    onInActive,
    onClose,
  } = props;

  const srcImage: string = skinCards[skin];

  /**
   * Passing path to parent for handle navigate
   */
  const handleNavigate = useCallback((): void => {
    const path: string = `/${ROUTES.CARD}/${id}`;

    onNavigate(path);
  }, [id, onNavigate]);

  /**
   * Passing ID to parent component for handle copy
   */
  const handleCopy = useCallback(
    (e: MouseEvent): void => {
      e.stopPropagation();
      onCopy(number);
    },
    [number, onCopy],
  );

  /**
   * Passing ID to parent component for handle active card
   */
  const handleActive = useCallback(
    (e: MouseEvent): void => {
      e.stopPropagation();
      onActive(id);
    },
    [id, onActive],
  );

  /**
   * Passing ID to parent component for handle inactive card
   */
  const handleInActive = useCallback(
    (e: MouseEvent): void => {
      e.stopPropagation();
      onInActive(id);
    },
    [id, onInActive],
  );

  /**
   * Passing ID to parent component for handle close card
   */
  const handleClose = useCallback(
    (e: MouseEvent): void => {
      e.stopPropagation();
      onClose(id);
    },
    [id, onClose],
  );

  /**
   * Handle render action icons
   * @param status for current card
   * @returns icon
   */
  const renderActionsIcon = useCallback(
    (stt: typeof status): JSX.Element => {
      const icons: { [key in typeof stt]: JSX.Element } = {
        active: (
          <IconButton
            aria-label="The button active card"
            icon={<LinkIcon />}
            bg="successRGBA"
            onClick={handleActive}
          />
        ),

        inactive: (
          <IconButton
            aria-label="The button inactive card"
            icon={<UnlinkIcon />}
            bg="warningRGBA"
            onClick={handleInActive}
          />
        ),

        close: (
          <IconButton
            aria-label="The button close card"
            icon={<CloseIcon />}
            bg="dangerRGBA"
            onClick={handleClose}
          />
        ),
      };

      return icons[stt];
    },
    [handleActive, handleClose, handleInActive],
  );

  /**
   * Render status of card
   * @param roleValue is role of card owner
   * @param stt is status of card
   * @returns
   */
  const renderStatus = useCallback(
    (roleValue: typeof role, stt: typeof status): JSX.Element => {
      const statusStyle: { [key in typeof stt]: string } = {
        active: 'success',
        inactive: 'warning',
        close: 'danger',
      };

      return (
        <Center justifyContent="flex-end" gap={3}>
          <Text textTransform="capitalize" color={statusStyle[stt]}>
            {roleValue === 'admin' && 'primary, '}
            {stt}
          </Text>
          {renderActionsIcon(stt)}
        </Center>
      );
    },
    [renderActionsIcon],
  );

  return (
    <Tr key={number} backdropFilter="blur(28px)" onClick={handleNavigate}>
      {/* Card number */}
      <Td>
        <Center gap={4}>
          <Text as="span">{number}</Text>
          <IconButton
            aria-label="The button copy card number"
            icon={<CopyIcon />}
            bg="grayRGBA"
            onClick={handleCopy}
          />
        </Center>
      </Td>

      {/* Name owner */}
      <Td>
        <Text as="span">{name}</Text>
      </Td>

      {/* Skin card */}
      <Td>
        <Image
          width={79}
          height={49}
          src={srcImage}
          alt={`This is the card of ${name}`}
        />
      </Td>

      {/* Status */}
      <Td>
        <Text as="span">{renderStatus(role, status)}</Text>
      </Td>

      {/* CreatedAt */}
      <Td>
        <Text as="span">{createdAt}</Text>
      </Td>

      {/* UpdatedAt */}
      <Td>
        <Text as="span">{updatedAt}</Text>
      </Td>

      {/* Actions */}
      <Td>
        <Center gap={3}>
          {renderActionsIcon('active')}
          {renderActionsIcon('inactive')}
          {renderActionsIcon('close')}
        </Center>
      </Td>
    </Tr>
  );
};

export default memo(Row);
