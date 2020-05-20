# MERN Stack: The Full Starter Pack

## Quick Start 🚀

### Add a .env file in the root folder with the following:

`MONGO_URI=your_mongoDB_Atlas_URI_with_credentials`

### Install Server & Client Side Dependencies

`npm run setup`

### Run Both Server & Client From Root

`npm run dev`

### Build For Production

```
cd client
npm run build
```

### Test Production Before Deploying

After running `npm run build` in the client, `cd ..` back to the root of the project and run:

`NODE_ENV=production node server.js`

Check in browser at [http://localhost:5000](http://localhost:5000)

### Deploy to Heroku

Log in into your Heroku account from the CLI

`heroku login`

Create your Heroku app

`heroku create app-name`

Set your MONGO_URI as an environment variable for Heroku

`heroku config:set MONGO_URI=your_mongoDB_Atlas_URI_with_credentials`

Add All Files

`git add -A`

Commit

`git commit -m "ready to deploy"`

And Finally, Deploy the App

`git push heroku master`

### Future Redeployments to Heroku

Add All Files

`git add -A`

Commit

`git commit -m "ready to redeploy"`

Redeploy the App

`git push heroku master`

## Project Info

### Author

Mihailo Maksa

### Version

1.0.0

### License

This project is licensed under the MIT License

