# Blog TO

Welcome to the Blog Project! This project is a brief description of your blog project, e.g., "a personal blog platform that allows users to create, edit, and publish articles on various topics.".

## Requirements

- Use this design - [here](https://www.gradient.com/blog/) for practice
- CRUD blog

## Features

- **Blog Management**:

  - **Create Blog**:

    - Users can easily create new blog blogs using a user-friendly form. The form includes fields for the blog title, content, image and author. Users can input text, adding an image link.

  - **Edit Blog**:

    - Existing blogs can be modified using a similar form. Users can update the title, content, image link. The form allows users to review their changes before saving them, ensuring accuracy and consistency.

  - **Delete Blog**:

    - Users have the option to delete blogs they no longer wish to keep. The deletion process is straightforward and ensures that blogs are permanently removed from the system, making them inaccessible to readers.

- **Categories & Topic**:

  - Organize blogs using categories and topic for better content discovery

- **View Details**: Users can view the full details of individual blog posts.
- **Details Displayed**:
  - **Title**: The title of the blog.
  - **Content**: The full content of the blog.
  - **Image**: The image associated with the blog (if available).
  - **Author**: The name of the blog author.
- **Navigation**: Access blog details from a list or search results.

## Targets

- Understand and apply knowledge of Next.js to build an application
- Supports responsiveness
- Support dark/light
- GenerateViewport
- TurboPack
- Built-in image optimizer
- Improved SEO support
- Improvements to metadata handling
- Server Actions
- App Router
- Fetching data with Server Component
- Fetching Data
- Rendering
- Streaming
- Revalidate
- Using file default(error.tsx, not-found.tsx, layout.tsx, loading.tsx, ..)
- Next.js compiler Apply some hooks:
  - useSearchParams
  - usePathname
  - userRouter
  - useFormStatus
  - useFormState
  - Code splitting
- Apply storybook
- Apply React Hook Form for validate form
- Apply Unit test

## Tech stacks

- [Next 14](https://nextjs.org/docs/getting-started/installation)
- [React 18](https://react.dev/)
- [NextUI](https://nextui.org/)
- [Storybook](https://storybook.js.org/)
- [jest](https://jestjs.io/docs/getting-started)

## Prerequisites

- [Node.js >= 20](https://nodejs.org/)
- [pnpm >= 9](https://pnpm.io/installation)

## Base dependencies

- [Next 14](https://nextjs.org/docs/getting-started/installation)
- [React 18](https://react.dev/)
- [NextUI](https://nextui.org/) to build shared UIs.
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [jest](https://jestjs.io/docs/getting-started) and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) for testing.

## Folder structure

```
.
└── practice-two/
   ├── assets/
   ├── components/
   ├── constants/
   ├── helpers/
   ├── hocs/
   ├── interfaces/
   ├── mocks/
   ├── app/
   ├── providers/
   ├── actions/
   ├── index.html
   ├── package.json
   └── README.md
```

## How to develop

### Clone the project

```
* SSH: git clone git@gitlab.asoft-python.com:duong.pham/nextjs-training.git
```

### Install dependencies

- Step 1: Move to folder
  ```
  cd nextjs-training
  ```
- Step 2: Move to branch feature/practice-two
  ```
  git checkout feature/practice-two
  ```
- Step 3: Move to folder
  ```
  cd  practices/practice-two
  ```
- Step 4: Now you need to install packages
  ```
  pnpm install
  ```

### Commands Used for the Project

<b>_IMPORTANT_:</b> Create a `.env` file and follow the instructions in `.env.example`.

- `pnpm dev`: run project on dev mode (run storybook, json-server)
- `pnpm build`: build project prepare for deployment
- `pnpm storybook`: run storybook
- `pnpm json-server`: start json-server with option delay 2000ms

### Develop Tool

- Zusty: [docs](https://github.com/oslabs-beta/Zusty) and [install chrome extension](https://chromewebstore.google.com/detail/zusty/ckdnkkilcbkocfdpcaohdehnbeaefndo)
