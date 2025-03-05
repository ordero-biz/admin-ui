## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Git Workflow

This section describes the branching and merge process used in this project to ensure efficient collaboration and maintainable code.

### Branching Strategy
- **Main (`main`)**:
    - This is the production-ready branch. Only thoroughly tested and approved changes are merged here.
- **QA (`qa`)**:
    - This is the pre-production testing branch where approved features and fixes from development branches are merged and tested before moving to `main`.
- **Feature Branches (`feat/<ticket-number>-<feature-name>`)**:
    - All new features are developed on dedicated feature branches created from `qa`.
    - The branch name must include the ticket number, separated by a hyphen from the feature name. Example: `feat/1234-add-user-auth`.
- **Bug Fix Branches (`fix/<ticket-number>-<feature-name>`)**:
    - All bug fixes are developed on dedicated bug fix branches created from `qa`.
    - The branch name must include the ticket number, separated by a hyphen from the fix description. Example: `fix/5678-fix-login-bug`.
- **Documentation Branches (`doc/<ticket-number>-<feature-name>`)**:
    - Any updates or additions to the project documentation are developed on separate documentation branches created from `qa`.
    - The branch name must include the ticket number, separated by a hyphen from the feature name or topic being documented. Example: `doc/9101-update-readme`.

---

### Workflow Steps

#### 1. Creating a New Branch

All work must be done on dedicated branches based on `qa`. Depending on the nature of the task, follow the branch naming conventions below:

- **Feature Branches**: Use `feat/<ticket-number>-<feature-name>`.  
  Example: `feat/1234-add-user-auth`
- **Bug Fix Branches**: Use `fix/<ticket-number>-<bug-fix-description>`.  
  Example: `fix/5678-fix-login-bug`
- **Documentation Branches**: Use `doc/<ticket-number>-<topic-name>`.  
  Example: `doc/9101-update-readme`

##### Steps to Create a Branch:
1. Check out the `qa` branch.
   ```bash
   git checkout qa
   git pull origin qa
   ```
2. Create a new branch using the appropriate naming convention.
   ```bash
   git checkout -b <branch-name>
   ```

Example for a feature:
```bash
git checkout -b feat/1234-add-user-auth
```

Example for a bug fix:
```bash
git checkout -b fix/5678-fix-login-bug
```

Example for documentation:
```bash
git checkout -b doc/9101-update-readme
```

---

#### 3. Committing Changes
- Use meaningful commit messages that describe the changes for each commit.
  ```bash
  git add .
  git commit -m "Add meaningful description (Ticket: <ticket-number>)"
  ```

#### 4. Pushing Changes
- Push your branch to the remote repository for review.
  ```bash
  git push origin <branch-name>
  ```
  Example (features):
  ```bash
  git push origin feat/1234-add-user-auth
  ```
  Example (bug fixes):
  ```bash
  git push origin fix/5678-fix-login-bug
  ```
  Example (documentation):
  ```bash
  git push origin doc/9101-update-readme
  ```

#### 5. Creating a Pull Request (PR)
- Create a PR to merge your branch into `qa`.
- Ensure all tests pass and the code is reviewed before merging.
- **All PRs into `qa` must be merged using the `Squash` merge strategy**, so that the feature or fix is represented as a single commit in `qa`.

#### 6. Merging `qa` into `main`

To promote changes from `qa` to `main`, follow the steps below:

1. Create a pull request (PR) from `qa` to `main`.
2. Ensure all tests pass and the PR is thoroughly reviewed by the team.
3. **Use the `Merge Commit` strategy to merge the PR**.
    - This ensures a clear history and traceability between branches, preserving the context of individual commits.

#### 7. Keeping QA Branch in Sync with Main

To keep the `qa` branch in sync with the `main` branch, you can periodically merge changes from the `main` branch into the `qa` branch. Follow these steps:

1. **Fetch the latest changes from the remote repository:**

   ```sh
   git fetch origin
   ```

2. **Switch to the `qa` branch:**

   ```sh
   git checkout qa
   ```

3. **Merge the latest changes from the `main` branch into the `qa` branch:**

   ```sh
   git merge origin/main
   ```

4. **Push the updated `qa` branch to the remote repository:**

   ```sh
   git push origin qa
   ```

### Summary of Merge Strategies

- **Feature/Bug Fix/Documentation branch to `qa`**: Use the `Squash` merge strategy.
- **`qa` to `main`**: Use the `Merge Commit` strategy.
- **`main` to `qa`**: Use the `Merge Commit` strategy.

---

### Squash Merge Guidelines

- **Squash Merges** into `qa`: Consolidate multiple commits from a feature, fix, or documentation branch into a single commit for clarity.

#### For Features:
- Format: `feat(<ticket-number>) <message>`
- Example:
  ```plaintext
  feat(1234) Add user authentication
  ```

#### For Bug Fixes:
- Format: `fix(<ticket-number>) <message>`
- Example:
  ```plaintext
  fix(5678) Resolve login page validation errors
  ```

#### For Documentation:
- Format: `doc(<ticket-number>) <message>`
- Example:
  ```plaintext
  doc(9101) Update README.md for user auth setup
  ```

---

### Restrictions and Guidelines
1. **Direct merges into `main` are not allowed.**
    - All changes must go through `qa` first.
2. **Direct merges into `qa` are not allowed.**
    - All changes must be made through pull requests (PRs) only.
3. Pull requests must adhere to the squash merge strategy and follow the defined commit message conventions.
4. Always ensure your branch is up-to-date with its base branch before creating a PR:
   ```bash
   git checkout <your-branch>
   git pull origin qa
   ```

---

This ensures a clean and organized git history with clear traceability between branches, pull requests, and the associated tickets, including for documentation changes.