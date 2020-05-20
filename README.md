# MERN Stack: The Full Starter Pack

## Quick Start 🚀

### Add a .env file in the root folder with the following:

`MONGO_URI=your_mongoDB_Atlas_URI_with_credentials`

### Install Server Dependencies

`npm install`

### Install Client Dependencies

```
cd client
npm install
```

### Run Both Server & Client From Root

`npm run dev`

### Build For Production

```
cd client
npm run build
```

### Test Production Before Deploying

- After running `npm run build` in the client, `cd ..` back to the root of the project and run:

`NODE_ENV=production node server.js`

- Check in browser at [http://localhost:5000](http://localhost:5000)

### Deploy to Heroku

1. Log in into your Heroku account from the CLI

`heroku login`

2. Create your Heroku app

`heroku create app-name`

3. Add All Files

`git add -A`

4. Commit

`git commit -m "ready to deploy"`

5. Add Remote

`heroku git:remote -a app-name`

6. Set your MONGO_URI as an environment variable for Heroku

`heroku config:set MONGO_URI=your_mongoDB_Atlas_URI_with_credentials`

7. And Finally, Deploy the App

`git push heroku master`

### Future Redeployments to Heroku

- Add All Files

`git add -A`

- Commit

`git commit -m "ready to redeploy"`

- Redeploy the App

`git push heroku master`

---------------

## Project Info

### Author

Mihailo Maksa

### Version

1.0.0

### License

This project is licensed under the MIT License

