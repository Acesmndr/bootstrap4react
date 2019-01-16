# Bootstrap4React

This is the home for the **Atomic Components** for **React** using Bootstrap as the component library. 


## About

It is based on **Bootstrap v4.1** and will consist of abstractly named components such as **\<Button \/>** for a button and **\<Progress \/>** for a progressbar. For the documentation purpose **React Styleguidist** is used.

## Updating and adding Components

The components are located at **src/** directory with the self titled folder for each components. To update the component you can edit the javascript file for each component and to update the documentation for the component you can edit the markdown file located in the same folder. 
To enable the hot module reload and view the changes reflected in your browser run the following command:
> yarn styleguide; 

It will serve the documentation at your local server at port **6060** and reload for each change that you make.
In order to build for production run the following command:
> yarn styleguide:build

This project uses **yarn** as the package manager instead of **npm**. So in order to run the commands you need to use **npm run** instead of just **yarn** if you are intending to use **npm**. For example, to run `yarn styleguide` you use `npm run styleguide`.

## Deployment

Styleguide deployment is done via github pages and it is carried out by running the following command
> yarn deploy

Package deployment will be done via **npm/yarn** package and the deployment details are still a work in progress....
