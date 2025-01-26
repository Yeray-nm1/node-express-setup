const { Pool } = require('pg');
process.loadEnvFile();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
    console.log('Connected to the database');
});

module.exports = pool;