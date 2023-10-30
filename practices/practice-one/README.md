# Card Management

### Overview

- This is the website for manage card.
- Design:
  - Card Management [here](https://www.figma.com/file/QVmxPvUitGS5SfBYXJilRk/E-Banking---Card-management?type=design&node-id=1%3A597&mode=dev)
- Plan: [here](https://docs.google.com/document/d/1f38v9bEX4qFom-wFSPWr-fSjpmKMEtiV2lg_o2RZOjo/edit)
- App workflow: update to late
- Deploy: [here](https://card-management-beta.vercel.app/)

### Targets

- Understand NextJs
- Custom theme with ChakraUI
- Manage store with zustand

### Requirements

- Home:
  - See all card
  - You can the search by name, sort, filter
  - You can add, active, close, inactive card
  - Pagination
- Detail:
  - Update to late....

### Information

- Timeline
  - Estimate day: 4 days
  - Actual time: Update to late
- Techniques:
  - NextJs: [14.0.0](https://nextjs.org/)
  - ChakraUI:[v2.8.1](https://chakra-ui.com/getting-started)
  - TypeScript [v5.2.2](https://www.typescriptlang.org/download)
  - Eslint [v8.0.1](https://eslint.org/docs/latest/use/getting-started#quick-start)
  - Prettier [v2.8.7](https://prettier.io/docs/en/install.html)
  - Zustand: [v4.4.1](https://docs.pmnd.rs/zustand/getting-started/introduction)
- Editor: Visual Studio Code.

### Development Environment

- Node [v16.20.0](https://nodejs.org/en/)
- Pnpm [v8.6.5](https://pnpm.io/installation)

### Main App Features

- Home:
  - View all card
  - Add, update status, search, sort , and filter card
- Detail:
  - View detail card

### Getting Started

- Step 1: Clone repository
  - With HTTPS :
    ```
    git clone https://gitlab.asoft-python.com/duong.pham/nextjs-training.git
    ```
  - With SSH:
    ```
    git clone git@gitlab.asoft-python.com:duong.pham/nextjs-training.git
    ```
- Step 2: Move to branch feature/practice-three
  ```
  git checkout feature/practice-one
  ```
- Step 3: Move to folder
  ```
  cd  practices/practice-one
  ```
- Step 4: Now you need to install packages
  ```
  pnpm install
  ```
- Step 5: After installing the packages
  ```
  pnpm start
  ```
- Step 6: Open [localhost](http://localhost:5173) to see the website
