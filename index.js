require('dotenv').config()
const express = require('express')

// ROUTES =========================
const userRoutes = require('./src/routes/users.js');
const jurusanRoutes = require('./src/routes/jurusans.js');
const mitraRoutes = require('./src/routes/mitras.js');
const taskRoutes = require('./src/routes/tasks.js');

// MIDDLEWARE =========================
const middlewareLogRequest = require('./src/middleware/logs.js');


const app = express();
const PORT = process.env.PORT || 5000;

// MIDDLEWARE =========================
app.use(middlewareLogRequest);
app.use(express.json());
app.use("/public", express.static('public'));
// app.use(express.static("./public"));

// FIRST =========================
app.get('/', (req, res) => {
    res.send('<h1>This is IDP API</h1>');
})

// THE ROUTES =========================
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/jurusans', jurusanRoutes);
app.use('/api/v1/mitras', mitraRoutes);
app.use('/api/v1/tasks', taskRoutes);


app.listen(PORT, () => {
    console.log(`🙏🏻 Server running on port ${PORT}`)
})