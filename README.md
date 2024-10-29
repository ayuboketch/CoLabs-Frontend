<h1>
  <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt="Waving Hand" width="25px" height="25px"> 
  Welcome to CoLabs - Open Source Collaboration Platform
</h1>

Welcome to **Colabs**, an open-source project built with **Vite**, **TypeScript**, and **Tailwind CSS**. Colabs is a platform for developers to collaborate on open-source projects across different tech stacks.

This README serves as a guide for developers looking to contribute to the Colabs-Frontend project, from prerequisites and setup to creating pull requests (PRs).

---

## Table of Contents
- [Project Overview](#project-overview)
- [Figma Design](#figma-design)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Cloning the Project](#cloning-the-project)
  - [Installing Dependencies](#installing-dependencies)
- [Running the Project](#running-the-project)
  - [Development](#development)
  - [Unit Testing](#unit-testing)
  - [E2E Testing](#e2e-testing)
- [Contributing](#contributing)
  - [Creating a Feature Branch](#creating-a-feature-branch)
  - [Committing Changes](#committing-changes)
  - [Creating a Pull Request](#creating-a-pull-request)
- [License](#license)

---

## Project Overview
Colabs is a collaborative platform for developers to build, share, and contribute to open-source projects. The front end is powered by:
- **Vite** for fast build times,
- **TypeScript** for static typing,
- **Tailwind CSS** for rapid UI development,
- **Vitest** for unit testing,
- **End-to-end (E2E) testing** for integration tests.

---

## Figma Design

You can find the project design on Figma [here](<https://www.figma.com/design/2r8LJbRj7TEXZ7obQvVeb8?node-id=4-598>).

---

## Prerequisites
Before you start contributing, ensure you have the following tools installed:

1. **Git** - [Download Git](https://git-scm.com/)
   - Version Control System to clone and manage branches.

2. **Node.js** & **npm/pnpm** - [Download Node.js](https://nodejs.org/)
   - Node.js runtime (LTS version recommended).
   - npm is included with Node.js, or you can install **pnpm** for faster package management.
   - Run this command to install pnpm globally:
     ```bash
     npm install -g pnpm
     ```

3. **Visual Studio Code (VS Code)** - [Download VS Code](https://code.visualstudio.com/)
   - Recommended code editor for this project.
   - Install the **ESLint** and **Prettier** extensions for code quality and formatting.

4. **Vite** (installed during setup) - [Learn more about Vite](https://vitejs.dev/)
   - Lightning-fast front-end tool to scaffold the project.

---

## Getting Started

### Cloning the Project
To start contributing, first, clone the repository from GitHub:
```bash
git clone https://github.com/SpaceyaTech/CoLabs-Frontend.git
``` 

### Installing Dependencies
The project uses `pnpm` for package management. Run the following command to install all required dependencies:

```bash
pnpm install
```
If you're using `npm`, you can run `npm install` instead. 

### Running the Project
#### Development
To start the development server, run:

```bash
pnpm dev
```
This will launch the project locally. Open your browser and navigate to http://localhost:5173 to view the app (or another port if 5173 is already in use) 

---

## Contributing

We welcome contributions from the community! Follow the steps below to contribute to Colabs.

Pull the latest changes from the main branch:

```bash
git checkout main
git pull origin main
```

### Creating a Feature Branch
To create a new feature branch, run:

```bash
git checkout -b feature/your-feature-name
```

### Committing Changes

Please follow the Conventional Commits specification when committing changes:

```bash
git commit -m "feat: add new feature"
```

### Creating a Pull Request

Push your branch to the remote repository:

```bash
git push origin feature/your-feature-name
```

Create a pull request on GitHub:

1. Go to the repository on GitHub.
2. Click on "Pull Requests" and select "New Pull Request".
3. Ensure your PR has a clear title and description.
4. Link any related issues in the PR description (if applicable).

Your PR will be reviewed by maintainers before it can be merged. 

# Thank You for Contributing to CoLabs! 🎉











