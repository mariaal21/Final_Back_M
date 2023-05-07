const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
// const { auth }= require('express-oauth2-jwt-bearer')


port = process.env.PORT || 4500; 

//aqui se define el JWt del auth
// const jwtCheck = auth({
//     audience: 'https://maria_api_users.com/user',
//     issuerBaseURL: 'https://dev-sz4yznqwzp78ofwt.us.auth0.com/',
//     tokenSigningAlg: 'RS256'
//   });

app.use(cors());                                    
app.use(express.static(__dirname + '/public')); 
// app.use(jwtCheck);

// app.get('/authorized', function (req, res) {
//     res.send('Secured Resource');
// });


app.use(express.urlencoded({ extended: false }))    
app.use(express.json())                            


app.use('/api/users', require('./routers/RouterUser'));       
app.use('/api/routes', require('./routers/RouterInfo'));   
app.use('/api/foro', require('./routers/routesForo'));
app.use('/api/calendar', require('./routers/RouterCalendar'));

// app.use('/api/entries', require('./routers/routerEntries'));   


//cometn for git 

app.listen(port, () => console.log(`Server listenning on port ${port}...`));


