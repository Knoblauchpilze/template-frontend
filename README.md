# template-frontend

This repository defines a scaffolding project to kick-start a frontend application. It is meant to work best with a backend created using the [template-go](https://github.com/Knoblauchpilze/template-go) repository.

Below is a gallery of images from this project:


![Welcome page](resources/welcome-page.png)
![Login page](resources/login-page.png)

# Why this project?

When building a new app or website, it is common to have a back-end service and to want to present a visual representation of the data to the user through a frontend website. By doing this, there's usually a bare minimum amount of code that always has to be present: the layout, the components and in general some common code to provide a CI or deployment somewhere.

The [frontend-toolkit](https://github.com/Knoblauchpilze/frontend-toolkit) package already provides some building block that can be used as is. This project goes a step further by integrating this package into a fully functional project.

# What does this project bring?

By creating a frontend project with this repository, you will have out of the box:

- a working website using the [svelte](https://svelte.dev) framework.
- access to easy styling with [tailwindcss](https://tailwindcss.com).
- a CI allowing to run unit tests and check code style.
- a working docker build step to push the service as a container to [dockerhub](https://hub.docker.com/).

ℹ️ **Note:** The code present in this repository is a mixture of using the [svelte cli](https://github.com/sveltejs/cli) to generate a scaffolding of a project and copying bits and pieces of the frontend services we already built.

# How does this project work?

## General structure

The project is structured as a classical `svelte` app using `tailwindcss` for styling components.

In addition to this, we provide a [Dockerfile](build/Dockerfile) to build the container attached to this project. This helps to easily make the result of the build available to deploy where needed.

This project also provides a working CI through github actions: it will automatically trigger the build on each commit and verify that:

- the code style is correct.
- tests are passing.
- the docker image can be built.

It will also push this image to `dockerhub`. On `master` it will also come with an update to the [ec2-deployment](https://github.com/Knoblauchpilze/ec2-deployment) with the newly created tag for the service: this will automatically deploy the newest version to the cluster when the CI is green. By default this is disabled but can be easily reactivated by modifying the github action workflow file (TODO: provide link).

## The lib folder

The [lib](src/lib) folder contains the base utilities which were always necessary when building a frontend service. This includes:
* some way to center the content on screen.
* a bunch of stores to modify transient properties of the app (such as the page title).
* DTOs to manage communication with the back-end services.
* services to perform the communication with the back-end services.
* a generic asset to represent 

The structure of the 

TODO: Refine the following sections.

## The routes

## The CI

## Building this project

# How to use this project for a new service?

## Setting up the project

Using this project should be simple. The first step is to clone the repository and (optionally) rename the folder to the name of your new project:

```bash
git clone git@github.com:Knoblauchpilze/template-frontend.git
mv template-frontend MY-AWESOME-PROJECT-NAME
```

You can then execute the [configure](scripts/configure.sh) script to take care of the renaming of various aspects of the project to match the new desired name:

```bash
cd MY-AWESOME-PROJECT-NAME
./scripts/configure.sh MY-AWESOME-PROJECT-NAME
```

Finally you can set up the `.env` file to define the needed environment variable and install the dependencies using the `make` target:

```bash
make setup
make install
```

## Extending the new project

Assuming the previous steps have been completed, you can now use the other `make` target to start a development server and see the results of your changes:

```bash
make dev
```

In case new packages need to be installed you can execute the `install` target again. Before committing you can check the code style through the following command:

```bash
make lint
```
