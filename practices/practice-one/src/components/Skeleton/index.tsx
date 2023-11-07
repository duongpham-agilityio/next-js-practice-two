import { Skeleton as SkeletonChakra, VStack } from '@chakra-ui/react';
import { TABLE_SIZE } from '@constants/variables';
import { ReactNode, memo } from 'react';

type SkeletonProps = {
  isLoading?: boolean;
  size?: number;
  children?: ReactNode;
};

const Skeleton = ({
  isLoading = false,
  size = TABLE_SIZE,
  children,
}: SkeletonProps) => (
  <>
    {children}
    {isLoading && (
      <VStack w="full" mt={8}>
        {Array.from({ length: size }).map((_, index: number) => (
          <SkeletonChakra
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            startColor="primary"
            endColor="white"
            h={50}
            w="full"
            borderRadius="none"
          />
        ))}
      </VStack>
    )}
  </>
);

export default memo(Skeleton);
