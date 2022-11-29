# Git

[Learn Git](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud)
[git-scm.com](https://git-scm.com/)

## Configuration

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@blah.com"

# Tell git to not try to mess with line endings by default (this can be changed for specific repos as desired)
git config --global core.autocrlf false
# Tell git to automatically track remote branches
git config --global branch.autosetupmerge true
# Tell "git push" to just push the current branch to its remote origin
git config --global push.default upstream
# Tell git to use rebase instead of merge when performing a "git pull" from a remote branch
git config --global branch.autosetuprebase always
# Make git show colorized output by default
git config --global color.branch auto
git config --global color.diff auto
git config --global color.interactive auto
git config --global color.status auto

# See just the global settings
git config --global --list
# See just the settings of the git Repo you are inside
git config --local --list
# See the union of the 2 (the local settings take precedence over the global settings)
git config --list
```

## Main commands

* git status
* git pull/push
* git clone
* git checkout -b new_branch_name
* git -add .
* git commit -m "Commit message is here"
* git push --set-upstream origin dev/asem/component/sonar-fixes
* git fetch --dry-run  = Show what would be done, without making any changes
* git status -uno = to check if your local branch is up-to-date with the origin one
* git update-index --chmod=+x foo.sh - add executable permission on Linux

## Undo commit

```bash
# In case you just want to undo the commit and change nothing more, you can use
git reset --soft HEAD~

# undo the last commit and unstage all the files you can use the following
git reset HEAD~
# or
git reset --mixed HEAD~
```

## Rebase

Rebasing feature on to dev
```bash
git checkout feature
git rebase dev
```

[Rebase — One of the Most Powerful Git Commands](https://medium.com/osedea/git-rebase-powerful-command-507bbac4a234)

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

## Count lines of code

```bash
git ls-files docker-doremi-ui/ | grep -E ".*(ts|js)" | xargs wc -l
git ls-files docker-doremi-backend/ | grep -E "*.(py)$" | xargs wc -l
```