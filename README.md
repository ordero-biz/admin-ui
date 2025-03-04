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

#### 1. Creating a Feature Branch
- Always branch off from `qa`.
- Use the naming convention: `feat/<ticket-number>-<feature-name>`.
  ```bash
  git checkout qa
  git pull origin qa
  git checkout -b feat/<ticket-number>-<feature-name>
  ```
  Example:
  ```bash
  git checkout -b feat/1234-add-user-auth
  ```

#### 2. Creating a Bug Fix Branch
- Always branch off from `qa`.
- Use the naming convention: `fix/<ticket-number>-<feature-name>`.
  ```bash
  git checkout qa
  git pull origin qa
  git checkout -b fix/<ticket-number>-<feature-name>
  ```
  Example:
  ```bash
  git checkout -b fix/5678-fix-login-bug
  ```

#### 3. Creating a Documentation Branch
- Always branch off from `qa`.
- Use the naming convention: `doc/<ticket-number>-<feature-name>`.
  ```bash
  git checkout qa
  git pull origin qa
  git checkout -b doc/<ticket-number>-<feature-name>
  ```
  Example:
  ```bash
  git checkout -b doc/9101-update-readme
  ```

#### 4. Committing Changes
- Use meaningful commit messages that describe the changes for each commit.
  ```bash
  git add .
  git commit -m "Add meaningful description (Ticket: <ticket-number>)"
  ```
  Example for a feature:
  ```bash
  git commit -m "Implement user authentication (Ticket: 1234)"
  ```
  Example for a bug fix:
  ```bash
  git commit -m "Fix login page validation issues (Ticket: 5678)"
  ```
  Example for documentation:
  ```bash
  git commit -m "Update README.md for user auth setup (Ticket: 9101)"
  ```

#### 5. Pushing Changes
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

#### 6. Creating a Pull Request (PR)
- Create a PR to merge your branch into `qa`.
- Ensure all tests pass and the code is reviewed before merging.
- **All PRs into `qa` must be merged using the `Squash` merge strategy**, so that the feature or fix is represented as a single commit in `qa`.

#### 7. Merging `qa` into `main`
- Use **rebasing** to integrate changes from `qa` into `main` instead of merging. Rebasing ensures a linear history in the `main` branch, which is easier to review and maintain.
  ```bash
  git checkout main
  git pull origin main
  git rebase qa
  git push origin main
  ```

---

### Squash Merge and Rebase Commit Guidelines

- **Squash Merges** into `qa`: Consolidate multiple commits from a feature, fix, or documentation branch into a single commit for clarity.
- **Rebase from `qa` to `main`**: Use rebasing to apply all tested and approved commits from `qa` on top of `main` to maintain a clean, linear history.

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

#### 7. Merging Into `QA`
- After the review process, all branches (feature, bug fix, and documentation branches) are merged into `qa` for integration testing.
- Ensure these merges are done as **Squash** merges with commit messages following the above conventions.

#### 8. Promoting Changes to `Main`
- Once a release (including documentation updates) is ready, create a PR from `qa` to `main`.
- Perform all necessary tests and approvals before merging.
- Merges into `main` are also done as **Squash** merges, ensuring the final commit message reflects the feature (`feat`), bug fix (`fix`), or documentation (`doc`) conventions outlined above.

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

### Examples of Branch Naming
1. **Feature Example**:
    - For ticket #1234 to add a new user authentication feature:
      ```bash
      git checkout -b feat/1234-add-user-auth
      ```

2. **Bug Fix Example**:
    - For ticket #5678 to fix a login bug:
      ```bash
      git checkout -b fix/5678-fix-login-bug
      ```

3. **Documentation Example**:
    - For ticket #9101 to update the README file with new instructions:
      ```bash
      git checkout -b doc/9101-update-readme
      ```

---

This ensures a clean and organized git history with clear traceability between branches, pull requests, and the associated tickets, including for documentation changes.