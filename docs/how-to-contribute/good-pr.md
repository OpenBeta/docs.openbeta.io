---
sidebar_position: 4
title: "What is a good pull request? "
sidebar_label: "Good PR Guide"
---


Before we start talking about good pull requests(PR), we should be clear about the purpose of PRs. A PR is how your code will be merged to the base branch, and we use PRs to conduct code reviews to make sure that newly added code meets our code quality.

We think the simplest way to judge a PR is **if it's easy to review**.

Let's be honest, reviewing code is hard, some might say it is 
> ...one of the most difficult and time-consuming part of the software development process...

[*--The (written) unwritten guide to pull requests*](https://www.atlassian.com/blog/git/written-unwritten-guide-pull-requests)

To make reviewers' life easier, we recommend these principles:

### 1. Smaller is better

Some suggest a good pull request(PR) should not have more than 250 line code changes([*Anatomy of a perfect pull request*](https://opensource.com/article/18/6/anatomy-perfect-pull-request)), we say even smaller. 

If your PR is exploding, stop and think how you can break it down into smaller pieces. One way to do it is to follow the single responsibility principle, make sure your PR solves one problem at a time. 

### 2. Keep it in scope

On the same note as the first principle, if you have changes that are not related to the current PR, do not commit them to this PR, rather open a new one. 

For example, you are creating a frontend UI component. Along the way, you changed a global button style. Open a new PR for the button style change. 

### 3. Write a clear title

When a reviewer sees your title, she should know what this PR is about. So use strong verbs, provide context, and define the scope of your PR.

Look at the following PR titles, which ones look more clear to you?

![pr title example](/img/onboarding/good-pr/pr_title_examples.png)

We recommend following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format.

The following are some examples:
- If you're fixing a bug: `fix: use correct next-auth server-side api`
- If you're refactoring some code: `refactor: abstract button style to a CSS class`
- If you're developing a new feature: `feat: make FA field editable`
- If your changes are not related to the product: `chore: add config for linting TypeScript in Visual Studio Code`
- If you update documentation: `docs: add actuallyyun as a contributor for ideas `
### 4. Add description to your PR

Don't assume that the reviewer is familiar with what you are working on in your PR. Assume otherwise. 

Use descriptions to guide the reviewer by answering the following questions:

- Which issue is this PR addressing? Add reference to the GitHub issue.
- What was changed? 
- Add an *after* screenshots/screen recordings.If it's not obvious, use a paint program to highlight/annotate the new changes. 
- Anything in particular you want the reviewer to pay attention to? This could be things that you are unsure about, or possible risks of your change. 

Here is an example of a good PR description:
![pr description example](/img/onboarding/good-pr/pr_description_example.png)


### 5. Create it early

It's a good idea to get feedback early and correct your path if necessary. 

You don't have to create a PR only when you feel you have finished everything. View PR and code reviews as part of the working progress. Do not code in the vacuum. As an open source project, PR is one of our main channels of communication.

If your PR is not ready for reviewing yet, you could put it into `Draft` mode, or add `WIP` tag to your PR.

### 6. Make sure it passes CI tests and it deploys

If you PR fails some of the checks, or have conflicts with `develop` branch, make sure to resolve the issues first.



### References:

1.[The (written) unwritten guide to pull requests](https://www.atlassian.com/blog/git/written-unwritten-guide-pull-requests), Blake Riosa, JULY 25,2019

2.[Anatomy of a perfect pull request](https://opensource.com/article/18/6/anatomy-perfect-pull-request),Hugo Dias, June 20, 2018