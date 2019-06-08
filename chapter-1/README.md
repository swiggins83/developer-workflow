# Step 1
## Install stuff

Howdy partners. Let's, as developers, work on some flows.

By the end of these steps we'll be *buildin', deployin', rockin', and rollin'*.

Firstly we need to download a bunch of stuff:
- docker
- kubectl
- kubernetes

Make sure kubectl is on your path.


# Step 2
## Makin' a server

Let's create an app with a simple server.

Run `npm init` and follow the prompts.
If you allowed the defaults, then your `main` script will be `index.js`. Let's make that.

To set up a simple server we can use the `http` node library.

Running `npm start` will spin up your application and you should be able to plug `localhost:8080` into your browser to see a result.


# Step 3
## Containerizing

Let's containerize our server.

I like to set up a `build` folder at the root of the application. In here we will place our build configurations for Docker.

We need to decide a minimal image to use for our container. I chose `node:8.16.0-alpine`.

If we are serving our application on port `8080`, then we need to expose that port in the `Dockerfile`.

We need to ensure that all of the files that we need are included in the container. Since our application only runs one source file without any dependencies in the `package.json`, all we'll need to copy in is our `index.js` (or whatever you named your `main`).

We need a `CMD` statement at the end of our Dockerfile so that when we spin up our container, it will execute our server.

To build our application into a Docker container, we'll use the command:
`docker build --file ./build/Dockerfile -t toast`

This builds a container tagged with the tag `toast`.

This command is cumbersome to run again and again, so we should plop it in a script.

I like to make a `scripts` folder initially before better build tools are involved.


# Step 4
## Deploying

Let's make a `deploy` folder. We're going to house our Kubernetes deployment configurations in here.

We'll be making two important files, a `deployment.yaml` and a `service.yaml`.
