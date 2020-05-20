# Deployment Instructions

## Initial Deployment

1.) Create a [Heroku account](https://www.heroku.com/)
2.) Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) from
3.) Make sure you have initialized git repository in the root of your project (if not, run `git init`)
4.) Run `heroku login` to log in to start deployment process
5.) Run `heroku create app-name` to create an app in Heroku
6.) Run `git add -A` to add all project files to the git repository
7.) Run `git commit -m "Ready for deployment"` to commit files to the repository
8.) Run `heroku git:remote -a app-name` to set up remote connection
9.) Add all environment variables necessary to run the app to Heroku (e.g. Mongo URI, API keys, secret keys, etc.), e.g. `heroku config:set API_KEY=myapikey`
10.) Finally, run `git push heroku master` to deploy the app
11.) If that doesn't succeed, you can try the forced deployment by running the `git push heroku master --force` (NOTE: this is a bad practice, and thus not recommended)

## Future Redeployments

1.) `git add -A`
2.) `git commit -m "Redeploy the app"`
3.) `git push heroku master`
4.) Again, if that doesn't succeed, you can try the forced deployment by running the `git push heroku master --force` (NOTE: this is a bad practice, and thus not recommended)

SSL certificate
subdomains
custom domain setup

Deploy This Demo Project to Heroku!

open source this project & publish it on the NPM: MERN starter pack (upload it as an NPM package mern-starter-pack)

**NOTE:** In this exmaple, we'll be using Namecheap, but your free to use any domain registrar you prefer.
