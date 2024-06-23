```markdown
# Typicode App

This application allows you to manage plugins using React, TypeScript, Redux Thunk, and Axios for the frontend. For the backend, we use a JSON database created with [json-server](https://github.com/typicode/json-server).

## Prerequisites

Make sure you have Node.js installed on your machine. You can check if Node.js is installed by running the following command in your terminal:

```sh
node -v
```

## Installation

### Clone the repository:

```sh
git clone <repository-url>
cd <repository-name>
```

### Install dependencies:

```sh
npm install
```

## Running the app

To test the application, follow these steps:

### Start the JSON server by running the following command in your terminal:

```sh
npm run server
```

This starts the JSON server on port 3001 and watches the `db.json` file to simulate a database.

### In another terminal, start the React application by running:

```sh
npm start
```

This starts the React application in development mode on port 3000.

## Usage

To add, update, or delete a plugin, you need to log in.

### Viewing Plugin Details

To view the details of a plugin, click on the plugin in the list. You will be redirected to a detail page containing more in-depth information about the selected plugin.

### Adding Plugins

To add a new plugin, use the add form available on the application's user interface. Fill in the required fields and submit the form.

### Updating Plugins

To update a plugin, once on the plugin detail page, click on the edit icon.

### Deleting Plugins

To delete a plugin, once on the plugin detail page, click on the delete icon.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static types.
- **Redux Thunk**: Middleware to handle asynchronous operations in Redux.
- **Axios**: Library to make HTTP requests.
- **json-server**: Tool to quickly create a RESTful API using a JSON file.
```

