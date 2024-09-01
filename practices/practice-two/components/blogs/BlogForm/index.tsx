'use client';

import dynamic from 'next/dynamic';
import { FormEventHandler } from 'react';
import clsx from 'clsx';
import {
  Control,
  Controller,
  ControllerFieldState,
  useFormState,
} from 'react-hook-form';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from '@nextui-org/react';

// Hooks
import { BlogFormValueType } from '@/hooks';
// Components
import { Button, Input, BlogContentForm, LoadingIndicator } from '@/components';
// Constants
import { FORM_TITLE, RULE_BLOG_FORM } from '@/constants';
// Mocks
import { TOPICS } from '@/mocks';

interface BlogFormProps {
  isSubmitting?: boolean;
  title?: string;
  control: Control<BlogFormValueType>;
  onSubmit: () => void | Promise<void>;
  onCloseForm: () => void;
}

const BlogForm = ({
  isSubmitting = false,
  title = FORM_TITLE.ADD_BLOG,
  control,
  onCloseForm,
  onSubmit,
}: BlogFormProps) => {
  const { dirtyFields } = useFormState({
    control,
  });

  const isDirty = Boolean(Object.keys(dirtyFields).length);

  const handleSubmit: FormEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();

    if (isDirty) return onSubmit();
  };

  const checkError = (error: ControllerFieldState['error']) => ({
    isInvalid: !!error && !!error.message,
  });

  return (
    <>
      <Modal isOpen={true} onOpenChange={onCloseForm}>
        <ModalContent
          as="form"
          className="text-text-primary w-full h-full md:h-[550px] justify-start py-10 overflow-y-scroll"
          onSubmit={handleSubmit}
        >
          <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
          <ModalBody className="h-fit text-sm flex-none">
            <Controller
              control={control}
              name="author"
              render={({ field, fieldState: { error } }) => (
                <Input {...field} {...checkError(error)} placeholder="Author" />
              )}
              rules={RULE_BLOG_FORM.AUTHOR}
            />
            <Controller
              control={control}
              name="title"
              render={({ field, fieldState: { error } }) => (
                <Input {...field} {...checkError(error)} placeholder="Title" />
              )}
              rules={RULE_BLOG_FORM.TITLE}
            />
            <Controller
              control={control}
              name="imageURL"
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  {...checkError(error)}
                  placeholder="Image URL"
                />
              )}
              rules={RULE_BLOG_FORM.IMAGE_URL}
            />
            <Controller
              control={control}
              name="externalLink"
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  {...checkError(error)}
                  placeholder="External Link"
                />
              )}
              rules={RULE_BLOG_FORM.EXTERNAL_LINK}
            />
            <Controller
              control={control}
              name="topicId"
              render={({ field, fieldState: { error } }) => (
                <Select
                  {...field}
                  classNames={{
                    base: 'w-full border-red-500',
                    trigger: clsx({
                      'h-[50px] border': true,
                      'border-border-100': !checkError(error).isInvalid,
                      'border-red-500': checkError(error).isInvalid,
                    }),
                  }}
                  defaultSelectedKeys={[field.value]}
                  items={TOPICS.slice(1)}
                  placeholder="Select an topic"
                >
                  {({ id, label }) => (
                    <SelectItem
                      key={id}
                      className="text-text-primary"
                      value={id}
                    >
                      {label}
                    </SelectItem>
                  )}
                </Select>
              )}
              rules={RULE_BLOG_FORM.TOPIC}
            />
            <Controller
              control={control}
              name="body"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <BlogContentForm
                  {...checkError(error)}
                  content={value}
                  onChangeContent={onChange}
                />
              )}
              rules={RULE_BLOG_FORM.BODY}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onCloseForm}>
              Close
            </Button>
            <Button color="primary" isDisabled={!isDirty} type="submit">
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {isSubmitting && <LoadingIndicator />}
    </>
  );
};

export default BlogForm;
