// Models
import { BlogBodyType } from '@/models';
// Constants
import { REGEXP, ERROR_MESSAGE } from '@/constants';
// Hooks
import { BlogFormValueType } from '@/hooks';

export const RULE_BLOG_FORM = {
  AUTHOR: {
    required: ERROR_MESSAGE.REQUIRE_FIELD,
  },
  IMAGE_URL: {
    required: ERROR_MESSAGE.REQUIRE_FIELD,
    pattern: {
      value: REGEXP.LINK,
      message: ERROR_MESSAGE.LINK,
    },
  },
  TITLE: {
    required: ERROR_MESSAGE.REQUIRE_FIELD,
  },
  TOPIC: {
    required: ERROR_MESSAGE.REQUIRE_FIELD,
  },
  BODY: {
    validate: (value: BlogBodyType[], formValue: BlogFormValueType) => {
      const firstSection: BlogBodyType = value[0];

      if (
        !formValue?.externalLink &&
        (!firstSection.subtitle || !firstSection.content)
      )
        return ERROR_MESSAGE.REQUIRE_FIELD;
    },
  },
  EXTERNAL_LINK: {
    validate: (value: string | undefined) =>
      value && !REGEXP.LINK.test(value) ? ERROR_MESSAGE.LINK : undefined,
  },
};
