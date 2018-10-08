# Project : BOOKLET

This application basically aims to fetch possible matches for book on search with book title or author name using Bookreads API.<br>
On Selection of any book from the matching list, it will show the selected book details such as Book Title, Author name, Ratings, Description and book's front page snapshot.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  .gitignore
  coverage/
    Icov-report/
    clover.xml
    coverage-final.json
    Icov.info
  public/
    index.html
    books.ico
    manifest.json
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    books.ico
    serviceWorker.js
    config/
    BookDetail/
      BookDetail.js
      BookDetail.css
    SearchComponent/
      SearchComponent.js
      SearchComponent.css
```
## Requirements

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You can install latest version of Node.
You should be able to run the following command after the installation procedure
below.
```
    $ node --version
    v8.11.3
```
```
    $ npm --version
    5.6.0
```
#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Search for any book with book title or author name in search bar.<br>
This will provide 7-8 matching options in the dropdown.<br>
Select any of the book from the dropdown list to display its details.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

## Modules Used in the app

1. create-react-app starter kit
2. Axios to make API call to Goodreads API
3. proxify-url to prevent CORS and JSONP issue
4. react-select/lib/Async to display search box with possible dropdown options
5. react-star-rating-component to display ratings in stars
6. react-html-parser to convert html data into string