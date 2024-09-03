import Link from 'next/link';

// Components
import { Button, Container, BlogCard, Box } from '@/components';
// Constants
import { ROUTE } from '@/constants';
// Services
import { fetchRelatedBlogs } from '@/services';

const RelatedBlogs = async () => {
  const blogs = await fetchRelatedBlogs();

  return (
    <Box as="section" className="flex flex-col gap-10">
      <Container
        as="ul"
        className="grid grid-cols-[320px,320px,320px,320px] xl:grid-cols-4 gap-5 mt-5 overflow-x-scroll xl:overflow-x-visible"
      >
        {blogs.slice(0, 4).map(({ id, author, imageURL, title }) => (
          <li key={id} className="rounded-xl overflow-hidden">
            <BlogCard
              author={author}
              href={`${ROUTE.BLOGS}/${id}`}
              id={id}
              imageURL={imageURL}
              title={title}
            />
          </li>
        ))}
      </Container>
      <Box className="flex items-center justify-center">
        <Button as={Link} href="/">
          See all post
        </Button>
      </Box>
    </Box>
  );
};

export default RelatedBlogs;
