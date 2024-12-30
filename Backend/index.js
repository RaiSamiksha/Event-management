const express = require('express');
const authRoute = require('./routes/authRoute');

const app = express();

// app.get('/',(req,res)=>{
//     res.send("Hello from event management!!");
// })

app.use('/api', authRoute);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

