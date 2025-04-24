---
sidebar_position: 4
title: "Dev Onboarding"
sidebar_label: "Dev Onboarding"
---

## Pre-requisitions:

- [ ] You completed the [General Onboarding](./general-onboarding.md).
- [ ] You are comfortable working with our tech stack: JavaScript (TypeScript), HTML, CSS, TailwindCSS, Node.js, GraphQL, Python, Pandas, MongoDB, Docker and Kubernetes.
- [ ] You are familiar with Git and GitHub, and know the standard workflow of contributing to an open source project.

We prepared four challenges for you to complete. You could choose to complete all of them, or just the ones that are relevant to you. 

The first one, challenge 0, is meant for new devs who are not familiar with working on collaborative project on GitHub. Feel free to skip it if this is not your case.

## Challenge 0: Git and GitHub for open souce

Use the following three materials to get familiar with Git and GitHub:

1. Watch the video [Git & GitHub: GitHub Workflow for Open Source](https://www.youtube.com/watch?v=4VY0kHqIqyU).
2. Read the article [How to Contribute to an Open Source Project](https://css-tricks.com/how-to-contribute-to-an-open-source-project/).
3. Follow [Git for Professionals Tutorial - Tools & Concepts for Mastering Version Control with Git
](https://www.youtube.com/watch?v=Uszj_k0DGsg) .

Before moving on, please make sure you understand the following:
- [ ] How to fork a repo in GitHub
- [ ] How to rebase your branch with remote 
- [ ] How to submit a pull request from your forked repo 

## Challenge 1: Git and GitHub Best Practices

**Suitable for:** all devs

**Estimated time:** 30 mins

**What you will do:** you will build Open Beta frontend project on your local machine, make changes to `contributors-map.geojson` file, and create your first pull request in openbeta/opentacos repo. 

### Pre-requisitions
Make sure you have the following tools installed on your local machine:
- [ ] Git
- [ ] Node
- [ ] yarn

### Steps

1. Fork and clone the [openbeta/opentacos repo](https://github.com/OpenBeta/open-tacos) using the following command:

    `git clone url-of-your-forked-repo`

2. Run `yarn install` to install all the dependencies. 

3. Run `yarn dev` to run the project locally. The application is now available at : http://localhost:3000

4. Create a new branch in Git.

    `git checkout -b add-contributor-yun`

Replace *yun* with your name.

5. Update your fork with the latest Openbeta changes. 
- Add Openbeta as an upstream remote. 
    
    `git remote add openbeta https://github.com/OpenBeta/open-tacos.git`
- Fetch the latest changes from Openbeta.
    
    `git fetch openbeta develop`
- In the branch you are working on, update the changes.
    
    `git rebase openbeta/develop`

- If there are any merge conflicts, you'll want to resolve it to be able to merge later on.

:::tip Reminder
Open Beta repo is updated frequently. It's a good idea to rebase your branch often and keep it up-to-date with the original Openbeta remote repo(not your forked repo).
:::

6. Navigate to `contributors-map.geojson` file in the `/src/assets` folder, and add your information as a new element in the `"features"` array. 

The fields are:
- `"firstName`
- `"favoriteCrag"`
- `"coordinates"`

To get coordinates, you could follow [this instruction](https://support.google.com/maps/answer/18539?hl=en&co=GENIE.Platform%3DDesktop).The order of the coordinates is **[longitude, latitude]**. The coordinate does not have to be where you are exactly, a local landmark or a generic location of the town you live is fine.

To find your favorite crag UUID, you could:
- Go to [openbeta.io](https://openbeta.io/) and search it. Check its coordinates and correct them if necessary.
- If it's not there, create one, and add its coordinates.
- Get the crag's UUID in the url.

If you don't climb, you could leave the `favorite_crag_uuid` field empty(`""`). 

7. Now you have changes, save the file, go to your terminal, and commit the changes you just made. Write a meaningful commit message, could be `chore(docs):add Yun's information to openbeta-devs file`.

:::tip
We recommend following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages.
:::

When you commit, a series of CI checks are run, including linting, tests, build, etc. If your commit fails at either of them, you won't be able to commit your changes. 

8. Once you successfully commit your changes, push your branch to the remote repo with `git push origin --set-upstream add-contributor-yun`. 

`origin` here is the default upstream name for your forked repo. If you renamed it, use that name instead. We are pushing commits to your forked repo because new contributos are not allowed to directly push to Open Beta repo, for good reasons.

9. Go to the forked repo's GitHub page in your browser, here you should see a `Compare & Pull request` reminder from GitHub, click on the big green button to create a pull request. You could choose where you want to compare it to. Choose our original repo and create a PR. 

10. After submiting your PR, assign `@actuallyyun` to review it.

11. Keep an eye on your PR for comments and change requests. When everything is good to go, it will be merged to our `develop` branch and then get realeased to production.

12. Once your PR is merged, you should be able to see yourself in our contibutors' map here(coming soon...).

🎉 Congratulations, you just finished your a dev bootcamp challenge and contributed to OpenBeta!

## Challenge 2: Set up environment for development

**Suitable for:** all devs 

**Estimated time:** 10 mins

### - All devs
Get your API keys. We are automating this process. Before that, please email to `viet at openbeta.io`.

### - Frontend
You already have the project build in the first challenge.
### - Backend & Full Stack
Build the [GraphQL API](https://github.com/OpenBeta/openbeta-graphql) project on your machine.You could find the instructions in the project `README.md` file.

:::tip
If you run into issues, feel free to get help in our [Discord channel](https://discord.com/invite/ptpnWWNkJx).
:::

## Challenge 3: Find your first issue to work on

Now you have the project up and running, it's time to work on your first issue! The following steps will guide you through the process.

1. Browse issues with labels `help wanted` or `good first issue`.
2. Make sure no one is working on it at the moment. Leave a comment if you are interested, and our team will assign you.
3. Discuss your solutions in the issue and get feedback from other developers.
4. If you need more help, don't hesitate to ask in Discord **#openbeta-dev** and **need-help** channel.
5. Start coding! Please follow the Git and GitHub Best Practices in Challenge 1, and [Organization workflow and approval Process](./general-onboarding.md).

## What's next?

You might wonder, what is a good PR? This is our understanding: [OpenBeta  pull request guide](./good-pr.md). We highly recommend you to take a look.
