What is Git and why use it?
Git is a distributed version control system that helps track changes in source code during software development. It allows collaboration, rollback to previous versions, and better code management.

How do you push code to GitHub?
Stage changes: git add .
Commit: git commit -m "Message"
Push: git push origin branch-name

What is GitHub Pages?
A free hosting service by GitHub to publish static websites directly from a repository.

Difference between static and dynamic websites?
Static: Same content for all users, no server-side processing (HTML/CSS/JS only).
Dynamic: Content changes based on user interaction or database (PHP, Node.js, etc.).

How do you revert commits in Git?
git revert <commit-id> → Creates a new commit that undoes the changes.
git reset --hard <commit-id> → Moves branch to a previous state (dangerous, removes history).

What is branching in Git?
Creating a separate line of development from the main codebase to work on features independently.

Explain pull requests.
A way to propose changes to a repository. Developers review, discuss, and merge code changes into the main branch.

How to resolve merge conflicts?
Open the conflicting file(s).
Edit to keep correct changes.
Stage the file(s) and commit.

How to host a website for free?
Use GitHub Pages, Netlify, or Vercel to deploy static sites for free.

What is continuous deployment?
Automatically deploying changes to production after passing tests, without manual approval.
