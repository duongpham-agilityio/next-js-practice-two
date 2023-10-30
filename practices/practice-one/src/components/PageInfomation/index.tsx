import { Heading, Text, VStack } from '@chakra-ui/react';
import { memo } from 'react';

const PageInformation = (): JSX.Element => (
  <VStack as="section" maxW={966} gap={5}>
    {/* Title */}
    <Heading
      as="h2"
      fontSize="xl"
      bg="titleRGBA"
      backgroundClip="text"
      fontWeight="extrabold"
    >
      Card Management
    </Heading>

    {/* Description */}
    <Text textAlign="center" maxW={634}>
      Below are your cards, you can take some actions such as create a new,
      adding or editing info on your card
    </Text>
  </VStack>
);

export default memo(PageInformation);
