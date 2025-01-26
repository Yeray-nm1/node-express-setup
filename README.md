# node-express-setup
This project is a basic to-do list API.  
The project is part of a personal roadmap created with ChatGPT.

## Stack
- **NodeJS + Express**: Main technology stack for building the API.
- **Swagger**: API documentation.
- **PostgreSQL**: Database.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/node-express-setup.git
2. Install dependencies:
   ```bash
   cd node-express-setup
   pnpm install
3. Start the application:
   ```bash
   node --watch index.js
4. Access the API documentation at:  
   http://localhost:3000/api-docs

## Last changes
Added postgresql database support.
Switched from dotenv to loadEnvFile for environment variable management.
API reload is now handled with the --watch command.

## Next Updates
Add Sequelize support for database interaction.