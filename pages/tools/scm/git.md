# Git

[Learn Git](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud)

## Main commands

* git status
* git pull/push
* git clone
* git -add .
* git commit -m "Commit message is here"
* git fetch --dry-run  = Show what would be done, without making any changes
* git status -uno = to check if your local branch is up-to-date with the origin one

## Viewing the Commit History

```bash
git log -p -2

git log --pretty=format:"%h - %an, %ar : %s"

git log --pretty=format:"%h %s" --graph
```

Table 1. Useful options for `git log --pretty=format`

Option  | Description of Output
------- | ----------------------
%H | Commit hash
%h | Abbreviated commit hash
%T | Tree hash
%t | Abbreviated tree hash
%P | Parent hashes
%p | Abbreviated parent hashes
%an| Author name
%ae| Author email
%ad| Author date (format respects the --date=option)
%ar| Author date, relative
%cn| Committer name
%ce| Committer email
%cd| Committer date
%cr| Committer date, relative
%s | Subject

[more](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)