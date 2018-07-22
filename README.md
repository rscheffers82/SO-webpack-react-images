## React16 and Webpack4 loading images

### What's this repo about?
This small project demonstrates loading images in react using `url-loader`. By tweaking the `limit` setting of the url-loader you can manage from which size images should be a link and which ones a base64 encoded image that will be placed inline in the HTML document.

### Do you have a live example?
It's nothing fancy but the master branch is online on GitHub pages [here](https://rscheffers82.github.io/SO-webpack-react-images/src/client/public/).

### How do I run it locally?
Clone this repo to your local machine and run `npm install`.<br />
`npm run dev` will spin up the dev server at `localhost:3000`.<br/>
`npm run build` will create a production build. Files are placed in the below folder.
```
./src/client/public
```


