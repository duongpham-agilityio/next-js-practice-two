type TSuccessHandler<T = never> = (data?: T) => void;
type TErrorHandler = (error: Error) => void;
type TUseClipboardHandler = (
  text: string,
  successHandler?: TSuccessHandler,
  errorHandler?: TErrorHandler,
) => Promise<void>;
export type TUseClipboard = {
  copyText: TUseClipboardHandler;
  pasteText: (
    successHandler?: TSuccessHandler<string>,
    errorHandler?: TErrorHandler,
  ) => Promise<string | undefined>;
};

export const useClipBoard = (): TUseClipboard => {
  /**
   * Handle copy text
   * @param text
   * @param successHandler
   * @param errorHandler
   */
  const copyText = async (
    text: string,
    successHandler?: TSuccessHandler,
    errorHandler?: TErrorHandler,
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      successHandler && successHandler();
    } catch (error) {
      errorHandler && errorHandler(error as Error);
    }
  };

  /**
   * Handle paste text
   * @param successHandler
   * @param errorHandler
   * @returns text in clipboard
   */
  const pasteText = async (
    successHandler?: TSuccessHandler,
    errorHandler?: TErrorHandler,
  ): Promise<string | undefined> => {
    try {
      const text = await navigator.clipboard.readText();
      successHandler && successHandler();

      return text;
    } catch (error) {
      errorHandler && errorHandler(error as Error);
    }
  };

  return {
    copyText,
    pasteText,
  };
};
