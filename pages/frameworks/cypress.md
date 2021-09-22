# Cypress

Cypress is the easier and more reliable tool, whereas Protractor is the more powerful tool. Your choice of tool should depend on your specific testing needs. Here are some advantages and disadvantages of each tool:

Cypress advantages:

* Faster
* More reliable (tends to throw fewer intermittent false failures)
* Easier to read code (handles promises gracefully)

Cypress disadvantages:

* Cannot switch between browser tabs
* Cannot switch to iFrames
* Cannot specify clicks or keypresses explicitly as if a real user was interacting
* Cannot move the mouse to specific co-ordinates
* Sometimes has trouble switching between different top-level domains, so not good for testing external links
* Cypress is a newer tool with less extensive documentation and less community support

Protractor advantages:

* More powerful because it is Selenium-based - it can switch between tabs, it can handle external links to other domains, it can handle iFrames, simulate keypresses and clicks, and move the mouse to specific co-ordinates within the browser.
* More extensive community support and documentation

Protractor disadvantages:

* Slower and more brittle - in general there is a higher likelihood of cryptic and/or intermittent errors which may cause your tests to fail even though there is nothing wrong with your application
* For highly experienced automation engineers, the fundamental "brittle" nature of Selenium can be worked around - it can be reliable but only if you really know what you are doing
* Less graceful handling of promises - relies on async/await or .then to manage the order of execution. Therefore it is a bit harder to read the code.
* Harder to set up, and the method of setup impacts its reliability. For example, a hub/node configuration where the selenium jar is on a different physical machine than the browser under test will cause unreliability in your tests. Not everyone knows about this type of thing, so it's common to find Selenium frameworks that are set up poorly.

It's probably better to use Cypress if

* you're at a smaller company and have a close relationship with developers who can help write hooks or stubs in their code to assist your testing
* you don't need to do things like switch between tabs or test links to external top-level domains

It's probably better to use Protractor if

* You might need to switch between tabs or test external links to other domains within the scope of your framework
* You want to use a more accurate simulation of how a real user interacts with a browser (i.e. click at this location, type these keys)
* You're at a company where you won't have any support from developers in writing hooks or stubs to make their code more testable in a less powerful framework like Cypress