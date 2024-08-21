import { memo } from 'react';
import Image from 'next/image';

// Models
import { BlogType } from '@/models';
// Constants
import { BLUR_DATA_URL } from '@/constants';
// Components
import { Container, OpenBlogButton } from '@/components';

export interface HighlightBlogProps
  extends Pick<BlogType, 'author' | 'title' | 'externalLink' | 'imageURL'> {
  href?: string;
  description: string;
  createdAt: string;
}

const HighlightBlog = ({
  author,
  createdAt,
  description,
  title,
  imageURL,
  externalLink = '',
  href = '',
}: HighlightBlogProps) => (
  <Container as="section" className="text-text-primary text-center">
    <div className="relative m-auto w-full h-[330px] md:w-[384px] md:h-[216px]">
      <Image
        fill
        priority
        alt={author}
        blurDataURL={BLUR_DATA_URL.DYNAMIC_IMAGE}
        className="rounded-xl"
        objectFit="cover"
        placeholder="blur"
        src={imageURL}
      />
    </div>
    <div className="flex flex-col items-center gap-5 mt-10">
      <h2 className="text-xl md:text-3xl">{title}</h2>
      <p className="text-xs">
        {createdAt} • {author}
      </p>
      <p className="md:w-[720px]">{description}</p>
      <OpenBlogButton
        href={externalLink || href}
        isExternal={Boolean(externalLink)}
      />
    </div>
  </Container>
);

export default memo(HighlightBlog);
