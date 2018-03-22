# Viewing the Commit History

```
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