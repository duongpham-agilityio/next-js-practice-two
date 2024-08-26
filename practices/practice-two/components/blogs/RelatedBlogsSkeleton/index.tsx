'use client';

// Components
import { BlogCardSkeleton, Container } from '@/components';

export const RelatedBlogsSkeleton = () => (
  <section className="flex flex-col gap-10">
    <Container
      as="ul"
      className="flex gap-5 mt-5 overflow-x-scroll xl:overflow-x-visible"
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <li
          key={index}
          className="w-80 flex-shrink-0 xl:flex-shrink rounded-xl overflow-hidden"
        >
          <BlogCardSkeleton key={index} />
        </li>
      ))}
    </Container>
  </section>
);
