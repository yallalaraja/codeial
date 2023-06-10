# codeial

Codeial is a web application built using Node.js, Express.js, and MongoDB. It provides a platform for social networking, allowing users to connect with friends, share posts, comment on posts

## Features

- User Registration: Users can create an account to access the features of the application.
- Create Feed Posts: Users can create and publish feed posts containing text, images, or links.
- Commenting: Users can leave comments on feed posts to engage in discussions.
- Reply to Comments: Users can reply to existing comments to further participate in conversations.
- User Authentication: The application implements user authentication to secure user accounts and their data.
- User Profile: Users can view and edit their profile information.
- Search: Users can search for specific feed posts or comments using keywords.
- Notifications: Users receive notifications for new comments or replies on their feed posts.

## Technologies Used

- Front-end: HTML, CSS, JavaScript
- Back-end: Node.js, Express.js
- Database: MongoDB
- Authentication: Passport.js
- Templating Engine: EJS

## Installation

1. Clone the repository: `git clone https://github.com/yallalaraja/codeial.git`
2. Navigate to the project directory: `cd codeial`
3. Install the dependencies: `npm install`
5. Set up the environment variables:
   - Create a `.env` file based on the provided `.env.example` file.
   - Replace the values with your own configuration, such as database connection details and session secrets.
6. Start the application: `npm start`
7. Open your web browser and access the application at `http://localhost:8000`.


## Dependencies

The following dependencies are used in this project:

- connect-mongo: ^5.0.0
- cookie-parser: ^1.4.6
- ejs: ^3.1.9
- express: ^4.18.2
- express-ejs-layouts: ^2.5.1
- express-session: ^1.17.3
- mongoose: ^5.4.6
- node-sass-middleware: ^1.0.1
- nodemon: ^2.0.22
- passport: ^0.6.0
- passport-local: ^1.0.0


## Usage

- Register a new account or log in with existing credentials.
- Create a new feed post by clicking on the appropriate option and filling in the required details.
- Browse existing feed posts, leave comments, or reply to comments.

## Contributing

Contributions are welcome! If you have any ideas, improvements, or bug fixes, please submit a pull request. Make sure to follow the existing coding style and provide a clear description of the changes you have made.

## License

This project is licensed under the [MIT License](LICENSE).

