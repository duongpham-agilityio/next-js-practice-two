import Image from 'next/image';

// Constants
import { BLUR_DATA_URL, ROUTE } from '@/constants';
// Components
import { Box, Container, OpenBlogButton, Text } from '@/components';
// Services
import { getHighlightBlog } from '@/services';
// Mocks
import { BLOG } from '@/mocks';
// Helpers
import { convertDateInBlog } from '@/helpers';

const HighlightBlog = async () => {
  const {
    id = '',
    author = '',
    createdAt = Date.now(),
    imageURL = '',
    title = '',
    externalLink = '',
    body,
  } = await getHighlightBlog();

  return (
    <Container as="section" className="text-center">
      <Box className="relative m-auto w-full h-[330px] md:w-[384px] md:h-[216px]">
        <Image
          fill
          priority
          alt={author}
          blurDataURL={BLUR_DATA_URL.DYNAMIC_IMAGE}
          className="rounded-xl"
          objectFit="cover"
          placeholder="blur"
          sizes="(min-width: 780px) 384px, (min-width: 680px) 560px, calc(94.44vw - 63px)"
          src={imageURL}
        />
      </Box>
      <Box className="flex flex-col items-center gap-5 mt-10">
        <Text as="h2" className="text-xl md:text-3xl">
          {title}
        </Text>
        <Text className="text-xs">
          {convertDateInBlog(createdAt)} • {author}
        </Text>
        <Text className="md:w-[720px]">
          {body[0]?.content ?? BLOG.body[0].content}
        </Text>
        <OpenBlogButton
          href={externalLink || `${ROUTE.BLOGS}/${id}`}
          isExternal={Boolean(externalLink)}
          title={title}
        />
      </Box>
    </Container>
  );
};

export default HighlightBlog;
