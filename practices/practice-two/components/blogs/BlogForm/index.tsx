'use client';

import React, { useTransition } from 'react';
import { useFormState } from 'react-dom';
import { Controller } from 'react-hook-form';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Select,
  SelectItem,
  Spinner,
} from '@nextui-org/react';
import clsx from 'clsx';

// Components
import { BlogContentForm, Input } from '@/components';
// Mocks
import { TOPICS } from '@/mocks';
// Hooks
import { BlogFormValueType, useBlogForm } from '@/hooks';
// Constants
import { RULE_BLOG_FORM } from '@/constants';
// Actions
import { FormStateType } from '@/actions';

export interface BlogFormProps {
  title?: string;
  defaultValue: BlogFormValueType;
  submitAction: (
    preState: FormStateType,
    formData: BlogFormValueType,
  ) => Promise<FormStateType>;
  onCloseForm?: () => void;
}

/**
 * ISSUES:
 * Can't found to solution show alert message after submit success/fail
 */
const BlogForm = ({
  defaultValue,
  title = 'Add a new blog',
  submitAction,
  onCloseForm,
}: BlogFormProps) => {
  const [, action] = useFormState<FormStateType, BlogFormValueType>(
    submitAction,
    {
      message: '',
      isError: false,
    },
  );
  const [isSubmitting, startTransition] = useTransition();
  const { blogFormControl, checkError, handleSubmit } = useBlogForm({
    value: defaultValue,
  });

  const submit = handleSubmit((data) => {
    startTransition(() => {
      action(data);
    });
  });

  return (
    <>
      <Modal isOpen={true} onOpenChange={onCloseForm}>
        <ModalContent
          as="form"
          className="text-text-primary w-full h-full md:h-[550px] justify-start py-10 overflow-y-scroll"
          onSubmit={submit}
        >
          <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
          <ModalBody className="h-fit text-sm flex-none">
            <Controller
              control={blogFormControl}
              name="author"
              render={({ field, fieldState: { error } }) => (
                <Input {...field} {...checkError(error)} placeholder="Author" />
              )}
              rules={RULE_BLOG_FORM.AUTHOR}
            />
            <Controller
              control={blogFormControl}
              name="title"
              render={({ field, fieldState: { error } }) => (
                <Input {...field} {...checkError(error)} placeholder="Title" />
              )}
              rules={RULE_BLOG_FORM.TITLE}
            />
            <Controller
              control={blogFormControl}
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
              control={blogFormControl}
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
              control={blogFormControl}
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
                  items={TOPICS}
                  placeholder="Select an topic"
                >
                  {({ id, label }) => (
                    <SelectItem key={id} className="text-text-primary">
                      {label}
                    </SelectItem>
                  )}
                </Select>
              )}
              rules={RULE_BLOG_FORM.TOPIC}
            />
            <Controller
              control={blogFormControl}
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
            <Button color="primary" type="submit">
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {isSubmitting && (
        <Modal
          isOpen
          classNames={{
            closeButton: 'hidden',
            base: 'bg-transparent border-unset shadow-none flex items-center justify-center',
          }}
        >
          <ModalContent>
            <Spinner color="white" size="lg" />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default BlogForm;
