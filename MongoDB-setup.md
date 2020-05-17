# MongoDB Atlas Setup Instructions

1.) Go to [MongoDB](https://mongodb.com) and create an account (or log into your account if you already have one)

2.) Click on "Create a cluster"

3.) Choose your cloud provider (e.g. AWS) and region (e.g. N.Virginia)
**NOTE:** Region that is the closest to you is preferred (to avoid potential latency and other issues)

4.) To stay on the free tier, accept default settings and make sure it's a M0 Cluster

5.) Name your cluster (optional - the default is Cluster0)

6.) Click on create cluster and wait a few minutes for it to set up

7.) **Security Setup** (DON'T SKIP THIS):

- under the security menu on the left side, click on **Database Access**
- click on "Add New Database User"
- add the username and password for the new user
- select user privileges (recommended: read and write to any database; especially if it is a smaller project or just you working on it)
- under the security menu on the left side, click on **Network Access**
- click on "Add IP Address"
- select "Allow access from anywhere" (recommended for personal projects) or "Add current IP address" (more secure, recommended for larger apps and commercial use)

  8.) **Connection Setup:**

- click on "Clusters" under the "Atlas" submenu on the top
- click on "Connect" and then click on "Connect your application"
- copy the code from there (under "Connection String Only")
- **NOTE:** It's **very important** to save this code securely - for example, like in this project: in a .env file in development mode (and adding it to .gitignore) and as a Heroku environment variable in production mode (not saving this code securely will allow anyone to access your database!)
- in the connection string code, replace <password> with the password for the user and ensure all special characters are [URL encoded](https://dochub.mongodb.org/core/atlas-url-encoding)
