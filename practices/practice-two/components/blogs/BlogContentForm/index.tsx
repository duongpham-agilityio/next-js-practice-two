'use client';

import { ChangeEvent, useState } from 'react';
import clsx from 'clsx';
import { Textarea } from '@nextui-org/react';
import { FaMinus, FaPlus } from 'react-icons/fa';

// Models
import { BlogBodyType } from '@/models';
// Components
import { Box, Button, Input, Text } from '@/components';
// Helpers
import { findItemInListByAnyField } from '@/helpers';

export interface BlogContentFormProps {
  isInvalid: boolean;
  content: BlogBodyType[];
  onChangeContent: (content: BlogBodyType[]) => void;
}

export const BlogContentForm = ({
  isInvalid,
  content,
  onChangeContent,
}: BlogContentFormProps) => {
  const [sections, setSections] = useState<BlogBodyType[]>(content);

  const handleChangeSection = (
    sectionId: BlogBodyType['id'],
    fieldName: keyof Omit<BlogBodyType, 'id'>,
    value: string,
  ) => {
    setSections((sections) => {
      const field: BlogBodyType | undefined = findItemInListByAnyField({
        list: sections,
        field: { id: sectionId },
      });

      if (field) field[fieldName] = value;

      const newSections: BlogBodyType[] = [...sections];

      onChangeContent(newSections);

      return newSections;
    });
  };

  const handleAddSection = () =>
    setSections((sections) => [
      ...sections,
      { id: Date.now().toString(), subtitle: '', content: '' },
    ]);

  const handleRemoveSection = (sectionId: BlogBodyType['id']) =>
    setSections((sections) => {
      const newSections: BlogBodyType[] = sections.filter(
        ({ id }) =>
          id !== sectionId || (sections.length === 1 && id === sectionId),
      );

      onChangeContent(newSections);

      return newSections;
    });

  return (
    <>
      <Box className="text-text-primary">
        {sections.map(({ id, subtitle, content }, index) => {
          const changeSubtitle = (e: ChangeEvent<HTMLInputElement>) =>
            handleChangeSection(id, 'subtitle', e.target.value);
          const changeContent = (e: ChangeEvent<HTMLInputElement>) =>
            handleChangeSection(id, 'content', e.target.value);
          const removeSection = () => handleRemoveSection(id);
          const isError: boolean = index === 0 ? isInvalid : false;

          return (
            <Box as="section" key={index}>
              <Box className="pb-2">
                <Box className="flex justify-start gap-5">
                  <Text>Section: {index + 1}</Text>
                  <Button
                    isIconOnly
                    className="w-fit h-fit text-lg px-1"
                    onClick={removeSection}
                  >
                    <FaMinus />
                  </Button>
                </Box>
                <Box className="mt-2 flex flex-col gap-3">
                  <Input
                    isInvalid={isError}
                    placeholder="Subtitle"
                    value={subtitle}
                    onChange={changeSubtitle}
                  />
                  <Textarea
                    className={clsx({
                      'border rounded-xl': true,
                      'border-border-100': !isError,
                      'border-red-500': isError,
                    })}
                    placeholder="Content"
                    value={content}
                    onChange={changeContent}
                  />
                </Box>
              </Box>
            </Box>
          );
        })}
        <Box className="flex justify-end">
          <Button
            isIconOnly
            className="w-fit h-fit text-lg p-1"
            onClick={handleAddSection}
          >
            <FaPlus />
          </Button>
        </Box>
      </Box>
    </>
  );
};
