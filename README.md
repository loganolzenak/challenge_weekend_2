# Purpose of this Git Repo
Gives a basic folder structure for node server usage. You will need to change sources links and files as needed for your projects, but this should give you a good starting point on a folder structure.

I will try to keep any and all files such as jquery up to date. The current one in this repo is 3.3.1.min.

Last Updated: `2/7/2018`

# Package.json and Express Install Commands

Folder Structure:

```
Project Folder (git repo)/
├── .gitignore
├── /server
    ├── server.js
    ├── public/
        | └── index.html
        ├──  scripts/
        |   └── client.js 
        ├── vendors/
        |   └── jquery.js
        ├── styles/
            └── styles.css
```
      
*In index.html make sure client.js, jQuery.js and style.css are sourced in correctly (i.e. scripts/client.js, vendors/jquery.js, and styles/style.css)
 
Once you have all your server files linked correctly in your code and in the right folders, please follow these steps to install your `package.json`, `package.lock.json`, `Express module` and `starting your server`.

- `npm init -y` will create the package.json file
    -in your package.json file update "scripts"{
                                           "start": "node server/server.js",
- In .gitignore: node_modules/
- `npm install express --save` will install express
    *You will only need to do this once and "express" should be put in your "dependencies" in package.json.
- In server.js:
    const express = require('express');
    let app = express();
    app.use(express.static('server/public'));  //tells express where static content is located
    const port = 5000;
    app.listen(port, function(){
      console.log(`server listening on port ${port}`);
    })
- `npm start` will start node
- `node server/nameoffile.js` will run the js for the server, above I used `node server/server.js` as an example.
- On browser: localhost:5000
*If you change anything in server.js:
  1. in terminal: control c to stop terminal
  2. in terminal: npm start
  3. refresh browser
