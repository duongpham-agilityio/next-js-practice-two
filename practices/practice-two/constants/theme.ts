export const enum ThemeType {
  LightMode = 'light',
  DarkMode = 'dark',
}

export const ENDPOINT = {
  BLOGS: 'blogs',
  TOPICS: 'topics',
  HIGHLIGHT_BLOG: 'highlight',
  RELATED_BLOGS: 'relatedBlogs',
};

export const API = {
  MAIN: process.env.BLOGS_API,
  PAGINATION: process.env.PAGINATION_API,
};
