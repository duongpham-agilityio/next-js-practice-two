'use client';

import dynamic from 'next/dynamic';

// Components
import { Box, Button, Text } from '@/components';
// Hooks
import { useLoadMore, useTopics } from '@/hooks';
// Models
import { BlogsType, Topics } from '@/models';

const TopicList = dynamic(() => import('@/components/topics/TopicList'));
const BlogListTemplate = dynamic(
  () => import('@/components/blogs/BlogListTemplate'),
);

export interface BlogListSectionProps {
  topics: Topics;
  blogs: BlogsType;
}

const BlogListSection = ({ blogs, topics }: BlogListSectionProps) => {
  const {
    topic: { id: topicSelected },
    handleChangeTopic,
  } = useTopics(topics);
  const { dataPerPage, hasNextPage, fetchNextPage } = useLoadMore(
    topicSelected === topics[0].id
      ? blogs
      : blogs.filter(({ topicId }) => topicSelected === topicId),
  );

  const isShowMessage: boolean = Boolean(dataPerPage.length);

  return (
    <>
      <TopicList
        selected={topicSelected}
        topics={topics}
        onChangeTopic={handleChangeTopic}
      />
      {!isShowMessage ? (
        <Text className="text-center md:text-xl xl:text-3xl">
          Oops! No Blogs Available
        </Text>
      ) : (
        dataPerPage.map((blogs, index) => (
          <BlogListTemplate key={index} blogs={blogs} />
        ))
      )}
      {hasNextPage && (
        <Box className="flex items-center justify-center">
          <Button className="px-8 py-6" onClick={fetchNextPage}>
            Load more
          </Button>
        </Box>
      )}
    </>
  );
};

export default BlogListSection;
