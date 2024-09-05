// Components
import { Box, Container, Text } from '@/components';
// Models
import { BlogBodyType } from '@/models';

export interface BlogDetailContentProps {
  body: BlogBodyType[];
}

const BlogDetailContent = ({ body }: BlogDetailContentProps) => (
  <Box as="section" className="bg-background-400 my-5 py-10">
    <Container className="flex flex-col gap-10 xl:w-[720px]">
      {body.map(({ id, content, subtitle }) => (
        <Box key={id}>
          <Text as="h2" className="pb-5 text-lg xl:text-2xl">
            {subtitle}
          </Text>
          <Text className="text-sm xl:text-lg">{content}</Text>
        </Box>
      ))}
    </Container>
  </Box>
);

export default BlogDetailContent;
