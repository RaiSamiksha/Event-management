require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const authRoute = require('./routes/authRoute');
const { sequelize } = require('./models');

const app = express();

// app.get('/',(req,res)=>{
//     res.send("Hello from event management!!");
// })

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/api', authRoute);

sequelize.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Unable to connect to the database:', err));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

