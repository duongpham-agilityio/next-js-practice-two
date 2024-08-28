'use client';

import { ChangeEvent, useState } from 'react';
import clsx from 'clsx';
import { Textarea } from '@nextui-org/react';
import { FaMinus, FaPlus } from 'react-icons/fa';

// Models
import { BlogBodyType } from '@/models';
// Components
import { Button, Input } from '@/components';
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
  ) =>
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
      <div className="text-text-primary">
        {sections.map(({ id, subtitle, content }, index) => {
          const changeSubtitle = (e: ChangeEvent<HTMLInputElement>) =>
            handleChangeSection(id, 'subtitle', e.target.value);
          const changeContent = (e: ChangeEvent<HTMLInputElement>) =>
            handleChangeSection(id, 'content', e.target.value);
          const removeSection = () => handleRemoveSection(id);
          const isError: boolean = index === 0 ? isInvalid : false;

          return (
            <section key={index}>
              <div className="pb-2">
                <div className="flex justify-start gap-5">
                  <p>Section: {index + 1}</p>
                  <Button
                    isIconOnly
                    className="w-fit h-fit text-lg px-1"
                    onClick={removeSection}
                  >
                    <FaMinus />
                  </Button>
                </div>
                <div className="mt-2 flex flex-col gap-3">
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
                </div>
              </div>
            </section>
          );
        })}
        <div className="flex justify-end">
          <Button
            isIconOnly
            className="w-fit h-fit text-lg p-1"
            onClick={handleAddSection}
          >
            <FaPlus />
          </Button>
        </div>
      </div>
    </>
  );
};
