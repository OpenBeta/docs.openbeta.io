---
sidebar_position: 4
title: "Dev Onboarding Checklist"
sidebar_label: "Dev Onboarding Checklist"
---

## General Checklist
:::info Please make sure to go through the [general onboarding]() first.
:::

## New Devs
- [ ] If you are not familiar with working on collaborative projects on GitHub, you could watch this video: [Git & GitHub: GitHub Workflow for Open Source](https://www.youtube.com/watch?v=4VY0kHqIqyU)
- [ ] We also recommend watching [this one](https://www.youtube.com/watch?v=Uszj_k0DGsg) to understand how fork, branch and pull requests work.

Please make sure you understand the following:
- [ ] GitHub: be able to fork a repo and submit a pull-request
- [ ] GitHub: be able to rebase your branch with remote

Now you have learned the basics, let's get our hands dirty! 

## Challenge 1: Git and GitHub Best Practices

Suitable for: all devs

Estimated time: 20 mins

Following the instructions to create your first pull requests in our documentation repo.


1. Fork [docs.openbeta.io repo](https://github.com/OpenBeta/docs.openbeta.io/tree/develop)
2. Clone it to your local machine. `git clone url-of-your-forked-repo`
3. Open it with your favorite code editor, and create a new branch. Lets's call it `add-yun`(replace yun with your name).
4. Go to `all-contributors.md` file, answer the questions in there. save the file.
5. Go to your terminal, commit the changes you just made. Write a meaningful commit message, could be "add Yun's response to all contributors file".
6. Push your branch to the remote repo with `git push --set-upstream add-yun`.
7. Go to the forked repo GitHub page, here you should see a `Compare & Pull request` reminder from GitHub, click on the big green button to create a pull request. Here you could choose where you want to compare it to, choose our original repo and create a pr. 
8. Once you have submit your PR, assign one of your maintainers to review it. 
9. Keep an eye on your PR for comments and change requests. When everything is good to go, it will be merged to our `develop` branch and then get realeased to production.

🎉 Congratulations, you just finished your first dev bootcamp challenge and contributed to openbeta!

## Challenge 2: Build the project on your local machine
### All devs
Get your API keys.

### Frontend
Build the [OpenTacos](https://github.com/openbeta/open-tacos) project on your machine.

### Backend
Build the [GraphQL API](https://github.com/OpenBeta/openbeta-graphql) project on your machine.

### Full-Stack
Build the [OpenTacos](https://github.com/openbeta/open-tacos) project on your machine.
Build the [GraphQL API](https://github.com/OpenBeta/openbeta-graphql) project on your machine.

## Challenge 3: Find your first issue to work on

- [ ] Browse issues with labels [`help wanted`](https://github.com/OpenBeta/openbeta-graphql/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) or [`good first issue`](https://github.com/OpenBeta/openbeta-graphql/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
- [ ] Make sure no one is working on it at the moment. Assign yourself to the task.
- [ ] Discuss your solutions in the issue and get feedback from other developers.
- [ ] If you need more help, don't hesitate to ask in Discord **#openbeta-dev** channel.
- [ ] Start coding! Please follow the Git and GitHub Best Practices in Challenge 1.
