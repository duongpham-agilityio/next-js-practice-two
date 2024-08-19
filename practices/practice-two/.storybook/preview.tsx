import React from 'react';
import type { Preview } from '@storybook/react';

//Providers
import { ThemeProvider } from '../providers';

// Styles
import '../styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],

  tags: ['autodocs']
};

export default preview;
