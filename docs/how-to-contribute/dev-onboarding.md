---
sidebar_position: 4
title: "Dev Onboarding"
sidebar_label: "Dev Onboarding"
---

## General Checklist
:::info 
Please make sure to go through the [General Onboarding](./general-onboarding.md) first.
:::

## New Devs
In case you aren't familiar with working on collaborative projects on GitHub, you could watch this video: [Git & GitHub: GitHub Workflow for Open Source](https://www.youtube.com/watch?v=4VY0kHqIqyU), and read this article:[How to Contribute to an Open Source Project](https://css-tricks.com/how-to-contribute-to-an-open-source-project/).

We also recommend watching this one: [Git for Professionals Tutorial - Tools & Concepts for Mastering Version Control with Git
](https://www.youtube.com/watch?v=Uszj_k0DGsg) to understand how fork, branch and pull requests work.

Please make sure you understand the following:
- [ ] GitHub: be able to fork a repo and submit a pull-request
- [ ] GitHub: be able to rebase your branch with remote

Now you have learned the basics, let's get our hands dirty! 

## Challenge 1: Git and GitHub Best Practices

**Suitable for:** all devs

**Estimated time:** 30 mins

**What you will do:** you will build Open Beta frontend project on your local machine, make changes to `contributors-map.json` file, and create your first pull request in openbeta/opentacos repo. 

### Pre-requisitions
Make sure you have the following tools installed on your local machine:
- [ ] Git
- [ ] Node
- [ ] yarn

### Steps

1. Fork and clone the [openbeta/opentacos repo](https://github.com/OpenBeta/open-tacos)

    `git clone url-of-your-forked-repo`

2. Run `yarn install` to install all the dependencies. 

Then run `yarn dev` to run the project locally. The application is now available at : http://localhost:3000

3. Create a new branch in Git.

    `git checkout -b add-contributor-yun`

Replace *yun* with your name.


4. Update your fork with the latest Openbeta changes. 
- Add Openbeta as an upstream remote. 
    
    `git remote add openbeta https://github.com/OpenBeta/open-tacos.git`
- Fetch the latest changes from Openbeta
    
    `git fetch openbeta develop`
- In the branch are working on, update the changes.
    
    `git rebase openbeta/develop`

- If there are any merge conflicts, you'll want to resolve it to be able to merge later on.

:::tip 
Open Beta repo is updated frequently. It's a good idea to rebase your branch often and keep it up-to-date with the Openbeta remote repo(not your forked repo).
:::

5. Go to `contributors-map.json` file in the `/src/assets` folder, and add your information there.

:::tip
To get coordinates, you could follow [this instruction](https://support.google.com/maps/answer/18539?hl=en&co=GENIE.Platform%3DDesktop).
:::

To find your favorite crag UUID, you could:
- Go to [openbeta.io](https://openbeta.io/) and search it. Check its coordinates and correct them if necessary.
- If it's not there, create one, and add its coordinates.
- Get the crag's UUID in the url.

If you don't climb, you could leave the `favorite_crag_uuid` field empty(`""`). 

6. Once you have changes, save the file, go to your terminal, and commit the changes you just made. Write a meaningful commit message, could be `chore(docs):add Yun's information to openbeta-devs file`.

:::tip
We recommend following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages.
:::

When you commit, a series of CI checks are run, including linting, tests, build, etc. If your commit fails at either of them, you won't be able to commit your changes. 

7. Once you successfully commit your changes, push your branch to the remote repo with `git push origin --set-upstream add-contributor-yun`. 

`origin` here is the default upstream name for your forked repo. If you renamed it, use that name instead. We are pusing commits to your forked repo because new contributos are not allowed to directly push to Open Beta repo, for good reasons.

8. Go to the forked repo's GitHub page, here you should see a `Compare & Pull request` reminder from GitHub, click on the big green button to create a pull request. You could choose where you want to compare it to, choose our original repo and create a PR. 

9. Once you have submit your PR, assign `@actuallyyun` to review it.

10. Keep an eye on your PR for comments and change requests. When everything is good to go, it will be merged to our `develop` branch and then get realeased to production.

11. Once your PR is merged, you should be able to see yourself in our contibutors' map here(coming soon...).

🎉 Congratulations, you just finished your first dev bootcamp challenge and contributed to Open Beta!

## Challenge 2: Set up environment for development

**Suitable for:** all devs 

**Estimated time:** 10 mins

### All devs
Get your API keys. We are automating this process. Before that, please email to `viet at openbeta.io`.

### Frontend
You already have the project build in the first challenge.
### Backend & Full Stack
Build the [GraphQL API](https://github.com/OpenBeta/openbeta-graphql) project on your machine.You could find the instructions in the project `README.md` file.

:::tip
If you run into issues, feel free to get help in our [Discord channel](https://discord.com/invite/ptpnWWNkJx).
:::

## Challenge 3: Find Your First Issue to Work on

Now you have the project up and running, it's time to work on your first issue!

- [ ] Browse issues with labels `help wanted` or `good first issue`.
- [ ] Make sure no one is working on it at the moment. Leave a comment if you are interested, and our team will assign you.
- [ ] Discuss your solutions in the issue and get feedback from other developers.
- [ ] If you need more help, don't hesitate to ask in Discord **#openbeta-dev** and **need-help** channel.
- [ ] Start coding! Please follow the Git and GitHub Best Practices in Challenge 1, [Organization Workflow and Approval Process](./general-onboarding.md).

:::tip
You might wonder, what is a good PR? [This is our understanding.](./good-pr.md) We highly recommend you to take a look.
:::