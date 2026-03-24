# GitHub & Slack Integration Guide

This guide outlines the steps to integrate GitHub and Slack to receive real-time updates on repository events.

##  Objectives
- Stay updated in real-time about Pull Requests, Commits, and Issues.
- Monitor CI/CD pipeline results.
- Improve team collaboration through DevOps monitoring.

##  Step-by-Step Instructions

### 1. Create a Slack Channel
In your Slack workspace (e.g., **Vision**), create a dedicated channel for repository updates (e.g., `#dev-updates`).

### 2. Install GitHub App in Slack
1. In Slack, go to **Apps**.
2. Search for **GitHub**.
3. Install it using this [reference link](https://slack.com/apps/A0F7YS2SX-github).

### 3. Connect GitHub to Slack
Inside the `#dev-updates` channel, run the following command:
```bash
/github signin
```
Follow the prompts to authorize your GitHub account.

### 4. Subscribe to Repository Events
In the same Slack channel, subscribe to your repository:
```bash
/github subscribe owner/repo
```
*Example:*
```bash
/github subscribe CYNTHia-com/vision-backend
```

### 5. Customize Notifications
You can enable specific events to avoid noise:
```bash
/github subscribe owner/repo issues pulls commits deployments
```

### 6. Test the Integration
1. Create a test PR in GitHub.
2. Push a commit to the repository.
3. Open a test issue.
4. Verify that notifications appear in the `#dev-updates` channel.

##  Definition of Done
- Slack channel receives PR notifications, commit updates, and issue activity.
- Team members can see updates without opening GitHub.
- Integration works without errors.

##  Key Concepts
- **Webhooks:** How systems communicate event data.
- **Event-driven systems:** Actions triggered by specific events (e.g., PR created).
- **DevOps monitoring:** Keeping track of development flow in real-time.

##  References
- [Slack GitHub App Docs](https://slack.github.com/)
- [GitHub Notifications Docs](https://docs.github.com/en/subscriptions-and-notifications)
