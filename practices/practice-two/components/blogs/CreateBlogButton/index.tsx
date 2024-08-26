'use client';

import dynamic from 'next/dynamic';
import { useDisclosure } from '@nextui-org/react';
import { FaPenFancy } from 'react-icons/fa6';

// Actions
import { addBlog } from '@/actions';
// Components
import { Button } from '@/components';
// Constants
import { DEFAULT_VALUE_BLOG_FORM } from '@/constants/data';

const BlogForm = dynamic(() => import('@/components/blogs/BlogForm'));

const CreateBlogButton = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button startContent={<FaPenFancy />} onClick={onOpen}>
        Add blog
      </Button>
      {isOpen && (
        <BlogForm
          defaultValue={DEFAULT_VALUE_BLOG_FORM}
          submitAction={addBlog}
          onCloseForm={onClose}
        />
      )}
    </>
  );
};

export default CreateBlogButton;
