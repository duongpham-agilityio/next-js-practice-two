import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardBody } from '@nextui-org/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { GrFormNext } from 'react-icons/gr';
import clsx from 'clsx';

// Constants
import { BLUR_DATA_URL } from '@/constants';
// Types
import { BlogType } from '@/models';

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
  <Card className="bg-background-400 rounded-none">
    <CardBody className="overflow-visible p-0">
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
      <section className="px-5 py-10 text-text-primary flex flex-col items-start">
        <p className="uppercase text-red-primary">{author}</p>
        <h2 className="text-xl lg:text-3xl py-5 flex-1">{title}</h2>
        <Link
          className="text-red-primary inline-flex items-center gap-2"
          href={externalLink ?? href}
          target={externalLink ? '_blank' : '_self'}
        >
          Read more {externalLink ? <FaExternalLinkAlt /> : <GrFormNext />}
        </Link>
      </section>
    </CardBody>
  </Card>
);

export default memo(BlogCard);
