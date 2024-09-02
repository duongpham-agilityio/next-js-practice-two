import Image from 'next/image';
import { FaShareAlt } from 'react-icons/fa';

// Components
import { Box, Container, Text } from '@/components';
// Constants
import { BLUR_DATA_URL } from '@/constants';
// Models
import { BlogType } from '@/models';

export interface BlogDetailHeaderProps
  extends Pick<BlogType, 'author' | 'imageURL' | 'title'> {
  createdAt: string;
}

export const BlogDetailHeader = ({
  author,
  createdAt,
  title,
  imageURL,
}: BlogDetailHeaderProps) => (
  <Container
    as="section"
    className="mt-10 flex flex-col gap-5 md:gap-10 xl:w-[720px]"
  >
    <Box className="relative w-full h-48 md:h-96 xl:h-[402px]">
      <Image
        fill
        priority
        alt={`This is the ${title}`}
        blurDataURL={BLUR_DATA_URL.DYNAMIC_IMAGE}
        className="rounded-xl"
        placeholder="blur"
        sizes="(min-width: 1280px) 680px, (min-width: 1040px) 984px, (min-width: 780px) 728px, (min-width: 680px) 600px, calc(94.44vw - 23px)"
        src={imageURL}
      />
    </Box>
    <Text as="h1" className="text-xl md:text-3xl xl:text-4xl">
      {title}
    </Text>
    <Box className="flex flex-col gap-2">
      <Text className="text-xs md:hidden">{createdAt}</Text>
      <Box className="flex justify-between items-center">
        <Box>
          <Text className="font-bold">{author}</Text>
          <Text className="text-xs">Investor</Text>
        </Box>
        <Box className="flex items-center gap-3 h-11">
          <Text className="text-xs hidden md:block">{createdAt}</Text>
          <Text className="!text-red-dark inline-flex items-center gap-1 ">
            Share <FaShareAlt />
          </Text>
        </Box>
      </Box>
    </Box>
  </Container>
);
