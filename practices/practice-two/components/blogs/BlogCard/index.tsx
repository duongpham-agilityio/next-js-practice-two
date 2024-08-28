'use client';

import { memo } from 'react';
import Image from 'next/image';
import { Card, CardBody } from '@nextui-org/react';
import clsx from 'clsx';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';

// Constants
import { BLUR_DATA_URL } from '@/constants';
// Types
import { BlogType } from '@/models';
// Components
import { Button, OpenBlogButton } from '@/components';

export interface BlogCardProps
  extends Pick<
    BlogType,
    'title' | 'author' | 'imageURL' | 'externalLink' | 'id'
  > {
  href?: string;
  large?: boolean;
  onDelete?: (blogId: BlogType['id']) => void;
  onEdit?: (blogId: BlogType['id']) => void;
}

const BlogCard = ({
  id,
  author,
  imageURL,
  title,
  externalLink,
  href = '',
  large = false,
  onDelete,
  onEdit,
}: BlogCardProps) => {
  const handleDelete = () => onDelete && onDelete(id);
  const handleEdit = () => onEdit && onEdit(id);

  return (
    <Card className="bg-background-400 rounded-none h-full">
      <CardBody className="overflow-visible p-0 flex flex-col">
        <div
          className={clsx(
            'w-full relative [&:hover>.blog-action]:flex  [&:hover>.blog-action-overlay]:block',
            large ? 'h-80' : 'h-80 lg:h-52',
          )}
        >
          <Image
            fill
            alt="Card background"
            blurDataURL={BLUR_DATA_URL.DYNAMIC_IMAGE}
            className="object-cover"
            placeholder="blur"
            sizes={`(max-width: 576px) 300px, (max-width: 767px) ${large ? '350px' : '300px'}, ${large ? '550px' : '350px'}`}
            src={imageURL}
          />
          <div className="blog-action-overlay hidden absolute inset-0 bg-black opacity-80" />
          <div className="blog-action hidden absolute inset-0 z-10  items-center justify-center gap-3">
            <Button isIconOnly onClick={handleDelete}>
              <FaTrash />
            </Button>
            <Button isIconOnly onClick={handleEdit}>
              <FaPencilAlt />
            </Button>
          </div>
        </div>
        <section className="flex-1 flex flex-col px-5 py-10 text-text-primary  justify-between items-start">
          <p className="uppercase text-red-primary">{author}</p>
          <h2 className="text-xl lg:text-3xl py-5 flex-1">{title}</h2>
          <OpenBlogButton
            href={externalLink ?? href}
            isExternal={Boolean(externalLink)}
            title={title}
          />
        </section>
      </CardBody>
    </Card>
  );
};

export default memo(BlogCard);
