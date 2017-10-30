# [Installation](https://jekyllrb.com/docs/installation/)

* **Ruby** version 2.1 or above:
`$ sudo apt-get install ruby-full`
* **RubyGems** (upgrade to the latest RubyGems):
`gem update --system`
* **GCC** and **Make** (check is installed *gcc -v* and *make -v*)
* Install with RubyGems:
`gem install jekyll`
* That's all.Check version:
`jekyll -v`

# Let's get started!

```bash
jekyll new my_blog
# To start a new project named my_blog

jekyll build
# => The current folder will be generated into ./_site

jekyll build --watch
# => The current folder will be generated into ./_site,
#    watched for changes, and regenerated automatically.

Changes to _config.yml are not included during automatic regeneration

jekyll serve --no-watch

jekyll serve --detach
# => Same as `jekyll serve` but will detach from the current terminal.
#    If you need to kill the server, you can `kill -9 1234` where "1234" is the PID.
#    If you cannot find the PID, then do, `ps aux | grep jekyll` and kill the instance.

jekyll help build
```