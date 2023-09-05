# TypeScript Base

Node version: 18.16.1

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Dependencies:

- [`react`]
- [`react-dom`]
- [`next`]
- [`axios`]
- [`prop-types`]
- [`sass`]
- [`lodash`]
- [`bluebird`]
- [`postcss`]
- [`autoprefixer`]
- [`react-hook-form`]
- [`yup`]


Development dependencies:

- [`eslint`]
- [`eslint-config-next`]
- [`eslint-plugin-react`]
- [`eslint-plugin-react-hooks`]
- [`eslint-config-prettier`]
- [`eslint-config-standard`]
- [`eslint-plugin-import`]
- [`eslint-plugin-node`]
- [`eslint-plugin-prettier`]
- [`eslint-plugin-promise`]
- [`husky`]
- [`prettier`]
- [`typescript`]

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Folder structure

The current project folder structure can be summarized in the following terms:

- cloudformation: **Cloudformation** directory for Amazon Web Services related stuffs.

- docs: Directory for documents.

- public: Assets will be placed in the public directory.

- src/modules: Files that are related to the same feature and can be grouped together will be placed within the **modules** folder.

- src/common: The common directory should be used for everything that isn't a module. This is where you will find the **components**, **utils**, **hooks** directory.

- src/layouts: This is where the components that are used across the application such as **navbar**, **footer** will be placed.

- src/pages: **Next.js** directory to place the route files.
=======
# Backoffice Base
## Getting started

To make it easy for you to get started with Github, here's a list of recommended next steps.

## Add your files

- [ ] Clone the proyect or push an existing Git repository with the following command:

```

git clone https://github.com/steplix/frontend-backoffice-base.git
cd fronend-backoffice-base
npm i 
or
cd existing_repo
git remote add origin https://github.com/steplix/frontend-backoffice-base.git
git branch -M main
git push -uf origin main
```
## Collaborate with your team

- [ ] [Create a new pull request](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
- [ ] [Branch naming strategy] ( feature/[Id ticket]_[Short description separated with -] )
- [ ] [Commit strategy]( [Id ticket] Clear description of what has been done )

***
# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README
Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
