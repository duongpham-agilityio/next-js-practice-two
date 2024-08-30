import Image from 'next/image';
import { FaShareAlt } from 'react-icons/fa';

// Components
import { Container } from '@/components';
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
    <div className="relative w-full h-48 md:h-96 xl:h-[402px]">
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
    </div>
    <h1 className="text-text-primary text-xl md:text-3xl xl:text-4xl">
      {title}
    </h1>
    <div className="text-text-primary flex flex-col gap-2">
      <p className="text-xs md:hidden">{createdAt}</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold">{author}</p>
          <p className="text-xs">Investor</p>
        </div>
        <div className="flex items-center gap-3 h-11">
          <p className="text-xs hidden md:block">{createdAt}</p>
          <p className="inline-flex items-center gap-1 text-red-dark">
            Share <FaShareAlt />
          </p>
        </div>
      </div>
    </div>
  </Container>
);
