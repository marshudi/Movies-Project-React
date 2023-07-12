To set up a client-server project structure with React on the client side and Express on the server side, you need to follow the steps you mentioned. Here's a detailed guide on what is required for the client and server:

Client:

1. Create a client folder using the following command in your terminal:
```
npx create-react-app Client
```

2. Once the client folder is created, navigate to the folder using:
```
cd Client
```

3. Install the required dependencies by running the following command:
```
npm install bootstrap react-router-dom@latest axios
```
   - `bootstrap`: A popular CSS framework for styling your React components.
   - `react-router-dom`: A library for handling routing in React applications.
   - `axios`: A library for making HTTP requests from the client-side.

4. After installing the dependencies, you can start building your React application inside the `Client` folder. You can create components, define routes using `react-router-dom`, and use `axios` for making HTTP requests to the server.

Server:

1. Create an empty `server` folder in your project directory. You can use your preferred method, such as creating a new folder manually or running the following command in the terminal:
```
mkdir server
```

2. Navigate to the `server` folder using:
```
cd server
```

3. Initialize a new Node.js project by running the following command:
```
npm init
```
   This command will prompt you to provide information about your project and create a `package.json` file.

4. Install the required dependencies for the server-side by running the following command:
```
npm install express mongoose cors
```
   - `express`: A popular web framework for building server-side applications with Node.js.
   - `mongoose`: A library for interacting with MongoDB, a NoSQL database.
   - `cors`: A middleware that allows cross-origin resource sharing, enabling requests from the client to the server.

5. In your `package.json` file, add `"type": "module"` to enable ES modules, which is required for using `import` and `export` syntax in the server-side code.

After completing these steps, you can start building your server-side application inside the `server` folder. You can define API endpoints, connect to your database using `mongoose`, and handle client requests.

Remember to configure your client-side code to make HTTP requests to the appropriate server URL.


________________________________________________________________________________________
![home](https://github.com/marshudi/Movies-Project-React/assets/76883519/63edad75-0c04-4bc9-a5f8-882cfb9b4d58)


![register](https://github.com/marshudi/Movies-Project-React/assets/76883519/1e21b7b9-81d1-4fb3-beda-62bf00746d24)


![movies](https://github.com/marshudi/Movies-Project-React/assets/76883519/767bd464-eb4a-40ca-9a0a-668ef893c7b8)


![login](https://github.com/marshudi/Movies-Project-React/assets/76883519/df6b93bd-3920-4734-b880-54a28daf615e)


