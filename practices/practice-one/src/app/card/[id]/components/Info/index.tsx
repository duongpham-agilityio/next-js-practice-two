import { memo } from 'react';
import { Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';

// Helpers
import { getTimeString } from '@helpers/time';

// Mocks
import { skinCards } from '@mocks/card';

export type InfoCardProps = {
  skin: number;
  cardNumber: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

const InfoCard = ({
  skin,
  cardNumber,
  name,
  createdAt,
  updatedAt,
}: InfoCardProps): JSX.Element => {
  const imageURL: string = skinCards[skin];

  return (
    <Flex mt={10} gap={45}>
      <Image src={imageURL} alt="The skin for card" width={351} height={223} />

      <UnorderedList flex={1} fontSize="lg" color="primary">
        <ListItem pb={2}>
          <Text>
            <Text as="span" fontWeight="bold">
              Card number:
            </Text>
            <Text as="span" px={3}>
              {cardNumber}
            </Text>
          </Text>
        </ListItem>
        <ListItem py={2}>
          <Text>
            <Text as="span" fontWeight="bold">
              Name:
            </Text>
            <Text as="span" px={3}>
              {name}
            </Text>
          </Text>
        </ListItem>
        <ListItem py={2}>
          <Text>
            <Text as="span" fontWeight="bold">
              Created at:
            </Text>
            <Text as="span" px={3}>
              {getTimeString(new Date(createdAt))}
            </Text>
          </Text>
        </ListItem>
        <ListItem py={2}>
          <Text>
            <Text as="span" fontWeight="bold">
              Updated at:
            </Text>
            <Text as="span" px={3}>
              {getTimeString(new Date(updatedAt))}
            </Text>
          </Text>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};

export default memo(InfoCard);
