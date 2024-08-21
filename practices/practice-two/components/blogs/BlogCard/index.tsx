'use client';

import { memo } from 'react';
import Image from 'next/image';
import { Card, CardBody } from '@nextui-org/react';
import clsx from 'clsx';

// Constants
import { BLUR_DATA_URL } from '@/constants';
// Types
import { BlogType } from '@/models';
// Components
import { OpenBlogButton } from '@/components';

export interface BlogCardProps
  extends Pick<BlogType, 'title' | 'author' | 'imageURL' | 'externalLink'> {
  href?: string;
  large?: boolean;
}

const BlogCard = ({
  author,
  imageURL,
  title,
  externalLink,
  href = '',
  large = false,
}: BlogCardProps) => (
  <Card className="bg-background-400 rounded-none h-full">
    <CardBody className="overflow-visible p-0 flex flex-col">
      <div className={clsx('w-full relative', large ? 'h-80' : 'h-52')}>
        <Image
          fill
          alt="Card background"
          blurDataURL={BLUR_DATA_URL.DYNAMIC_IMAGE}
          className="object-cover"
          placeholder="blur"
          src={imageURL}
        />
      </div>
      <section className="flex-1 flex flex-col px-5 py-10 text-text-primary  justify-between items-start">
        <p className="uppercase text-red-primary">{author}</p>
        <h2 className="text-xl lg:text-3xl py-5 flex-1">{title}</h2>
        <OpenBlogButton
          href={externalLink ?? href}
          isExternal={Boolean(externalLink)}
        />
      </section>
    </CardBody>
  </Card>
);

export default memo(BlogCard);
