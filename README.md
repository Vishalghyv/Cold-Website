# **CoLD Website**
This repository holds the website of CoLD, the Computer Science club at School of Engineering, Jawaharlal Nehru University.<br>

The website will work as a tracker of the club's activities and will constantly keep a tab on the works/projects that are presently being undertaken within the club while also serving as a display board for the club. The following will be the main areas that the website will cover:

* To give an overview of the club.
* A medium for new members to join
* A display board of the projects taken up by the club
* A display board of the events conducted/to be conducted by the club.
* Services being offered by the club in fields such as basic programming, web dev, app development etc
* Brief info about the core members of the club, i.e the core committee
* Basic contact information of the club

***
## Development Setup

To work on the website, you will need `nodejs` installed on your machine (globally or locally). See <a href="https://nodejs.org/en/download/">here</a> to download `nodejs`.

After ensuring that you have `nodejs` installed, follow the below steps:
1. Find an issue you would like to work on. Once you've found an issue you'd like to work on, comment on it and say you're working on that issue. This is to avoid conflicts with others also working on the issue. If you want to work on something that there is no GitHub issue for, create a a new issue and propose your change there.
2. Fork this repository. Please create a separate branch for the issue that you're working on. Do not make changes to the default branch (e.g. `master`, `develop`) of your fork.
3. Now to clone your fork on your machine, make a new folder where you want to clone the fork. Navigate to this folder from terminal and run `git clone https://github.com/{user_name}/Cold-Website`.
4. Run `git branch -a` to see a list of all branches. Configure upstream branch to orginal repo if you wish.
5. Run `git checkout -b {branch_name}` where {branch_name} is the branch made by you. Now you can close the terminal if you want.
6. Open the terminal and navigate to the folder containing the repo files. Run `npm start`. If you get error, make sure to install all the dependencies listed in package.json file with their versions using `npm install package.json`. Now again run `npm start`.
7. Open your browser and visit `localhost::3000` to see the website. Now you can make the changes you want. Note that for automatic save and render use `npm devStart`
8. Make the changes you want to. Once you are done with the changes stage your changes using `git add/remove/modify`.
9. Commit your changes using `git commit`. This opens your text editor. Enter a relevant commit meesage for your commit. The commit message should follow the best commit guidelines from GitHub. Close the editor now.
10. Push your commit using `git push`.
11. Submit your Pull Request for the pushed changes. Use the format specified in pull request template for the repository. Populate the stencil completely for maximum verbosity. 

## Code Guidelines
1. Write comprehensive and robust tests that cover the changes you've made in your work.
2. Follow the appropriate code style standards for the language and framework you're using.
3. Write readable code – keep functions small and modular and name variables descriptively.
4. Document your code thoroughly.
5. Make sure all the existing tests pass.
 
***
#### Technologies used to build the Website
<p>
<img src="https://devicon.dev/devicon.git/icons/html5/html5-original.svg" alt="HTML5" width="60" height="60"/>
<img src="https://devicon.dev/devicon.git/icons/css3/css3-original.svg" alt="CSS3" width="60" height="60"/>
<img src="https://devicon.dev/devicon.git/icons/javascript/javascript-original.svg" alt="JavaScript" width="60" height="60"/>
<img src="https://devicon.dev/devicon.git/icons/jquery/jquery-original.svg" alt="jQuery" width="60" height="60"/>
<img src="https://devicon.dev/devicon.git/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="60" height="60"/>
<img src="https://devicon.dev/devicon.git/icons/nodejs/nodejs-original.svg" alt="NodeJs" width="60" height="60"/>
</p>
<hr>
<p align="center"> Created with :heart: by <b>Co.L.D.</b> </p>
