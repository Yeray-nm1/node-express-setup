const express = require('express');
const todosRoutes = require('./routes/todos');
process.loadEnvFile();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`Request Received in: ${req.url}`);
  next();
});

// Routes
app.use('/api/todos', todosRoutes);

// Endpoints
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About Me');
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// swagger
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});