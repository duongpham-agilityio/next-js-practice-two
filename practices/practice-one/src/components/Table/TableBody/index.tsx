'use client';

import { Tbody } from '@chakra-ui/react';
import { memo, useCallback } from 'react';

// Icons
import Row from './components/Row';
import { ICard } from '@interfaces/card';

export type TableBodyProps = {
  data: ICard[];
};

const TableBody = ({ data }: TableBodyProps): JSX.Element => {
  /**
   * Handle navigate to detail page
   * @param path
   */
  const handleNavigation = useCallback((path: string): void => {
    // TODO: Update to later
    console.log(path);
  }, []);

  /**
   * Handle copy card number
   * @param cardNumber
   */
  const handleCopyCardNumber = useCallback((cardNumber: string): void => {
    // TODO: Update to later
    console.log(cardNumber);
  }, []);

  /**
   * Handle active card
   * @param id
   */
  const handleActiveCard = useCallback((id: string): void => {
    // TODO: Update to later
    console.log(id);
  }, []);

  /**
   * Handle inactive card
   * @param id
   */
  const handleInActiveCard = useCallback((id: string): void => {
    // TODO: Update to later
    console.log(id);
  }, []);

  /**
   * Handle close card
   * @param id
   */
  const handleCloseCard = useCallback((id: string): void => {
    // TODO: Update to later
    console.log(id);
  }, []);

  return (
    <Tbody>
      {data.map((cell): JSX.Element => {
        const createdAt: string = cell.createdAt.toString();
        const updatedAt: string = cell.updatedAt.toString();

        return (
          <Row
            key={cell.id}
            {...cell}
            createdAt={createdAt}
            updatedAt={updatedAt}
            onCopy={handleCopyCardNumber}
            onActive={handleActiveCard}
            onInActive={handleInActiveCard}
            onClose={handleCloseCard}
            onNavigate={handleNavigation}
          />
        );
      })}
    </Tbody>
  );
};

export default memo(TableBody);
