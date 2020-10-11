const express = require('express');
const path = require('path');
const app = express();
const logger = require('./middleware/logger')
const PORT = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, 'public')))
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//members api routes:
app.use('/api/members', require('./routes/api/members'))



app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`)
});

