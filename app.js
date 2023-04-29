const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();



port = process.env.PORT || 4500;

app.use(cors());                                    
app.use(express.static(__dirname + '/public'));  



app.use(express.urlencoded({ extended: false }))    
app.use(express.json())                            


app.use('/api/users', require('./routers/RouterUser'));        
app.use('/api/routes', require('./routers/RouterInfo'));   




app.listen(port, () => console.log(`Server listenning on port ${port}...`));