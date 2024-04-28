# Blog Website (Full Stack)

Welcome to the Blog Website project! This full-stack web application allows users to register, log in, create, edit, and delete their blog posts. It features user authentication, profile management, and dynamic content rendering.

![Blog Website Demo](demo.gif)

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)

## Features

- User authentication with secure password hashing using bcrypt.
- Dynamic rendering of blog posts and author-specific pages.
- User profile management: edit profile, view own posts, delete posts.
- Responsive design for seamless user experience across devices.

![User Profile Demo](profile-demo.gif)

## Getting Started

1. **Clone the Repository:** Start by cloning the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/Blog-Website-FullStack.git
    ```

2. **Install Dependencies:** Navigate to the client and server directories and install dependencies:

    ```bash
    cd Blog-Website-FullStack/client
    npm install
    cd ../server
    npm install
    ```

3. **Set Up Environment Variables:** Create a `.env` file in the `server` directory and add the following environment variables:

    ```env
    PORT=3001
    MONGODB_URI=your-mongodb-uri
    JWT_SECRET=your-jwt-secret-key
    ```

    Replace `your-mongodb-uri` with the connection URI for your MongoDB database and `your-jwt-secret-key` with a secret key of your choice for JWT token generation.

4. **Start the Development Servers:** Start the frontend and backend development servers:

    ```bash
    cd ../client
    npm start
    cd ../server
    npm run dev
    ```

5. **Access the Website:** Open your browser and navigate to `http://localhost:3000` to view the website.

## Deployment

TBD: Add instructions for deploying the website to a production environment (Heroku, AWS, etc.).

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for any bugs or feature requests.

## License

This project is licensed under the [MIT License](LICENSE).
