'use client';

import { FaPenFancy } from 'react-icons/fa6';

// Components
import { Button } from '@/components';

const CreateBlogButton = () => (
  <Button startContent={<FaPenFancy />}>Add blog</Button>
);

export default CreateBlogButton;
