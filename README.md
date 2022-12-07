# CinemApp
#### The no. 1 Movie Quiz
#### By Fredrik Ehne, Vincent Ferrigan, Robert Furuvald & Pontus Kinnmark

### Description
A online movie quiz app where you based on quotes from movies have to guess which movie from alternatives.
Hints are available to make it easier but this affects your score negatively.

Deployed version: [https://cinemapp-30a1d.web.app](https://cinemapp-30a1d.web.app)


## -- Version log
### - Mid-term (2022-12-07)
Done:
* User can sign up for an account in the app.
* Use can log in with a created account. There is a bug where the move from the login page to the game page gives a blank screen.
* Basic game functionality. Movies and relevant data are fetched from imdb API. Quote is displayed to user. User can request different hints. Shows quotes from three more movies on right answer. Same bug here where it
sometimes shows a blank screen. If the game screen gives API error 429, try running it in incognito mode in the browser.
* Basic score keeping.

TODO:
* iron out the bugs.
* Implement global state manager (i.e. Redux).
* Improve separation of concerns (e.g. less logic in view components).
* General styling of app and added interactivity, animations etc.
* Use third-party component library (react-bootstrap, material UI etc.)
* Improve project file/folder structure.
* Display which user is logged in.

Project structure:
Improving the structure is one of the TODOs but as of now the structure is as follows.
We try to keep one component per file. We separate the css-styling so that each component has an own css-file.
There is a "global" App.css file with more general styling. We have a folder "pages" where we have some of the pages
as well as a "presenters" folder, however we haven't been entirely consistent and will rework the folder structure.
There are a lot of "uncategorized" files now in the src/ folder.
We keep some api-related secrets in an .env-file in the project root (not checked in to git).



###
###
## -- Basic Git strategy
1. Always base new branches off of (updated) main
2. Do not push your branch before rebasing (step 3), this may introduce unnecessary conflicts
3. When done with a branch, rebase off of main (checkout your branch and run `git rebase main`)
4. Resolve any  conflicts locally
5. `git push` your branch
6. Initiate pull request on GitHub
