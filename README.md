
Skip to content
Navigation Menu

    ifaronti
    /
    Finance-App

Code
Issues
Pull requests
Actions
Projects
Security
Insights

    Settings

Files
t

finance-app

app
components
hooks
lib
providers
public/assets
.eslintrc.json
.gitignore
README.md
next.config.mjs
package-lock.json
package.json
postcss.config.mjs
tailwind.config.ts

    tsconfig.json

.DS_Store
.gitignore

    README.md

Breadcrumbs

    Finance-App

/finance-app/
Directory actions
Add file
More options
Latest commit
ifaronti
ifaronti
readme.md updated
2c1ea30
 · 
Nov 8, 2024
History
Breadcrumbs

    Finance-App

/finance-app/
Folders and files
Name	Last commit message
	Last commit date
parent directory
..
app
	
homepage layout setting
	
Nov 8, 2024
components
	
cleared localstorage on user account delete
	
Nov 8, 2024
hooks
	
added react spinners and oauth route.
	
Nov 5, 2024
lib
	
Still Refactoring
	
Oct 21, 2024
providers
	
pots' and budgets final candidates
	
Oct 24, 2024
public/assets
	
Public folder containing static files and folders added to repo
	
Nov 8, 2024
.eslintrc.json
	
Still Refactoring
	
Oct 21, 2024
.gitignore
	
Public folder containing static files and folders added to repo
	
Nov 8, 2024
README.md
	
readme.md updated
	
Nov 8, 2024
next.config.mjs
	
added react spinners and oauth route.
	
Nov 5, 2024
package-lock.json
	
added react spinners and oauth route.
	
Nov 5, 2024
package.json
	
added react spinners and oauth route.
	
Nov 5, 2024
postcss.config.mjs
	
Still Refactoring
	
Oct 21, 2024
tailwind.config.ts
	
Still Refactoring
	
Oct 21, 2024
tsconfig.json
	
Still Refactoring
	
Oct 21, 2024
README.md
Finance-App
Personal finance app solution
Table of contents

    The challenge
    Screenshot
    Links
    My process
        Built with
        What I learned
        Continued development
        Useful resources
    Author
    Acknowledgments

The challenge

Users should be able to:

    See all of the personal finance app data at-a-glance on the overview page
    View all transactions on the transactions page with pagination for every ten transactions
    Search, sort, and filter transactions
    Create, read, update, delete (CRUD) budgets and saving pots
    View the latest three transactions for each budget category created
    View progress towards each pot
    Add money to and withdraw money from pots
    View recurring bills and the status of each for the current month
    Search and sort recurring bills
    Receive validation messages if required form fields aren't completed
    Navigate the whole app and perform all actions using only their keyboard
    View the optimal layout for the interface depending on their device's screen size
    See hover and focus states for all interactive elements on the page
    Bonus: Save details to a database (build the project as a full-stack app)
    Bonus: Create an account and log in (add user authentication to the full-stack app)

Screenshot
Links

    Solution URL: Frontend repo
    Solution URL: Backend repo
    Live Site URL: hosted on vercel.com

Built with

    Semantic HTML5 markup
    CSS custom properties
    Flexbox
    CSS Grid
    Next.js - React framework
    [AWS LAMBDA] (https://aws.amazon.com) - backend host
    [claudiajs] (https://claudiajs.com) - backend deployment library
    [Prisma] (prisma.io) - Rugged but lightweight ORM
    [postgresql] (https://www.postgresql.org) - Battle tested database
    [Neon] (https://neon.tech) - database serverless host
    [Typescript] (https://typescript.org) - strong typed programming language
    Eslint
    Axios
    Oauth
    Nodemon
    [Cron] (https://github.com/kelektiv/node-cron) - node cron job package
    [React-Loader-Spinner] (https://mhnpd.github.io/react-loader-spinner/docs/intro) - load screens fallback
    [SWR] (https://swr.vercel.app/) - Easy to use data fetcher with cache, state, error management
    [Tailwind] - (https://tailwindcss.com) - Best CSS framework for me so far
    [cors] - (https://www.npmjs.com/package/cors) - node cross origin package
    [Express] - (http://expressjs.com/) -node package for REST API. Best for me so far.
    [JWT] (https://jwt.io/) - Json web token used for authorization to user specific data.
    [bcryptjs] - (https://www.npmjs.com/package/bcryptjs) - for Hashing and verifying user passwords.

What I learned

I used this practice project to solidify my grip on practices/concepts I needed to get familiar with(CI/CD and Oauth). Also, I picked up postgresql and use of ORMs. I tried sequelize which was great but I went for Prisma for its flavours cause it supports multiple langauages and database types. My main achievment with this project is many to many and one to many relations; solidifying my understanding of these is important and this project data architecture is a good practice example for that.
Continued development

I'll be doing more postgresql, ORMs, Typescript. I need to try Drizzle for the fun of it.
Useful resources

    Prisma - doc for Prisma orm. Made set up and useage super easy.
    stackoverflow - I use this to check if there are better ways to do whatever I'm doing.

Author

    Ifarontimi Akeem and All my names
    [My github] (https://github.com/ifaronti)

Acknowledgments

Anthony - Helped with suggesting different approach to my architecture to prevent unecessary useage of state management extras when the available default APIs are enough given good structure. I refactored the entire app after his initial review of the code base.
Finance-App/finance-app at main · ifaronti/Finance-App
 
