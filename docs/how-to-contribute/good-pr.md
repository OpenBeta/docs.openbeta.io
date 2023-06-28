---
sidebar_position: 6
title: "What is a Good Pull Request? "
sidebar_label: "Good PR Guideline"
---

Before we start talking about good pull requests(PR), we should be clear about the purpose of PRs. A PR is how your code is merged to the base branch, and we use PRs to conduct code reviews to make sure that newly added code meets our code quality.

We think the simplest way to judge a PR is **if it's easy to review**.

Let's be honest, reviewing code is hard, some might say it is 
> ...one of the most difficult and time-consuming part of the software development process...

*--The (written) unwritten guide to pull requests*

To make reviewers' life easier, we recommend these principals:

### 1. Smaller is better

Some suggest a good PR should not have more than 250 line code changes(*Anatomy of a perfect pull request*), we would say even smaller. If your PR is exploding, stop and think how you can break it down into smaller pieces. One way to do it is to follow the single responsibility principal, make sure your PR solves one problem at a time. 

### 2. Keep it in scope

On the same note as the first principal, if you have changes that are not related to the current PR, do not commit to this PR, rather open a new one. 

For example, you are creating a frontend UI component. Along the way, you changed a global button style. Open a new PR for the button style change. 

### 3. Write a clear title

When a reviewer see your title, she should know what this PR is about. So use strong verbs, provide context, and define the scope of your PR.

Look at the following PR titles, which ones look more clear to you?

![pr title example](/img/onboarding/good-pr/pr_title_examples.png)


### 4. Add description to your PR

Don't assume that the reviewer is familiar with what you are working on in your PR. Assuming otherwise. 

Use description to guide the reviewer: 
- Which issue is this PR addressing? (link the related issue to the PR) 
- What was changed? 
- Add screenshots/screen recordings to make it visual.
- Anything in particular you want the reviwer pay attention to? This could be things you are not sure about, or possible ricks of your change. 

Here is an example of good PR description:
![pr description example](/img/onboarding/good-pr/pr_description_example.png)

### 5. Create it early

You don't have to create a PR only when you feel you have finished everything. See PR and code reviews as part of the working progress. Do not code in the vacuum. As an open source project, PR is one of our main channels of communication.

It's a good idea to get feedback early and correct your path if neccessary. If your PR is not ready for reviewing yet, you could mark it as `Draft`, or add `WIP` tag to your PR.

### 6. Make sure it passes CI tests and it deploys

If you PR fails some of the checks, or have conflicts with `develop` branch, make sure to resolve the issues first.



**References:**

1.[The (written) unwritten guide to pull requests](https://www.atlassian.com/blog/git/written-unwritten-guide-pull-requests), Blake Riosa, JULY 25,2019

2.[Anatomy of a perfect pull request](https://opensource.com/article/18/6/anatomy-perfect-pull-request),Hugo Dias, June 20, 2018