import Link from 'next/link';
import Image from 'next/image';

// Components
import { Container, CreateBlogButton, Switcher } from '@/components';

export const Header = () => (
  <header className="py-4">
    <Container className="flex justify-between items-center">
      <Link className="block w-20 h-20 relative" href="/">
        <Image
          fill
          priority
          alt="Logo"
          blurDataURL="data:image/webp;base64,UklGRl4DAABXRUJQVlA4WAoAAAAgAAAAjgAAbQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggcAEAAHAMAJ0BKo8AbgA+7W6tUamrrieotLuhwB2JY27gO52gZnbfiu99J3EBDXDByclE5oOK7bYP/hprGqdwMQH7L/wsf4q6umaeCuMlZmoRASz8WojODdE8AiPFwkn6SvYayqgFJw71Q2OPp4/EwAD+40h3H+A+OcrlX/5ol/b1/hpoiZ/B2gdNadWjn16FFZyLczwyCYqdsHzo94ayMkRDT6fcDtwuNKfgsx1Hn1V3uyGu6X4RBP9FPUdC4r1Fp2xY/RhWmv5qaW+vx9Yde2fY+6BDq5U4k+RzJ0spDX6K0bc8SLpZHE52Zd/8WBkzDMC958/xDOc4XQm4tXCx+ngmBrpx3SJQgTZhXndfI9YG9k6zC1tBqfIPV/LxOlc9P83yzm6LoM9ysFkUsBavp6CmSgU/ijsDQ+NHyupmXpR5KN9TGccIG8jyOMEz2P98h4W+9HIJJvA88l7uRszgTdAAnLCqWwdXjhjL8UqCqowqMAAA"
          className="object-cover"
          placeholder="blur"
          sizes="79px"
          src="/images/logo.webp"
        />
      </Link>
      <div className="flex flex-1 justify-end gap-2">
        <Switcher />
        <CreateBlogButton />
      </div>
    </Container>
  </header>
);
